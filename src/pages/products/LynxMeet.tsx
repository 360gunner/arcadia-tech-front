import { Video, Users, Share2, MessageSquare, Lock, Zap } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function LynxMeet() {
  const features = [
    {
      title: 'HD Video Conferencing',
      description: 'Crystal clear HD video and audio for seamless communication.',
      icon: <Video className="h-6 w-6" />
    },
    {
      title: 'Large Meetings',
      description: 'Host meetings with up to 1000 participants and 10,000 viewers.',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Screen Sharing',
      description: 'Share your entire screen or specific applications with participants.',
      icon: <Share2 className="h-6 w-6" />
    },
    {
      title: 'Chat & Collaboration',
      description: 'Real-time messaging and file sharing during meetings.',
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      title: 'End-to-End Encryption',
      description: 'Enterprise-grade security to keep your meetings private.',
      icon: <Lock className="h-6 w-6" />
    },
    {
      title: 'Fast Performance',
      description: 'Low-latency technology for smooth, uninterrupted meetings.',
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Lynx Meet"
      description="Enterprise-grade video conferencing solution for teams of all sizes, featuring crystal clear audio and video, screen sharing, and real-time collaboration tools."
      features={features}
      ctaText="Start Free Trial"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Lynx Meet?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Lynx Meet is designed to bring teams together with reliable, high-quality video conferencing. 
            Whether you're hosting a team stand-up, client presentation, or company-wide town hall, 
            our platform provides all the tools you need for effective remote collaboration.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Video className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">HD Video & Audio</h4>
                    <p className="text-sm text-gray-600">Crisp, clear video and audio quality with noise suppression</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Share2 className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Screen Sharing</h4>
                    <p className="text-sm text-gray-600">Share your entire screen or specific applications</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Lock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Secure Meetings</h4>
                    <p className="text-sm text-gray-600">End-to-end encryption and meeting controls</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Use Cases</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Team Meetings</h4>
                  <p className="text-sm text-gray-600">Daily stand-ups and team collaborations</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Webinars</h4>
                  <p className="text-sm text-gray-600">Host large-scale online events</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Client Demos</h4>
                  <p className="text-sm text-gray-600">Showcase products and services</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Remote Work</h4>
                  <p className="text-sm text-gray-600">Stay connected with distributed teams</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Get Started?</h3>
            <p className="mb-4">
              Try Lynx Meet for free and experience the future of video conferencing. No credit card required.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/signup"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Sign Up Free
              </a>
              <a
                href="/demo"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
