"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
  "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1582-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-vj-loop-background-28684-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-robotic-arm-working-on-a-circuit-board-42799-large.mp4"
];

export default function Hero() {
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
            autoPlay muted loop
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic">
            DT <span className="text-gold">VIDEO</span> ENGINE
          </h1>
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold/80 font-bold mt-2">
            Real-time Industrial Replication
          </p>
        </div>
      </div>

      {/* 50vh visible initially (Total section leads to 100vh on scroll) */}
      <div className="min-h-screen bg-[#DCDCDC] p-8 flex flex-col items-center justify-start pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {['Real Estate', 'Industrial', 'Defense'].map((service, i) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={i}
              className="h-80 bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center justify-center text-center border border-black/5 hover:border-gold transition-all"
            >
              <div className="w-12 h-12 bg-gold rounded-full mb-6" />
              <h3 className="font-black text-xl uppercase italic">{service}</h3>
              <p className="text-[11px] text-gray-500 mt-4 leading-relaxed uppercase tracking-widest">
                Deployment of digital twin via high-speed video processing.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}