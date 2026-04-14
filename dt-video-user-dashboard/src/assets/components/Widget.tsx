import React, { memo } from 'react';

interface WidgetProps {
  /** Título del módulo en mayúsculas técnicas */
  title: string;
  /** Clases de Tailwind para posicionamiento en la grilla (col-span/row-span) */
  className?: string;
  /** Contenido del widget */
  children: React.ReactNode;
  /** Opción para mostrar un estado de carga o alerta */
  status?: 'nominal' | 'alert' | 'processing';
}

const Widget = memo(({ title, className = "", children, status = 'nominal' }: WidgetProps) => {
  
  // Mapeo de colores para el indicador de estado
  const statusColors = {
    nominal: 'bg-dt-cyan shadow-[0_0_8px_#00c8ff]',
    alert: 'bg-red-500 shadow-[0_0_8px_#ef4444]',
    processing: 'bg-dt-gold shadow-[0_0_8px_#ffd700] animate-pulse'
  };

  return (
    <div className={`
      relative group
      bg-black/40 backdrop-blur-xl
      border border-white/10 rounded-sm
      flex flex-col overflow-hidden
      transition-all duration-300 hover:border-white/20
      ${className}
    `}>
      
      {/* DECORACIÓN: ESQUINAS REFORZADAS (Solo visibles al ojo atento) */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 z-20"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 z-20"></div>

      {/* HEADER DEL MÓDULO */}
      <div className="
        bg-gradient-to-r from-white/10 to-transparent 
        px-3 py-1.5 flex justify-between items-center 
        border-b border-white/5
      ">
        <div className="flex items-center gap-2">
          {/* Icono de rack industrial */}
          <div className="flex flex-col gap-0.5 opacity-30">
            <div className="w-2 h-[1px] bg-white"></div>
            <div className="w-2 h-[1px] bg-white"></div>
          </div>
          <h3 className="text-[9px] uppercase tracking-[0.15em] text-white/70 font-bold font-mono">
            {title}
          </h3>
        </div>

        {/* Status Led */}
        <div className="flex items-center gap-2">
          <span className="text-[7px] text-white/20 font-mono tracking-widest uppercase hidden group-hover:block">
            {status}
          </span>
          <div className={`w-1.5 h-1.5 rounded-full transition-colors ${statusColors[status]}`}></div>
        </div>
      </div>

      {/* CUERPO DEL WIDGET */}
      <div className="flex-1 p-3 relative overflow-hidden h-full">
        {/* Sutil overlay de ruido para textura de metal/plástico */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        {children}
      </div>

      {/* LÍNEA DE PIE (Detalle cosmético de telemetría) */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </div>
  );
});

Widget.displayName = 'Widget';

export default Widget;