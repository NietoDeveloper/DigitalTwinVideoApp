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
      </button>
    </form>
  );
}
