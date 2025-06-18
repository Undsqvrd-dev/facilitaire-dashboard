import { useEffect, useState } from 'react'
import EmployerLayout from './_layout'

export async function getServerSideProps() {
  return { props: { user: { id: 1, name: 'Demo Gebruiker', role: 'employer' } } };
}

export default function EmployerDashboard({ user }) {
  const [employer, setEmployer] = useState(null)

  useEffect(() => {
    setEmployer({
      user: { name: user.name },
      company: 'Demo Company'
    });
  }, [user]);

  if (!user) return <p>Niet ingelogd</p>;
  if (!employer) return <p>Loading...</p>

  return (
    <EmployerLayout>
      <div className="p-4">
        <h1 className="text-xl font-bold">Welkom, {employer.user.name} 👋</h1>
        <p>Bedrijf: {employer.company ?? 'Nog geen bedrijfsnaam ingevuld'}</p>
        
        {/* Openstaande vacatures */}
        <div className="my-8">
          <h2 className="text-lg font-semibold mb-4">Openstaande vacatures</h2>
          <div className="grid gap-4">
            {/* Hier komen de vacatures */}
          </div>
        </div>

        {/* Kandidaten overzicht */}
        <div className="my-8">
          <h2 className="text-lg font-semibold mb-4">Kandidaten overzicht</h2>
          <div className="grid gap-4">
            {/* Hier komen de kandidaten */}
          </div>
        </div>
      </div>
    </EmployerLayout>
  )
} 