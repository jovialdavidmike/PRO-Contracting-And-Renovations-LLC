import React from 'react';

const LocalEdge: React.FC = () => {
  return (
    <section className="bg-slate-grey py-16">
      <div className="container mx-auto px-6 text-center text-soft-white">
        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Proudly Serving Greenwich & Surrounding Communities
        </h3>
        <p className="text-lg md:text-xl text-soft-white/80">
          Our expertise is dedicated to enhancing the finest homes in:
        </p>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-gold-accent font-medium text-lg">
          <span>Greenwich</span>
          <span className="text-soft-white/30 hidden sm:inline">◆</span>
          <span>Old Greenwich</span>
          <span className="text-soft-white/30 hidden sm:inline">◆</span>
          <span>Riverside</span>
          <span className="text-soft-white/30 hidden sm:inline">◆</span>
          <span>Cos Cob</span>
        </div>
      </div>
    </section>
  );
};

export default LocalEdge;
