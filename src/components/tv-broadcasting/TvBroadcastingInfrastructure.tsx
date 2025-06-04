
import React from 'react';
import { Server, Satellite, Wifi, Globe } from 'lucide-react';

const TvBroadcastingInfrastructure = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Global Broadcasting
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Infrastructure
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our worldwide network of data centers, satellites, and edge nodes ensures 
            your content reaches audiences anywhere, anytime, with perfect quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Server, title: 'Data Centers', count: '50+', description: 'Globally distributed' },
            { icon: Satellite, title: 'Satellite Links', count: '25+', description: 'Redundant uplinks' },
            { icon: Wifi, title: 'Edge Nodes', count: '200+', description: 'Low latency delivery' },
            { icon: Globe, title: 'Countries', count: '80+', description: 'Global coverage' }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{item.count}</div>
              <div className="text-lg font-semibold text-purple-300 mb-1">{item.title}</div>
              <div className="text-gray-400 text-sm">{item.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Multi-layered security protocols protect your content from production to delivery, 
                ensuring integrity and preventing unauthorized access.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Scalable Architecture</h3>
              <p className="text-gray-300 leading-relaxed">
                Auto-scaling infrastructure adapts to audience demands in real-time, 
                handling everything from small streams to global live events.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Real-Time Analytics</h3>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive monitoring and analytics provide insights into viewer behavior, 
                system performance, and content engagement metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TvBroadcastingInfrastructure;
