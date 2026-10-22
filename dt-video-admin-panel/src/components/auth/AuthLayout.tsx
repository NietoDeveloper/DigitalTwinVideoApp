import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, ShieldCheck } from 'lucide-react';


export function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="auth-shell">
          <div>
            <p className="auth-brand-name">
            <p className="auth-brand-tag">Employee Control Hub</p>
          </div>
        </div>
  );
}
