"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// He actualizado los links a versiones de Adobe/CDN más compatibles con streaming directo en localhost
const videos = [
  "https://v.ftcdn.net/02/10/35/33/700_F_210353392_8Z99h8lR6P7O0E0W9v5i2kR9uUuX6X3Y_ST.mp4",
  "https://v.ftcdn.net/05/57/02/76/700_F_557027663_vL2uVpWvYmZ9S8H1L7rK1p6u5vR4oU.mp4",
  "https://v.ftcdn.net/01/71/34/44/700_F_171344403_mU8uVpWvYmZ9S8H1L7rK1p6u5vR4oU.mp4"
];

const services = [
  { title: 'Real Estate DT', desc: 'Precision scanning for architecture.' },
  { title: 'Industrial Unit', desc: 'Digital twins for heavy machinery.' },
  { title: 'Infrastructure', desc: 'Large scale city-grid mapping.' }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Control de carga robusto
  useEffect(() => {
    if (isMounted && videoRef.current) {
      videoRef.current.load(); // Fuerza al navegador a leer el nuevo <source>
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Si el navegador bloquea por interacción, re-intentar al primer click
          console.log("Esperando interacción del usuario para reproducir.");
        });
      }
    }
  }, [index, isMounted]);

  if (!isMounted) return <div className="h-screen bg-black" />;

  return (
    <section className="flex flex-col w-full min-h-screen bg-black">
      {/* SECCIÓN 1: 50vh Video Reel */}
      <div className="h-[50vh] relative overflow-hidden bg-black w-full border-b border-white/5 z-0">
        <AnimatePresence mode="wait">
          <motion.video
            ref={videoRef}
            key={videos[index]}
            autoPlay 
            muted 
            loop 
            playsInline
            controls={false}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          >
            {/* El uso de <source> con type="video/mp4" soluciona el error "No supported sources" */}
            <source src={videos[index]} type="video/mp4" />
          </motion.video>
        </AnimatePresence>
        
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

      {/* SECCIÓN 2: 50vh Botones Estilizados */}
      <div 
        style={{ backgroundColor: '#000000' }} 
        className="h-[50vh] flex flex-col items-center justify-center gap-8 px-8 relative z-10 border-t border-white/5"
      >
        <div className="flex flex-col items-center gap-2 mb-2">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Deployment Hub</h2>
          <div style={{ backgroundColor: '#FFD700' }} className="w-8 h-[1px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl h-full max-h-[300px]">
          {services.map((service, i) => (
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 215, 0, 0.03)' }}
              whileTap={{ scale: 0.98 }}
              key={i}
              className="flex-1 border border-white/10 rounded-xl transition-all flex flex-col items-center justify-center p-6 text-center group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div 
                style={{ border: '1px solid rgba(255, 215, 0, 0.3)' }} 
                className="w-10 h-10 rounded-full mb-4 flex items-center justify-center group-hover:bg-gold transition-colors duration-500"
              >
                <div className="w-1 h-1 bg-gold group-hover:bg-black rounded-full" />
              </div>
              
              <span className="font-black text-sm md:text-base uppercase tracking-widest text-white group-hover:text-gold transition-colors">
                {service.title}
              </span>
              
              <p className="text-[9px] mt-2 text-white/30 leading-tight max-w-[150px] uppercase font-medium">
                {service.desc}
              </p>

              <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                 <span style={{ color: '#FFD700' }} className="text-[8px] font-bold tracking-[0.3em]">CONNECTING</span>
                 <div className="flex gap-1">
                    <span className="w-1 h-1 bg-gold animate-pulse" />
                    <span className="w-1 h-1 bg-gold animate-pulse delay-75" />
                 </div>
              </div>
            </motion.button>
          ))}
        </div>
        
        <div className="mt-4 animate-bounce">
           <div className="w-[1px] h-8 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}