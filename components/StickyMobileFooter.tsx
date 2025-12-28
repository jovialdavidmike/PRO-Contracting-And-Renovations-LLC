import React from 'react';

const StickyMobileFooter: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-800 p-3 shadow-2xl z-50 border-t border-gold-accent/50">
      <a 
        href="tel:+12035366698" 
        className="flex items-center justify-center bg-gold-accent text-slate-grey px-6 py-3 rounded-sm font-bold text-lg hover:bg-gold-accent-dark transition-colors duration-300 w-full text-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span>Call For A Consultation</span>
      </a>
    </div>
  );
};

export default StickyMobileFooter;
