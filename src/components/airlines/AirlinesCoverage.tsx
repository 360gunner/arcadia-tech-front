
import React from 'react';
import { Globe, Satellite, Plane } from 'lucide-react';

const AirlinesCoverage = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-sky-900 to-indigo-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Global
            <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
              {" "}Coverage Map
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our satellite constellation provides comprehensive coverage across all major flight routes,
            ensuring passengers stay connected no matter where their journey takes them.
          </p>
        </div>

        <div className="relative">
          {/* World map visualization */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 relative overflow-hidden">
            {/* Map background with grid */}
            <div className="relative h-96 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-2xl overflow-hidden">
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-30">
                <div className="grid grid-cols-12 grid-rows-8 w-full h-full">
                  {Array.from({ length: 96 }).map((_, i) => (
                    <div key={i} className="border border-cyan-400/20"></div>
                  ))}
                </div>
              </div>
              
              {/* Continents representation */}
              <div className="absolute inset-0">
                {/* North America */}
                <div className="absolute top-1/4 left-1/6 w-16 h-20 bg-green-400/40 rounded-lg"></div>
                {/* South America */}
                <div className="absolute top-1/2 left-1/5 w-8 h-16 bg-green-400/40 rounded-lg"></div>
                {/* Europe */}
                <div className="absolute top-1/4 left-1/2 w-12 h-8 bg-green-400/40 rounded-lg"></div>
                {/* Africa */}
                <div className="absolute top-2/5 left-1/2 w-10 h-16 bg-green-400/40 rounded-lg"></div>
                {/* Asia */}
                <div className="absolute top-1/5 left-2/3 w-20 h-12 bg-green-400/40 rounded-lg"></div>
                {/* Australia */}
                <div className="absolute top-3/5 right-1/4 w-8 h-6 bg-green-400/40 rounded-lg"></div>
              </div>
              
              {/* Satellite positions */}
              <div className="absolute top-8 left-16">
                <Satellite className="text-cyan-400 animate-pulse" size={16} />
              </div>
              <div className="absolute top-12 right-20">
                <Satellite className="text-sky-400 animate-pulse" size={16} style={{ animationDelay: '1s' }} />
              </div>
              <div className="absolute bottom-16 left-1/3">
                <Satellite className="text-cyan-300 animate-pulse" size={16} style={{ animationDelay: '2s' }} />
              </div>
              <div className="absolute bottom-12 right-1/3">
                <Satellite className="text-sky-300 animate-pulse" size={16} style={{ animationDelay: '3s' }} />
              </div>
              
              {/* Flight paths */}
              <div className="absolute top-1/3 left-1/4 w-1/2 h-px bg-gradient-to-r from-cyan-400 via-white to-cyan-400 opacity-60 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/5 w-3/5 h-px bg-gradient-to-r from-sky-400 via-white to-sky-400 opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 left-1/3 w-1/3 h-px bg-gradient-to-r from-cyan-400 via-white to-cyan-400 opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              {/* Aircraft icons on routes */}
              <div className="absolute top-1/3 left-1/2">
                <Plane className="text-white animate-pulse" size={14} />
              </div>
              <div className="absolute top-1/2 right-1/3">
                <Plane className="text-white animate-pulse" size={14} style={{ animationDelay: '1s' }} />
              </div>
            </div>
            
            {/* Coverage stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <Globe className="text-cyan-400 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-white">99.8%</div>
                <div className="text-blue-200 text-sm">Global Coverage</div>
              </div>
              
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <Satellite className="text-sky-400 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-blue-200 text-sm">Active Satellites</div>
              </div>
              
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <Plane className="text-cyan-400 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-blue-200 text-sm">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirlinesCoverage;
