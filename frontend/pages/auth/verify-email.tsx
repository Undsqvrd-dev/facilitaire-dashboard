import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default function VerifyEmail() {
  const router = useRouter()
  const [verificationCode, setVerificationCode] = useState(['', '', '', ''])
  const [error, setError] = useState('')

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return // Voorkom meerdere karakters per input
    
    const newCode = [...verificationCode]
    newCode[index] = value
    setVerificationCode(newCode)

    // Automatisch naar volgende input als er een cijfer is ingevoerd
    if (value && index < 3) {
      const nextInput = document.querySelector(`input[name=code-${index + 1}]`) as HTMLInputElement
      if (nextInput) nextInput.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const code = verificationCode.join('')
    
    try {
      const response = await fetch('/api/auth/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })

      if (response.ok) {
        router.push('/dashboard')
      } else {
        setError('Ongeldige verificatiecode. Probeer het opnieuw.')
      }
    } catch (error) {
      setError('Er is iets misgegaan. Probeer het later opnieuw.')
    }
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verifieer je e-mailadres
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We hebben een verificatiecode gestuurd naar je e-mailadres
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="verification-code" className="block text-sm font-medium text-gray-700">
                  Voer de 4-cijferige code in
                </label>
                <div className="mt-1 flex justify-center space-x-4">
                  {verificationCode.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      name={`code-${index}`}
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  ))}
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-600">{error}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Verifiëren
                </button>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => router.push('/auth/resend-code')}
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  Code niet ontvangen? Stuur opnieuw
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
} 