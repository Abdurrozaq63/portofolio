"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-darkBg/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-cyanGlow to-purpleGlow bg-clip-text text-transparent">
          Dev.Porto
        </span>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-cyanGlow transition-colors">About</a>
          <a href="#skills" className="hover:text-cyanGlow transition-colors">Skills</a>
          <a href="#experience" className="hover:text-cyanGlow transition-colors">Experience</a>
          <a href="#projects" className="hover:text-cyanGlow transition-colors">Projects</a>
        </div>

        {/* Mobile Burger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-darkBg border-b border-white/10 px-6 py-4 flex flex-col space-y-4 text-gray-300">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        </div>
      )}
    </nav>
  );
}