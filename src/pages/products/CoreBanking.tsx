import { Banknote, Shield, Clock, Users, BarChart, Zap } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function CoreBanking() {
  const features = [
    {
      title: 'Account Management',
      description: 'Comprehensive tools for managing customer accounts and transactions.',
      icon: <Banknote className="h-6 w-6" />
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security with multi-factor authentication and fraud detection.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: '24/7 Availability',
      description: 'Round-the-clock banking services with 99.99% uptime guarantee.',
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: 'Multi-Channel Banking',
      description: 'Seamless experience across web, mobile, and branch operations.',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Advanced Analytics',
      description: 'Powerful insights into customer behavior and business performance.',
      icon: <BarChart className="h-6 w-6" />
    },
    {
      title: 'Rapid Deployment',
      description: 'Quick implementation with minimal disruption to your operations.',
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Core Banking Solution"
      description="A comprehensive, cloud-based core banking platform that powers financial institutions of all sizes with robust, scalable, and secure banking operations."
      features={features}
      ctaText="Request Demo"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Transform Your Banking Operations</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Our Core Banking Solution is designed to meet the evolving needs of modern financial institutions. 
            With a modular architecture and open APIs, it enables banks to quickly adapt to market changes, 
            launch new products, and deliver exceptional customer experiences.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Capabilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Banknote className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Deposits & Loans</h4>
                    <p className="text-sm text-gray-600">Manage all types of deposit accounts and loan products</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Compliance & Risk</h4>
                    <p className="text-sm text-gray-600">Built-in regulatory compliance and risk management</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <BarChart className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Business Intelligence</h4>
                    <p className="text-sm text-gray-600">Real-time dashboards and reporting tools</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Benefits</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Reduced Costs</h4>
                  <p className="text-sm text-gray-600">Lower total cost of ownership with cloud-based infrastructure</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Faster Time-to-Market</h4>
                  <p className="text-sm text-gray-600">Launch new products and services in weeks, not months</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Scalability</h4>
                  <p className="text-sm text-gray-600">Scale operations seamlessly as your business grows</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Modernize Your Core Banking?</h3>
            <p className="mb-4">
              Schedule a personalized demo to see how our Core Banking Solution can transform your financial institution.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/demo/core-banking"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Request Demo
              </a>
              <a
                href="/contact/sales"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
