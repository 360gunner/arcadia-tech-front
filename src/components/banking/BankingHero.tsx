
import React from 'react';
import { Shield, TrendingUp, Globe, Zap } from 'lucide-react';

const BankingHero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-48 h-48 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 border border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6">
              <Shield className="mr-2" size={16} />
              <span className="text-sm font-medium">Enterprise Banking Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Banking
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Innovation
              </span>
              at Scale
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Powering the world's most trusted financial institutions with secure, 
              scalable, and compliant banking platforms that process billions in 
              transactions daily.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Explore Solutions
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center">
                <TrendingUp className="text-cyan-400 mr-3" size={24} />
                <div>
                  <div className="text-2xl font-bold">$2.5T+</div>
                  <div className="text-blue-200 text-sm">Transactions Processed</div>
                </div>
              </div>
              <div className="flex items-center">
                <Globe className="text-cyan-400 mr-3" size={24} />
                <div>
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-blue-200 text-sm">Banks Worldwide</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Zap className="text-white" size={32} />
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl">
                  <span className="text-white font-medium">Real-time Processing</span>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl text-center">
                    <div className="text-2xl font-bold text-cyan-400">99.99%</div>
                    <div className="text-white/80 text-sm">Uptime</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl text-center">
                    <div className="text-2xl font-bold text-cyan-400">&lt;50ms</div>
                    <div className="text-white/80 text-sm">Response</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-white/80 text-sm">
                    <span>Transaction Volume</span>
                    <span>98%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full w-[98%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingHero;
