
import React from 'react';
import { Tv, Users, Globe, Signal } from 'lucide-react';

const TvBroadcastingStats = () => {
  const stats = [
    {
      icon: Tv,
      value: '500+',
      label: 'TV Channels',
      description: 'Channels powered by our broadcasting technology'
    },
    {
      icon: Users,
      value: '100M+',
      label: 'Daily Viewers',
      description: 'People watching content through our systems'
    },
    {
      icon: Globe,
      value: '80+',
      label: 'Countries',
      description: 'Global broadcasting network coverage'
    },
    {
      icon: Signal,
      value: '99.9%',
      label: 'Uptime',
      description: 'Industry-leading reliability guarantee'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Powering Global
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
              {" "}Broadcasting
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced broadcasting infrastructure delivers seamless content to millions of viewers 
            worldwide, ensuring crystal-clear quality and uninterrupted service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-white" size={32} />
              </div>
              
              <div className="text-4xl font-bold text-gray-800 mb-2">
                {stat.value}
              </div>
              
              <div className="text-xl font-semibold text-purple-600 mb-3">
                {stat.label}
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TvBroadcastingStats;
