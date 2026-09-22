"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Shield, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Architecture', hre