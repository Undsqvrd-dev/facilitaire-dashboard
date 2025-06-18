import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'react-hot-toast';

export default function CodeInvoer() {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { login } = useAuth();
  const email = router.query.email as string;

  if (!email) {
    router.replace('/auth/login');
    return null;
  }

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.toString(), code: code.toString() }),
      });

      const data = await res.json();
      console.log('res.ok:', res.ok);
      console.log('data.token:', data.token);
      console.log('data:', data);

      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        await login(data.token, data.user);
        setError(null);
        await new Promise(resolve => setTimeout(resolve, 200));
        await router.replace('/dashboard');
        return;
      } else {
        setError('Ongeldige code. Probeer het opnieuw.');
      }
    } catch (error) {
      setError('Er is iets misgegaan. Probeer het opnieuw.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/resend-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.toString() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Er is iets misgegaan bij het opnieuw versturen van de code');
      }

      toast.success('Nieuwe code is verzonden!');
    } catch (error) {
      console.error('Resend code error:', error);
      toast.error(error instanceof Error ? error.message : 'Er is iets misgegaan bij het opnieuw versturen van de code');
    }
  };

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
        {!isLoading && error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
        <form className="mt-8 space-y-6" onSubmit={handleVerifyCode}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="code" className="sr-only">
                Verificatiecode
              </label>
              <input
                id="code"
                name="code"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Verificatiecode"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isLoading ? 'Verifiëren...' : 'Verifiëren'}
            </button>
          </div>

          <div className="text-sm text-center">
            <button
              type="button"
              onClick={handleResendCode}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Nieuwe code aanvragen
            </button>
            <button
              type="button"
              onClick={() => router.push('/auth/login')}
              style={{ marginLeft: 16 }}
            >
              Terug naar inloggen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 