
import React from 'react';
import Header from '../components/Header';
import AirlinesHero from '../components/airlines/AirlinesHero';
import AirlinesServices from '../components/airlines/AirlinesServices';
import AirlinesStats from '../components/airlines/AirlinesStats';
import AirlinesFeatures from '../components/airlines/AirlinesFeatures';
import AirlinesCoverage from '../components/airlines/AirlinesCoverage';
import Footer from '../components/Footer';

const Airlines = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Header />
      <AirlinesHero />
      <AirlinesStats />
      <AirlinesServices />
      <AirlinesFeatures />
      <AirlinesCoverage />
      <Footer />
    </div>
  );
};

export default Airlines;
