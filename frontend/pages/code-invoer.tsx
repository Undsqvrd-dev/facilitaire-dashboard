import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

export default function CodeInvoer() {
  const router = useRouter()
  const { email } = router.query
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)
  const [resendSuccess, setResendSuccess] = useState(false)

  const handleResendCode = async () => {
    if (!email) return

    setResendLoading(true)
    setResendSuccess(false)
    setError('')
    
    try {
      const res = await axios.post('http://localhost:4000/api/auth/resend-code', {
        email
      })
      
      if (res.data.success) {
        setResendSuccess(true)
      }
    } catch (err) {
      console.error('Resend error:', err.response?.data || err)
      setError(err.response?.data?.message || 'Er is iets misgegaan bij het opnieuw versturen van de code')
    } finally {
      setResendLoading(false)
    }
  }

  const handleVerify = async () => {
    if (!email || !code) {
      setError('Vul alle velden in')
      return
    }

    setLoading(true)
    setError('')
    try {
      console.log('Verificatie poging:', { email, code })
      const res = await axios.post('http://localhost:4000/api/auth/verify-code', {
        email,
        code
      })
      
      console.log('Verificatie response:', res.data)
      
      if (res.data.success) {
        // Automatisch inloggen met magic-code provider
        const signInResult = await signIn('magic-code', {
          email: email,
          redirect: false
        })
        if (signInResult?.ok) {
          if (res.data.role === 'employer') {
            router.push('/employer/dashboard')
          } else {
            router.push('/dashboard')
          }
        } else {
          setError('Automatisch inloggen mislukt. Probeer opnieuw.')
        }
      } else {
        setError('Ongeldige code')
      }
    } catch (err) {
      console.error('Verificatie error:', err.response?.data || err)
      setError(err.response?.data?.message || 'Ongeldige code of serverfout')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verificatiecode invoeren
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We hebben een code gestuurd naar {email}
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <label htmlFor="code" className="sr-only">
              4-cijferige code
            </label>
      <input
              id="code"
              name="code"
        type="text"
              required
              maxLength={4}
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        placeholder="4-cijferige code"
        value={code}
        onChange={e => setCode(e.target.value)}
      />
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-700">{error}</div>
            </div>
          )}

          {resendSuccess && (
            <div className="rounded-md bg-green-50 p-4">
              <div className="text-sm text-green-700">Nieuwe code is verstuurd naar je e-mailadres</div>
            </div>
          )}

          <div>
            <button
              onClick={handleVerify}
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {loading ? 'Bezig...' : 'Verifiëren'}
            </button>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={handleResendCode}
              disabled={resendLoading}
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              {resendLoading ? 'Bezig...' : 'Nieuwe code aanvragen'}
            </button>

            <button
              onClick={() => router.push('/login')}
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Terug naar inloggen
      </button>
          </div>
        </div>
      </div>
    </div>
  )
} 