import DashboardContainer from './components/DashboardContainer';
import Widget from './components/Widget';
import { 
  Upload, 
  Video, 
  Database, 
  Activity, 
  Box, 
  Cpu 
} from 'lucide-react';

function App() {
  return (
    <DashboardContainer userTag="MANUEL_NIETO_COL">
      
      {/* SECCIÓN PRINCIPAL: VISOR 3D (3DGS / SLAM) */}
      {/* Ocupa el corazón del dashboard */}
      <Widget 
        title="Live 3D Digital Twin Reconstruction" 
        className="col-span-12 lg:col-span-8 row-span-4 shadow-[0_0_20px_rgba(0,200,255,0.05)]"
      >
        <div className="group relative w-full h-full bg-zinc-900/40 rounded-sm border border-white/5 overflow-hidden flex flex-col items-center justify-center">
          {/* Indicador de coordenadas simulado */}
          <div className="absolute top-4 left-4 font-mono text-[9px] text-dt-cyan opacity-40">
            X: 142.05 <br/> Y: -88.12 <br/> Z: 0.00
          </div>
          
          <Box size={40} className="text-white/10 animate-pulse mb-4" />
          <p className="text-[10px] font-mono tracking-widest text-white/20 uppercase">
            Waiting for ingest signal...
          </p>

          {/* Overlay de calidad */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <span className="px-2 py-0.5 bg-black/80 border border-white/10 text-[8px] text-green-500 font-bold">97% FIDELITY</span>
          </div>
        </div>
      </Widget>

      {/* SECCIÓN LATERAL SUPERIOR: CONTROL DE INGESTA */}
      <Widget title="Ingest & Orchestration" className="col-span-12 lg:col-span-4 row-span-2">
        <div className="grid grid-cols-2 gap-2 h-full">
          <button className="flex flex-col items-center justify-center gap-2 border border-white/10 bg-white/5 hover:bg-dt-gold/10 hover:border-dt-gold transition-all group">
            <Upload size={18} className="group-hover:text-dt-gold" />
            <span className="text-[9px] uppercase font-bold tracking-tighter">Upload RAW</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-2 border border-white/10 bg-white/5 hover:bg-dt-cyan/10 hover:border-dt-cyan transition-all group">
            <Video size={18} className="group-hover:text-dt-cyan" />
            <span className="text-[9px] uppercase font-bold tracking-tighter">Live Stream</span>
          </button>
        </div>
      </Widget>

      {/* SECCIÓN LATERAL MEDIA: TELEMETRÍA AI */}
      <Widget title="AI Process Telemetry" className="col-span-12 lg:col-span-4 row-span-2">
        <div className="space-y-3 font-mono">
          <div className="space-y-1">
            <div className="flex justify-between text-[9px]">
              <span className="text-white/40">Inpainting Load</span>
              <span className="text-dt-cyan">4.2%</span>
            </div>
            <div className="w-full h-1 bg-white/5 overflow-hidden">
              <div className="h-full bg-dt-cyan w-[42%]"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 border-t border-white/5 pt-2">
            <div className="flex flex-col">
              <span className="text-[8px] text-white/30">SLAM Status</span>
              <span className="text-[10px] text-green-500 font-bold">SYNCED</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] text-white/30">GPU Engine</span>
              <span className="text-[10px] text-dt-gold font-bold">A100_READY</span>
            </div>
          </div>
        </div>
      </Widget>

      {/* SECCIÓN INFERIOR: HISTORIAL DE ASSETS (DIGITAL TWINS CREADOS) */}
      <Widget title="Registered Digital Twin Assets" className="col-span-12 row-span-2">
        <div className="flex gap-3 h-full overflow-hidden items-center px-2">
          {/* Placeholder para los Digital Twins ya procesados */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="min-w-[140px] h-[80%] bg-black border border-white/10 relative group cursor-pointer hover:border-dt-cyan/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-2 left-2 flex flex-col">
                <span className="text-[8px] text-white/40 font-mono">ID: DT_00{i}</span>
                <span className="text-[9px] font-bold text-white/80">Industrial_Zone_{i}</span>
              </div>
              <Database size={12} className="absolute top-2 right-2 text-white/20" />
            </div>
          ))}
          
          <button className="min-w-[140px] h-[80%] border border-dashed border-white/10 flex flex-col items-center justify-center gap-1 hover:bg-white/5 transition-all opacity-40 hover:opacity-100">
             <span className="text-[18px]">+</span>
             <span className="text-[8px] uppercase font-bold">New Scan</span>
          </button>
        </div>
      </Widget>

    </DashboardContainer>
  );
}

export default App;