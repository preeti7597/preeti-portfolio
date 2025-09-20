import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#5b3a2e]">My Portfolio</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-[#5b3a2e]">Home</a></li>
          <li><a href="#about" className="hover:text-[#5b3a2e]">About</a></li>
          <li><a href="#portfolio" className="hover:text-[#5b3a2e]">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-[#5b3a2e]">Contact</a></li>
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-white/90 backdrop-blur-md p-6 text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-[#5b3a2e]" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" className="hover:text-[#5b3a2e]" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#portfolio" className="hover:text-[#5b3a2e]" onClick={() => setIsOpen(false)}>Portfolio</a></li>
          <li><a href="#contact" className="hover:text-[#5b3a2e]" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
