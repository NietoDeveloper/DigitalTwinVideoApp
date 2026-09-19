"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen w-full">
      {/* 1. Navegación - Siempre sobre el contenido */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      
      
      {/* 3. Sección de Información Técnica - Aparece al bajar el scroll */}
      <section className="relative z-20 bg-black">
        <About />
      </section>
      
      {/* 4. Pie de Página */}
      <footer className="relative z-20 bg-black">
        <Footer />
      </footer>
    </main>
  );
}