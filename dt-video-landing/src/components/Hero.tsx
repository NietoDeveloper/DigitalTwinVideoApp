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

  useEffect(() => {
    const timer = setInterval(() => {
  
            loop col items-center gap-2 mb-2">
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
              {/* Indicador de selección sutil */}
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
        
        {/* Espacio inferior para indicar el scroll/selección */}
        <div className="mt-4 animate-bounce">
           <div className="w-[1px] h-8 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}