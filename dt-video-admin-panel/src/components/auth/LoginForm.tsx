import { type FormEvent } from 'react';
import { Loader2, LogIn } from 'lucide-react';
import { useAuthStore } from '../../store';

interface LoginFormProps {
  onSuccess: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const { login, isLoadinleSubmit} noValidate>
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
