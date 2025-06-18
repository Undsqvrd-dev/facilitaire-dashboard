import EmployerLayout from './_layout';
import dynamic from 'next/dynamic';
const CompanyMap = dynamic(() => import('../../components/CompanyMap'), { ssr: false });

// Dummydata, later vervangen door Supabase/Prisma
const company = {
  naam: 'ACME',
  logo: '/acme-logo.svg',
  omschrijving: `ACME geeft energie aan bedrijven!\n\nAls facilitaire dienstverlener helpen wij organisaties bij het creëren van een energierijke werkomgeving, aantrekkelijk voor top talent en potentiële klanten. Door onze dienstverlening hebben jouw medewerkers dagelijks een schone, veilige, gezonde en sfeervolle werkplek.\n\nACME is dé partner voor basis facilitaire voorzieningen en luxe facilitaire concepten. Wij groeien mee met jouw organisatie, zelfs over landsgrenzen heen. Wij lossen jouw complexe facilitaire vraagstukken op. Door het leveren van maatwerk spelen wij in op de eigenheid/behoefte van jouw organisatie. Zo blijft de energie stromen.`,
  medewerkers: 150,
  klanten: 88,
  actiefSinds: 2018,
  type: 'Facilitair dienstverlener',
  branche: 'Alles',
  locatie: 'Nieuwegein',
  website: 'https://acme.nl',
  lat: 52.0266,
  lng: 5.0919,
  contactpersonen: [
    { naam: 'Jan Jansen', foto: '/jan.jpg', functie: 'Directeur' },
    { naam: 'Piet Pietersen', foto: '/piet.jpg', functie: 'HR Manager' },
  ],
};

export default function EmployerBranding() {
  // Fallback als er geen profiel is
  if (!company) {
    return (
      <EmployerLayout>
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-400 text-lg">Nog geen employer branding profiel ingevuld.</div>
        </div>
      </EmployerLayout>
    );
  }

  return (
    <EmployerLayout>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-8 w-full max-w-7xl mx-auto">
        {/* Linkerkant: bedrijfsinfo */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src={company.logo} alt={company.naam} className="h-16 w-16 object-contain rounded-xl bg-gray-50 border" />
              <span className="text-2xl font-bold text-[#B13B1B]">{company.naam}</span>
            </div>
            <div className="text-gray-700 whitespace-pre-line">{company.omschrijving}</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="bg-[#4B2B1B] text-white rounded-xl p-4 flex flex-col items-center justify-center">
                <span className="font-bold text-xl">{company.naam}</span>
                <span className="text-xs mt-1">Bedrijfsnaam</span>
              </div>
              <div className="bg-[#B13B1B] text-white rounded-xl p-4 flex flex-col items-center justify-center">
                <span className="font-bold text-xl">{company.klanten}</span>
                <span className="text-xs mt-1">Aantal klanten</span>
              </div>
              <div className="bg-[#B13B1B] text-white rounded-xl p-4 flex flex-col items-center justify-center">
                <span className="font-bold text-xl">{company.medewerkers}</span>
                <span className="text-xs mt-1">Aantal medewerkers</span>
              </div>
              <div className="bg-[#4B2B1B] text-white rounded-xl p-4 flex flex-col items-center justify-center">
                <span className="font-bold text-xl">{company.actiefSinds}</span>
                <span className="text-xs mt-1">Actief sinds</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 rounded-xl p-4 text-gray-700 text-sm">
                <div><span className="font-semibold">Type facilitaire organisatie:</span> {company.type}</div>
                <div><span className="font-semibold">Locatie:</span> {company.locatie}</div>
                <div><span className="font-semibold">Type branche:</span> {company.branche}</div>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 flex flex-col gap-2 items-start justify-between">
                <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Naar website</a>
              </div>
            </div>
            {/* Optioneel: embedded video, afbeeldingen, contactpersonen */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-xl shadow flex items-center justify-center aspect-video">
                <img src="/office.jpg" alt="Kantoor" className="object-cover w-full h-full rounded-xl" />
              </div>
              <div className="bg-[#4B2B1B] rounded-xl p-4 flex flex-col gap-2 text-white">
                <div className="font-semibold mb-2">Contactpersonen</div>
                <div className="flex gap-2">
                  {company.contactpersonen.map(p => (
                    <div key={p.naam} className="flex flex-col items-center">
                      <img src={p.foto} alt={p.naam} className="h-12 w-12 rounded-full object-cover border-2 border-white" />
                      <span className="text-xs mt-1">{p.naam}</span>
                      <span className="text-[10px] text-gray-200">{p.functie}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Rechterkant: kaart */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow p-4">
            <CompanyMap naam={company.naam} lat={company.lat} lng={company.lng} logo={company.logo} />
          </div>
        </div>
      </div>
    </EmployerLayout>
  );
} 