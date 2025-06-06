import { Mic, Zap, Code, Cpu, GitBranch, BarChart } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function VoiceApis() {
  const features = [
    {
      title: 'Text-to-Speech',
      description: 'Convert text to natural-sounding speech in multiple languages.',
      icon: <Mic className="h-6 w-6" />
    },
    {
      title: 'Speech-to-Text',
      description: 'Accurate speech recognition with support for various languages.',
      icon: <Mic className="h-6 w-6" />
    },
    {
      title: 'Voice Biometrics',
      description: 'Secure authentication using voice recognition technology.',
      icon: <Cpu className="h-6 w-6" />
    },
    {
      title: 'Real-time Processing',
      description: 'Low-latency voice processing for interactive applications.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Custom Voices',
      description: 'Create custom voice models for brand consistency.',
      icon: <Code className="h-6 w-6" />
    },
    {
      title: 'Analytics',
      description: 'Detailed insights into voice interactions and usage.',
      icon: <BarChart className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Voice APIs"
      description="Powerful voice recognition and synthesis APIs to add voice capabilities to your applications."
      features={features}
      ctaText="Get API Key"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Our Voice APIs?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Our Voice APIs provide developers with the tools they need to build voice-enabled applications 
            quickly and easily. With support for multiple languages and advanced features like custom voice 
            models, you can create natural and engaging voice experiences for your users.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Mic className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">High Accuracy</h4>
                    <p className="text-sm text-gray-600">Industry-leading speech recognition accuracy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Zap className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Low Latency</h4>
                    <p className="text-sm text-gray-600">Fast response times for real-time applications</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <GitBranch className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Easy Integration</h4>
                    <p className="text-sm text-gray-600">Simple REST APIs and client libraries</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Pricing</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Free Tier</h4>
                  <p className="text-sm text-gray-600 mb-2">Perfect for testing and small projects</p>
                  <span className="text-2xl font-bold">$0</span>
                  <span className="text-gray-500 text-sm">/month</span>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      1,000 requests/month
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Basic support
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-2 border-blue-500">
                  <h4 className="font-medium">Pro</h4>
                  <p className="text-sm text-gray-600 mb-2">For growing applications</p>
                  <span className="text-2xl font-bold">$49</span>
                  <span className="text-gray-500 text-sm">/month</span>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      10,000 requests/month
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Priority support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Add Voice to Your Application?</h3>
            <p className="mb-4">
              Sign up today and get started with our Voice APIs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/signup"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Get API Key
              </a>
              <a
                href="/docs/voice-apis"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
