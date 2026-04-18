import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Video, 
  Cpu, 
  CreditCard, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Activity
} from 'lucide-react';
import { useAdminStore } from '../../store';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { systemStatus } = useAdminStore();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', id: 'dashboard' },
    { icon: <Users size={20} />, label: 'Users', id: 'users' },
    { icon: <Video size={20} />, label: 'Streams', id: 'streams' },
    { icon: <Cpu size={20} />, label: 'AI Workers', id: 'ai-worker' },
    { icon: <CreditCard size={20} />, label: 'Billing', id: 'billing' },
    { icon: <Settings size={20} />, label: 'Settings', id: 'settings' },
  ];

  return (
    <div className="flex min-h-screen bg-main transition-colors duration-300">
      {/* SIDEBAR */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-white border-r border-border-dt flex flex-col transition-all duration-300 ease-in-out`}
      >
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && (
            <span className="font-bold text-xl tracking-tighter text-heading-color">
              SOFTWARE <span className="text-gold">DT</span>
            </span>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 hover:bg-gainsboro rounded-md transition-colors"
          >
            {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="w-full flex items-center p-3 rounded-lg hover:bg-gainsboro text-text-color transition-all group"
            >
              <div className="text-gray-500 group-hover:text-gold transition-colors">
                {item.icon}
              </div>
              {isSidebarOpen && (
                <span className="ml-4 font-medium text-sm">{item.label}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border-dt">
          <div className="counter w-full justify-center">
            {isSidebarOpen ? 'NietoDeveloper' : 'ND'}
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        {/* TOPBAR */}
        <header className="h-16 bg-white border-b border-border-dt flex items-center justify-between px-8">
          <div className="flex items-center gap-2">
            <Activity size={18} className={systemStatus === 'healthy' ? 'text-status-online' : 'text-status-error'} />
            <h2 className="text-sm font-mono uppercase tracking-widest opacity-70">
              System Status: <span className={systemStatus === 'healthy' ? 'text-status-online' : 'text-status-error font-bold'}>
                {systemStatus}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right mr-4 hidden sm:block">
              <p className="text-xs font-bold text-heading-color leading-none">Employee #1</p>
              <p className="text-[10px] text-gray-500 uppercase">Colombia Committer</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-bold border border-border-dt">
              MN
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main id="center" className="overflow-y-auto">
          {children}
          
          {/* Ticks visual de arquitectura */}
          <div className="px-8 mt-auto">
             <div className="ticks"></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;