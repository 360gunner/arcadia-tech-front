
import React from 'react';
import { Play, Radio, Satellite } from 'lucide-react';

const TvBroadcastingHero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Radio className="text-purple-400" size={24} />
              <span className="text-purple-300 font-semibold tracking-wide">TV BROADCASTING SOLUTIONS</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Next-Generation
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Broadcasting
              </span>
              <br />Technology
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Deliver exceptional viewing experiences with our cutting-edge broadcasting infrastructure. 
              From live streaming to digital content management, we power the future of television.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Play size={20} />
                <span>Watch Demo</span>
              </button>
              <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-full hover:bg-purple-400 hover:text-white transition-all duration-200">
                Explore Solutions
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl transform -rotate-3 opacity-30"></div>
                <div className="relative bg-gradient-to-br from-purple-700 to-indigo-800 rounded-3xl p-8 h-full flex items-center justify-center">
                  <Satellite className="text-white" size={120} />
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-purple-400 rounded-full animate-ping`}
                  style={{
                    top: `${20 + (i * 15)}%`,
                    left: `${10 + (i * 12)}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TvBroadcastingHero;
