import { useState, type ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-main font-sans selection:bg-gold/30">
      <Sidebar bg-main/20 custom-scrollbar">
          <div className="p-8">{children}</div>
          <Footer />
        </m
  );
};

export default AdminLayout;
