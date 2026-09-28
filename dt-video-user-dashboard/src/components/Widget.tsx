import React, { memo } from 'react';

interface WidgetProps {
  /** Título del módulo en mayúsculas técnicas */
  title: string;
  /** Clases de Tailwind para posicionamiento en la grilla (col-span/row-span) */
  className?: string;
  /** Contenido del widgadow-[0_0_8px_#00c8ff]',
    alert: 'bg-red-500 shadow-[0_0_8px_#ef4444]',
    processing: 'bg-dt-gold shadow-[0_
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