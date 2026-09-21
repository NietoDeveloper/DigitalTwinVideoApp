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
            
        </div>
      </div>
    </section>
  );
};

export default About;