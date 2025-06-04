
import React from 'react';
import { 
  Code, 
  Monitor, 
  Settings, 
  Briefcase, 
  Calendar,
  Star 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Core Banking Solutions",
      description: "Secure, scalable banking platforms with real-time transaction processing and regulatory compliance.",
      features: ["Payment Processing", "Risk Management", "Compliance Tools", "API Integration"],
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: Settings,
      title: "Open Banking & Finance",
      description: "Modern API-first financial platforms enabling seamless third-party integrations and services.",
      features: ["API Gateway", "PSD2 Compliance", "Data Analytics", "Security Framework"],
      gradient: "from-teal-600 to-teal-700"
    },
    {
      icon: Monitor,
      title: "TV Broadcasting Systems",
      description: "Advanced broadcasting solutions for live streaming, content management, and distribution.",
      features: ["Live Streaming", "Content CMS", "Multi-platform", "Analytics"],
      gradient: "from-purple-600 to-purple-700"
    },
    {
      icon: Briefcase,
      title: "Airline Software",
      description: "Comprehensive airline management systems for reservations, operations, and customer service.",
      features: ["Booking Engine", "Crew Management", "Fleet Tracking", "Customer Portal"],
      gradient: "from-indigo-600 to-indigo-700"
    },
    {
      icon: Star,
      title: "SaaS Platforms",
      description: "Scalable cloud-based solutions with multi-tenancy, analytics, and enterprise-grade security.",
      features: ["Multi-tenant", "Auto-scaling", "Analytics", "Enterprise Security"],
      gradient: "from-green-600 to-green-700"
    },
    {
      icon: Calendar,
      title: "E-commerce Solutions",
      description: "High-performance e-commerce platforms with advanced features and seamless user experience.",
      features: ["Payment Gateway", "Inventory Management", "Mobile First", "AI Recommendations"],
      gradient: "from-orange-600 to-orange-700"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              {" "}Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in mission-critical systems that power the world's largest enterprises.
            From financial institutions to broadcasters, we deliver solutions that scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-2 transform duration-300 flex items-center">
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

export default Services;
