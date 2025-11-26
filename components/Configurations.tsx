import React from 'react';
import { motion } from 'framer-motion';
import { ConfigurationItem } from '../types';
import { ArrowRight } from 'lucide-react';

const configs: ConfigurationItem[] = [
  { id: 1, type: '3 BHK', size: '1600 Sq.Ft.', price: 'Check Price' },
  { id: 2, type: '3 BHK Grande', size: '1800 Sq.Ft.', price: 'Check Price' },
  { id: 3, type: '4 BHK Luxury', size: '2400 Sq.Ft.', price: 'Check Price' },
];

export const Configurations: React.FC = () => {
  return (
    <div className="py-20 bg-brand-50 relative overflow-hidden">
       {/* Decorative Background Elements */}
       <div className="absolute top-0 left-0 w-64 h-64 bg-brand-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-brand-900 text-4xl font-serif font-bold mb-2">Configurations</h3>
          <p className="text-slate-500 uppercase tracking-widest text-sm">Find your perfect space</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {configs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-brand-100 group relative overflow-hidden"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0">
                 <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="60" cy="0" r="50" stroke="#f0abfc" strokeWidth="1" strokeDasharray="4 4" />
                 </svg>
              </div>

              <h4 className="text-4xl font-bold text-brand-800 mb-2 group-hover:scale-110 origin-left transition-transform duration-500">
                {item.type}
              </h4>
              <p className="text-slate-500 font-medium text-lg mb-8 border-b border-slate-100 pb-4 inline-block">
                {item.size}
              </p>

              <div className="mt-4">
                <button className="w-full flex justify-between items-center px-6 py-3 rounded-full border border-brand-300 text-brand-900 font-medium hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all duration-300 group-hover:shadow-lg">
                  <span>{item.price}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 w-full h-2 bg-gradient-to-r from-transparent via-brand-400 to-transparent rounded-full opacity-30"></div>
      </div>
    </div>
  );
};