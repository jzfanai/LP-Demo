import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const StickyWidgets: React.FC = () => {
  return (
    <>
      {/* Side Tab - Get Quote */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <a 
            href="#contact"
            className="flex items-center justify-center bg-brand-400 text-white font-bold tracking-widest uppercase text-sm py-3 px-10 rounded-t-lg origin-bottom-right rotate-90 translate-x-[50px] hover:bg-brand-500 hover:translate-x-[45px] transition-all shadow-xl"
            style={{ width: '180px' }}
        >
          GET QUOTE
        </a>
      </div>

      {/* Floating Buttons Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex">
        <a href="tel:+911234567890" className="flex-1 bg-brand-400 text-white py-4 flex items-center justify-center gap-2 font-bold hover:bg-brand-500 transition-colors">
            <Phone size={20} />
            <span>CALL NOW</span>
        </a>
        <a href="#contact" className="flex-1 bg-[#25D366] text-white py-4 flex items-center justify-center gap-2 font-bold hover:bg-[#20b858] transition-colors">
            <MessageCircle size={20} />
            <span>Chat Now</span>
        </a>
      </div>

      {/* Desktop Floating WhatsApp */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-50 bg-[#25D366] text-white px-6 py-3 rounded-full items-center gap-2 shadow-xl hover:bg-[#20b858] hover:-translate-y-1 transition-all"
      >
        <MessageCircle size={24} />
        <span className="font-bold">Chat Now</span>
      </a>
    </>
  );
};