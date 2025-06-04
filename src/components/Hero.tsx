
import React from 'react';
import { ArrowRight, Code, Monitor } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-6 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium">
                🚀 Trusted by Fortune 500 Companies
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Building the 
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  {" "}Future
                </span>
                <br />of Enterprise Technology
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                We deliver cutting-edge solutions for core banking, broadcasting, airline systems, 
                and enterprise SaaS platforms. Trusted by global leaders to transform their digital infrastructure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold">
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold">
                View Our Work
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-2xl">
                  <Code className="text-blue-600" size={24} />
                  <div>
                    <div className="font-semibold">Core Banking Solutions</div>
                    <div className="text-sm text-gray-600">Secure, scalable financial systems</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-2xl">
                  <Monitor className="text-teal-600" size={24} />
                  <div>
                    <div className="font-semibold">Broadcasting Systems</div>
                    <div className="text-sm text-gray-600">Next-gen media technology</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-500/20 rounded-3xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-600/20 rounded-3xl transform -rotate-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
