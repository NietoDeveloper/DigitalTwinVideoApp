import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Video, Cpu, 
  CreditCard, Settings, ChevronLeft, ChevronRight,
  Activity, Bell, ShieldCheck
} from 'lucide-react';
import { useAdminStore } from '../../store';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
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
    <div className="flex min-h-screen bg-main font-sans selection:bg-gold/30">
      
      {/* --- SIDEBAR COMPONENT --- */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-white border-r border-border-dt flex flex-col transition-all duration-300 ease-in-out z-20 shadow-sm`}
      >
        <div className="p-6 h-16 flex items-center justify-between border-b border-border-dt/50">
          {isSidebarOpen && (
            <span className="font-black text-xl tracking-tighter text-heading-color animate-in fade-in duration-500">
              SOFTWARE <span className="text-gold">DT</span>
            </span>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1.5 hover:bg-gainsboro rounded-md transition-all border border-transparent hover:border-border-dt"
            title={isSidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            {isSidebarOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 group relative ${
                activeTab === item.id 
                ? 'bg-gainsboro text-heading-color shadow-sm' 
                : 'text-gray-500 hover:bg-gainsboro/50 hover:text-heading-color'
              }`}
            >
              <div className={`${activeTab === item.id ? 'text-gold' : 'group-hover:text-gold'} transition-colors`}>
                {item.icon}
              </div>
              {isSidebarOpen && (
                <span className="ml-4 font-semibold text-sm tracking-tight">{item.label}</span>
              )}
              {activeTab === item.id && (
                <div className="absolute left-0 w-1 h-6 bg-gold rounded-r-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border-dt bg-white/50">
          <div className="counter w-full justify-center text-[10px] uppercase tracking-widest py-3">
            {isSidebarOpen ? 'NietoDeveloper • #1' : 'ND'}
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        
        {/* --- HEADER COMPONENT --- */}
        <header className="h-16 bg-white border-b border-border-dt flex items-center justify-between px-8 z-10 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-3 py-1.5 bg-main/50 rounded-full border border-border-dt/30">
              <div className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  systemStatus === 'healthy' ? 'bg-status-online' : 'bg-status-error'
                }`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${
                  systemStatus === 'healthy' ? 'bg-status-online' : 'bg-status-error'
                }`}></span>
              </div>
              <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">
                System: <span className={systemStatus === 'healthy' ? 'text-status-online' : 'text-status-error font-bold'}>
                  {systemStatus}
                </span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button className="text-gray-400 hover:text-gold transition-colors relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-status-error rounded-full border-2 border-white"></span>
            </button>
            
            <div className="h-8 w-px bg-border-dt/60" />

            <div className="flex items-center gap-4">
              <div className="text-right hidden md:block">
                <p className="text-xs font-black text-heading-color leading-none uppercase tracking-tighter">M. Nieto</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase mt-1">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-gold border border-gold/20 shadow-lg group cursor-pointer hover:scale-105 transition-transform">
                <ShieldCheck size={22} />
              </div>
            </div>
          </div>
        </header>

        {/* --- DYNAMIC PAGE CONTENT --- */}
        <main id="center" className="flex-grow overflow-y-auto bg-main/20 custom-scrollbar">
          <div className="p-8">
            {children}
          </div>
          
          {/* --- FOOTER COMPONENT --- */}
          <footer className="mt-auto border-t border-border-dt bg-white/30 backdrop-blur-sm">
            <div className="ticks"></div>
            <div className="px-8 py-4 flex justify-between items-center text-[10px] font-mono text-gray-400 uppercase tracking-widest">
              <span>© 2026 Software DT - Digital Twin Lab</span>
              <div className="flex gap-4">
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-status-online"></div>
                  AWS US-EAST-1 Active
                </span>
                <span>Bogotá, CO</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;