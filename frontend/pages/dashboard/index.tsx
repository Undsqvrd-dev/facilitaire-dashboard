import { useEffect } from 'react'
import { useRouter } from 'next/router'

export async function getServerSideProps() {
  return { props: { user: { id: 1, name: 'Demo Gebruiker', role: 'candidate' } } };
}

export default function Dashboard({ user }) {
  const router = useRouter()

  useEffect(() => {
    // Controleer de rol van de gebruiker en stuur door naar het juiste dashboard
    if (user?.role === 'employer') {
      router.push('/dashboard/employer')
    } else {
      router.push('/dashboard/candidate')
    }
  }, [user, router])

  return <div>Loading...</div>
} 