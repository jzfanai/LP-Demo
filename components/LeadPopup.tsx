import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface LeadPopupProps {
  onClose: () => void;
}

export const LeadPopup: React.FC<LeadPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full relative z-10 flex flex-col md:flex-row"
      >
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-slate-400 hover:text-slate-800 transition-colors"
        >
            <X size={24} />
        </button>

        <div className="w-full p-8">
            <h3 className="text-2xl font-serif font-bold text-brand-900 mb-2">Unlock Exclusive Pricing</h3>
            <p className="text-slate-500 mb-6 text-sm">Register now to view floor plans and price sheet.</p>

            <form className="space-y-4">
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full px-4 py-3 rounded-lg bg-brand-50 border border-brand-100 focus:outline-none focus:border-brand-500 text-sm"
                />
                <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 rounded-lg bg-brand-50 border border-brand-100 focus:outline-none focus:border-brand-500 text-sm"
                />
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 rounded-lg bg-brand-50 border border-brand-100 focus:outline-none focus:border-brand-500 text-sm"
                />
                <button className="w-full bg-brand-600 text-white py-3 rounded-lg font-bold uppercase text-sm hover:bg-brand-700 transition-colors">
                    View Prices
                </button>
            </form>
            <p className="text-[10px] text-center text-slate-400 mt-4">
                By submitting, you agree to our privacy policy.
            </p>
        </div>
      </motion.div>
    </div>
  );
};