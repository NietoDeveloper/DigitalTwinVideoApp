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
              whileHover={{ y: -10 }}
              key={i}
              className="h-80 bg-whitt-black/50 leading-relaxed">{service.desc}</p>
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