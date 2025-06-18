import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

export default function SimpleLogin() {
  const [role, setRole] = useState<'CANDIDATE' | 'EMPLOYER' | ''>('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'start' | 'code'>('start');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const router = useRouter();

  // 1. Verstuur email + rol
  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/request-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role }),
      });
      const data = await res.json();
      if (res.ok) {
        setStep('code');
      } else {
        setError(data.message || 'Er is iets misgegaan bij het versturen van de code.');
      }
    } catch (err) {
      setError('Netwerkfout. Probeer opnieuw.');
    } finally {
      setIsLoading(false);
    }
  };

  // 2. Verificatiecode controleren
  const handleCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      });
      const data = await res.json();
      if (res.ok && data.token && data.user) {
        await login(data.token, data.user);
        if (data.user.role === 'CANDIDATE') {
          router.push('/dashboard/candidate');
        } else if (data.user.role === 'EMPLOYER') {
          router.push('/dashboard/employer');
        } else {
          router.push('/dashboard');
        }
        return;
      } else {
        setError(data.message || 'Ongeldige code. Probeer opnieuw.');
      }
    } catch (err) {
      setError('Netwerkfout. Probeer opnieuw.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '80px auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Simpel Inloggen</h2>
      {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}

      {step === 'start' && (
        <form onSubmit={handleEmail}>
          <div style={{ marginBottom: 12 }}>
            <label>
              <input
                type="radio"
                name="role"
                value="CANDIDATE"
                checked={role === 'CANDIDATE'}
                onChange={() => setRole('CANDIDATE')}
                required
              /> Kandidaat
            </label>
            <label style={{ marginLeft: 16 }}>
              <input
                type="radio"
                name="role"
                value="EMPLOYER"
                checked={role === 'EMPLOYER'}
                onChange={() => setRole('EMPLOYER')}
                required
              /> Opdrachtgever
            </label>
          </div>
          <label>
            E-mail:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ width: '100%', marginBottom: 12, marginTop: 4 }}
            />
          </label>
          <button type="submit" disabled={isLoading || !role} style={{ width: '100%' }}>
            {isLoading ? 'Versturen...' : 'Verstuur code'}
          </button>
        </form>
      )}

      {step === 'code' && (
        <form onSubmit={handleCode}>
          <div style={{ marginBottom: 8 }}>Code is verstuurd naar <b>{email}</b></div>
          <label>
            Code:
            <input
              type="text"
              value={code}
              onChange={e => setCode(e.target.value)}
              required
              style={{ width: '100%', marginBottom: 12, marginTop: 4 }}
            />
          </label>
          <button type="submit" disabled={isLoading} style={{ width: '100%' }}>
            {isLoading ? 'Verifiëren...' : 'Verifiëren'}
          </button>
          <button
            type="button"
            disabled={isLoading}
            style={{ width: '100%', marginTop: 8 }}
            onClick={() => setStep('start')}
          >
            Terug
          </button>
        </form>
      )}
    </div>
  );
} 