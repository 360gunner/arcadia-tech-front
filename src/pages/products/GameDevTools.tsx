import { Code, Box, Cpu, GitBranch, Zap, Server } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function GameDevTools() {
  const features = [
    {
      title: 'Game Engine',
      description: 'Powerful and flexible game development engine with visual scripting.',
      icon: <Code className="h-6 w-6" />
    },
    {
      title: 'Asset Library',
      description: 'Extensive library of 3D models, textures, and sound effects.',
      icon: <Box className="h-6 w-6" />
    },
    {
      title: 'AI Tools',
      description: 'Advanced AI behavior trees and pathfinding solutions.',
      icon: <Cpu className="h-6 w-6" />
    },
    {
      title: 'Version Control',
      description: 'Built-in Git integration for seamless collaboration.',
      icon: <GitBranch className="h-6 w-6" />
    },
    {
      title: 'Performance',
      description: 'Optimization tools for maximum game performance.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Multiplayer',
      description: 'Easy-to-implement networking solutions.',
      icon: <Server className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Game Development Tools"
      description="Everything you need to create amazing games. From indie developers to AAA studios, our tools power the next generation of gaming."
      features={features}
      ctaText="Start Creating"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Our Game Dev Tools?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Our game development tools are designed to streamline your workflow and bring your creative vision to life. 
            Whether you're a solo developer or part of a large studio, we have the tools you need to succeed.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Code className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Visual Scripting</h4>
                    <p className="text-sm text-gray-600">Create game logic without writing code</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Box className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Asset Store</h4>
                    <p className="text-sm text-gray-600">Thousands of ready-to-use assets</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Server className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Cloud Builds</h4>
                    <p className="text-sm text-gray-600">Automated builds and testing</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Pricing</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Indie</h4>
                  <p className="text-sm text-gray-600 mb-2">Perfect for solo developers</p>
                  <span className="text-2xl font-bold">$19</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-blue-500">
                  <h4 className="font-medium">Studio</h4>
                  <p className="text-sm text-gray-600 mb-2">For small to medium teams</p>
                  <span className="text-2xl font-bold">$99</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Enterprise</h4>
                  <p className="text-sm text-gray-600 mb-2">For large studios</p>
                  <span className="text-2xl font-bold">Custom</span>
                  <span className="text-gray-500 text-sm"> pricing</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Start Developing?</h3>
            <p className="mb-4">
              Download our tools today and start creating amazing games.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/download"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Download Now
              </a>
              <a
                href="/docs"
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
