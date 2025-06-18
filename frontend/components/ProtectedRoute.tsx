import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';
import { getToken } from '../lib/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { isAuthenticated, user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = getToken();
      
      if (!token) {
        router.replace('/auth/login');
        return;
      }

      if (!isLoading && !isAuthenticated) {
        router.replace('/auth/login');
        return;
      }

      if (!isLoading && isAuthenticated && allowedRoles && !allowedRoles.includes(user?.role || '')) {
        router.replace('/dashboard');
        return;
      }
    };

    checkAuth();
  }, [isAuthenticated, isLoading, user, router, allowedRoles]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
} 