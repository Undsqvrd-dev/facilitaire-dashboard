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

    // Helper functie om logo URLs correct te formatteren
    function formatGoogleDriveUrl(url) {
      if (!url || typeof url !== 'string') {
        return '/placeholder-logo.svg';
      }

      // Check voor Google Drive link
      if (url.includes('drive.google.com')) {
        // Extract file ID
        let fileId;
        
        // Match verschillende Google Drive URL formats
        const patterns = [
          /\/file\/d\/([-\w]{25,})/,  // /file/d/ format
          /id=([-\w]{25,})/,          // ?id= format
          /\/d\/([-\w]{25,})/,        // /d/ format
          /[-\w]{25,}/                // Direct ID
        ];

        for (const pattern of patterns) {
          const match = url.match(pattern);
          if (match) {
            fileId = match[1];
            break;
          }
        }

        if (fileId) {
          // Gebruik de directe download URL
          return `https://drive.google.com/thumbnail?id=${fileId}&sz=w260-h100`;
        }
      }
      
      return '/placeholder-logo.svg';
    }

    // Verwerk de data uit de spreadsheet
    const facilities = data.values.slice(1).map((row, index) => ({
      id: index + 1,
      naam: row[0] || "Onbekend",
      logo: formatGoogleDriveUrl(row[1] || ""),
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