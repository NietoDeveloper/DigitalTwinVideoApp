import React, { useState, useEffect, memo, useMemo } from 'react';
import { Activity, ShieldCheck, Wifi, Clock, Database, Terminal } from 'lucide-react';

interface DashboardContainerProps {
  children: React.ReactNode;
  userTag?: string;
}

const DashboardContainer = memo(({ children, userTag = "MN_01_COL" }: DashboardContainerProps) => {
  const [time, setTime] = useState(new Date());
  const [latency, setLatency] = useState(184);

  // Reloj de misión y simulación de latencia optimizados
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const latencyTimer = setInterval(() => 

        {/* Lado Derecho: Metadatos & Tiempo">
          <div className="flex items-center gap-2">
            <Terminal size={12} className="text-white/10" />
            <span className="hover:text-white/40 cursor-help transition-colors font-bold">SECURE_SHELL: STABLE</span>
          </div>
          <span className="text-[#00c8ff]/30 font-black">AES-256_GCM_ENCRYPTION</span>
        </div>
        
        <div className="flex gap-4 items-center">
          <div className="fle
    </div>
  );
});

DashboardContainer.displayName = 'DashboardContainer';

export default DashboardContainer;