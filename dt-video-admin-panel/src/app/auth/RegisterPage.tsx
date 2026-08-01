import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../components/auth/AuthLayout';
import { RegisterForm } from '../../components/auth/RegisterForm';
import { useAuthStore } from '../../store';

export function RegisterPage() {
  const navigate = useNavigate();
  const { isAuthenticated, isHydrated } = useAuthStore();

  if (isHydrated && isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <AuthLayout
      title="Registro de empleado"
      subtitle="Usa el código de autorización que te dio tu jefe para crear tu acceso."
      footer={
        <>
          ¿Ya estás registrado?{' '}
          <Link to="/login">Inicia sesión</Link>
        </>
      }
    >
      <RegisterForm onSuccess={() => navigate('/', { replace: true })} />
    </AuthLayout>
  );
}
