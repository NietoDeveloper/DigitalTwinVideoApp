import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, ShieldCheck } from 'lucide-react';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}

export function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="auth-shell">
      <div className="auth-panel">
        <div className="auth-brand">
          <div className="auth-brand-mark">
            <ShieldCheck size={22} />
          </div>
          <div>
            <p className="auth-brand-name">
              SOFTWARE <span className="text-gold">DT</span>
            </p>
            <p className="auth-brand-tag">Employee Control Hub</p>
          </div>
        </div>

        <div className="auth-heading">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

        {children}

        <div className="auth-footer">{footer}</div>
      </div>

      <aside className="auth-aside">
        <div className="auth-aside-card">
          <KeyRound size={28} className="text-gold" />
          <h2>Acceso solo con autorización</h2>
          <p>
            Este panel es exclusivo para empleados internos. Para registrarte
            necesitas el código que te entrega tu jefe.
          </p>
          <ul>
            <li>Monitoreo de streams y workers de IA</li>
            <li>Métricas de ventas e infraestructura</li>
            <li>Gestión de clientes y tiers</li>
          </ul>
          <Link to="/" className="auth-aside-link">
            Volver al panel (si ya tienes sesión)
          </Link>
        </div>
      </aside>
    </div>
  );
}
