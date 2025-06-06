import { Plane, MapPin, Clock, Users, Briefcase, Shield } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function AirCharter() {
  const features = [
    {
      title: 'On-Demand Flights',
      description: 'Book private flights whenever you need them, 24/7, with just a few clicks.',
      icon: <Plane className="h-6 w-6" />
    },
    {
      title: 'Global Network',
      description: 'Access to thousands of airports worldwide, including private terminals.',
      icon: <MapPin className="h-6 w-6" />
    },
    {
      title: 'Time-Saving',
      description: 'Avoid commercial airport hassles with private terminal access and quick boarding.',
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: 'Group Travel',
      description: 'Perfect for groups, with options ranging from light jets to large airliners.',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Business Focused',
      description: 'Productive cabins with WiFi, conference tables, and comfortable workspaces.',
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: 'Safety First',
      description: 'Stringent safety standards with experienced pilots and well-maintained aircraft.',
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Air Charter Services"
      description="Premium private air charter services offering flexibility, comfort, and efficiency for business and leisure travel."
      features={features}
      ctaText="Book a Flight"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Experience the Benefits of Private Air Travel</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Our Air Charter Services provide a superior alternative to commercial air travel, offering 
            unmatched convenience, privacy, and flexibility. Whether you're traveling for business or pleasure, 
            experience the luxury of flying on your schedule.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Our Fleet</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Light Jets</h4>
                  <p className="text-sm text-gray-600">Ideal for short to medium-range trips with up to 8 passengers.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Midsize Jets</h4>
                  <p className="text-sm text-gray-600">Perfect for transcontinental travel with enhanced comfort.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Heavy Jets</h4>
                  <p className="text-sm text-gray-600">Luxurious cabins for long-range international flights.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">VIP Airliners</h4>
                  <p className="text-sm text-gray-600">For large groups requiring premium travel experience.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Popular Routes</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">New York to Miami</h4>
                      <p className="text-sm text-gray-600">2h 30m flight time</p>
                    </div>
                    <span className="text-sm font-medium text-blue-600">From $8,500</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Los Angeles to Las Vegas</h4>
                      <p className="text-sm text-gray-600">1h 15m flight time</p>
                    </div>
                    <span className="text-sm font-medium text-blue-600">From $6,200</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Chicago to New York</h4>
                      <p className="text-sm text-gray-600">2h flight time</p>
                    </div>
                    <span className="text-sm font-medium text-blue-600">From $9,800</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Miami to Bahamas</h4>
                      <p className="text-sm text-gray-600">1h flight time</p>
                    </div>
                    <span className="text-sm font-medium text-blue-600">From $7,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Experience Private Air Travel?</h3>
            <p className="mb-4">
              Contact our flight advisors to book your next private flight or request a personalized quote.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/book-flight"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Book Now
              </a>
              <a
                href="/contact/air-charter"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Request Quote
              </a>
              <a
                href="tel:+18885551234"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Call: (888) 555-1234
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
