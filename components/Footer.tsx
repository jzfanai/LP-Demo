import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-white py-12 border-t border-brand-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
               <div className="text-white font-serif tracking-widest text-3xl font-bold">
                 LUXE<span className="font-light opacity-80">HORIZON</span>
               </div>
            </div>
            
            <div className="flex gap-4">
                 <div className="w-12 h-12 border border-brand-700 rounded-full flex items-center justify-center text-brand-300 font-bold text-lg">50</div>
                 <div className="flex flex-col justify-center">
                     <span className="text-xs text-brand-300 uppercase tracking-wider">Years of</span>
                     <span className="font-bold">Excellence</span>
                 </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-brand-100/60 mb-8">
            <p>
                Luxe Horizon Holdings Pvt. Ltd. <br/>
                Opp. Tech Park Aerodrome Road, Bengaluru 560 065, India.
            </p>
            <p className="text-xs text-justify">
                Disclaimer: The content is for information purposes only and does not constitute an offer to avail of any service. 
                Prices mentioned are subject to change without notice and properties mentioned are subject to availability. 
                Images for representation purpose only. This is not the official website.
            </p>
        </div>

        <div className="text-center pt-8 border-t border-brand-800 text-xs text-brand-400">
             RERA REG. NO.: PRM/KA/RERA/1251/446/PR/181025/008182
        </div>
      </div>
    </footer>
  );
};