
import React from 'react';
import Header from '../components/Header';
import BankingHero from '../components/banking/BankingHero';
import BankingServices from '../components/banking/BankingServices';
import BankingFeatures from '../components/banking/BankingFeatures';
import BankingStats from '../components/banking/BankingStats';
import BankingCaseStudies from '../components/banking/BankingCaseStudies';
import BankingCompliance from '../components/banking/BankingCompliance';
import Footer from '../components/Footer';

const Banking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <BankingHero />
      <BankingStats />
      <BankingServices />
      <BankingFeatures />
      <BankingCaseStudies />
      <BankingCompliance />
      <Footer />
    </div>
  );
};

export default Banking;
