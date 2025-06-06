import { Plane, Gauge, Map, Cloud, Shield, Zap } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function FlightSoftware() {
  const features = [
    {
      title: 'Flight Planning',
      description: 'Comprehensive flight planning tools with real-time weather integration and airspace information.',
      icon: <Map className="h-6 w-6" />
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time aircraft performance metrics and fuel efficiency tracking.',
      icon: <Gauge className="h-6 w-6" />
    },
    {
      title: 'Fleet Management',
      description: 'Centralized management of your entire aircraft fleet with maintenance scheduling.',
      icon: <Plane className="h-6 w-6" />
    },
    {
      title: 'Cloud Integration',
      description: 'Access flight data and analytics from anywhere with secure cloud synchronization.',
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: 'Safety Features',
      description: 'Advanced terrain awareness, traffic alerts, and emergency procedures.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Quick Updates',
      description: 'Regular software updates with the latest aviation databases and features.',
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Flight Software"
      description="Advanced flight management and operations software for modern aviation professionals."
      features={features}
      ctaText="Request Demo"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Streamline Your Flight Operations</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Our Flight Software is designed by aviation professionals to meet the demanding needs of modern flight operations. 
            Whether you're managing a single aircraft or an entire fleet, our solution provides the tools you need for 
            efficient and compliant operations.
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
                    <h4 className="font-medium">Efficiency</h4>
                    <p className="text-sm text-gray-600">Reduce flight planning time by up to 70% with our intuitive interface.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Safety</h4>
                    <p className="text-sm text-gray-600">Built-in safety features and compliance checks for worry-free operations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Cloud className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Accessibility</h4>
                    <p className="text-sm text-gray-600">Access your flight data from any device, anywhere in the world.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Airlines</h4>
                  <p className="text-sm text-gray-600">Streamline operations for commercial carriers</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Charter</h4>
                  <p className="text-sm text-gray-600">Efficient management for on-demand flights</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Cargo</h4>
                  <p className="text-sm text-gray-600">Optimize logistics and tracking</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Training</h4>
                  <p className="text-sm text-gray-600">Tools for flight schools and instructors</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Transform Your Flight Operations?</h3>
            <p className="mb-4">
              Schedule a personalized demo to see how our Flight Software can benefit your organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/demo/flight-software"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Schedule a Demo
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
