import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-main">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What is Digital Twin Video?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We transform simple video streams into high-fidelity 3D replicas. 
            Designed for the most demanding engineering and security standards.
          </p>
        </div>
      </section>

      <footer className="py-12 bg-headingColor text-white text-center">
        <p className="opacity-50">© 2026 Software DT - Digital Twin Video App. Bogotá, Colombia.</p>
      </footer>
    </main>
  );
}