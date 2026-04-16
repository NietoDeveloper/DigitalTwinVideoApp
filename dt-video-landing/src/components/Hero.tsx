"use client";

import { useEffect, useState } from 'react';
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



  return (
    <section className="flex flex-col w-full">
      {/* 50vh Video Reel */}
      <div className="h-[50vh] relative overflow-hidden bg-black w-full">
        <AnimatePresence mode="wait">
          <motion.video
            key={videos[index]}
            src={videos[index]}
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
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

      {/* 50vh Services Section */}
      <div 
        style={{ backgroundColor: '#DCDCDC' }} 
        className="min-h-[50vh] flex flex-col items-center justify-start gap-12 pt-24 pb-24 px-8 relative z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-black/40">Deployment Services</h2>
          <div style={{ backgroundColor: '#FFD700' }} className="w-12 h-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {services.map((service, i) => (
            <motion.button
              whileHover={{ y: -10 }}
              key={i}
              className="h-80 bg-white shadow-xl rounded-3xl border border-black/5 transition-all flex flex-col items-center justify-center p-8 text-center group"
            >
              <div 
                style={{ backgroundColor: '#DCDCDC' }} 
                className="w-14 h-14 rounded-2xl mb-6 group-hover:rotate-12 group-hover:bg-[#FFD700] transition-all duration-500 flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-black rounded-full" />
              </div>
              <span className="font-black text-xl uppercase tracking-tighter text-black">{service.title}</span>
              <p className="text-xs mt-4 text-black/50 leading-relaxed">{service.desc}</p>
              <div style={{ color: '#FFD700' }} className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity font-bold text-[10px] uppercase tracking-widest">
                Initialize Module →
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}