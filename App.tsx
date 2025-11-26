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
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-brand-50 min-h-screen font-sans text-slate-800 overflow-x-hidden">
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="overview" className="py-20 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-brand-900 tracking-tighter opacity-20 absolute left-1/2 -translate-x-1/2 -translate-y-12 select-none pointer-events-none">
              FUTURE
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-800 relative z-10 mb-4">
              COMING SOON TO METROPOLIS
            </h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Experience the pinnacle of luxury living where modern architecture meets timeless elegance. 
              Designed for those who seek pace, comfort, and connectivity in the heart of the city.
            </p>
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