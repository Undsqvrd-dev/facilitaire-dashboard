import React, { useState } from 'react';
import Layout from '../../components/Layout';

export async function getServerSideProps() {
  return { props: { user: { id: 1, name: 'Demo Gebruiker', role: 'candidate' } } };
}

type RichtingOfBranche = {
  naam: string;
  drijfveren?: string[];
  toelichting?: string;
  karakter?: string;
  radar?: string;
};

const RICHTINGEN: RichtingOfBranche[] = [
  {
    naam: 'Projectmanagement',
    drijfveren: ['Allemanvriend', 'Innovator'],
    toelichting: 'Kritisch naar het bestaande kijken om vervolgens hulpzaam advies te geven aan de klant.',
    karakter: 'Hulpzaam, kennisdelen.',
    radar: 'Consultancy',
  },
  { naam: 'Inkoop & contractmanagement' },
  { naam: 'Hospitality' },
  { naam: 'Accountmanagement' },
  { naam: 'Procesmanagement' },
  { naam: 'Consultancy' },
  { naam: 'Eventmanagement' },
];

const BRANCHES: RichtingOfBranche[] = [
  { naam: 'Onderwijs' },
  { naam: 'Logistiek' },
  { naam: 'Overheid' },
  { naam: 'Commercieel' },
  { naam: 'Vastgoed' },
];

export default function RichtingenDashboard({ user }) {
  const [mode, setMode] = useState<'Richtingen' | 'Branches'>('Richtingen');
  const [selected, setSelected] = useState(0);
  const items = mode === 'Richtingen' ? RICHTINGEN : BRANCHES;
  const detail = items[selected];

  return (
    <Layout user={user}>
      <h1 className="text-2xl font-bold mb-6">Richtingen en branches ontdekken</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Linkerkant: lijst en dropdown */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <select
            className="mb-4 p-2 border rounded-md w-1/2"
            value={mode}
            onChange={e => { setMode(e.target.value as 'Richtingen' | 'Branches'); setSelected(0); }}
          >
            <option value="Richtingen">Richtingen</option>
            <option value="Branches">Branches</option>
          </select>
          <div className="flex flex-col gap-2">
            {items.map((item, idx) => (
              <button
                key={item.naam}
                className={`text-left px-3 py-2 rounded ${selected === idx ? 'bg-gray-100 font-semibold' : 'hover:bg-gray-50'}`}
                onClick={() => setSelected(idx)}
              >
                {item.naam}
              </button>
            ))}
          </div>
        </div>
        {/* Rechterkant: detail info */}
        <div className="bg-white rounded-xl shadow p-6 min-h-[350px] flex flex-col gap-4">
          <h2 className="text-xl font-semibold mb-2">{detail.naam}</h2>
          {mode === 'Richtingen' && detail?.drijfveren && (
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              {/* Radar chart placeholder */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center w-48 h-48">
                <span className="text-gray-400">[Radar Chart: {detail?.radar || detail?.naam}]</span>
              </div>
              <div className="flex-1">
                <div className="mb-2">
                  <span className="font-semibold">Drijfveren:</span>{' '}
                  {detail?.drijfveren?.map((d, i) => (
                    <span key={d} className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs ml-1">{d}</span>
                  ))}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Toelichting:</span><br />
                  <span>{detail?.toelichting}</span>
                </div>
                <div>
                  <span className="font-semibold">Karaktereigenschappen:</span><br />
                  <span>{detail?.karakter}</span>
                </div>
              </div>
            </div>
          )}
          {/* Branches hebben alleen naam */}
          {mode === 'Branches' && (
            <div className="text-lg">{detail.naam}</div>
          )}
          <div className="mt-8 font-medium">Relevante bedrijven:</div>
        </div>
      </div>
    </Layout>
  );
} 