import React from 'react';
import { Mail, Instagram, Download, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {/* Space particles effect handled by CSS */}
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
          Imam Budi Prasojo
        </h1>
        <p className="text-xl md:text-2xl text-blue-300 mb-8">
          Junior Software Engineer
        </p>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Exploring the digital universe through code while pursuing Industrial Engineering at Telkom University.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:imambprasojo@gmail.com"
            className="flex items-center gap-2 bg-blue-600/80 hover:bg-blue-700 px-6 py-3 rounded-full transition-all hover:scale-105 backdrop-blur-sm"
          >
            <Mail size={20} />
            Contact Me
          </a>
          <a
            href="/cv.pdf"
            className="flex items-center gap-2 bg-purple-600/80 hover:bg-purple-700 px-6 py-3 rounded-full transition-all hover:scale-105 backdrop-blur-sm"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://wa.me/6287738190666" className="text-blue-300 hover:text-white transition-colors hover:scale-110 transform duration-200">
            <Phone size={24} />
          </a>
          <a href="https://www.instagram.com/itzjoo_/profilecard/?igsh=ajRucGV0aGhudTlh" className="text-blue-300 hover:text-white transition-colors hover:scale-110 transform duration-200">
            <Instagram size={24} />
          </a>
          <a href="mailto:imambprasojo@gmail.com" className="text-blue-300 hover:text-white transition-colors hover:scale-110 transform duration-200">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}