
import React from 'react';
import { Layers, Cpu, Database, Network } from 'lucide-react';

const TvBroadcastingFeatures = () => {
  const features = [
    {
      icon: Layers,
      title: 'Multi-Platform Distribution',
      description: 'Seamlessly distribute content across traditional broadcast, streaming platforms, and mobile devices with a single workflow.'
    },
    {
      icon: Cpu,
      title: 'AI-Powered Analytics',
      description: 'Leverage machine learning for audience insights, content optimization, and predictive maintenance of broadcasting equipment.'
    },
    {
      icon: Database,
      title: 'Cloud-Native Architecture',
      description: 'Scalable, resilient infrastructure that grows with your audience and adapts to changing broadcasting demands.'
    },
    {
      icon: Network,
      title: 'Edge Computing',
      description: 'Reduce latency and improve quality with intelligent edge nodes positioned strategically around the globe.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Innovation Meets
              <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                {" "}Reliability
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our broadcasting platform combines cutting-edge technology with proven reliability 
              to deliver exceptional viewing experiences at scale.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-3xl font-bold text-purple-600 mb-2">4K/8K</div>
                  <div className="text-gray-700">Ultra HD Broadcasting</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">99.9%</div>
                  <div className="text-gray-700">Uptime Guarantee</div>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="text-3xl font-bold text-purple-600 mb-2">&lt;1ms</div>
                  <div className="text-gray-700">Ultra-Low Latency</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-700">Global Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TvBroadcastingFeatures;
