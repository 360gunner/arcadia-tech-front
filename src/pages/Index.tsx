
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Technologies from '../components/Technologies';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Hero />
      <Services />
      <About />
      <Technologies />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
