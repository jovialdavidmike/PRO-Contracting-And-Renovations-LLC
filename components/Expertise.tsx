import React from 'react';

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-sm border border-slate-grey/10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="flex justify-center mb-4">
      <div className="bg-gold-accent/10 text-gold-accent p-4 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="font-serif text-2xl font-bold text-slate-grey mb-2">{title}</h3>
    <p className="text-slate-grey/80">{description}</p>
  </div>
);

const Expertise: React.FC = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
      title: 'Custom Millwork',
      description: 'Bespoke cabinetry, trim, and architectural details crafted to perfection.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      title: 'Luxury Additions',
      description: 'Seamlessly integrated home additions that enhance space and value.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: 'General Contracting',
      description: 'Comprehensive oversight for projects of any scale, ensuring quality and timeliness.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
      title: 'Project Management',
      description: 'Meticulous planning and execution from concept to completion.',
    },
  ];

  return (
    <section id="expertise" className="py-20 md:py-32 bg-soft-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-grey">Unmatched Expertise</h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-gold-accent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ExpertiseCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
