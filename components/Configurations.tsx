import React from 'react';
import { motion } from 'framer-motion';
import { ConfigurationItem } from '../types';

const configs: ConfigurationItem[] = [
  { id: 1, type: '3 BHK', size: '1600 SQ.FT.', price: 'Check Price' },
  { id: 2, type: '3 BHK', size: '1800 SQ.FT.', price: 'Check Price' },
  { id: 3, type: '4 BHK', size: '2400 SQ.FT.', price: 'Check Price' },
];

export const Configurations: React.FC = () => {
  return (
    <div className="py-24 bg-brand-50 relative overflow-hidden">
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-brand-400 text-3xl md:text-5xl font-bold uppercase tracking-tight opacity-40 mb-4">Configuration</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {configs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-[2rem] p-10 shadow-xl shadow-brand-900/5 hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-4">
                 <svg width="40" height="40" viewBox="0 0 40 40" className="text-brand-200">
                    <path d="M0 0h40v40C40 17.909 22.091 0 0 0z" fill="currentColor" fillOpacity="0.2"/>
                    <circle cx="40" cy="0" r="30" fill="none" stroke="currentColor" strokeDasharray="2 2" />
                 </svg>
              </div>

              <h4 className="text-4xl md:text-5xl font-medium text-brand-400 mb-2">
                {item.type}
              </h4>
              <p className="text-brand-800 font-bold text-lg mb-8 tracking-wide">
                {item.size}
              </p>

              <div className="mt-8">
                <button className="px-8 py-2 rounded-full border border-brand-800 text-brand-900 text-sm font-bold uppercase tracking-wider hover:bg-brand-50 transition-all duration-300">
                  {item.price}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom decorative bar */}
        <div className="mt-20 max-w-4xl mx-auto h-2 bg-brand-700 rounded-full opacity-60"></div>
      </div>
    </div>
  );
};