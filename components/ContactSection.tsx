import React from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-brand-100 to-brand-50 py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden bg-white">
            
            {/* Left: About Content */}
            <div className="w-full lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
                <h3 className="text-brand-900 text-4xl font-serif font-bold mb-6">ABOUT US</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Welcome to Luxe Horizon, a premium address crafted for those who seek luxury, comfort, and connectivity in East Bangalore. 
                    Located in the heart of the golden quadrilateral, this landmark project offers spacious 3 & 4 bed homes starting at ₹2.60 Cr*.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Designed with timeless architecture and thoughtful details, we blend modern lifestyle with unmatched accessibility. 
                    Live where every detail reflects sophistication.
                </p>
                
                <div className="relative h-64 rounded-2xl overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800" 
                        alt="Family Camping" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full lg:w-1/2 bg-brand-50 p-12 lg:p-16 relative">
                 <h3 className="text-brand-900 text-3xl font-serif font-bold mb-2">GET IN <span className="text-brand-400">TOUCH</span></h3>
                 <p className="text-slate-500 mb-8 text-sm">Fill in your details to receive the brochure & pricing.</p>

                 <form className="space-y-6">
                     <div className="group">
                         <input 
                            type="text" 
                            placeholder=" "
                            className="w-full bg-transparent border-b border-brand-300 py-3 text-brand-900 focus:outline-none focus:border-brand-600 transition-colors peer"
                         />
                         <label className="absolute mt-3 text-slate-400 text-sm transform -translate-y-8 scale-75 top-0 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:text-brand-600 transition-all duration-300">
                             First Name*
                         </label>
                     </div>

                     <div className="group pt-4">
                         <input 
                            type="email" 
                            placeholder=" "
                            className="w-full bg-transparent border-b border-brand-300 py-3 text-brand-900 focus:outline-none focus:border-brand-600 transition-colors peer"
                         />
                         <label className="absolute mt-3 text-slate-400 text-sm transform -translate-y-8 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:text-brand-600 transition-all duration-300">
                             Email Address*
                         </label>
                     </div>

                     <div className="group pt-4">
                        <div className="flex items-end gap-2">
                             <span className="text-brand-900 font-medium border-b border-brand-300 py-3">+91</span>
                             <div className="relative w-full">
                                <input 
                                    type="tel" 
                                    placeholder=" "
                                    className="w-full bg-transparent border-b border-brand-300 py-3 text-brand-900 focus:outline-none focus:border-brand-600 transition-colors peer"
                                />
                                <label className="absolute left-0 text-slate-400 text-sm transform -translate-y-8 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:text-brand-600 transition-all duration-300">
                                    Phone Number*
                                </label>
                             </div>
                        </div>
                     </div>

                     <div className="flex items-start gap-3 pt-2">
                         <input type="checkbox" id="consent" className="mt-1 accent-brand-600" />
                         <label htmlFor="consent" className="text-xs text-slate-500 leading-tight">
                             I agree to receive updates & offers via WhatsApp, SMS, and Email. Terms and conditions apply.
                         </label>
                     </div>

                     <button 
                        type="button" 
                        className="bg-brand-600 hover:bg-brand-700 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider shadow-lg shadow-brand-400/50 hover:shadow-brand-600/50 transition-all transform hover:-translate-y-1"
                     >
                         Submit
                     </button>
                 </form>
            </div>
        </div>
      </div>
    </div>
  );
};