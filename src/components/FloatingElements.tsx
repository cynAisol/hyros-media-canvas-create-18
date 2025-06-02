
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes with subtle animations */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-[#38B6FF] rounded-full opacity-30" style={{ animation: 'float-slow 8s ease-in-out infinite alternate' }}></div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-white rounded-full opacity-20" style={{ animation: 'float-slow 10s ease-in-out infinite alternate-reverse' }}></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-[#38B6FF] rotate-45 opacity-40" style={{ animation: 'rotate-slow 15s linear infinite' }}></div>
      <div className="absolute bottom-32 right-1/3 w-5 h-5 bg-white rotate-45 opacity-30" style={{ animation: 'float-slow 12s ease-in-out infinite alternate' }}></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#38B6FF] rounded-full opacity-25" style={{ animation: 'pulse-gentle 6s ease-in-out infinite' }}></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-1 bg-white/20" style={{ animation: 'fade-gentle 8s ease-in-out infinite alternate' }}></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-1/2 w-3 h-8 bg-gradient-to-b from-[#38B6FF] to-transparent opacity-20" style={{ animation: 'float-slow 9s ease-in-out infinite alternate' }}></div>
      <div className="absolute bottom-1/4 right-1/2 w-6 h-2 bg-white/30 rounded-full" style={{ animation: 'scale-gentle 7s ease-in-out infinite alternate' }}></div>
      <div className="absolute top-3/4 left-3/4 w-4 h-4 border-2 border-[#38B6FF] rounded-full opacity-20" style={{ animation: 'rotate-slow 20s linear infinite' }}></div>
      <div className="absolute top-1/6 right-1/6 w-1 h-6 bg-gradient-to-t from-white to-transparent opacity-25" style={{ animation: 'float-slow 11s ease-in-out infinite alternate-reverse' }}></div>
      
      {/* Smooth gradient orbs */}
      <div className="absolute top-0 left-1/3 w-32 h-32 bg-gradient-to-br from-[#38B6FF]/10 to-transparent rounded-full blur-xl" style={{ animation: 'drift-slow 20s ease-in-out infinite alternate' }}></div>
      <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl" style={{ animation: 'drift-slow 25s ease-in-out infinite alternate-reverse' }}></div>
      
      {/* Subtle line elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#38B6FF]/20 to-transparent" style={{ animation: 'line-sweep 30s ease-in-out infinite' }}></div>
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" style={{ animation: 'line-sweep-vertical 35s ease-in-out infinite' }}></div>
    </div>
  );
};

export default FloatingElements;
