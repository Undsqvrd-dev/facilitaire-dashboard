import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getToken, setToken, removeToken, getUserData } from '../lib/auth';

// Dit is de correcte User interface, synchroon met Prisma
interface User {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (token: string, userData: User) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initializeAuth = () => {
      try {
        const token = getToken();
        if (token) {
          const userData = getUserData();
          if (userData) {
            // Zorg ervoor dat de data die we in de state zetten, voldoet aan de User interface
            const validUser: User = {
              id: Number(userData.id), // Converteer id naar number
              email: userData.email,
              role: userData.role,
              firstName: userData.firstName || null,
              lastName: userData.lastName || null,
            };
            setUser(validUser);
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        logout(); // Log uit bij een fout
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (token: string, userData: User) => {
    setToken(token);
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    removeToken();
    setUser(null);
    setIsAuthenticated(false);
    if(router.pathname.startsWith('/candidate') || router.pathname.startsWith('/employer')) {
      router.push('/auth/login');
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 