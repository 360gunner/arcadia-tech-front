
import React from 'react';
import { Plane, Users, Satellite, Globe } from 'lucide-react';

const AirlinesStats = () => {
  const stats = [
    {
      icon: Plane,
      value: '10,000+',
      label: 'Connected Aircraft',
      description: 'Planes equipped with our satellite internet'
    },
    {
      icon: Users,
      value: '50M+',
      label: 'Passengers Connected',
      description: 'Monthly active internet users in-flight'
    },
    {
      icon: Satellite,
      value: '200+',
      label: 'Satellites',
      description: 'Global satellite constellation coverage'
    },
    {
      icon: Globe,
      value: '150+',
      label: 'Countries',
      description: 'Worldwide coverage area'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Connecting the
            <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}World Above
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our cutting-edge satellite internet technology keeps passengers connected 
            while soaring through the skies, delivering seamless high-speed internet at cruising altitude.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-50 hover:from-sky-100 hover:to-cyan-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-sky-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-white" size={32} />
              </div>
              
              <div className="text-4xl font-bold text-gray-800 mb-2">
                {stat.value}
              </div>
              
              <div className="text-xl font-semibold text-sky-600 mb-3">
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

export default AirlinesStats;
