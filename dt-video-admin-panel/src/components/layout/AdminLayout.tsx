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
      <Sidebar
        isOpen={isSidebarOpen}
        activeTab={activeTab}
        onToggle={() => setIsSidebarOpen((open) => !open)}
        onSelect={setActiveTab}
      />

      <div className="flex-1 flex flex-col relative overflow-hidden">
        <Header />

        <main className="flex-grow overflow-y-auto bg-main/20 custom-scrollbar">
          <div className="p-8">{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
