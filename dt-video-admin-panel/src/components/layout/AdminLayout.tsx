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
      p

export default AdminLayout;