
import React from 'react';
import { CheckCircle } from 'lucide-react';

const AirlinesFeatures = () => {
  const features = [
    {
      category: "Technical Specifications",
      items: [
        "100+ Mbps download speeds",
        "Low-latency Ka-band satellites",
        "Redundant satellite coverage",
        "Weather-resistant connections",
        "Real-time beam switching"
      ]
    },
    {
      category: "Aviation Compliance",
      items: [
        "FAA/EASA certified equipment",
        "RTCA DO-160 compliance",
        "STC certification support",
        "Aviation safety standards",
        "EMI/EMC requirements met"
      ]
    },
    {
      category: "Operational Benefits",
      items: [
        "99.9% service availability",
        "Global route coverage",
        "24/7 technical support",
        "Remote diagnostics",
        "Predictive maintenance"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Aviation-Grade
              <span className="block bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                Satellite Internet
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Purpose-built for aviation environments, our satellite internet solutions 
              deliver enterprise-grade connectivity that meets the rigorous demands of 
              commercial aviation while ensuring passenger satisfaction.
            </p>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-700 font-medium">FAA Certified</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-sky-500 rounded-full mr-2"></div>
                <span className="text-gray-700 font-medium">EASA Approved</span>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Request Demo
            </button>
          </div>
          
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-3xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.category}
                </h3>
                
                <div className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirlinesFeatures;
