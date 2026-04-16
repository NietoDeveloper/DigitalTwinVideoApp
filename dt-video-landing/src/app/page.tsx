"use client";

// Importaciones con rutas relativas para evitar cualquier conflicto de alias con Turbopack
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative bg-main min-h-screen">
      {/* 1. Navegación Fija - Z-index alto para estar sobre el video */}
      <div className="relative z-50">
 
      </section>
      
      {/* 3. Sección de Información Técnica */}
      <section className="relative z-10">
        <About />
      </section>
      
      {/* 4. Pie de Página */}
      <Footer />
    </main>
  );
}