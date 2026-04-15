import React from 'react';

const About: React.FC = () => {
  const specs = [
    { label: 'Core', value: 'Video Digital Twin Engine' },
    { label: 'Architecture', value: 'Real-time Synchronization' },
    { label: 'Deployment', value: 'Multi-cluster Edge' },
    { label: 'Status', value: 'Production Ready' }
  ];

  return (
    <section className="py-20 px-8 bg-main">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light tracking-tighter text-headingColor mb-8 uppercase">
          Precision <span className="font-bold text-gold">Monitoring</span>
        </h2>
        
        <p className="text-textColor/80 leading-relaxed mb-12 max-w-2xl mx-auto">
          Esta plataforma representa la convergencia entre el streaming de video de alta fidelidad 
          y la réplica digital de activos. Diseñada para ofrecer una visión técnica inigualable 
          mediante una interfaz minimalista y alto rendimiento.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-black/5 py-10">
          {specs.map((spec, index) => (
            <div key={index} className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-textColor/40">
                {spec.label}
              </span>
              <span className="text-sm font-medium text-headingColor">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;