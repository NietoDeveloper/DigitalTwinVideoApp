"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importamos tus otros componentes
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

// --- SUB-COMPONENTE HERO ---
const videos = [
  "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1582-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-vj-loop-background-28684-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-robotic-arm-working-on-a-circuit-board-42799-large.mp4"
];

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col">
      {/* 50vh Video Reel */}
      <div className="h-[50vh] relative overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.video
            key={index}
            src={videos[index]}
            autoPlay muted loop playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-6">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl font-black text-center tracking-tighter uppercase"
          >
            Video <span className="text-gold">Digital Twin</span>
          </motion.h1>
          <p className="text-gold/60 tracking-[0.5em] uppercase text-[10px] mt-4 font-bold">Industrial Grade Reconstruction</p>
        </div>
      </div>

      {/* 50vh visible initially, buttons section */}
      <div className="min-h-screen bg-main flex flex-col items-center justify-start gap-12 pt-24 px-8">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-headingColor/40">Deployment Services</h2>
          <div className="w-12 h-1 bg-gold" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {[
            { title: 'Real Estate DT', desc: 'Precision scanning for architecture.' },
            { title: 'Industrial Unit', desc: 'Digital twins for heavy machinery.' },
            { title: 'Infrastructure', desc: 'Large scale city-grid mapping.' }
          ].map((service, i) => (
            <motion.button
              whileHover={{ y: -10 }}
              key={i}
              className="h-80 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-3xl border border-black/5 hover:border-gold/50 transition-all flex flex-col items-center justify-center p-8 text-center group"
            >
              <div className="w-14 h-14 bg-main rounded-2xl mb-6 group-hover:rotate-12 group-hover:bg-gold transition-all duration-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full" />
              </div>
              <span className="font-black text-xl uppercase tracking-tighter">{service.title}</span>
              <p className="text-xs mt-4 text-textColor/50 leading-relaxed">{service.desc}</p>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity text-gold font-bold text-[10px] uppercase tracking-widest">
                Initialize Module →
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- COMPONENTE PRINCIPAL (EL QUE RENDERIZA TODO) ---
export default function Home() {
  return (
    <main className="relative bg-main min-h-screen">
      <Navbar />
      
      {/* Llamamos al Hero que definimos arriba */}
      <HeroSection />
      
      {/* Aquí es donde aparecen tus otros componentes */}
      <About />
      <Footer />
    </main>
  );
}