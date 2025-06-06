import { Globe, Zap, Shield, BarChart, Cpu, Cloud } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function CdnServices() {
  const features = [
    {
      title: 'Global Network',
      description: '200+ points of presence worldwide for low-latency content delivery.',
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: 'Lightning Fast',
      description: 'Edge caching and optimization for instant content delivery.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'DDoS Protection',
      description: 'Enterprise-grade security to protect against attacks.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Real-time Analytics',
      description: 'Detailed insights into your content delivery performance.',
      icon: <BarChart className="h-6 w-6" />
    },
    {
      title: 'Edge Computing',
      description: 'Run code at the edge for maximum performance.',
      icon: <Cpu className="h-6 w-6" />
    },
    {
      title: 'Media Delivery',
      description: 'Optimized delivery for streaming and large file downloads.',
      icon: <Cloud className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="CDN Services"
      description="Deliver your content faster and more reliably with our global content delivery network."
      features={features}
      ctaText="Get Started"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Our CDN Services?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Our CDN services are designed to accelerate your website and application performance by 
            caching content at strategically located data centers around the world. This ensures that 
            your users enjoy fast loading times and a smooth experience, no matter where they're located.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Zap className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Improved Performance</h4>
                    <p className="text-sm text-gray-600">Dramatically reduce page load times</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Enhanced Security</h4>
                    <p className="text-sm text-gray-600">Protect against DDoS and other threats</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <BarChart className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Detailed Analytics</h4>
                    <p className="text-sm text-gray-600">Monitor performance and usage in real-time</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Use Cases</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Websites</h4>
                  <p className="text-sm text-gray-600">Accelerate static and dynamic content delivery</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Video Streaming</h4>
                  <p className="text-sm text-gray-600">Deliver high-quality video with low buffering</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Software Downloads</h4>
                  <p className="text-sm text-gray-600">Distribute large files quickly and reliably</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Boost Your Content Delivery?</h3>
            <p className="mb-4">
              Get started with our CDN services today and see the difference in performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/signup"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Start Free Trial
              </a>
              <a
                href="/pricing"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
