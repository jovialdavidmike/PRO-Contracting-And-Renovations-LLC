import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-soft-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-grey/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-serif text-2xl font-bold text-slate-grey">
          PRO<span className="text-gold-accent">.</span>
        </div>
        <a 
          href="#consultation"
          className="hidden md:inline-block bg-slate-grey text-soft-white px-6 py-2 rounded-sm hover:bg-slate-800 transition-colors duration-300 text-sm font-medium"
        >
          Request a Consultation
        </a>
      </div>
    </header>
  );
};

export default Header;