
import React from 'react';
import { 
  CreditCard, 
  Shield, 
  TrendingUp, 
  Smartphone, 
  Globe,
  Lock 
} from 'lucide-react';

const BankingServices = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Core Banking Platform",
      description: "Complete banking infrastructure with real-time transaction processing, account management, and customer lifecycle tools.",
      features: ["Real-time Processing", "Multi-currency Support", "Customer Portal", "Transaction History"],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Shield,
      title: "Risk Management Suite",
      description: "Advanced fraud detection, credit scoring, and risk assessment tools powered by machine learning algorithms.",
      features: ["Fraud Detection", "Credit Scoring", "Risk Analytics", "Compliance Monitoring"],
      color: "from-indigo-600 to-indigo-700"
    },
    {
      icon: TrendingUp,
      title: "Investment Banking Tools",
      description: "Sophisticated trading platforms, portfolio management, and wealth management solutions for institutional clients.",
      features: ["Trading Engine", "Portfolio Analytics", "Wealth Management", "Market Data"],
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Smartphone,
      title: "Digital Banking Platform",
      description: "Modern mobile and web banking applications with seamless user experience and advanced security features.",
      features: ["Mobile Banking", "Web Portal", "Digital Onboarding", "Biometric Auth"],
      color: "from-cyan-600 to-cyan-700"
    },
    {
      icon: Globe,
      title: "Open Banking APIs",
      description: "PSD2 compliant API infrastructure enabling third-party integrations and innovative financial services.",
      features: ["API Gateway", "PSD2 Compliance", "Developer Portal", "Rate Limiting"],
      color: "from-teal-600 to-teal-700"
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Enterprise-grade security framework ensuring regulatory compliance and data protection across all systems.",
      features: ["End-to-end Encryption", "Audit Trails", "GDPR Compliance", "Multi-factor Auth"],
      color: "from-green-600 to-green-700"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Banking
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive banking technology stack designed for modern financial institutions.
            From core banking to digital innovation, we provide the complete ecosystem.
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
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
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

export default BankingServices;
