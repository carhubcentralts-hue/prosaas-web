'use client';

import { useState } from 'react';
import content from '../../content/site.he.json';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src="/logo.svg" alt={content.site.name} className="h-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition">
              {content.nav.features}
            </button>
            <button onClick={() => scrollToSection('voice-demo')} className="text-gray-700 hover:text-blue-600 transition">
              {content.nav.voiceDemo}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition">
              {content.nav.pricing}
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition">
              {content.nav.faq}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition"
            >
              {content.nav.contact}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition py-2">
                {content.nav.features}
              </button>
              <button onClick={() => scrollToSection('voice-demo')} className="text-gray-700 hover:text-blue-600 transition py-2">
                {content.nav.voiceDemo}
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition py-2">
                {content.nav.pricing}
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition py-2">
                {content.nav.faq}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full"
              >
                {content.nav.contact}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
