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
             ion-colors duration-500 group"

              <span>Ref: DT-VIDEO-2026</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;