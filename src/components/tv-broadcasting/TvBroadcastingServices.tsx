
import React from 'react';
import { Radio, Tv, Video, Zap, Shield, Clock } from 'lucide-react';

const TvBroadcastingServices = () => {
  const services = [
    {
      icon: Radio,
      title: 'Live Broadcasting',
      description: 'Real-time content delivery with ultra-low latency and premium quality streaming infrastructure.',
      features: ['4K/8K Support', 'Multi-Protocol Streaming', 'Global CDN']
    },
    {
      icon: Video,
      title: 'Content Management',
      description: 'Comprehensive digital asset management system for organizing, storing, and distributing content.',
      features: ['Automated Workflows', 'Metadata Management', 'Version Control']
    },
    {
      icon: Tv,
      title: 'Channel Playout',
      description: 'Automated scheduling and playout systems for seamless 24/7 broadcasting operations.',
      features: ['Smart Scheduling', 'Emergency Override', 'Quality Monitoring']
    },
    {
      icon: Zap,
      title: 'Signal Processing',
      description: 'Advanced encoding, transcoding, and signal processing for optimal broadcast quality.',
      features: ['Real-time Encoding', 'Format Conversion', 'Quality Enhancement']
    },
    {
      icon: Shield,
      title: 'Content Protection',
      description: 'Enterprise-grade DRM and content security solutions to protect valuable media assets.',
      features: ['Multi-DRM Support', 'Watermarking', 'Access Control']
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous system monitoring and instant alerts to ensure uninterrupted broadcasting.',
      features: ['Real-time Analytics', 'Predictive Maintenance', 'Instant Alerts']
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Complete Broadcasting
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
              {" "}Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From content creation to viewer delivery, our comprehensive suite of broadcasting 
            services covers every aspect of modern television infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TvBroadcastingServices;
