import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-grey text-soft-white/70">
      <div className="container mx-auto px-6 py-12 text-center">
        <h4 className="font-serif text-2xl font-bold text-soft-white mb-2">
          PRO Contracting & Renovations LLC
        </h4>
        <p>Greenwich, CT</p>
        <p className="mt-4">
          <a href="tel:+12035366698" className="hover:text-gold-accent transition-colors">+1 (203) 536-6698</a>
          <span className="mx-2">|</span>
          <a href="mailto:contact@procontracting.com" className="hover:text-gold-accent transition-colors">contact@procontracting.com</a>
        </p>
        <div className="mt-8 pt-8 border-t border-soft-white/10 text-sm">
          <p>&copy; {new Date().getFullYear()} PRO Contracting And Renovations LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
