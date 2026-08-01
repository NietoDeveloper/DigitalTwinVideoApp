import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../components/auth/AuthLayout';
import { LoginForm } from '../../components/auth/LoginForm';
import { useAuthStore } from '../../store';

export function LoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated, isHydrated } = useAuthStore();

  if (isHydrated && isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <AuthLayout
      title="Iniciar sesión"
      subtitle="Accede al panel interno de empleados Software DT."
      footer={
        <>
          ¿Aún no tienes cuenta?{' '}
          <Link to="/register">Regístrate con tu código</Link>
        </>
      }
    >
      <LoginForm onSuccess={() => navigate('/', { replace: true })} />
    </AuthLayout>
  );
}
