import { useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

export default function Login() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Controleer eerst of het emailadres bestaat
      const checkResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/check-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const checkData = await checkResponse.json()

      if (!checkResponse.ok) {
        throw new Error(checkData.message || 'Er is iets misgegaan bij het controleren van het emailadres')
      }

      if (!checkData.exists) {
        // Als het emailadres niet bestaat, redirect naar registratie
          router.push({
          pathname: '/auth/registreren',
          query: { email }
          })
          return
        }

      // Als het emailadres bestaat, vraag een verificatiecode aan
      const codeResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/request-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const codeData = await codeResponse.json()

      if (!codeResponse.ok) {
        throw new Error(codeData.message || 'Er is iets misgegaan bij het aanvragen van de verificatiecode')
      }

      toast.success('Verificatiecode verzonden!')

      // Redirect naar code-invoer pagina met email als query parameter
      router.push({
        pathname: '/auth/code-invoer',
        query: { email }
      })
    } catch (error) {
      console.error('Login error:', error)
      toast.error(error instanceof Error ? error.message : 'Er is iets misgegaan bij het inloggen')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in op je account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Of{' '}
            <a href="/auth/registreren" className="font-medium text-blue-600 hover:text-blue-500">
              registreer een nieuw account
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email adres
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email adres"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            </div>

            <div>
              <button
                type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
              {isLoading ? 'Bezig...' : 'Log in'}
              </button>
            </div>
          </form>
      </div>
    </div>
  )
} 