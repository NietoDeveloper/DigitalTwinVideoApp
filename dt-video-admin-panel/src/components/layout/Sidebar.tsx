import {
  LayoutDashboard,
  Users,
  Video,
  Cpu,
  CreditCard,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: Users, label: 'Users', id: 'users' },
  { icon: Video, label: 'Streams', id: 'streams' },
  { icon: Cpu, label: 'AI Workers', id: 'ai-worker' },
  { icon: CreditCard, label: 'Billing', id: 'billing' },
  { icon: Settings, label: 'Settings', id: 'settings' },
] as const;

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  onToggle: () => void;
  onSelect: (id: string) => void;
}

export function Sidebar({ isOpen, activeTab, onToggle, onSelect }: SidebarProps) {
  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-white border-r border-border-dt flex flex-col transition-all duration-300 ease-in-out z-20 shadow-sm`}
    >
      <div className="p-6 h-16 flex items-center justify-between border-b border-border-dt/50">
        {isOpen && (
          <span className="font-black text-xl tracking-tighter text-heading-color">
            SOFTWARE <span className="text-gold">DT</span>
          </span>
        )}
        <button
          type="button"
          onClick={onToggle}
          className="p-1.5 hover:bg-gainsboro rounded-md transition-all border border-transparent hover:border-border-dt"
          title={isOpen ? 'Collapse Sidebar' : 'Expand Sidebar'}
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 group relative ${
                isActive
                  ? 'bg-gainsboro text-heading-color shadow-sm'
                  : 'text-gray-500 hover:bg-gainsboro/50 hover:text-heading-color'
              }`}
            >
              <div
                className={`${isActive ? 'text-gold' : 'group-hover:text-gold'} transition-colors`}
              >
                <Icon size={20} />
              </div>
              {isOpen && (
                <span className="ml-4 font-semibold text-sm tracking-tight">
                  {item.label}
                </span>
              )}
              {isActive && (
                <div className="absolute left-0 w-1 h-6 bg-gold rounded-r-full" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border-dt bg-white/50">
        <div className="counter w-full justify-center text-[10px] uppercase tracking-widest py-3">
          {isOpen ? 'Employee Panel' : 'EP'}
        </div>
      </div>
    </aside>
  );
}
