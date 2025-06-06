import { Radio, Headphones, Mic2, Globe, Music, Podcast } from 'lucide-react';
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

  return (
    <ProductPageTemplate
      title="TETRA Radio"
      description="A complete radio broadcasting solution that gives you everything you need to start, grow, and monetize your online radio station or podcast."
      features={features}
      ctaText="Start Broadcasting"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Broadcast with TETRA Radio?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            TETRA Radio provides professional-grade tools for radio broadcasters of all sizes. Our platform is trusted by 
            thousands of broadcasters worldwide to deliver exceptional audio experiences to their listeners.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Unlimited listeners with auto-scaling infrastructure</li>
            <li>High-quality audio streaming up to 320kbps</li>
            <li>Monetization through ads, subscriptions, and donations</li>
            <li>Detailed listener analytics and statistics</li>
            <li>Custom mobile apps for your brand</li>
          </ul>
          <p>
            Whether you're starting a new station or moving from another provider, TETRA Radio makes it easy to share 
            your voice with the world.
          </p>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
