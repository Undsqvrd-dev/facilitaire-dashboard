import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // Prefill e-mail als die in de query zit
  useEffect(() => {
    if (router.query.email) setEmail(router.query.email as string)
  }, [router.query.email])

  const handleSignup = async () => {
    setLoading(true)
    setError('')
    try {
      await axios.post('http://localhost:4000/api/auth/signup', {
        email,
        name,
        role: 'candidate'
      })
      await axios.post('http://localhost:4000/api/auth/send-code', { email })
      router.push(`/code-invoer?email=${encodeURIComponent(email)}`)
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setError('Gebruiker bestaat al. Probeer in te loggen.')
      } else {
        setError('Er is iets misgegaan. Probeer het opnieuw.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Aanmelden</h1>
      <input
        type="text"
        placeholder="Naam"
        className="w-full border p-2 mb-2"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mailadres"
        className="w-full border p-2 mb-2"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleSignup} className="bg-black text-white px-4 py-2 mt-2" disabled={loading}>
        Volgende
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
} 