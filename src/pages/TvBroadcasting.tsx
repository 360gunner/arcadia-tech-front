
import React from 'react';
import Header from '../components/Header';
import TvBroadcastingHero from '../components/tv-broadcasting/TvBroadcastingHero';
import TvBroadcastingServices from '../components/tv-broadcasting/TvBroadcastingServices';
import TvBroadcastingStats from '../components/tv-broadcasting/TvBroadcastingStats';
import TvBroadcastingFeatures from '../components/tv-broadcasting/TvBroadcastingFeatures';
import TvBroadcastingInfrastructure from '../components/tv-broadcasting/TvBroadcastingInfrastructure';
import Footer from '../components/Footer';

const TvBroadcasting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50">
      <Header />
      <TvBroadcastingHero />
      <TvBroadcastingStats />
      <TvBroadcastingServices />
      <TvBroadcastingFeatures />
      <TvBroadcastingInfrastructure />
      <Footer />
    </div>
  );
};

export default TvBroadcasting;
