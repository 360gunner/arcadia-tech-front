import { Code, Cpu, Zap, GitBranch, Server, Database } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function DeveloperSdks() {
  const features = [
    {
      title: 'Multiple Languages',
      description: 'SDKs available for all major programming languages and platforms.',
      icon: <Code className="h-6 w-6" />
    },
    {
      title: 'High Performance',
      description: 'Optimized for speed and efficiency in production environments.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'AI & ML Integration',
      description: 'Pre-built integrations with popular AI and machine learning frameworks.',
      icon: <Cpu className="h-6 w-6" />
    },
    {
      title: 'Version Control',
      description: 'Seamless integration with Git and other version control systems.',
      icon: <GitBranch className="h-6 w-6" />
    },
    {
      title: 'Cloud Ready',
      description: 'Deploy easily on any cloud provider or on-premises.',
      icon: <Server className="h-6 w-6" />
    },
    {
      title: 'Database Support',
      description: 'Compatible with SQL, NoSQL, and other database technologies.',
      icon: <Database className="h-6 w-6" />
    }
  ];

  const sdks = [
    { 
      name: 'JavaScript/TypeScript', 
      icon: 'JS',
      version: 'v3.2.1',
      docs: '/docs/sdks/js',
      description: 'For web and Node.js applications'
    },
    { 
      name: 'Python', 
      icon: '🐍',
      version: 'v2.8.3',
      docs: '/docs/sdks/python',
      description: 'For data science and backend services'
    },
    { 
      name: 'Java', 
      icon: '☕',
      version: 'v4.1.0',
      docs: '/docs/sdks/java',
      description: 'For enterprise applications'
    },
    { 
      name: 'Go', 
      icon: '🐹',
      version: 'v1.5.2',
      docs: '/docs/sdks/go',
      description: 'For high-performance services'
    },
    { 
      name: '.NET', 
      icon: '🔷',
      version: 'v5.0.1',
      docs: '/docs/sdks/dotnet',
      description: 'For Windows and cross-platform apps'
    },
    { 
      name: 'Swift', 
      icon: '🍏',
      version: 'v2.3.0',
      docs: '/docs/sdks/swift',
      description: 'For iOS and macOS applications'
    },
    { 
      name: 'Kotlin', 
      icon: '📱',
      version: 'v2.1.0',
      docs: '/docs/sdks/kotlin',
      description: 'For Android development'
    },
    { 
      name: 'PHP', 
      icon: '🐘',
      version: 'v3.0.4',
      docs: '/docs/sdks/php',
      description: 'For web applications'
    },
  ];

  return (
    <ProductPageTemplate
      title="Developer SDKs"
      description="Powerful software development kits to help you build better applications, faster. Our SDKs are designed to be intuitive, well-documented, and easy to integrate."
      features={features}
      ctaText="Get Started"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Available SDKs</h2>
        <div className="prose max-w-none">
          <p className="mb-6">
            Choose from our selection of SDKs to integrate our platform's capabilities into your applications. 
            Each SDK comes with comprehensive documentation and code examples to get you started quickly.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {sdks.map((sdk, index) => (
              <div key={index} className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">{sdk.icon}</div>
                  <h3 className="text-lg font-semibold">{sdk.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">{sdk.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{sdk.version}</span>
                  <a 
                    href={sdk.docs} 
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Documentation →
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Getting Started</h3>
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <p className="mb-4">
                  Follow these simple steps to integrate our SDK into your project:
                </p>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full mr-2 mt-0.5">1</span>
                    <span>Install the SDK using your preferred package manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full mr-2 mt-0.5">2</span>
                    <span>Import the library into your project</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full mr-2 mt-0.5">3</span>
                    <span>Initialize the client with your API key</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full mr-2 mt-0.5">4</span>
                    <span>Start making API calls in your application</span>
                  </li>
                </ol>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Developer Resources</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium mb-1">API Reference</h4>
                  <p className="text-sm text-gray-600 mb-2">Comprehensive documentation for all API endpoints</p>
                  <a href="/docs/api" className="text-blue-600 text-sm hover:underline">View API Reference →</a>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium mb-1">Code Samples</h4>
                  <p className="text-sm text-gray-600 mb-2">Example projects and code snippets</p>
                  <a href="/docs/examples" className="text-blue-600 text-sm hover:underline">View Examples →</a>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium mb-1">Support</h4>
                  <p className="text-sm text-gray-600 mb-2">Get help from our developer community</p>
                  <a href="/support" className="text-blue-600 text-sm hover:underline">Get Support →</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Get Started?</h3>
            <p className="mb-4">
              Sign up for a free developer account and get your API keys to start building with our platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/signup"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Sign Up Free
              </a>
              <a
                href="/docs/quickstart"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Quickstart Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
