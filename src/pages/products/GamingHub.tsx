import { Gamepad2, Trophy, Users, Zap, MessageSquare, Settings } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function GamingHub() {
  const features = [
    {
      title: 'Game Library',
      description: 'Access to thousands of games across all genres and platforms.',
      icon: <Gamepad2 className="h-6 w-6" />
    },
    {
      title: 'Tournaments',
      description: 'Compete in tournaments and climb the leaderboards.',
      icon: <Trophy className="h-6 w-6" />
    },
    {
      title: 'Social Features',
      description: 'Connect with friends and join gaming communities.',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Cross-Platform Play',
      description: 'Play with friends across different devices and platforms.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Voice Chat',
      description: 'Crystal clear voice communication with your teammates.',
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      title: 'Customization',
      description: 'Personalize your gaming experience with themes and mods.',
      icon: <Settings className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Gaming Hub"
      description="Your all-in-one destination for gaming. Discover, play, and connect with gamers worldwide."
      features={features}
      ctaText="Join Now"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Gaming Hub?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Gaming Hub brings together everything you love about gaming in one place. Whether you're a casual player or a competitive gamer, 
            our platform offers the tools and community you need to take your gaming to the next level.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Popular Games</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Fortnite', 'Valorant', 'Minecraft', 'Apex Legends', 'Call of Duty', 'Rocket League'].map(game => (
                  <div key={game} className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                    <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Gamepad2 className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="font-medium">{game}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Upcoming Tournaments</h3>
              <div className="space-y-4">
                {[
                  { name: 'Summer Showdown', game: 'Valorant', date: 'Jun 15, 2023', prize: '$10,000' },
                  { name: 'Pro League', game: 'Apex Legends', date: 'Jun 20, 2023', prize: '$25,000' },
                  { name: 'World Championship', game: 'Rocket League', date: 'Jul 5, 2023', prize: '$50,000' }
                ].map((tournament, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{tournament.name}</h4>
                        <p className="text-sm text-gray-600">{tournament.game} • {tournament.date}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Prize: {tournament.prize}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Join the Community?</h3>
            <p className="mb-4">
              Sign up today and get access to exclusive games, tournaments, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/signup"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Sign Up Free
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
    </ProductPageTemplate>
  );
}
