import EmployerLayout from './_layout';
import { useState } from 'react';

// Dummydata voor vacatures en kandidaten
const vacatures = [
  {
    id: 1,
    functie: 'Projectmanager',
    locatie: 'Amsterdam',
    dienstverband: 'Full-time',
    created_at: '2024-06-01',
    matches: [
      {
        id: 101,
        naam: 'Sanne de Vries',
        studie: 'HBO Facility Management',
        beschikbaar: 'Per direct beschikbaar',
        locatie: 'Utrecht',
        afstand: '12 km',
        match: 87,
        verified: true,
      },
      {
        id: 102,
        naam: 'Tom Jansen',
        studie: 'MBO Facilitair',
        beschikbaar: 'Over 4 weken',
        locatie: 'Amersfoort',
        afstand: '28 km',
        match: 81,
        verified: false,
      },
    ],
  },
  {
    id: 2,
    functie: 'Servicedesk medewerker',
    locatie: 'Utrecht',
    dienstverband: 'Part-time',
    created_at: '2024-05-20',
    matches: [
      {
        id: 103,
        naam: 'Lisa Bakker',
        studie: 'HBO Facility Management',
        beschikbaar: 'Per direct beschikbaar',
        locatie: 'Nieuwegein',
        afstand: '6 km',
        match: 92,
        verified: true,
      },
    ],
  },
];

export default function EmployerVacancies() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <EmployerLayout>
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-2xl font-bold mb-8">Mijn vacatures</h1>
        <div className="flex flex-col gap-6">
          {vacatures.sort((a, b) => b.created_at.localeCompare(a.created_at)).map((vacature) => (
            <div key={vacature.id} className="bg-white rounded-xl shadow p-4">
              <button
                className="w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpen(open === vacature.id ? null : vacature.id)}
              >
                <div>
                  <div className="font-semibold text-lg">{vacature.functie}</div>
                  <div className="text-sm text-gray-500">{vacature.locatie} &bull; {vacature.dienstverband}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                    {vacature.matches.length} kandidaat{vacature.matches.length !== 1 && 'en'}
                  </span>
                  <svg className={`w-5 h-5 transition-transform duration-300 ${open === vacature.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </button>
              {/* Accordion content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${open === vacature.id ? 'max-h-[1000px] mt-4' : 'max-h-0'}`}
              >
                {open === vacature.id && (
                  <div className="flex flex-col gap-4">
                    {vacature.matches.map(kandidaat => (
                      <div key={kandidaat.id} className="flex flex-col md:flex-row md:items-center justify-between border rounded-lg p-4 bg-gray-50">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1">
                          <div>
                            <div className="font-medium">{kandidaat.naam}</div>
                            <div className="text-xs text-gray-500">{kandidaat.studie}</div>
                          </div>
                          <div className="flex flex-col gap-1 md:ml-8">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{kandidaat.beschikbaar}</span>
                            <span className="text-xs text-gray-500">{kandidaat.locatie} &bull; {kandidaat.afstand}</span>
                          </div>
                          <div className="flex items-center gap-2 md:ml-8">
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{kandidaat.match}% match</span>
                            {kandidaat.verified && (
                              <span className="ml-1 inline-block align-middle" title="Geverifieerd">
                                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-8">
                          <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Bekijk profiel</a>
                          <button className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm">Contact opnemen</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </EmployerLayout>
  );
} 