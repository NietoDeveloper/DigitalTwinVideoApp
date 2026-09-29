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
    const latencyTimer = setInterval(() => {
      setLatency(prev => {
        const drift = Math.random() * 2
              <span classNam

        {/* Lado Derecho: Metadatos & Tiempo */}
        <div className="flex items-center gap-10 font-mono">
          <div className="hidden lg:flex items-center gap-8 text-[9px] tracking-widest uppercase font-bold">
             <div className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors">
                <ShieldCheck size={14} className="text-[#FFD700]/60" />
                <span>Encrypted_Uplink</span>
             </div>
             <div className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors">
                <Database size={14} className="text-[#00c8ff]/60" />
                <span>Cluster_03_Bog</span>
             </div>
          </div>

          <div className="flex items-center gap-5 bg-white/[0.03] px-5 py-2 border border-white/5 rounded-sm hover:bg-white/[0.05] transition-all">
            <div className="flex flex-col items-end">
              <span className="text-[7px] text-white/20 uppercase leading-none font-black">{formattedDate}</span>
              <span className="text-sm font-black text-white/90 tabular-nums tracking-wider">
                {time.toLocaleTimeString([], { hour12: false })}
              </span>
            </div>
            <Clock size={18} className="text-white/20" />
          </div>

          <div className="flex flex-col items-end border-r-2 border-[#FFD700] pr-4">
            <span className="text-[7px] text-white/20 uppercase leading-none font-black tracking-widest">Operator_Id</span>
            <span className="text-[12px] font-black text-[#FFD700] tracking-tighter">{userTag}</span>
          </div>
        </div>
      </header>

      {/* ÁREA DE TRABAJO (GRID) */}
      <main className="relative z-10 flex-1 grid grid-cols-12 grid-rows-6 gap-4 p-4 overflow-hidden bg-[#0a0a0a]">
        {/* Overlay de profundidad */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] z-0"></div>
        {children}
      </main>

      {/* FOOTER DE ESTADO */}
      <footer className="relative z-10 h-8 bg-black border-t border-white/5 flex items-center justify-between px-6 text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <Terminal size={12} className="text-white/10" />
            <span className="hover:text-white/40 cursor-help transition-colors font-bold">SECURE_SHELL: STABLE</span>
          </div>
          <span className="text-[#00c8ff]/30 font-black">AES-256_GCM_ENCRYPTION</span>
        </div>
        
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2 px-3 py-0.5 bg-white/[0.02] border border-white/5">
             <Activity size={12} className="text-green-500/50" />
             <span className="font-black">Neural_Load: 4.2%</span>
          </div>
          <span className="text-[8px] opacity-30">© 2026 SOFTWARE_DT_SYSTEMS</span>
        </div>
      </footer>
    </div>
  );
});

DashboardContainer.displayName = 'DashboardContainer';

export default DashboardContainer;