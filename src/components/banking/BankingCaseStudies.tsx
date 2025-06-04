
import React from 'react';

const BankingCaseStudies = () => {
  const caseStudies = [
    {
      title: "Global Investment Bank Transformation",
      bank: "Fortune 100 Investment Bank",
      challenge: "Legacy system modernization while maintaining 24/7 operations",
      solution: "Phased migration to cloud-native architecture with zero downtime",
      results: [
        "75% reduction in processing time",
        "99.99% system availability",
        "$50M annual cost savings",
        "Enhanced regulatory compliance"
      ],
      metrics: {
        transactions: "2.5B daily",
        users: "15M active",
        countries: "45+"
      }
    },
    {
      title: "Digital Banking Revolution",
      bank: "Leading European Bank",
      challenge: "Complete digital transformation and mobile-first approach",
      solution: "End-to-end digital banking platform with AI-powered insights",
      results: [
        "300% increase in digital adoption",
        "60% reduction in branch visits",
        "40% improvement in customer satisfaction",
        "Real-time fraud detection"
      ],
      metrics: {
        transactions: "500M monthly",
        users: "8M digital",
        countries: "25+"
      }
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Success
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Stories
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real transformations for real banks. See how we've helped financial institutions 
            achieve unprecedented efficiency, security, and customer satisfaction.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="text-cyan-400 font-semibold mb-2">{study.bank}</div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {study.title}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Challenge</h4>
                      <p className="text-blue-100 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Solution</h4>
                      <p className="text-blue-100 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Key Results</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-blue-100">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white">Impact Metrics</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">
                        {study.metrics.transactions}
                      </div>
                      <div className="text-blue-200 text-sm">Transactions</div>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">
                        {study.metrics.users}
                      </div>
                      <div className="text-blue-200 text-sm">Active Users</div>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">
                        {study.metrics.countries}
                      </div>
                      <div className="text-blue-200 text-sm">Countries</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300">
                    Read Full Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BankingCaseStudies;
