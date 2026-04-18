import { LayoutDashboard, Users, Video, Cpu, CreditCard, Settings } from 'lucide-react';

const menuItems = [
  { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '#dashboard' },
  { icon: <Users size={20} />, label: 'Usuarios', path: '#users' },
  { icon: <Video size={20} />, label: 'Streams', path: '#streams' },
  { icon: <Cpu size={20} />, label: 'AI Workers', path: '#ai' },
  { icon: <CreditCard size={20} />, label: 'Facturación', path: '#billing' },
  { icon: <Settings size={20} />, label: 'Ajustes', path: '#settings' },
];

export const Sidebar = () => {
  return (
    <nav className="flex flex-col h-full bg-white p-4">
      <div className="mb-10 px-2">
        <h1 className="text-xl font-bold tracking-tighter">
          SOFTWARE <span className="text-gold">DT</span>
        </h1>
        <p className="text-[10px] text-gray-400 font-mono">v1.0.0-PROD</p>
      </div>

      <ul className="space-y-2 flex-1">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a href={item.path} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gainsboro transition-all font-medium text-sm group">
              <span className="text-gray-500 group-hover:text-black">{item.icon}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="counter w-full justify-center">
        NietoDeveloper
      </div>
    </nav>
  );
};