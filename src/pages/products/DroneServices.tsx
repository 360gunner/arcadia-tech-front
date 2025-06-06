import { Camera, Map, Video, Shield, Zap, Send } from 'lucide-react'; // Using Send as an alternative to Drone
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function DroneServices() {
  const features = [
    {
      title: 'Aerial Photography',
      description: 'Stunning high-resolution aerial images for real estate, events, and more.',
      icon: <Camera className="h-6 w-6" />
    },
    {
      title: 'Video Production',
      description: 'Cinematic drone footage for commercials, films, and marketing content.',
      icon: <Video className="h-6 w-6" />
    },
    {
      title: 'Mapping & Surveying',
      description: 'Precise aerial mapping and 3D modeling for construction and land surveying.',
      icon: <Map className="h-6 w-6" />
    },
    {
      title: 'Fleet of Drones',
      description: 'State-of-the-art drones equipped with the latest camera technology.',
      icon: <Send className="h-6 w-6" />
    },
    {
      title: 'Rapid Response',
      description: 'Quick deployment for time-sensitive projects and emergency services.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Fully Insured',
      description: 'Fully licensed and insured operations with certified pilots.',
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Drone Services"
      description="Professional aerial photography, videography, and surveying services using state-of-the-art drone technology."
      features={features}
      ctaText="Schedule a Flight"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Our Drone Services?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Our professional drone services provide unique perspectives that were once only possible with expensive 
            helicopter rentals. With our fleet of advanced drones and certified pilots, we can capture stunning aerial 
            footage and data for a variety of applications.
          </p>
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Industries We Serve</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Real Estate & Construction</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Agriculture & Land Management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Film & Media Production</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Infrastructure Inspection</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Event Coverage</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Our Capabilities</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>4K/6K Aerial Videography</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Thermal Imaging</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>LiDAR Scanning</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Orthomosaic Maps</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>3D Modeling</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Take Your Project to New Heights?</h3>
            <p className="mb-4">
              Contact us today to discuss your project requirements and get a free consultation with one of our drone experts.
            </p>
            <a
              href="/contact/drone-services"
              className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
