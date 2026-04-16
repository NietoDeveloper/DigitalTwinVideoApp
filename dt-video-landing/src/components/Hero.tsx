"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
  "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1582-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-vj-loop-background-28684-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-robotic-arm-working-on-a-circuit-board-42799-large.mp4"
];
r z-0"
          />nstruction
          </p>
        </div>
      </div>

      {/* 50vh Services Section */}700' }} className="w-12 h-1" />
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