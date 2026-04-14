import React, { useState, useEffect, memo } from 'react';
import { Activity, ShieldCheck, Wifi, Clock } from 'lucide-react';

interface DashboardContainerProps {
  children: React.ReactNode;
  userTag?: string;
}

const DashboardContainer = memo(({ children, userTag = "MN_01_COL" }: DashboardContainerProps) => {
  const [time, setTime] = useState(new Date());
  const [latency, setLatency] = useState(184);

  // Reloj de misión y simulación de latencia
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const latencyTimer = setInterval(() => {
      setLatency(prev => Math.max(120, Math.min(250, prev + (Math.random() * 20 - 10))));
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(latencyTimer);
    };
  }, []);

  return (
    <div className="relative h-screen w-screen bg-space-black text-dt-gainsboro overflow-hidden flex flex-col font-sans select-none">
      
      {/* CAPA DE EFECTOS INDUSTRIALES (Scanlines & Noise) */}
      <div className="pointer-events-none absolute inset-0 z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      
      {/* GRID DE FONDO DINÁMICO */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>

      {/* HEADER DE ALTA FIDELIDAD */}
      <header className="relative z-10 h-14 border-b border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-between px-6">
        
        {/* Lado Izquierdo: Branding & Status */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-dt-gold font-black tracking-[0.2em] text-xs italic leading-none">
              SOFTWARE DT
            </span>
            <span className="text-[10px] text-white/40 tracking-[0.3em] font-mono">
              MISSION CONTROL
            </span>
          </div>

          <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

          <div className="flex items-center gap-4 font-mono">
            <div className="flex flex-col">
              <span className="text-[9px] text-white/30 uppercase">System Status</span>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-dt-cyan animate-pulse shadow-[0_0_8px_#00c8ff]"></div>
                <span className="text-[10px] text-dt-cyan font-bold uppercase tracking-widest">
                  Active / S+ Rank
                </span>
              </div>
            </div>

            <div className="flex flex-col border-l border-white/5 pl-4">
              <span className="text-[9px] text-white/30 uppercase">Telemetry</span>
              <span className={`text-[10px] font-bold ${latency > 200 ? 'text-orange-500' : 'text-green-500'}`}>
                {latency.toFixed(0)}ms <span className="text-[8px] font-normal text-white/20">RTT</span>
              </span>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Metadatos & Tiempo */}
        <div className="flex items-center gap-8 font-mono">
          <div className="hidden md:flex items-center gap-6 text-[10px]">
             <div className="flex items-center gap-2 text-white/40">
                <ShieldCheck size={12} className="text-dt-gold" />
                <span>SECURED_UPLINK</span>
             </div>
             <div className="flex items-center gap-2 text-white/40">
                <Wifi size={12} className="text-dt-cyan" />
                <span>AWS_CLUSTER_03</span>
             </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 px-4 py-1.5 border border-white/10 rounded-sm">
            <div className="flex flex-col items-end">
              <span className="text-[8px] text-white/30 uppercase leading-none">Local Time</span>
              <span className="text-xs font-bold text-white/90">
                {time.toLocaleTimeString([], { hour12: false })}
              </span>
            </div>
            <Clock size={16} className="text-white/20" />
          </div>

          <div className="flex flex-col items-end border-l border-white/10 pl-4">
            <span className="text-[8px] text-white/30 uppercase leading-none">Operator</span>
            <span className="text-[11px] font-bold text-dt-gold tracking-tight">{userTag}</span>
          </div>
        </div>
      </header>

      {/* ÁREA DE TRABAJO (GRID) */}
      <main className="relative z-10 flex-1 grid grid-cols-12 grid-rows-6 gap-3 p-3 overflow-hidden">
        {/* Un sutil degradado en los bordes para centrar la atención */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
        {children}
      </main>

      {/* FOOTER DE ESTADO (Opcional pero recomendado para el look) */}
      <footer className="relative z-10 h-6 bg-black border-t border-white/5 flex items-center justify-between px-4 text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">
        <div className="flex gap-4">
          <span>V.1.0.4-STABLE</span>
          <span className="text-dt-cyan/40">Encrypted Stream: AES-256</span>
        </div>
        <div className="flex gap-2 items-center">
          <Activity size={10} />
          <span>Neural Engine Load: 4.2%</span>
        </div>
      </footer>
    </div>
  );
});

DashboardContainer.displayName = 'DashboardContainer';

export default DashboardContainer;