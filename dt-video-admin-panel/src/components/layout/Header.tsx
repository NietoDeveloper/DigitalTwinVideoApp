import { Activity, Bell, ShieldCheck } from 'lucide-react';
import { useAdminStore } from '../../store';

export const Header = () => {
  const { systemStatus } = useAdminStore();

  return (
    <header className="h-16 bg-white border-b border-border-dt flex items-center justify-between px-8">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Activity size={16} className={systemStatus === 'healthy' ? 'text-status-online' : 'text-status-error'} />
          <span className="text-xs font-bold uppercase tracking-widest opacity-60">
            Infra: <span className={systemStatus === 'healthy' ? 'text-status-online' : 'text-status-error'}>
              {systemStatus}
            </span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gainsboro rounded-full relative">
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-status-error rounded-full border-2 border-white"></span>
        </button>
        <div className="h-8 w-px bg-border-dt mx-2"></div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs font-bold leading-none text-heading-color">M. Nieto</p>
            <p className="text-[10px] text-gray-400 uppercase">Super Admin</p>
          </div>
          <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center text-gold border border-gold/20 shadow-inner">
             <ShieldCheck size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};