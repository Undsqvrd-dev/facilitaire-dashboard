export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEETS_ID}/values/Faciliteiten!A1:I100?key=${process.env.GOOGLE_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Google Sheets API fout: ${response.statusText}`);
    }

    const data = await response.json();

    // Debugging: Log de ruwe data om te zien wat erin zit
    console.log("Ruwe Google Sheets Data:", data);

    // Controleer of data.values bestaat
    if (!data.values || !Array.isArray(data.values)) {
      console.error("Fout: Google Sheets data is ongeldig!", data);
      return res.status(500).json({ error: "Ongeldige gegevensstructuur ontvangen" });
    }

    // Helper functie om Google Drive links om te zetten
    const formatGoogleDriveUrl = (url) => {
      if (!url) return "";
      if (url.includes('drive.google.com')) {
        // Extract file ID from various Google Drive URL formats
        const fileId = url.match(/[-\w]{25,}/);
        if (fileId) {
          // Gebruik de directe thumbnail URL voor betere prestaties
          return `https://drive.google.com/thumbnail?id=${fileId[0]}&sz=w500`;
        }
      }
      return url;
    };

    // Verwerk de data uit de spreadsheet
    const facilities = data.values.slice(1).map((row, index) => ({
      id: index + 1,
      naam: row[0] || "Onbekend",
      logo: formatGoogleDriveUrl(row[1]) || "",
      locatie: row[2] || "Onbekend",
      branche: row[3] || "Onbekend",
      type: row[4] || "Onbekend",
      website: row[5] || "",
      lat: row[6] ? parseFloat(row[6].replace(',', '.')) : null,
      lng: row[7] ? parseFloat(row[7].replace(',', '.')) : null,
      omschrijving: row[8] || ""
    }));

    // Debugging: Log de verwerkte faciliteiten
    console.log("Verwerkte faciliteiten:", facilities);

    res.status(200).json(facilities);
  } catch (error) {
    console.error("Fout bij ophalen van faciliteiten:", error);
    res.status(500).json({ error: "Kon data niet ophalen" });
  }
}