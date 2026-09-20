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
      </div>
    </footer>
  );
};

export default Footer;