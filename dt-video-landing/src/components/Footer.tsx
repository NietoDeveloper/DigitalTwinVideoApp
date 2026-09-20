import React from 'react';

const footerLinks = [
  { name: 'System Status', href: '#' },
  { name: 'Privacy & Legal', href: '#' },
  { name: 'Documentation', href: '#' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.2em] text-gainsboro/50 hover:text-gold transition-all duration-300 ease-in-out relative group"
              >
                {link.name}
                <span className="ab
          
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