import { companyLogos } from '../../config/logos';

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
    console.log("Headers:", data.values[0]); // Log de kolomnamen
    console.log("Eerste rij data:", data.values[1]); // Log de eerste rij met data
    console.log("Logo URL van eerste rij:", data.values[1][1]); // Log specifiek de logo URL

    // Controleer of data.values bestaat
    if (!data.values || !Array.isArray(data.values)) {
      console.error("Fout: Google Sheets data is ongeldig!", data);
      return res.status(500).json({ error: "Ongeldige gegevensstructuur ontvangen" });
    }

    // Helper functie om logo URLs correct te formatteren
    function formatGoogleDriveUrl(url) {
      if (!url || typeof url !== 'string' || url.trim() === '') {
        return null;
      }

      // Verwijder eventuele aanhalingstekens en spaties
      url = url.trim().replace(/['"]/g, '');
      
      // Als het een geldig pad is, gebruik het direct
      if (url.startsWith('/logos/')) {
        return url;
      }

      return null;
    }

    // Verwerk de data uit de spreadsheet
    const facilities = data.values.slice(1).map((row, index) => ({
      id: index + 1,
      naam: row[0] || "Onbekend",
      logo: formatGoogleDriveUrl(row[1]),
      locatie: row[2] || "Onbekend",
      branche: row[3] || "Onbekend",
      type: row[4] || "Onbekend",
      website: row[5] || "",
      lat: row[6] ? parseFloat(row[6].replace(',', '.')) : null,
      lng: row[7] ? parseFloat(row[7].replace(',', '.')) : null,
      omschrijving: row[8] || ""
    }));

    // Log de volledige response voor debugging
    console.log("API Response:", JSON.stringify(facilities, null, 2));

    res.status(200).json(facilities);
  } catch (error) {
    console.error("Fout bij ophalen van faciliteiten:", error);
    res.status(500).json({ error: "Kon data niet ophalen" });
  }
}