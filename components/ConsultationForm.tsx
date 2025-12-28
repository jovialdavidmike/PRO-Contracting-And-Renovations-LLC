import React, { useState } from 'react';

const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., send to an API)
    alert('Thank you for your inquiry! We will be in touch shortly.');
    setFormData({ name: '', email: '', phone: '', details: '' });
  };

  return (
    <section id="consultation" className="py-20 md:py-32 bg-soft-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-grey">Request a Private Consultation</h2>
          <p className="mt-4 text-lg text-slate-grey/80">Let's discuss how we can bring your vision to life. Fill out the form below to begin.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-slate-grey/10 rounded-sm shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full p-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-accent" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full p-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-accent" />
          </div>
          <div className="mb-6">
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full p-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-accent" />
          </div>
          <div className="mb-8">
            <textarea name="details" value={formData.details} onChange={handleChange} placeholder="Tell us about your project..." rows={6} required className="w-full p-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-accent"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-gold-accent text-slate-grey px-12 py-4 rounded-sm font-bold text-lg hover:bg-gold-accent-dark transition-colors duration-300 w-full md:w-auto">
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;
