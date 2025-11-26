import React, { useState } from 'react';
import { Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full h-[60vh] bg-black group overflow-hidden">
      {!isPlaying ? (
        <div 
            className="absolute inset-0 bg-cover bg-center flex items-center justify-center cursor-pointer transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')` }}
            onClick={() => setIsPlaying(true)}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
          
          <div className="relative z-10 flex flex-col items-center">
             <div className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center shadow-lg shadow-brand-600/40 animate-pulse group-hover:scale-110 transition-transform">
                <Play className="text-white fill-white ml-1" size={32} />
             </div>
             <h3 className="mt-6 text-white text-3xl font-serif tracking-wider uppercase">The Slow Life</h3>
             <p className="text-brand-200 text-sm mt-2">Watch Project Walkthrough</p>
          </div>
        </div>
      ) : (
        <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
            title="Project Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
        ></iframe>
      )}
    </div>
  );
};