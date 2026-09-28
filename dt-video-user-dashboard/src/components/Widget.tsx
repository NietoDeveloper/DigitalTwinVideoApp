import React, { memo } from 'react';

interface WidgetProps {
  /** Título del módulo en mayúsculas técnicas */
  title: string;
  /** Clases de Tailwind para posicionamiento en la grilla (col-span/row-span) */
  className?: string;
  /** Contenido del widgadow-[0_0_8px_#00c8ff]',
