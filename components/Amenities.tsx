import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Waves, Sprout, Video, Gamepad2, Users, TreePalm, Wifi } from 'lucide-react';
import { AmenityItem } from '../types';

const amenitiesList: AmenityItem[] = [
  { id: 1, name: 'Gymnasium', icon: Dumbbell },
  { id: 2, name: 'Swimming Pool', icon: Waves },
  { id: 3, name: 'Yoga Pavilion', icon: Sprout },
  { id: 4, name: 'Video Door Phone', icon: Video },
  { id: 5, name: 'Kids Activity Zone', icon: Gamepad2 },
  { id: 6, name: 'Clubhouse', icon: Users },
  { id: 7, name: 'Landscape Garden', icon: TreePalm },
  { id: 8, name: 'Smart Home Ready', icon: Wifi },
];

export const Amenities: React.FC = () => {
  return (
    <div className="py-20 bg-brand-100/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-brand-900 text-4xl font-serif font-bold mb-4">Amenities</h3>
          <div className="w-16 h-1 bg-brand-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenitiesList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-4 group cursor-pointer border border-transparent hover:border-brand-200"
            >
              <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-300">
                <item.icon size={32} className="text-brand-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="font-semibold text-brand-900 text-center">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};