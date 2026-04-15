import React from 'react';

const About = () => {
  const specs = [
    { label: 'Core Engine', value: 'V-DT Recon v1.0' },
    { label: 'Latency', value: '< 150ms Synchronized' },
    { label: 'Architecture', value: 'Distributed Edge' },
    { label: 'Standard', value: 'Industrial Grade' }
  ];

  return (
    <section className="relative py-24 px-8 bg-main overflow-hidden">
      {/* Elemento Decorativo de Fondo (Sutil) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Columna Izquierda: Título e Intro */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">
                Specifications
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-headingColor mb-8 uppercase leading-none">
              High Fidelity <br />
              <span className="text-white drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">Digital Twin</span>
            </h2>
            
            <p className="text-textColor/70 text-lg leading-relaxed max-w-xl border-l-2 border-gold/20 pl-6">
              Nuestra tecnología procesa flujos de video complejos para generar réplicas digitales 
              con precisión milimétrica. No es solo video; es una estructura de datos visual 
              diseñada para la toma de decisiones crítica en tiempo real.
            </p>
          </div>

          {/* Columna Derecha: Specs Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/5 border border-black/5">
              {specs.map((spec, index) => (
                <div 
                  key={index} 
                  className="bg-main p-8 hover:bg-white transition-colors duration-500 group"
                >
                  <p className="text-[9px] uppercase tracking-[0.3em] text-textColor/40 mb-3 group-hover:text-gold transition-colors">
                    {spec.label}
                  </p>
                  <p className="text-xl font-bold tracking-tight text-headingColor uppercase">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Tagline de Versión */}
            <div className="mt-8 flex justify-between items-center text-[10px] uppercase tracking-widest text-textColor/30 font-medium">
              <span>Optimized for Production</span>
              <span>Ref: DT-VIDEO-2026</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;