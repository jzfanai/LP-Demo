import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-110"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1572953284705-7764a754b2a3?q=80&w=2070&auto=format&fit=crop')` }}
      >
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30"></div>
      <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay"></div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-end pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl"
        >
           {/* Border Frame Effect */}
           <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-400 to-transparent hidden md:block"></div>

           <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-brand-300"></div>
              <span className="text-brand-200 uppercase tracking-[0.2em] text-sm font-medium">Starting 2.6 Cr*</span>
           </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-8 font-serif">
            ARE YOU LIVING <br />
            <span className="font-light italic text-brand-100">IN TRANSIT?</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-t border-white/20 pt-8 mt-8">
            <div className="max-w-xl">
               <h3 className="text-3xl md:text-4xl text-brand-300 font-serif mb-2">HOMES <span className="text-white font-sans font-light">THAT</span></h3>
               <h3 className="text-3xl md:text-4xl text-white font-bold uppercase mb-4">MATCH YOUR PACE</h3>
               <p className="text-brand-100 text-lg tracking-wide">
                 3 & 4 BED RESIDENCES
               </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
               <a href="#contact" className="bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-green-900/50 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Chat Now
               </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};