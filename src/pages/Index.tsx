
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Technologies from '../components/Technologies';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Technologies />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
