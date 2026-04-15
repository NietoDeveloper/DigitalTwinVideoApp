"use client";

// Usamos rutas relativas directas para asegurar la compatibilidad con Turbopack
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative bg-main min-h-screen">
      {/* 1. Navegación Fija */}
      <Navbar />
      
      {/* 2. Contenido Principal (Videos + Servicios) */}
      <Hero />
      
      {/* 3. Sección de Información Técnica (Digital Twin Specs) */}
      <About />
      
      {/* 4. Pie de Página (Contacto Bogotá) */}
      <Footer />
    </main>
  );
}