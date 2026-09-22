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
