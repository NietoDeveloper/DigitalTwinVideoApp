import { type FormEvent } from 'react';
import { Loader2, LogIn } from 'lucide-react';
import { useAuthStore } from '../../store';

interface LoginFormProps {
  onSuccess: () => void;
}

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
