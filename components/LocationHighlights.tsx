import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Stethoscope, ShoppingBag, GraduationCap } from 'lucide-react';

export const LocationHighlights: React.FC = () => {
  return (
    <div className="bg-brand-50 py-24 overflow-hidden">
      
      {/* Location Map Section */}
      <div className="container mx-auto px-6 mb-24 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex flex-col justify-center"
          >
            <h4 className="text-brand-400 font-medium uppercase tracking-widest mb-2 text-sm">Welcome to</h4>
            <div className="relative mb-6">
                <h2 className="text-5xl font-serif text-brand-800 font-bold uppercase leading-none opacity-20 absolute -top-8 -left-4 select-none">Maratha</h2>
                <h2 className="text-4xl font-serif text-brand-600 font-bold relative z-10">MARATHAHALLI</h2>
            </div>
            <p className="text-brand-900 font-medium text-lg mb-8">
              Connecting city's ambition to its action.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Building2, text: "Techparks" },
                { icon: Stethoscope, text: "Healthcare" },
                { icon: GraduationCap, text: "Education" },
                { icon: ShoppingBag, text: "Shopping" }
              ].map((pill, i) => (
                <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-3 rounded-full border border-brand-800 text-brand-900 bg-transparent text-sm font-bold"
                >
                  <div className="p-1 rounded-full bg-brand-100">
                    <pill.icon size={16} className="text-brand-700" />
                  </div>
                  <span>{pill.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              {/* Map Image */}
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2831&auto=format&fit=crop" 
                alt="Location Map" 
                className="w-full h-[600px] object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-white/10 pointer-events-none mix-blend-overlay"></div>
              
              {/* Decorative Elements on Map */}
               <div className="absolute top-1/2 left-1/2 bg-brand-600 p-2 rounded-full shadow-xl border-4 border-white transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Highlights Cards */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
              { title: "1,000+", subtitle: "TECH FIRMS", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
              { title: "1,000+", subtitle: "DOCTORS", img: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=800" },
              { title: "288+ ACRES", subtitle: "CAMPUSES", img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800" }
          ].map((card, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-start gap-4"
            >
                <div className="w-full h-48 rounded-xl overflow-hidden mb-2">
                    <img src={card.img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt={card.subtitle} />
                </div>
                <div className="w-full">
                    <h3 className="text-3xl font-bold text-brand-600">{card.title}</h3>
                    <p className="text-brand-900 text-sm font-bold uppercase tracking-wider mb-4">{card.subtitle}</p>
                    
                    <div className="flex items-center justify-between border-t border-brand-100 pt-4">
                        <span className="text-xs text-brand-400 uppercase">All Within</span>
                        <span className="text-4xl font-serif text-brand-400/50 font-bold">30 MINS</span>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};