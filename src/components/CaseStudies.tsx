
import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Global Bank Digital Transformation",
      category: "Core Banking",
      description: "Modernized legacy banking infrastructure for a Fortune 500 bank, handling 10M+ daily transactions with 99.99% uptime.",
      results: ["50% reduction in processing time", "99.99% system uptime", "10M+ daily transactions"],
      image: "photo-1461749280684-dccba630e2f6",
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "National Broadcaster Platform",
      category: "Broadcasting",
      description: "Built a next-generation streaming platform serving 5M+ concurrent viewers with adaptive bitrate streaming.",
      results: ["5M+ concurrent viewers", "40% cost reduction", "Global content delivery"],
      image: "photo-1605810230434-7631ac76ec81",
      color: "from-purple-600 to-purple-700"
    },
    {
      title: "Airline Operations Suite",
      category: "Airline Software",
      description: "Integrated flight operations, crew management, and passenger services for a major international airline.",
      results: ["30% operational efficiency", "Real-time flight tracking", "Seamless passenger experience"],
      image: "photo-1488590528505-98d2b5aba04b",
      color: "from-teal-600 to-teal-700"
    }
  ];

  return (
    <section id="case-studies" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Case
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              {" "}Studies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped industry leaders 
            transform their operations and achieve unprecedented scale.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${study.color} text-white rounded-full text-sm font-medium`}>
                  {study.category}
                </div>
                
                <h3 className="text-3xl font-bold text-gray-800">
                  {study.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {study.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
                  Read Full Case Study 
                  <span className="ml-2">→</span>
                </button>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src={`https://images.unsplash.com/${study.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={study.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${study.color} opacity-20`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
