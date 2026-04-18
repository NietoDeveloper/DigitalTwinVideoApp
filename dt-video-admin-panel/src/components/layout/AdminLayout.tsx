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
    { icon: <LayoutDashboard sl: 'Streams', id: 'streams' },
    { icon: <Cpu size={20} />, labbel: 'Billing', id: 'billing' },
    { icon: 