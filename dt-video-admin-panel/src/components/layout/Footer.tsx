export function Footer() {
  return (
    <footer className="mt-auto border-t border-border-dt bg-white/30 backdrop-blur-sm">
      <div className="ticks" />
      <div className="px-8 py-4 flex justify-between items-center text-[10px] font-mono text-gray-400 uppercase tracking-widest">
        <span>© 2026 Software DT - Digital Twin Lab</span>
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-status-online" />
            AWS US-EAST-1 Active
          </span>
          <span>Bogotá, CO</span>
        </div>
      </div>
    </footer>
  );
}
