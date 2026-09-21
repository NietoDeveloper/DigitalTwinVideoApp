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