import { MessageSquare, Zap, Cpu, GitBranch, BarChart, Settings } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function ChatbotPlatform() {
  const features = [
    {
      title: 'AI-Powered Chat',
      description: 'Natural language processing for human-like conversations.',
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      title: 'Multi-Platform',
      description: 'Deploy on websites, mobile apps, and messaging platforms.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Machine Learning',
      description: 'Improves responses over time with machine learning.',
      icon: <Cpu className="h-6 w-6" />
    },
    {
      title: 'Integration',
      description: 'Connect with popular CRMs and business tools.',
      icon: <GitBranch className="h-6 w-6" />
    },
    {
      title: 'Analytics',
      description: 'Track performance and user interactions.',
      icon: <BarChart className="h-6 w-6" />
    },
    {
      title: 'Customization',
      description: 'Fully customizable to match your brand.',
      icon: <Settings className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="AI Chatbot Platform"
      description="Build and deploy intelligent chatbots that understand and engage your customers 24/7."
      features={features}
      ctaText="Get Started"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Our Chatbot Platform?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Our AI Chatbot Platform helps businesses automate customer service, generate leads, and provide instant 
            support across multiple channels. With advanced natural language processing and machine learning 
            capabilities, our chatbots deliver human-like interactions that improve customer satisfaction.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Use Cases</h3>
              <div className="space-y-4">
                {[
                  'Customer Support',
                  'Lead Generation',
                  'E-commerce Assistance',
                  'Appointment Scheduling',
                  'FAQ Automation',
                  'Product Recommendations'
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center bg-white p-3 rounded-lg border border-gray-100">
                    <div className="bg-blue-100 p-1 rounded-full mr-3">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Pricing Plans</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Starter</h4>
                  <p className="text-sm text-gray-600 mb-2">Perfect for small businesses</p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">$29</span>
                    <span className="text-gray-500 text-sm ml-1">/month</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      1,000 conversations/month
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Basic Analytics
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-2 border-blue-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Professional</h4>
                      <p className="text-sm text-gray-600 mb-2">For growing businesses</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">POPULAR</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">$99</span>
                    <span className="text-gray-500 text-sm ml-1">/month</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      10,000 conversations/month
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Advanced Analytics
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      CRM Integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Automate Your Customer Service?</h3>
            <p className="mb-4">
              Start your 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/signup"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Start Free Trial
              </a>
              <a
                href="/demo"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
