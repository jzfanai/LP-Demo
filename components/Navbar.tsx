import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Marathahalli', href: '#location' },
    { name: 'Thinking Ahead', href: '#overview' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-gradient-to-b from-brand-900/80 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col items-center">
           <div className="flex items-center gap-2">
             <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5L18.5 12 12 18.5 5.5 12 12 5.5z"/>
             </svg>
             <div className="flex flex-col">
               <span className="text-white font-serif tracking-wide text-2xl font-bold leading-none">Century</span>
               <span className="text-white/80 text-[8px] uppercase tracking-[0.3em] leading-none mt-1">Thinking Ahead</span>
             </div>
           </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-xs uppercase tracking-widest font-medium hover:text-brand-300 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-300 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact"
            className="px-8 py-2 border border-white/30 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-500 hover:border-brand-500 transition-all duration-300 shadow-lg"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-900 absolute top-full left-0 right-0 shadow-xl border-t border-brand-800">
          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-center text-sm uppercase tracking-widest py-2 hover:text-brand-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a 
              href="#contact"
              className="bg-brand-500 text-white text-center py-3 rounded-full text-sm uppercase tracking-widest font-bold shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};