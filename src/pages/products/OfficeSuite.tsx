import { FileText, Table, BarChart2, Presentation, FileSpreadsheet, Cloud } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function OfficeSuite() {
  const features = [
    {
      title: 'Word Processing',
      description: 'Create and edit professional documents with advanced formatting options.',
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: 'Spreadsheets',
      description: 'Powerful data analysis and visualization tools for complex calculations.',
      icon: <Table className="h-6 w-6" />
    },
    {
      title: 'Presentations',
      description: 'Design stunning presentations with professional templates and animations.',
      icon: <Presentation className="h-6 w-6" />
    },
    {
      title: 'Cloud Storage',
      description: 'Access and edit your files from anywhere with secure cloud storage.',
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: 'Data Visualization',
      description: 'Create insightful charts and graphs to represent your data effectively.',
      icon: <BarChart2 className="h-6 w-6" />
    },
    {
      title: 'Compatibility',
      description: 'Works seamlessly with all major office file formats including Microsoft Office.',
      icon: <FileSpreadsheet className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Lynx Office Suite"
      description="A comprehensive office productivity suite with all the tools you need to create, edit, and collaborate on documents, spreadsheets, and presentations."
      features={features}
      ctaText="Get Started for Free"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Lynx Office Suite?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Lynx Office Suite provides a powerful, yet easy-to-use set of productivity tools that help you work 
            more efficiently. Whether you're a student, professional, or business, our suite has everything you 
            need to create professional documents, analyze data, and deliver impactful presentations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Cloud className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Cloud-Based</h4>
                    <p className="text-sm text-gray-600">Access your files from any device, anywhere</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Real-Time Collaboration</h4>
                    <p className="text-sm text-gray-600">Work together with team members simultaneously</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Lock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Enterprise Security</h4>
                    <p className="text-sm text-gray-600">Bank-level encryption and access controls</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Pricing Plans</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Free</h4>
                  <p className="text-sm text-gray-600 mb-2">Basic features for personal use</p>
                  <span className="text-2xl font-bold">$0</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-blue-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Pro</h4>
                      <p className="text-sm text-gray-600 mb-2">Advanced features for professionals</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">POPULAR</span>
                  </div>
                  <div>
                    <span className="text-2xl font-bold">$9.99</span>
                    <span className="text-gray-500 text-sm">/month</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Business</h4>
                  <p className="text-sm text-gray-600 mb-2">Complete solution for teams</p>
                  <span className="text-2xl font-bold">$24.99</span>
                  <span className="text-gray-500 text-sm">/user/month</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Get Started?</h3>
            <p className="mb-4">
              Join millions of users who trust Lynx Office Suite for their productivity needs. 
              No credit card required to start your free trial.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/signup"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Start Free Trial
              </a>
              <a
                href="/features"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                View All Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
