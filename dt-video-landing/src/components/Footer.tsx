import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 px-8 border-t border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] text-gainsboro/60">
            Digital Twin Video Systems v1.0
          </span>
        </div>

        <nav className="flex gap-6">
          <a href="#" className="text-[10px] uppercase tracking-widest text-gainsboro/60 hover:text-gold transition-colors">
            System Status
          </a>
          <a href="#" className="text-[10px] uppercase tracking-widest text-gainsboro/60 hover:text-gold transition-colors">
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;