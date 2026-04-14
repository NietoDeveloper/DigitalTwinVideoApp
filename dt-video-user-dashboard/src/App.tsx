import { memo } from 'react';
import DashboardContainer from './components/DashboardContainer';
import Widget from './components/Widget';
import { 
  Upload, 
  Video, 
  Database, 
  Box, 
  Layers,
  Zap,
  Cpu,
  Globe
} from 'lucide-react';

const App = () => {
  return (
    <DashboardContainer userTag="MANUEL_NIETO_COL">
      
      {/* SECCIÓN PRINCIPAL: VISOR 3D (CENTRO DE MANDO) */}
      <Widget 
        title="Live 3D Digital Twin Reconstruction" 
        status="processing"
        className="col-span-12 lg:col-span-8 row-span-4 shadow-[0_0_30px_rgba(0,200,255,0.05)]"
      >
        <div className="relative w-full h-full bg-zinc-950/50 rounded-sm border border-white/5 overflow-hidden flex flex-col items-center justify-center group">
          
          {/* HUD de coordenadas dinámico */}
          <div className="absolute top-4 left-4 font-mono text-[9px] space-y-1 z-20">
            <div className="flex gap-2"><span className="text-white/20">LAT:</span> <span className="text-dt-cyan">4.6097° N</span></div>
            <div className="flex gap-2"><span className="text-white/20">LNG:</span> <span className="text-dt-cyan">74.0817° W</span></div>
            <div className="flex gap-2"><span className="text-white/20">ALT:</span> <span className="text-dt-gold">2640m</span></div>
          </div>

          {/* Canvas Placeholder con Animación Neural */}
          <div className="flex flex-col items-center gap-6 transition-transform duration-700 group-hover:scale-105 z-10">
            <div className="relative">
              <Box size={48} className="text-dt-cyan animate-pulse z-10" />
              <div className="absolute inset-0 bg-dt-cyan/20 blur-2xl rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[10px] font-mono tracking-[0.4em] text-white/40 uppercase">
                Initializing Neural Engine...
              </p>
              <div className="mt-3 flex gap-1.5">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-1 w-6 bg-dt-cyan/30 rounded-full overflow-hidden"
                  >
                    <div 
                      className="h-full bg-dt-cyan animate-[loading_1.5s_infinite]" 
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Overlay Inferior: Telemetría de Renderizado */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
            <div className="flex gap-6">
              <div className="flex flex-col">
                <span className="text-[8px] text-white/30 uppercase font-black tracking-widest">Density</span>
                <span className="text-[11px] font-mono text-white/90">1.2M PTS/S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] text-white/30 uppercase font-black tracking-widest">Topology</span>
                <span className="text-[11px] font-mono text-dt-gold uppercase">Optimized</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="px-2 py-1 bg-green-500/5 border border-green-500/20 rounded-sm">
                <span className="text-[9px] text-green-500 font-bold uppercase tracking-tighter">
                  97.2% Fidelity
                </span>
              </div>
            </div>
          </div>
        </div>
      </Widget>

      {/* PANEL DERECHO: ACCIONES DE ENTRADA */}
      <Widget title="Ingest & Orchestration" className="col-span-12 lg:col-span-4 row-span-2">
        <div className="grid grid-cols-2 gap-3 h-full">
          <button className="relative flex flex-col items-center justify-center gap-3 border border-white/5 bg-white/[0.02] hover:bg-dt-gold/5 hover:border-dt-gold/40 transition-all group rounded-sm">
            <div className="absolute top-1.5 right-1.5"><Zap size={10} className="text-dt-gold/40" /></div>
            <Upload size={22} className="text-white/40 group-hover:text-dt-gold group-hover:-translate-y-1 transition-all" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 group-hover:text-white">Upload Raw</span>
          </button>
          
          <button className="relative flex flex-col items-center justify-center gap-3 border border-white/5 bg-white/[0.02] hover:bg-dt-cyan/5 hover:border-dt-cyan/40 transition-all group rounded-sm">
            <div className="absolute top-1.5 right-1.5"><Globe size={10} className="text-dt-cyan/40" /></div>
            <Video size={22} className="text-white/40 group-hover:text-dt-cyan group-hover:-translate-y-1 transition-all" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 group-hover:text-white">Live Stream</span>
          </button>
        </div>
      </Widget>

      {/* PANEL DERECHO: MÉTRICAS DE IA */}
      <Widget title="AI Processing Telemetry" status="nominal" className="col-span-12 lg:col-span-4 row-span-2">
        <div className="flex flex-col justify-around h-full font-mono">
          <div className="space-y-2">
            <div className="flex justify-between text-[9px] uppercase font-bold">
              <span className="text-white/40 flex items-center gap-1.5"><Cpu size={12} className="text-dt-cyan" /> Neural Load</span>
              <span className="text-dt-cyan">4.21%</span>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-dt-cyan shadow-[0_0_10px_#00c8ff] w-[42%] transition-all duration-700"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
            <div className="space-y-1">
              <span className="text-[8px] text-white/20 uppercase font-black">SLAM Engine</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                <span className="text-[10px] text-green-500 font-bold uppercase tracking-tight">Synced</span>
              </div>
            </div>
            <div className="space-y-1 text-right">
              <span className="text-[8px] text-white/20 uppercase font-black tracking-widest text-right block">Hardware</span>
              <div className="flex items-center justify-end gap-2 text-[10px] text-dt-gold font-bold uppercase">
                <span>A100_Core</span>
                <Layers size={10} />
              </div>
            </div>
          </div>
        </div>
      </Widget>

      {/* SECCIÓN INFERIOR: HISTORIAL DE PROCESAMIENTO */}
      <Widget title="Registered Digital Twin Assets" className="col-span-12 row-span-2">
        <div className="flex gap-4 h-full overflow-x-auto pb-2 items-center no-scrollbar group">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i} 
              className="min-w-[180px] h-[90%] bg-zinc-900/40 border border-white/10 relative cursor-pointer hover:border-dt-cyan/60 transition-all duration-500 group/item overflow-hidden"
            >
              {/* Overlay de Textura Industrial */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 z-10"></div>
              
              <div className="absolute top-2 right-2 text-[8px] font-mono text-white/20 z-20">ID_REF: 041426_{i}</div>
              
              <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1 z-20 transition-transform group-hover/item:translate-y-[-2px]">
                <div className="flex items-center gap-1.5">
                  <Database size={10} className="text-dt-cyan" />
                  <span className="text-[11px] font-bold text-white/80 truncate">Industrial_Model_0{i}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[8px] text-white/30 font-mono uppercase">Status: Finalized</span>
                  <div className="w-1 h-1 bg-dt-cyan rounded-full"></div>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-dt-cyan/5 opacity-0 group-hover/item:opacity-100 transition-opacity z-0"></div>
            </div>
          ))}
          
          <button className="min-w-[180px] h-[90%] border border-dashed border-white/10 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.03] hover:border-dt-cyan/40 transition-all group/btn opacity-40 hover:opacity-100 rounded-sm">
             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-dt-cyan group-hover/btn:rotate-90 transition-all duration-500">
              <span className="text-xl font-light text-white/60 group-hover/btn:text-dt-cyan">+</span>
             </div>
             <span className="text-[9px] uppercase font-black tracking-[0.25em] text-white/30 group-hover/btn:text-white transition-colors">Initiate Scan</span>
          </button>
        </div>
      </Widget>

    </DashboardContainer>
  );
}

export default memo(App);