
import React from 'react';
import { 
  Wifi, 
  Satellite, 
  Globe, 
  Smartphone, 
  Monitor,
  Shield 
} from 'lucide-react';

const AirlinesServices = () => {
  const services = [
    {
      icon: Wifi,
      title: "High-Speed In-Flight WiFi",
      description: "Ultra-fast satellite internet connectivity delivering speeds up to 100+ Mbps for seamless browsing, streaming, and communication.",
      features: ["100+ Mbps Speed", "Low Latency", "Global Coverage", "24/7 Support"],
      color: "from-sky-600 to-sky-700"
    },
    {
      icon: Satellite,
      title: "Satellite Network Management",
      description: "Advanced satellite constellation management ensuring optimal signal strength and coverage across all flight routes worldwide.",
      features: ["200+ Satellites", "Real-time Monitoring", "Auto-switching", "Signal Optimization"],
      color: "from-cyan-600 to-cyan-700"
    },
    {
      icon: Globe,
      title: "Global Coverage Solutions",
      description: "Comprehensive worldwide internet coverage including polar routes, oceanic flights, and remote destinations.",
      features: ["Polar Routes", "Ocean Coverage", "Remote Areas", "150+ Countries"],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Smartphone,
      title: "Passenger Portal Systems",
      description: "Interactive passenger entertainment and communication platforms with seamless internet integration.",
      features: ["Entertainment Hub", "Communication Apps", "Social Media", "Video Streaming"],
      color: "from-indigo-600 to-indigo-700"
    },
    {
      icon: Monitor,
      title: "Crew Operations Platform",
      description: "Dedicated crew communication and operational systems for enhanced flight management and passenger service.",
      features: ["Crew Communication", "Flight Operations", "Weather Updates", "Ground Coordination"],
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Shield,
      title: "Aviation Security & Compliance",
      description: "Secure, aviation-certified internet solutions meeting all international aviation safety and security standards.",
      features: ["Aviation Certified", "Security Protocols", "Compliance Ready", "Data Protection"],
      color: "from-teal-600 to-teal-700"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Aviation
            <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}Internet Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive satellite internet solutions designed specifically for the aviation industry.
            From passenger connectivity to crew operations, we keep the skies connected.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <button className="mt-6 text-sky-600 font-semibold hover:text-sky-700 transition-colors group-hover:translate-x-2 transform duration-300 flex items-center">
                Learn More 
                <span className="ml-2">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirlinesServices;
