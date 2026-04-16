"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
  "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1582-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-vj-loop-background-28684-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-robotic-arm-working-on-a-circuit-board-42799-large.mp4"
];

const services = [
  { title: 'Real Estate DT', desc: 'Precision scanning for architecture.' },
  { title: 'Industrial Unit', desc: 'Digital twins for heavy machinery.' },
  { title: 'Infrastructure', desc: 'Large scale city-grid mapping.' }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Efecto para rotar videos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Forzar la reproducción cuando cambie el index
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log("Autoplay blocked or loading:", e));
    }
  }, [index]);

  return (
    <section className="flex flex-col w-full min-h-screen">
      {/* 50vh ARRIBA: Video Reel */}
      <div className="h-[50vh] relative overflow-hidden bg-black w-full border-b border-white/5">
        <AnimatePresence mode="wait">
          <motion.video
            ref={videoRef}
            key={videos[index]}
            src={videos[index]}
            autoPlay 
            muted 
            loop 
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }} // Opacidad controlada para look industrial
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </AnimatePresence>
        
        {/* Capa de Texto Central */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-6 pointer-events-none">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl font-black text-center tracking-tighter uppercase italic"
          >
            Video <span style={{ color: '#FFD700' }}>Digital Twin</span>
          </motion.h1>
          <p style={{ color: 'rgba(255, 215, 0, 0.6)' }} className="tracking-[0.5em] uppercase text-[10px] mt-4 font-bold">
            Industrial Grade Reconstruction
          </p>
        </div>
      </div>

      {/* 50vh ABAJO: Botones / Servicios con FONDO NEGRO */}
      <div 
        style={{ backgroundColor: '#000000' }} 
        className="min-h-[50vh] flex flex-col items-center justify-start gap-12 pt-16 pb-16 px-8 relative z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-white/30">Deployment Services</h2>
          <div style={{ backgroundColor: '#FFD700' }} className="w-12 h-0.5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
          {services.map((service, i) => (
            <motion.button
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 215, 0, 0.05)' }}
              key={i}
              className="h-64 bg-transparent border border-white/10 rounded-2xl transition-all flex flex-col items-center justify-center p-8 text-center group"
            >
              <div 
                style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)' }} 
                className="w-12 h-12 rounded-xl mb-6 group-hover:rotate-12 group-hover:bg-[#FFD700] transition-all duration-500 flex items-center justify-center"
              >
                <div className="w-1.5 h-1.5 bg-[#FFD700] group-hover:bg-black rounded-full" />
              </div>
              <span className="font-black text-lg uppercase tracking-tighter text-white">{service.title}</span>
              <p className="text-[10px] mt-3 text-white/40 leading-relaxed max-w-[200px]">{service.desc}</p>
              <div style={{ color: '#FFD700' }} className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity font-bold text-[9px] uppercase tracking-[0.2em]">
                Initialize Module →
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}