import React from 'react';
import Layout from '../../components/Layout';

export default function DrijfverenDashboard({ user }) {
  return (
    <Layout user={user}>
      <h1 className="text-2xl font-bold mb-6">Drijfveren</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Linkerkant: radar chart en info */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center min-h-[450px]">
          <h2 className="text-xl font-semibold mb-4">Mijn Personal brand</h2>
          <div className="mb-6">
            {/* Radar chart placeholder */}
            <div className="w-72 h-72 bg-gray-50 rounded-xl flex items-center justify-center">
              <span className="text-gray-400">[Radar Chart]</span>
            </div>
          </div>
          <div className="text-gray-500 text-sm mt-4">Laatste keer test gemaakt: 10-04-2024</div>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Naar de test</button>
        </div>
        {/* Rechterkant: drijfveren cards */}
        <div className="bg-white rounded-xl shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {DRijfveren.map((d) => (
            <div key={d.naam} className="border rounded-lg p-4 flex flex-col justify-between min-h-[140px] bg-gradient-to-br from-white via-gray-50 to-gray-100">
              <div>
                <div className="font-semibold text-lg mb-1">{d.naam}</div>
                <div className="text-gray-700 text-sm mb-2">{d.uitleg}</div>
              </div>
              <a href={d.link} className="text-blue-500 text-sm hover:underline mt-2">Meer informatie</a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: { user: { id: 1, name: 'Demo Gebruiker', role: 'candidate' } } };
}

const DRijfveren = [
  {
    naam: 'Doorpakker',
    uitleg: 'Een assertief en direct communicerend persoon die gemotiveerd wordt door druk en deadlines, graag tempo maakt en discussies niet uit de weg gaat.',
    link: '#',
  },
  {
    naam: 'Streber',
    uitleg: 'Een flexibel en resultaatgericht ingesteld persoon die van nature denkt in kansen en gemotiveerd is om (zichtbaar) resultaten te behalen voor de organisatie en zichzelf.',
    link: '#',
  },
  {
    naam: 'Innovator',
    uitleg: 'Een creatief, onafhankelijk denkend en analytisch persoon die van nature graag innoveert, verbetert of verandert en hierdoor bijdraagt aan de toekomst van de organisatie.',
    link: '#',
  },
  {
    naam: 'Allemansvriend',
    uitleg: 'Een (klant)vriendelijk en toegankelijk persoon die van nature graag samenwerkt, mensen verbindt en hierdoor bijdraagt aan de sfeer binnen de organisatie.',
    link: '#',
  },
  {
    naam: 'Waakhond',
    uitleg: 'Een gestructureerd en geordend persoon die van nature graag lijstjes maakt, de puntjes op de i zet en bijdraagt in het écht afmaken van werkzaamheden.',
    link: '#',
  },
  {
    naam: 'Dienaar',
    uitleg: 'Een bescheiden persoon die zich opoffert voor het collectief, doet wat er wordt gevraagd en hiermee bijdraagt aan de (familie)sfeer in de organisatie.',
    link: '#',
  },
]; 