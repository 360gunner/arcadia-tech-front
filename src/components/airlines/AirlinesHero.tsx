
import React from 'react';
import { Plane, Satellite, Globe, Wifi } from 'lucide-react';

const AirlinesHero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-900 via-sky-800 to-indigo-900 relative overflow-hidden">
      {/* Sky Background with Satellites */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-8 h-8">
          <Satellite className="text-white animate-pulse" />
        </div>
        <div className="absolute top-40 right-32 w-6 h-6">
          <Satellite className="text-cyan-300 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-32 left-1/3 w-7 h-7">
          <Satellite className="text-blue-300 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        {/* Orbital lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-30"></div>
      </div>
      
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6">
              <Plane className="mr-2" size={16} />
              <span className="text-sm font-medium">Satellite Internet for Aviation</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Sky-High
              <span className="block bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                Connectivity
              </span>
              Solutions
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Revolutionizing in-flight experience with high-speed satellite internet, 
              connecting passengers and crew to the world from 40,000 feet above.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-sky-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Explore Solutions
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                View Coverage Map
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center">
                <Globe className="text-cyan-400 mr-3" size={24} />
                <div>
                  <div className="text-2xl font-bold">Global</div>
                  <div className="text-blue-200 text-sm">Satellite Coverage</div>
                </div>
              </div>
              <div className="flex items-center">
                <Wifi className="text-cyan-400 mr-3" size={24} />
                <div>
                  <div className="text-2xl font-bold">100Mbps+</div>
                  <div className="text-blue-200 text-sm">High-Speed Internet</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Earth view from sky */}
            <div className="relative bg-gradient-to-br from-blue-900 to-green-700 rounded-full w-80 h-80 mx-auto shadow-2xl overflow-hidden">
              {/* Earth surface pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-8 left-12 w-16 h-12 bg-green-600 rounded-lg"></div>
                <div className="absolute top-20 right-16 w-20 h-8 bg-green-500 rounded-lg"></div>
                <div className="absolute bottom-16 left-8 w-12 h-16 bg-green-600 rounded-lg"></div>
                <div className="absolute bottom-8 right-12 w-14 h-10 bg-green-500 rounded-lg"></div>
              </div>
              
              {/* Cloud layer */}
              <div className="absolute inset-4 bg-white/10 rounded-full backdrop-blur-sm"></div>
              
              {/* Satellite network overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Network grid */}
                  <div className="absolute inset-0 opacity-40">
                    <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="border border-cyan-400/20"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Central connectivity hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                  
                  {/* Connecting lines */}
                  <div className="absolute top-1/4 left-1/4 w-px h-1/2 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                  <div className="absolute top-1/4 right-1/4 w-px h-1/2 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                  <div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Floating stats around Earth */}
            <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-cyan-400 font-bold text-lg">99.9%</div>
              <div className="text-white text-xs">Uptime</div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-cyan-400 font-bold text-lg">500+</div>
              <div className="text-white text-xs">Airlines</div>
            </div>
            
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-cyan-400 font-bold text-lg">24/7</div>
              <div className="text-white text-xs">Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirlinesHero;
