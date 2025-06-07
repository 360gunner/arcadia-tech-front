import { Radio, Headphones, Mic2, Globe, Music, Podcast, Zap, Users, BarChart, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function TetraRadio() {
  const features = [
    {
      title: 'Live Radio Streaming',
      description: 'Broadcast your radio station live to listeners worldwide with crystal clear audio quality.',
      icon: <Radio className="h-6 w-6" />
    },
    {
      title: 'Podcast Hosting',
      description: 'Upload, manage, and distribute your podcasts to all major platforms from one central dashboard.',
      icon: <Podcast className="h-6 w-6" />
    },
    {
      title: '24/7 AutoDJ',
      description: 'Keep your station running around the clock with our intelligent AutoDJ system and scheduling.',
      icon: <Music className="h-6 w-6" />
    },
    {
      title: 'Global Reach',
      description: 'Reach listeners anywhere with our worldwide network of streaming servers and CDN.',
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: 'Live Show Support',
      description: 'Go live with your DJs and hosts with our professional broadcasting tools.',
      icon: <Mic2 className="h-6 w-6" />
    },
    {
      title: 'Mobile Apps',
      description: 'Native mobile apps for iOS and Android to keep your listeners connected on the go.',
      icon: <Headphones className="h-6 w-6" />
    }
  ];

  const stats = [
    { number: "50K+", label: "Radio Stations", icon: Radio },
    { number: "100M+", label: "Monthly Listeners", icon: Users },
    { number: "320kbps", label: "Audio Quality", icon: Music },
    { number: "99.9%", label: "Uptime", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-red-900/10 to-pink-900/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI0OSwgMTE1LCA0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-6 border border-orange-200">
                <Radio className="mr-2 text-orange-600" size={16} />
                <span className="text-sm font-medium text-orange-700">Professional Radio Broadcasting</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                TETRA
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}Radio
                </span>
                <br />Platform
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A complete radio broadcasting solution that gives you everything you need to start, grow, 
                and monetize your online radio station or podcast.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Radio size={20} />
                  <span>Start Broadcasting</span>
                </button>
                <button className="border-2 border-orange-300 text-orange-700 px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300">
                  Listen to Demo
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="text-white" size={20} />
                      </div>
                      <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Audio Visualizer Effect */}
                <div className="mt-6 flex items-center justify-center space-x-1">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-gradient-to-t from-orange-600 to-red-600 rounded-full"
                      animate={{
                        height: [8, 24, 16, 32, 12, 28, 8],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Broadcasting
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {" "}Made Simple
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional radio broadcasting tools designed for creators, stations, and podcasters of all sizes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Quality Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-8">Crystal Clear Audio Quality</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Music className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">High-Fidelity Streaming</h4>
                    <p className="text-gray-600">Up to 320kbps audio quality for professional broadcasting standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Low Latency</h4>
                    <p className="text-gray-600">Near real-time streaming with minimal delay for live interactions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Advanced Analytics</h4>
                    <p className="text-gray-600">Detailed listener insights and engagement metrics for your content.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h4 className="text-2xl font-bold mb-6 text-center">Broadcasting Features</h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                    <span className="font-medium">Audio Quality</span>
                    <span className="text-orange-600 font-bold">Up to 320kbps</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl">
                    <span className="font-medium">Concurrent Listeners</span>
                    <span className="text-red-600 font-bold">Unlimited</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl">
                    <span className="font-medium">Storage</span>
                    <span className="text-pink-600 font-bold">Unlimited</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                    <span className="font-medium">Bandwidth</span>
                    <span className="text-orange-600 font-bold">Unlimited</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl">
                  <div className="flex items-center justify-center space-x-2">
                    <Headphones className="text-orange-600" size={20} />
                    <span className="font-medium text-orange-800">Professional Broadcasting Tools</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-900 via-red-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto relative">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}Broadcasting?
              </span>
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Join thousands of broadcasters who trust TETRA Radio to share their voice with the world.
              Start your radio journey today with our professional broadcasting platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Listen to Stations
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}