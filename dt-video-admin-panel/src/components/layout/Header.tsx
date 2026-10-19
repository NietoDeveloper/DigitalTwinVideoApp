import { useNavigate } from 'react-router-dom';
import { Activity, Bell, LogOut, ShieldCheck } from 'lucide-react';
import { useAdminStore, useAuthStore } from '../../store';

export function Header() {

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
