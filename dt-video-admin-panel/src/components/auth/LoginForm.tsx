import { type FormEvent } from 'react';
import { Loader2, LogIn } from 'lucide-react';
import { useAuthStore } from '../../store';

interface LoginFormProps {
  onSuccess: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const { login, isLoading, error, clearError } = useAuthStore();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    clearError();
    // Temporal: solo el botón abre el panel; los campos se validarán después.
    const ok = await login({ email: '', password: '' });
    if (ok) onSuccess();
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      {error && <div className="auth-alert" role="alert">{error}</div>}

      <label className="auth-field">
        <span>Correo corporativo</span>
        <input
          type="email"
          autoComplete="email"
          placeholder="empleado@softwaredt.com"
          disabled
        />
      </label>

      <label className="auth-field">
        <span>Contraseña</span>
        <input
          type="password"
          autoComplete="current-password"
          placeholder="Se ajustará más adelante"
          disabled
        />
      </label>

      <button type="submit" className="auth-submit" disabled={isLoading}>
        {isLoading ? <Loader2 size={18} className="animate-spin" /> : <LogIn size={18} />}
        {isLoading ? 'Entrando…' : 'Entrar al panel'}
      </button>
    </form>
  );
}
