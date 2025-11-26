import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <div className="bg-brand-50 py-24 relative">
       {/* Decorator */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-100/50 -skew-x-12 hidden lg:block"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto">
            
            {/* Left: About Content */}
            <div className="w-full lg:w-1/2 p-12 lg:p-20 bg-brand-50 flex flex-col justify-center">
                <h3 className="text-brand-600 text-3xl font-serif font-bold mb-8 uppercase">About Us</h3>
                <p className="text-brand-900 mb-6 leading-relaxed font-medium">
                    Welcome to Century Horizon, a premium address crafted for those who seek luxury, comfort, and connectivity. 
                    Located in the heart of the golden quadrilateral, this landmark project offers spacious 3 & 4 bed homes.
                </p>
                <div className="w-full h-64 mt-8 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                        src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?auto=format&fit=crop&q=80&w=800" 
                        alt="Interior" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full lg:w-1/2 bg-brand-100/20 p-12 lg:p-20">
                 <h3 className="text-brand-900 text-3xl font-serif font-bold mb-1">GET IN <span className="text-brand-400">TOUCH</span></h3>
                 <p className="text-brand-800/60 mb-10 text-sm">Fill in your details to receive the brochure & pricing.</p>

                 <form className="space-y-8">
                     <div className="relative">
                         <input 
                            type="text" 
                            id="name"
                            className="block px-0 w-full text-brand-900 bg-transparent border-0 border-b border-brand-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-600 peer py-2.5" 
                            placeholder=" " 
                         />
                         <label htmlFor="name" className="absolute text-sm text-brand-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                             First Name*
                         </label>
                     </div>

                     <div className="relative">
                         <input 
                            type="email" 
                            id="email"
                            className="block px-0 w-full text-brand-900 bg-transparent border-0 border-b border-brand-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-600 peer py-2.5" 
                            placeholder=" " 
                         />
                         <label htmlFor="email" className="absolute text-sm text-brand-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                             Email Address*
                         </label>
                     </div>

                     <div className="relative">
                         <input 
                            type="tel" 
                            id="phone"
                            className="block px-0 w-full text-brand-900 bg-transparent border-0 border-b border-brand-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-600 peer py-2.5 pl-8" 
                            placeholder=" " 
                         />
                         <span className="absolute bottom-2.5 left-0 text-brand-900 font-medium">+91</span>
                         <label htmlFor="phone" className="absolute text-sm text-brand-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                             Mobile Number*
                         </label>
                     </div>

                     <div className="flex items-start gap-3">
                         <input type="checkbox" id="consent" className="mt-1 w-4 h-4 text-brand-600 bg-gray-100 border-gray-300 rounded focus:ring-brand-500" />
                         <label htmlFor="consent" className="text-xs text-brand-800/60 leading-tight">
                             I agree to the terms of Service and Privacy Policy. I agree to receive updates & offers via WhatsApp, SMS, Email & RCS.
                         </label>
                     </div>

                     <button 
                        type="button" 
                        className="bg-brand-500 hover:bg-brand-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider shadow-lg shadow-brand-400/40 hover:shadow-brand-600/40 transition-all transform hover:-translate-y-1 w-full md:w-auto"
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