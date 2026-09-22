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
