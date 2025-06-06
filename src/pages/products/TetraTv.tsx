import { Monitor, Play, Users, Tv2, Smartphone, Globe } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function TetraTv() {
  const features = [
    {
      title: 'Live TV Streaming',
      description: 'Broadcast your TV channel live to audiences worldwide with ultra-low latency and high-definition quality.',
      icon: <Play className="h-6 w-6" />
    },
    {
      title: 'On-Demand Content',
      description: 'Host and stream your video library with our powerful on-demand platform that scales with your audience.',
      icon: <Tv2 className="h-6 w-6" />
    },
    {
      title: 'Multi-Platform Support',
      description: 'Reach your audience on any device including smart TVs, mobile devices, and web browsers.',
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: 'Global CDN',
      description: 'Leverage our global content delivery network for fast, reliable streaming anywhere in the world.',
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: 'Monetization',
      description: 'Multiple monetization options including subscriptions, pay-per-view, and advertising.',
      icon: <Monitor className="h-6 w-6" />
    },
    {
      title: 'Audience Analytics',
      description: 'Comprehensive analytics to understand your viewers and optimize your content strategy.',
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="TETRA TV"
      description="A complete end-to-end solution for broadcasting live and on-demand video content to global audiences with enterprise-grade reliability and quality."
      features={features}
      ctaText="Request a Demo"
    >
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Choose TETRA TV?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            TETRA TV powers some of the largest broadcasters and content creators with its robust, scalable platform. 
            Whether you're a major network or an independent creator, our technology delivers your content with 
            exceptional quality and reliability.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>4K Ultra HD streaming with adaptive bitrate</li>
            <li>End-to-end encryption and content protection</li>
            <li>AI-powered content recommendations</li>
            <li>Customizable white-label players and apps</li>
            <li>24/7 technical support</li>
          </ul>
          <p>
            Get started today and join the future of television broadcasting with TETRA TV's cutting-edge platform.
          </p>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
