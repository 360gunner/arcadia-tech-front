import { Server, Shield, Zap, Database, Cpu, Cloud, Check } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function CloudHosting() {
  const features = [
    {
      title: 'High Performance',
      description: 'SSD-powered servers for lightning-fast performance.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: '99.9% Uptime',
      description: 'Enterprise-grade reliability with guaranteed uptime.',
      icon: <Server className="h-6 w-6" />
    },
    {
      title: 'Advanced Security',
      description: 'DDoS protection and enterprise-grade firewalls.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Managed Services',
      description: '24/7 monitoring and support from our experts.',
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: 'Scalable Resources',
      description: 'Easily scale your resources up or down as needed.',
      icon: <Cpu className="h-6 w-6" />
    },
    {
      title: 'Database Hosting',
      description: 'Managed database solutions for optimal performance.',
      icon: <Database className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Cloud Hosting"
      description="Powerful, reliable, and scalable cloud hosting solutions for businesses of all sizes."
      features={features}
      ctaText="Get Started"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Our Cloud Hosting?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Our cloud hosting solutions are designed to provide the perfect balance of performance, 
            security, and scalability. Whether you're running a small blog or a high-traffic enterprise 
            application, we have the right hosting solution for your needs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Hosting Plans</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Starter</h4>
                  <p className="text-sm text-gray-600 mb-2">Perfect for small websites and blogs</p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">$4.99</span>
                    <span className="text-gray-500 text-sm ml-1">/month</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      1 Website
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      10GB SSD Storage
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Free SSL Certificate
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-2 border-blue-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Business</h4>
                      <p className="text-sm text-gray-600 mb-2">Ideal for growing businesses</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">POPULAR</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">$9.99</span>
                    <span className="text-gray-500 text-sm ml-1">/month</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Unlimited Websites
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      50GB SSD Storage
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Free SSL Certificate
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Enterprise</h4>
                  <p className="text-sm text-gray-600 mb-2">For high-traffic websites</p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">$24.99</span>
                    <span className="text-gray-500 text-sm ml-1">/month</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Unlimited Websites
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      200GB SSD Storage
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Free SSL & CDN
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Free Migration</h4>
                  <p className="text-sm text-gray-600">Let our experts handle your website migration for free</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">24/7 Support</h4>
                  <p className="text-sm text-gray-600">Our team is always here to help you with any issues</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Daily Backups</h4>
                  <p className="text-sm text-gray-600">Automatic daily backups to keep your data safe</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">One-Click Installs</h4>
                  <p className="text-sm text-gray-600">Install popular applications with just one click</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">Not Sure Which Plan is Right for You?</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Our hosting experts can help you choose the perfect plan for your needs.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Get Started?</h3>
            <p className="mb-4">
              Choose the perfect hosting plan for your website and get started today.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/signup"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Get Started
              </a>
              <a
                href="/hosting/compare"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Compare Plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
