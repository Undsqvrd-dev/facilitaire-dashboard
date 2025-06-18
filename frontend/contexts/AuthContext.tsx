import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getToken, setToken, removeToken, getUserData } from '../lib/auth';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User) => void;
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
    const initializeAuth = async () => {
      try {
        const token = getToken();
        if (token) {
          const userData = getUserData();
          if (userData) {
            setUser(userData);
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (token: string, userData: User) => {
    try {
      console.log('Login poging met data:', { token: token.substring(0, 20) + '...', userData });
      
      // Sla eerst de token op
      setToken(token);
      console.log('Token opgeslagen in localStorage');
      
      // Wacht even om zeker te zijn dat de token is opgeslagen
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Update de user state
      setUser(userData);
      setIsAuthenticated(true);
      console.log('User state bijgewerkt:', userData);
      
      // Wacht even om zeker te zijn dat de state is bijgewerkt
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Controleer of de state correct is bijgewerkt
      const currentToken = getToken();
      const currentUser = getUserData();
      
      console.log('State check na login:', {
        tokenExists: !!currentToken,
        userExists: !!currentUser,
        isAuthenticated: true
      });
      
      if (!currentToken || !currentUser) {
        throw new Error('State niet correct bijgewerkt');
      }
      
      console.log('Login succesvol, nieuwe state:', { 
        isAuthenticated: true, 
        user: userData 
      });
    } catch (error) {
      console.error('Login error:', error);
      // Reset state bij error
      removeToken();
      setUser(null);
      setIsAuthenticated(false);
      throw error;
    }
  };

  const logout = () => {
    removeToken();
    setUser(null);
    setIsAuthenticated(false);
    router.push('/auth/login');
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