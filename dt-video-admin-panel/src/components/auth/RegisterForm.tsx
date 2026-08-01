import { useState, type FormEvent } from 'react';
import { Eye, EyeOff, KeyRound, Loader2, UserPlus } from 'lucide-react';
import { useAuthStore } from '../../store';
import { VALID_INVITE_CODES } from '../../services/authService';

interface RegisterFormProps {
  onSuccess: () => void;
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const { register, isLoading, error, clearError } = useAuthStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [authorizationCode, setAuthorizationCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    clearError();
    const ok = await register({
      name,
      email,
      password,
      confirmPassword,
      authorizationCode,
    });
    if (ok) onSuccess();
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      {error && <div className="auth-alert" role="alert">{error}</div>}

      <label className="auth-field">
        <span>Nombre completo</span>
        <input
          type="text"
          autoComplete="name"
          placeholder="María Nieto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label className="auth-field">
        <span>Correo corporativo</span>
        <input
          type="email"
          autoComplete="email"
          placeholder="empleado@softwaredt.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label className="auth-field">
        <span className="inline-flex items-center gap-1.5">
          <KeyRound size={12} className="text-gold" />
          Código de autorización del jefe
        </span>
        <input
          type="text"
          autoComplete="one-time-code"
          placeholder="DT-EMP-XXXX"
          value={authorizationCode}
          onChange={(e) => setAuthorizationCode(e.target.value.toUpperCase())}
          required
        />
        <small className="auth-hint">
          Demo front: {VALID_INVITE_CODES.join(' · ')}
        </small>
      </label>

      <label className="auth-field">
        <span>Contraseña</span>
        <div className="auth-input-row">
          <input
            type={showPassword ? 'text' : 'password'}
            autoComplete="new-password"
            placeholder="Mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="auth-icon-btn"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </label>

      <label className="auth-field">
        <span>Confirmar contraseña</span>
        <input
          type={showPassword ? 'text' : 'password'}
          autoComplete="new-password"
          placeholder="Repite la contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>

      <button type="submit" className="auth-submit" disabled={isLoading}>
        {isLoading ? <Loader2 size={18} className="animate-spin" /> : <UserPlus size={18} />}
        {isLoading ? 'Registrando…' : 'Crear cuenta de empleado'}
      </button>
    </form>
  );
}
