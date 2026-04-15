import { Menu, X, Rocket } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <Rocket className="text-gold" />
          <span>DIGITAL TWIN <span className="text-gray-500">VIDEO</span></span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-gold transition">About</a>
          <a href="#" className="hover:text-gold transition">Pricing</a>
          <a href="#" className="hover:text-gold transition">Contact</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>


        </div>
      )}
    </nav>
  );
}