import { Gamepad2, Zap, Cloud, Users, Headphones, Wifi } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function CloudGaming() {
  const features = [
    {
      title: 'Instant Play',
      description: 'Start playing high-end games instantly without downloads or installations.',
      icon: <Gamepad2 className="h-6 w-6" />
    },
    {
      title: 'No Hardware Limits',
      description: 'Play the latest games on any device, regardless of specifications.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Cloud Saves',
      description: 'Your progress is saved in the cloud and synced across all your devices.',
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: 'Multiplayer',
      description: 'Play with friends across different platforms seamlessly.',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Voice Chat',
      description: 'Built-in voice chat for easy communication with your teammates.',
      icon: <Headphones className="h-6 w-6" />
    },
    {
      title: 'Low Latency',
      description: 'Optimized network for smooth, lag-free gaming experience.',
      icon: <Wifi className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="TETRA Cloud Gaming"
      description="Play the latest games instantly on any device with our high-performance cloud gaming platform."
      features={features}
      ctaText="Start Playing"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Game Without Limits</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            TETRA Cloud Gaming brings console and PC gaming to any screen. Our powerful cloud servers handle the 
            processing, while you enjoy high-quality gaming on your phone, tablet, TV, or computer. No downloads, 
            no updates, no storage limits - just instant gaming.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">How It Works</h3>
              <ol className="space-y-4 list-decimal pl-5">
                <li className="pl-2">
                  <h4 className="font-medium">Choose Your Game</h4>
                  <p className="text-sm text-gray-600">Select from hundreds of games in our library</p>
                </li>
                <li className="pl-2">
                  <h4 className="font-medium">Start Playing Instantly</h4>
                  <p className="text-sm text-gray-600">No downloads or installations required</p>
                </li>
                <li className="pl-2">
                  <h4 className="font-medium">Play Anywhere</h4>
                  <p className="text-sm text-gray-600">Continue your game on any device</p>
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Supported Devices</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Windows & Mac</h4>
                  <p className="text-sm text-gray-600">Chrome, Edge, Firefox, Safari</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Mobile</h4>
                  <p className="text-sm text-gray-600">iOS & Android</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Smart TVs</h4>
                  <p className="text-sm text-gray-600">Apple TV, Android TV, and more</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Game Controllers</h4>
                  <p className="text-sm text-gray-600">Xbox, PlayStation, and more</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold mb-1">Ready to Start Gaming?</h3>
                <p className="text-gray-600">Join thousands of players in the cloud gaming revolution</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/signup"
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
                >
                  Start Free Trial
                </a>
                <a
                  href="/games"
                  className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Browse Games
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
