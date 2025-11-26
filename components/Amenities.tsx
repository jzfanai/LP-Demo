import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Waves, Sprout, Video, Gamepad2, Users, TreePalm, Wifi, ArrowLeft, ArrowRight } from 'lucide-react';
import { AmenityItem } from '../types';

const amenitiesList: AmenityItem[] = [
  { id: 1, name: 'Gymnasium', icon: Dumbbell },
  { id: 2, name: 'Swimming Pool', icon: Waves },
  { id: 3, name: 'Yoga Pavilion', icon: Sprout },
  { id: 4, name: 'Video Door Phone', icon: Video },
  { id: 5, name: 'Kids Activity Zone', icon: Gamepad2 },
];

export const Amenities: React.FC = () => {
  return (
    <div className="py-24 bg-brand-100/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-brand-400 text-4xl md:text-5xl font-bold uppercase mb-4 opacity-50">Amenities</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
          {amenitiesList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white aspect-square rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-6 group cursor-pointer"
            >
              <div className="transition-transform duration-300 group-hover:-translate-y-2">
                <item.icon size={48} strokeWidth={2} className="text-black mb-2" />
              </div>
              <p className="font-bold text-brand-400 text-sm text-center px-2">{item.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
             <button className="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center hover:bg-brand-700 transition-colors">
                 <ArrowLeft size={24} />
             </button>
             <button className="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center hover:bg-brand-700 transition-colors">
                 <ArrowRight size={24} />
             </button>
        </div>
      </div>
    </div>
  );
};