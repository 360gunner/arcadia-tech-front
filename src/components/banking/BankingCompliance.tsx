
import React from 'react';
import { Shield, Award, FileCheck, Lock } from 'lucide-react';

const BankingCompliance = () => {
  const certifications = [
    {
      icon: Shield,
      title: "ISO 27001",
      description: "Information Security Management System certification"
    },
    {
      icon: Award,
      title: "SOC 2 Type II",
      description: "Security, availability, and confidentiality controls"
    },
    {
      icon: FileCheck,
      title: "PCI DSS Level 1",
      description: "Payment Card Industry Data Security Standard"
    },
    {
      icon: Lock,
      title: "GDPR Compliant",
      description: "European data protection and privacy regulations"
    }
  ];

  const regulations = [
    "Basel III Capital Requirements",
    "PSD2 Open Banking Directive",
    "MiFID II Compliance",
    "Dodd-Frank Act",
    "CCAR Stress Testing",
    "BCBS Guidelines",
    "FCA Regulations",
    "FFIEC Guidelines"
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Compliance &
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}Security
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built to meet the most stringent regulatory requirements and security standards 
            in the financial industry. Your trust and compliance are our top priorities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-gray-800">
              Industry Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <cert.icon className="text-white" size={24} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {cert.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-8 text-gray-800">
              Regulatory Compliance
            </h3>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our banking solutions are designed to meet and exceed regulatory 
                requirements across multiple jurisdictions, ensuring your institution 
                remains compliant in an ever-evolving regulatory landscape.
              </p>
              
              <div className="grid md:grid-cols-2 gap-3">
                {regulations.map((regulation, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">{regulation}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center mb-2">
                  <Shield className="text-blue-600 mr-2" size={20} />
                  <span className="font-semibold text-blue-600">Continuous Monitoring</span>
                </div>
                <p className="text-blue-700 text-sm">
                  24/7 compliance monitoring and automated reporting to ensure 
                  ongoing adherence to all applicable regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingCompliance;
