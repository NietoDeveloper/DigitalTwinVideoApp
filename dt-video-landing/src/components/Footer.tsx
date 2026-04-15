import React from 'react';

const footerLinks = [
  { name: 'System Status', href: '#' },
  { name: 'Privacy & Legal', href: '#' },
  { name: 'Documentation', href: '#' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 px-8 border-t border-white/5 bg-black text-gainsboro">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Logo & Status */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-gold rounded-full animate-ping opacity-75" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">
                Digital Twin <span className="text-gold">Video Systems</span>
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-white/30 ml-5">
              Powered by Software DT / Colombia #1
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.2em] text-gainsboro/50 hover:text-gold transition-all duration-300 ease-in-out relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section: Copyright & Location */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-[9px] text-gainsboro/30 tracking-[0.2em] uppercase">
            © {currentYear} Software DT. All rights reserved. Built for scalability.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-[9px] text-gainsboro/20 tracking-widest uppercase">
              BOGOTÁ / 4.7110° N, 74.0721° W
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;