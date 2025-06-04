
import React from 'react';
import { CheckCircle } from 'lucide-react';

const BankingFeatures = () => {
  const features = [
    {
      category: "Security & Compliance",
      items: [
        "End-to-end encryption with AES-256",
        "PCI DSS Level 1 certification",
        "GDPR and SOX compliance",
        "Multi-factor authentication",
        "Biometric security integration"
      ]
    },
    {
      category: "Performance & Scalability",
      items: [
        "99.99% uptime guarantee",
        "Sub-50ms transaction response",
        "Auto-scaling infrastructure",
        "Load balancing across regions",
        "Real-time monitoring & alerts"
      ]
    },
    {
      category: "Integration & APIs",
      items: [
        "RESTful API architecture",
        "Webhook notifications",
        "Third-party service integration",
        "Legacy system connectivity",
        "Microservices architecture"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Enterprise-Grade
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Banking Infrastructure
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Built for the most demanding financial environments, our banking platform 
              delivers uncompromising security, performance, and reliability that scales 
              with your institution's growth.
            </p>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-700 font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-700 font-medium">SOC 2 Type II</span>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
          </div>
          
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6">
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

export default BankingFeatures;
