
import React from 'react';
import { Users, DollarSign, Shield, Clock } from 'lucide-react';

const BankingStats = () => {
  const stats = [
    {
      icon: DollarSign,
      value: '$2.5T+',
      label: 'Transaction Volume',
      description: 'Processed annually across all platforms'
    },
    {
      icon: Users,
      value: '500M+',
      label: 'End Users',
      description: 'Banking customers served globally'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Compliance Rate',
      description: 'Regulatory standards met'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'System Availability',
      description: 'Continuous monitoring and support'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}Global Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our banking solutions power some of the world's largest financial institutions,
            processing trillions in transactions with unmatched reliability and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-white" size={32} />
              </div>
              
              <div className="text-4xl font-bold text-gray-800 mb-2">
                {stat.value}
              </div>
              
              <div className="text-xl font-semibold text-blue-600 mb-3">
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

export default BankingStats;
