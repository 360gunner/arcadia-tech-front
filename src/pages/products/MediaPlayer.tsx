import { Monitor, Smartphone, Tablet, Tv, Code, Download } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function MediaPlayer() {
  const features = [
    {
      title: 'Cross-Platform',
      description: 'Seamless playback experience across all devices including web, mobile, and smart TVs.',
      icon: <Monitor className="h-6 w-6" />
    },
    {
      title: 'Adaptive Streaming',
      description: 'Automatic quality adjustment based on the viewer\'s internet connection speed.',
      icon: <Download className="h-6 w-6" />
    },
    {
      title: 'Customizable UI',
      description: 'Fully customizable player interface to match your brand identity.',
      icon: <Code className="h-6 w-6" />
    },
    {
      title: 'Multi-Device Support',
      description: 'Native support for all major platforms including iOS, Android, and desktop browsers.',
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: 'Offline Playback',
      description: 'Download content for offline viewing with digital rights management.',
      icon: <Tablet className="h-6 w-6" />
    },
    {
      title: 'TV Optimization',
      description: 'Specialized interface and controls optimized for television screens.',
      icon: <Tv className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Lynx Media Player"
      description="A powerful, customizable media player that delivers exceptional video and audio experiences across all devices and platforms."
      features={features}
      ctaText="Get Started"
    >
      <div className="mt-12 bg-purple-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Lynx Media Player?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            The Lynx Media Player is engineered for performance, reliability, and the best possible user experience. 
            Whether you're a content creator, broadcaster, or business, our player provides the tools you need to 
            engage your audience with stunning media playback.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>4K and HDR video support</li>
            <li>Low-latency live streaming</li>
            <li>Advanced analytics and viewer insights</li>
            <li>Ad insertion and monetization options</li>
            <li>DRM and content protection</li>
            <li>Accessibility features including closed captions and audio descriptions</li>
          </ul>
          <p>
            Integrate the Lynx Media Player with your existing infrastructure using our comprehensive API and 
            developer documentation, or use our no-code solutions to get started quickly.
          </p>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
