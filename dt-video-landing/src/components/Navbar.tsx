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
    return () => window.removeEventListener('croll', handleScroll);
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
        