import { User } from '@prisma/client';

export interface AuthUser extends User {
  token?: string;
}

export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
}

export function setToken(token: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('token', token);
    console.log('Token opgeslagen in localStorage');
  } catch (error) {
    console.error('Error bij opslaan token:', error);
  }
}

export function removeToken(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem('token');
    console.log('Token verwijderd uit localStorage');
  } catch (error) {
    console.error('Error bij verwijderen token:', error);
  }
}

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const token = getToken();
  if (!token) {
    throw new Error('No token found');
  }

  return fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
}

export function getUserData(): User | null {
  if (typeof window === 'undefined') return null;
  const token = getToken();
  if (!token) return null;
  
  try {
    console.log('Decoderen token...');
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const payload = JSON.parse(jsonPayload);
    console.log('Token payload:', payload);

    return {
      id: payload.id,
      email: payload.email,
      firstName: payload.firstName || '',
      lastName: payload.lastName || '',
      role: payload.role,
      createdAt: new Date(payload.createdAt),
      updatedAt: new Date(payload.updatedAt)
    };
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}

export function getUserRole(): string | null {
  const userData = getUserData();
  return userData?.role || null;
} 