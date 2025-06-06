import { BrainCircuit, Bot, Code2, Shield, Zap, BarChart } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function TetraAi() {
  const features = [
    {
      title: 'Advanced AI Models',
      description: 'State-of-the-art machine learning models for various applications including NLP and computer vision.',
      icon: <BrainCircuit className="h-6 w-6" />
    },
    {
      title: 'Chatbot Platform',
      description: 'Build intelligent, conversational AI agents with our no-code chatbot builder.',
      icon: <Bot className="h-6 w-6" />
    },
    {
      title: 'Developer Tools',
      description: 'Comprehensive APIs and SDKs to integrate AI capabilities into your applications.',
      icon: <Code2 className="h-6 w-6" />
    },
    {
      title: 'Data Privacy',
      description: 'Enterprise-grade security and privacy controls to protect your data.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Real-time Processing',
      description: 'Low-latency AI inference for time-sensitive applications.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Analytics Dashboard',
      description: 'Monitor and analyze your AI models\' performance and usage metrics.',
      icon: <BarChart className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="TETRA AI"
      description="Powerful artificial intelligence solutions that help businesses automate processes, gain insights, and deliver exceptional customer experiences."
      features={features}
      ctaText="Explore AI Solutions"
    >
      <div className="mt-12 bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Transform Your Business with AI</h2>
          <div className="prose max-w-none">
            <p className="mb-6">
              TETRA AI provides cutting-edge artificial intelligence solutions that help businesses of all sizes 
              leverage the power of machine learning and natural language processing. Our platform makes it easy to 
              integrate AI capabilities into your existing workflows and applications.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Capabilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-0.5">
                      <BrainCircuit className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Natural Language Processing</h4>
                      <p className="text-sm text-gray-600">Understand and generate human-like text with our advanced NLP models.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-0.5">
                      <Bot className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Conversational AI</h4>
                      <p className="text-sm text-gray-600">Build intelligent chatbots and virtual assistants that understand context.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-0.5">
                      <BarChart className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Predictive Analytics</h4>
                      <p className="text-sm text-gray-600">Gain insights and make data-driven decisions with our predictive models.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h4 className="font-medium mb-1">Healthcare</h4>
                    <p className="text-sm text-gray-600">Diagnostic assistance and patient care optimization</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h4 className="font-medium mb-1">Finance</h4>
                    <p className="text-sm text-gray-600">Fraud detection and risk assessment</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h4 className="font-medium mb-1">Retail</h4>
                    <p className="text-sm text-gray-600">Personalized recommendations and inventory management</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h4 className="font-medium mb-1">Customer Service</h4>
                    <p className="text-sm text-gray-600">AI-powered support and ticket routing</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Get Started with TETRA AI</h3>
              <p className="mb-4">
                Ready to harness the power of AI for your business? Our team of experts is here to help you 
                implement the right solutions for your specific needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact/ai-consultation"
                  className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="/ai-documentation"
                  className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  View Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
