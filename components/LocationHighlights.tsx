import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Stethoscope, ShoppingBag, GraduationCap, Train } from 'lucide-react';

export const LocationHighlights: React.FC = () => {
  return (
    <div className="bg-brand-50 py-20 overflow-hidden">
      
      {/* Location Map Section */}
      <div className="container mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <h4 className="text-brand-500 font-bold uppercase tracking-widest mb-2 text-sm">Welcome to</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-900 font-bold mb-6">MARATHAHALLI</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Connecting city's ambition to its action. A strategic location that puts you in the center of the IT corridor while offering a serene retreat.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: Building2, text: "Techparks" },
                { icon: Stethoscope, text: "Healthcare" },
                { icon: GraduationCap, text: "Education" },
                { icon: ShoppingBag, text: "Shopping" }
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-full border border-brand-800/20 bg-brand-100/20 text-brand-900 font-medium hover:bg-brand-100 transition-colors cursor-default">
                  <pill.icon size={20} className="text-brand-600" />
                  <span>{pill.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Static Map Image Placeholder - safer than iframe without API key */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1748&auto=format&fit=crop" 
                alt="Location Map" 
                className="w-full h-[500px] object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-brand-900/10 pointer-events-none"></div>
              
              {/* Map Markers Overlay Simulation */}
              <div className="absolute top-1/4 left-1/4 bg-white p-2 rounded shadow-lg animate-bounce">
                <Building2 size={20} className="text-brand-600" />
              </div>
              <div className="absolute bottom-1/3 right-1/3 bg-white p-2 rounded shadow-lg">
                <Train size={20} className="text-brand-600" />
              </div>
               <div className="absolute top-1/2 left-1/2 bg-brand-600 p-3 rounded-full shadow-xl border-2 border-white transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-white font-bold text-xs text-center">SITE</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Highlights Section (30 Mins) */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg group"
          >
            <div className="h-48 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Tech Parks" />
            </div>
            <div className="p-8 relative">
                <div className="absolute -top-10 right-8 w-20 h-20 rounded-full border-2 border-brand-300 border-dashed animate-spin-slow"></div>
                <h3 className="text-3xl font-bold text-slate-700">1,000+</h3>
                <p className="text-sm font-bold text-slate-500 mb-2">TECH FIRMS</p>
                <div className="h-px w-full bg-slate-200 my-4"></div>
                <p className="text-slate-500 text-xs uppercase mb-1">All Within</p>
                <p className="text-4xl font-bold text-brand-400">30 MINS</p>
            </div>
          </motion.div>

           {/* Card 2 */}
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg group"
          >
            <div className="h-48 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Hospitals" />
            </div>
            <div className="p-8 relative">
                <div className="absolute -top-10 right-8 w-20 h-20 rounded-full border-2 border-brand-300 border-dashed animate-spin-slow"></div>
                <h3 className="text-3xl font-bold text-slate-700">1,000+</h3>
                <p className="text-sm font-bold text-slate-500 mb-2">DOCTORS</p>
                <div className="h-px w-full bg-slate-200 my-4"></div>
                <p className="text-slate-500 text-xs uppercase mb-1">All Within</p>
                <p className="text-4xl font-bold text-brand-400">30 MINS</p>
            </div>
          </motion.div>

           {/* Card 3 */}
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg group"
          >
            <div className="h-48 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Education" />
            </div>
            <div className="p-8 relative">
                <div className="absolute -top-10 right-8 w-20 h-20 rounded-full border-2 border-brand-300 border-dashed animate-spin-slow"></div>
                <h3 className="text-3xl font-bold text-slate-700">288+ ACRES</h3>
                <p className="text-sm font-bold text-slate-500 mb-2">OF CAMPUSES</p>
                <div className="h-px w-full bg-slate-200 my-4"></div>
                <p className="text-slate-500 text-xs uppercase mb-1">All Within</p>
                <p className="text-4xl font-bold text-brand-400">30 MINS</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};