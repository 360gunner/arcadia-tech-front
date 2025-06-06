import { Server, Cpu, Database, Shield, Zap, GitBranch } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function LynxCloud() {
  const features = [
    {
      title: 'Elastic Compute',
      description: 'Scalable virtual machines with flexible configurations for any workload.',
      icon: <Server className="h-6 w-6" />
    },
    {
      title: 'Managed Databases',
      description: 'Fully managed database services with automated backups and scaling.',
      icon: <Database className="h-6 w-6" />
    },
    {
      title: 'High Performance',
      description: 'Enterprise-grade infrastructure with SSD storage and high-speed networking.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Global Infrastructure',
      description: 'Data centers worldwide for low-latency access to your applications.',
      icon: <GitBranch className="h-6 w-6" />
    },
    {
      title: 'Advanced Security',
      description: 'Enterprise-grade security with encryption and compliance certifications.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Powerful Processing',
      description: 'High-performance CPUs and GPUs for demanding workloads.',
      icon: <Cpu className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Lynx Cloud"
      description="A powerful, secure, and scalable cloud computing platform that provides the infrastructure and tools to build, deploy, and scale applications with ease."
      features={features}
      ctaText="Start Building in the Cloud"
    >
      <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Lynx Cloud?</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Lynx Cloud provides a comprehensive suite of cloud services designed to help businesses of all sizes 
              innovate faster, reduce IT costs, and scale efficiently. Our platform is built on a foundation of 
              security, reliability, and performance.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>99.99% uptime SLA for core services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Pay-as-you-go pricing with no upfront costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>24/7 technical support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Global content delivery network</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Use Cases</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Web and mobile applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Big data and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>AI and machine learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Media streaming and content delivery</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Getting Started</h3>
              <p className="mb-4">
                Sign up today and receive $200 in free credits to explore Lynx Cloud. No credit card required to get started.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/signup"
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
                >
                  Create Free Account
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
      </div>
    </ProductPageTemplate>
  );
}
