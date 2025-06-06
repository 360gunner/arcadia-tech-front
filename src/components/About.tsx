
import React from 'react';
import { Users, Star, Code, Monitor } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Star },
    { number: "500+", label: "Projects Delivered", icon: Code },
    { number: "50+", label: "Countries Served", icon: Monitor },
    { number: "200+", label: "Expert Engineers", icon: Users }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  {" "}TETRACODE
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                For over 15 years, TETRACODE has been at the forefront of enterprise technology innovation. 
                We've built our reputation on delivering mission-critical systems that power some of the 
                world's largest financial institutions, broadcasters, and airlines.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of 200+ expert engineers combines deep technical expertise with industry knowledge 
                to create solutions that don't just meet today's needs—they anticipate tomorrow's challenges.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Innovation-First Approach</h4>
                  <p className="text-gray-600">We leverage cutting-edge technologies to solve complex business challenges.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-teal-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Enterprise-Grade Security</h4>
                  <p className="text-gray-600">Security and compliance are built into every solution from day one.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Global Scale & Reliability</h4>
                  <p className="text-gray-600">Our systems handle millions of transactions and users worldwide.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
