import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')` }}
      >
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-end pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="inline-block border border-brand-300 text-brand-100 px-4 py-1 rounded-full text-xs uppercase tracking-[0.2em] mb-4 backdrop-blur-sm">
            Premium Residences
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-serif">
            ARE YOU LIVING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">
              IN TRANSIT?
            </span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <p className="text-gray-200 text-lg md:text-xl max-w-lg font-light">
              Homes that match your pace. 3 & 4 Bed Residences starting at <span className="text-brand-300 font-bold">₹2.6 Cr*</span>
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex gap-4"
          >
             <a href="#contact" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-md font-semibold tracking-wide transition-all shadow-lg shadow-brand-900/50">
               VIEW PROJECT
             </a>
             <a href="#video" className="group flex items-center gap-3 px-6 py-3 text-white transition-all">
                <span className="w-10 h-10 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </span>
                <span>Watch Video</span>
             </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};