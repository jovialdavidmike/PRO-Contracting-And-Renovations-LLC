import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import LocalEdge from './components/LocalEdge';
import Expertise from './components/Expertise';
import SocialProof from './components/SocialProof';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import StickyMobileFooter from './components/StickyMobileFooter';

const App: React.FC = () => {
  return (
    <div className="bg-soft-white font-sans text-slate-grey antialiased">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <LocalEdge />
        <Expertise />
        <SocialProof />
        <ConsultationForm />
      </main>
      <Footer />
      <StickyMobileFooter />
    </div>
  );
};

export default App;
