import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white bg-slate-800">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/luxuryhome/1920/1080')" }}
      ></div>
      <div className="relative z-10 p-6">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
          Crafting Excellence in Greenwich Estates
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-soft-white/90 mb-8">
          Bespoke Renovations and Premium Contracting For Over a Decade. Trusted by the Community.
        </p>
        <a 
          href="#consultation" 
          className="bg-gold-accent text-slate-grey px-10 py-4 rounded-sm font-bold text-lg hover:bg-gold-accent-dark transition-colors duration-300"
        >
          Request a Private Consultation
        </a>
      </div>
    </section>
  );
};

export default Hero;