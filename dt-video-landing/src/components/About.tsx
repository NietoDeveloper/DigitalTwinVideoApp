import React from 'react';

const About = () => {
  const specs = [
    { label: 'Core Engine', value: 'V-DT Recon v1.0' },
    { label: 'Latency', value: '< 150ms Synchronized' },
    { label: 'Architecture', value: 'Distributed Edge' },
    { label: 'Standard', value: 'Industrial Grade' }

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/5 border border-black/5">
              {specs.map((spec, index) => (
                <div 
                  key={index} 
                  className="bg-main p-8 hover:bg-white transition-colors duration-500 group"

                </div>
              ))}
n items-center text-[10px] uppercase tracking-widest text-textColor/30 font-medium">

              <span>Ref: DT-VIDEO-2026</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;