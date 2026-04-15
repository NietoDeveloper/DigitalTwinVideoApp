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
    <section className="min-h-screen flex flex-col">
      {/* 50vh Video Reel */}
      <div className="h-[50vh] relative overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.video
            key={index}
            src={videos[index]}
            autoPlay
            muted
            loop
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center justify-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-black text-center">FUTURE OF RECONSTRUCTION</h1>
        </div>
      </div>

      {/* 50vh visible initially, total 100vh with scroll */}
      <div className="min-h-screen bg-main p-8 flex flex-col items-center justify-start gap-12 pt-20">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-headingColor">Direct Access Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {['Real Estate DT', 'Industrial Inspection', 'Public Safety'].map((service, i) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={i}
              className="h-64 bg-card shadow-xl rounded-2xl border-2 border-transparent hover:border-gold transition-all flex flex-col items-center justify-center p-6 text-center group"
            >
              <div className="w-16 h-16 bg-gainsboro rounded-full mb-4 group-hover:bg-gold transition-colors" />
              <span className="font-bold text-xl uppercase">{service}</span>
              <p className="text-sm mt-2">Deploy your digital twin in minutes with our AI processing engine.</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}