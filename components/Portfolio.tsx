import React from 'react';

interface PortfolioCardProps {
  title: string;
  imageUrl: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, imageUrl }) => (
  <div className="relative group overflow-hidden rounded-sm aspect-w-4 aspect-h-3">
    <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
    <div className="absolute inset-0 bg-black/50 flex items-end p-8">
      <h3 className="text-soft-white font-serif text-3xl font-bold">{title}</h3>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const projects = [
    { title: 'Kitchen Transformations', imageUrl: 'https://picsum.photos/seed/kitchen/800/600' },
    { title: 'Master Suite Renovations', imageUrl: 'https://picsum.photos/seed/bedroom/800/600' },
    { title: 'Exterior Restoration', imageUrl: 'https://picsum.photos/seed/exterior/800/600' },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-grey">Our Signature Work</h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-gold-accent"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
