export const Footer = () => {
  return (
    <footer className="bg-white border-t border-border-dt mt-auto">
      <div className="ticks"></div>
      <div className="px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-8">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-gray-400 font-bold">Uptime Global</span>
            <span className="text-xs font-mono text-status-online">99.998%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-gray-400 font-bold">Región</span>
            <span className="text-xs font-mono">us-east-1 (N. Virginia)</span>
          </div>
        </div>
        
        <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
          Digital Twin Video Application &copy; 2026 | Built by Software DT
        </div>
      </div>
    </footer>
  );
};