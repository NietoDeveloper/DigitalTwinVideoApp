import { useNavigate } from 'react-router-dom';
import { Activity, Bell, LogOut, ShieldCheck } from 'lucide-react';
import { useAdminStore, useAuthStore } from '../../store';

export function Header() {
  const navigate = useNavigate();
  const { systemStatus } = useAdminStore();
  const { employee, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });

          </h2>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button
          type="button"
          className="text-gray-400 hover:text-gold transition-colors relative"
          aria-label="Notificaciones"
        >
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-status-error rounded-full border-2 border-white" />
        </button>

        <div className="h-8 w-px bg-border-dt/60" />

        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <p className="text-xs font-black text-heading-color leading-none uppercase tracking-tighter">
              {employee?.name ?? 'Empleado'}
            </p>
            <p className="text-[9px] text-gray-400 font-bold uppercase mt-1">
              {employee?.role ?? 'employee'}
            </p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-gold border border-gold/20 shadow-lg">
            <ShieldCheck size={22} />
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="counter gap-2 text-[10px] uppercase tracking-widest py-2 px-3"
            title="Cerrar sesión"
          >
            <LogOut size={14} />
            <span className="hidden sm:inline">Salir</span>
          </button>
        </div>
      </div>
    </header>
  );
}
