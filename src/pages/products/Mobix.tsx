import { Smartphone, Zap, Shield, Cpu, Battery, Wifi } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function Mobix() {
  const features = [
    {
      title: 'Powerful Performance',
      description: 'Latest generation processor for lightning-fast performance.',
      icon: <Cpu className="h-6 w-6" />
    },
    {
      title: 'All-Day Battery',
      description: 'Long-lasting battery that keeps up with your busy lifestyle.',
      icon: <Battery className="h-6 w-6" />
    },
    {
      title: '5G Connectivity',
      description: 'Blazing fast internet speeds with 5G support.',
      icon: <Wifi className="h-6 w-6" />
    },
    {
      title: 'Advanced Security',
      description: 'Biometric authentication and enterprise-grade security features.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Rapid Charging',
      description: 'Get hours of power with just minutes of charging.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Sleek Design',
      description: 'Premium materials and ergonomic design for ultimate comfort.',
      icon: <Smartphone className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Mobix"
      description="Experience the future of mobile technology with Mobix - the smartphone that combines cutting-edge features with elegant design."
      features={features}
      ctaText="Pre-order Now"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Mobix?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Mobix isn't just another smartphone - it's a powerful tool designed to enhance every aspect of your 
            digital life. With its stunning display, professional-grade camera system, and intelligent features, 
            Mobix helps you do more of what you love.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Cpu className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Processor</h4>
                    <p className="text-sm text-gray-600">Octa-core processor up to 3.2GHz</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Smartphone className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Display</h4>
                    <p className="text-sm text-gray-600">6.7" AMOLED, 120Hz refresh rate</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Battery className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Battery</h4>
                    <p className="text-sm text-gray-600">5000mAh with 65W fast charging</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Camera className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Camera</h4>
                    <p className="text-sm text-gray-600">108MP main + 12MP ultra-wide + 5MP macro</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Available Models</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Mobix Standard</h4>
                      <p className="text-sm text-gray-600">8GB RAM + 128GB Storage</p>
                    </div>
                    <span className="text-blue-600 font-medium">From $699</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-blue-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Mobix Pro</h4>
                      <p className="text-sm text-gray-600">12GB RAM + 256GB Storage</p>
                    </div>
                    <span className="text-blue-600 font-medium">From $899</span>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">BEST VALUE</span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Mobix Ultra</h4>
                      <p className="text-sm text-gray-600">16GB RAM + 512GB Storage</p>
                    </div>
                    <span className="text-blue-600 font-medium">From $1,099</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Experience Mobix?</h3>
            <p className="mb-4">
              Pre-order now and get free wireless earbuds worth $199. Limited time offer!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/preorder"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Pre-order Now
              </a>
              <a
                href="/specs"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                View Full Specifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
