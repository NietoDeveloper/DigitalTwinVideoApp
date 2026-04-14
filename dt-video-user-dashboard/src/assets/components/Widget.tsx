interface WidgetProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Widget = ({ title, className, children }: WidgetProps) => {
  return (
    <div className={`bg-black/60 border border-white/10 rounded-sm flex flex-col overflow-hidden backdrop-blur-md ${className}`}>
      <div className="bg-white/5 px-3 py-1 flex justify-between items-center border-b border-white/5">
        <h3 className="text-[10px] uppercase tracking-tighter text-white/60 font-semibold">{title}</h3>
        <div className="w-2 h-2 rounded-full bg-dt-cyan shadow-[0_0_5px_#00c8ff]"></div>
      </div>
      <div className="flex-1 p-2 relative">
        {children}
      </div>
    </div>
  );
};

export default Widget;