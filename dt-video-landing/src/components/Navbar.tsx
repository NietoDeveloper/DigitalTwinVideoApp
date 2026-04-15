"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Shield, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Architecture', href: '#about', icon: Shield },
  { name: 'Pricing', href: '/pricing', icon: Zap },
  { name: 'Connect', href: '/contact', icon: Rocket },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto de scroll para cambiar la opacidad del navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled ? 'bg-black/90 backdrop-blur-xl py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO: Identidad de Software DT */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative">
            <Rocket className={`transition-colors duration-300 ${scrolled ? 'text-gold' : 'text-white'}`} size={28} />
            <div className="absolute inset-0 bg-gold/20 blur-lg rounded-full group-hover:bg-gold/40 transition-all" />
          </div>
          <div className="flex flex-col">
            <span className={`font-black text-xl tracking-[0.15em] leading-none ${scrolled ? 'text-white' : 'text-white'}`}>
              DIGITAL<span className="text-gold font-light">TWIN</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gold/60 font-bold">Video Systems</span>
          </div>
        </motion.div>

        {/* DESKTOP MENU: Estilo Tech Minimalista */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/70 hover:text-gold transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <button className="bg-gold hover:bg-white text-black text-[11px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95">
            Launch App
          </button>
        </div>

        {/* MOBILE TRIGGER */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU: Animado con Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 text-lg font-bold text-white hover:text-gold transition-colors"
                >
                  <link.icon size={20} className="text-gold" />
                  <span className="uppercase tracking-widest text-sm">{link.name}</span>
                </a>
              ))}
              <button className="w-full bg-white text-black font-black uppercase tracking-widest py-4 rounded-xl">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}