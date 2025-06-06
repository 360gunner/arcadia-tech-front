import { Building2, PlaneLanding, Users, Shield, Clock, Wifi } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function AirportTech() {
  const features = [
    {
      title: 'Passenger Processing',
      description: 'Streamlined check-in, bag drop, and boarding processes for faster passenger flow.',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Baggage Handling',
      description: 'Automated baggage tracking and sorting systems to minimize lost luggage.',
      icon: <Building2 className="h-6 w-6" />
    },
    {
      title: 'Runway Management',
      description: 'Advanced systems for optimal runway utilization and ground traffic control.',
      icon: <PlaneLanding className="h-6 w-6" />
    },
    {
      title: 'Security Solutions',
      description: 'Cutting-edge security screening and surveillance technologies.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Real-time Monitoring',
      description: 'Comprehensive dashboards for monitoring all airport operations in real-time.',
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: 'Digital Infrastructure',
      description: 'High-speed connectivity and IoT solutions for smart airport operations.',
      icon: <Wifi className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Airport Technology Solutions"
      description="Innovative technology solutions designed to enhance airport operations, security, and passenger experience."
      features={features}
      ctaText="Request Consultation"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Transforming Airport Operations</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Our Airport Technology Solutions are designed to address the complex challenges of modern air travel. 
            From check-in to boarding, baggage handling to security, we provide integrated systems that improve 
            efficiency, enhance security, and create a seamless passenger experience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Enhanced Passenger Experience</h4>
                    <p className="text-sm text-gray-600">Reduce wait times and improve satisfaction with self-service solutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Improved Security</h4>
                    <p className="text-sm text-gray-600">Advanced screening and surveillance for safer travel.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Operational Efficiency</h4>
                    <p className="text-sm text-gray-600">Streamline processes and reduce costs with automation.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Our Solutions</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Common-Use Systems</h4>
                  <p className="text-sm text-gray-600">Flexible, shared-use workstations and kiosks.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Biometric Processing</h4>
                  <p className="text-sm text-gray-600">Facial recognition and automated border control.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Resource Management</h4>
                  <p className="text-sm text-gray-600">Optimize staff and gate assignments in real-time.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Modernize Your Airport?</h3>
            <p className="mb-4">
              Our team of aviation technology experts is ready to help you implement solutions that will 
              transform your airport operations and passenger experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact/airport-tech"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Contact Our Team
              </a>
              <a
                href="/solutions/airport"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
