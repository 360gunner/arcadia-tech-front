import { Globe, Upload, Shield, BarChart2, Zap, Layers } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function DigitalContentDistribution() {
  const features = [
    {
      title: 'Global CDN',
      description: 'Deliver content with low latency using our worldwide content delivery network.',
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: 'Easy Upload',
      description: 'Simple and intuitive interface for uploading and managing your digital content.',
      icon: <Upload className="h-6 w-6" />
    },
    {
      title: 'Content Protection',
      description: 'Secure your content with DRM and access controls.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Analytics',
      description: 'Track content performance and user engagement with detailed analytics.',
      icon: <BarChart2 className="h-6 w-6" />
    },
    {
      title: 'Fast Delivery',
      description: 'High-speed content delivery with optimized caching strategies.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Scalable Storage',
      description: 'Store and manage any amount of content with our scalable storage solutions.',
      icon: <Layers className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Digital Content Distribution"
      description="Efficiently distribute your digital content to a global audience with our powerful content delivery platform."
      features={features}
      ctaText="Start Distributing"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Our Content Distribution?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Our digital content distribution platform is designed to handle all your content delivery needs 
            with enterprise-grade reliability and performance. Whether you're distributing videos, software, 
            or other digital assets, we've got you covered.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Global content delivery network with 200+ points of presence</li>
            <li>Support for all file types and sizes</li>
            <li>Advanced caching and optimization</li>
            <li>Real-time analytics and reporting</li>
            <li>API access for seamless integration</li>
          </ul>
          <p>
            Get started today and take your content distribution to the next level with our powerful and 
            easy-to-use platform.
          </p>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
