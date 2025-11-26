import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Configurations } from './components/Configurations';
import { Amenities } from './components/Amenities';
import { LocationHighlights } from './components/LocationHighlights';
import { VideoSection } from './components/VideoSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LeadPopup } from './components/LeadPopup';
import { StickyWidgets } from './components/StickyWidgets';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 4 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-brand-50 min-h-screen font-sans text-slate-800 overflow-x-hidden">
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-24 text-center px-4 bg-brand-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-brand-100/50 to-transparent rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 w-full">
              {/* C */}
              <motion.span 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-8xl md:text-9xl font-serif text-brand-400 opacity-80"
              >
                C
              </motion.span>

              {/* Compass Graphic */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center"
              >
                 <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow opacity-60">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#A956A7" strokeWidth="0.5" strokeDasharray="2 2" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#A956A7" strokeWidth="0.2" />
                    {/* Ticks */}
                    {Array.from({ length: 12 }).map((_, i) => (
                      <line 
                        key={i} 
                        x1="50" y1="10" x2="50" y2="15" 
                        transform={`rotate(${i * 30} 50 50)`} 
                        stroke="#A956A7" 
                        strokeWidth="1" 
                      />
                    ))}
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] md:text-xs font-bold text-brand-800 tracking-widest uppercase">Place of</span>
                    <span className="text-[10px] md:text-xs font-bold text-brand-800 tracking-widest uppercase">Your Pace</span>
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[40px] border-b-brand-200 absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom rotate-45 opacity-50"></div>
                 </div>
              </motion.div>

              {/* MING */}
              <motion.span 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-8xl md:text-9xl font-serif text-brand-400 opacity-80"
              >
                MING
              </motion.span>
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl font-serif text-brand-800 tracking-widest uppercase mb-12"
            >
              Soon to Marathahalli
            </motion.h2>

            <div className="w-full h-px bg-brand-200 max-w-2xl mx-auto mb-12"></div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl text-brand-700 font-medium mb-8">TOMORROW READY HOMES</h3>
              <button className="px-8 py-3 rounded-full border border-brand-800 text-brand-900 hover:bg-brand-800 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider">
                Download Brochure
              </button>
            </motion.div>

          </div>
        </section>

        <section id="configurations">
          <Configurations />
        </section>

        <section id="amenities">
          <Amenities />
        </section>

        <section id="location">
          <LocationHighlights />
        </section>

        <section id="video">
          <VideoSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
      
      <StickyWidgets />
      
      <AnimatePresence>
        {showPopup && <LeadPopup onClose={() => setShowPopup(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default App;