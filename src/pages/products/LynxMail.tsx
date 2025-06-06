import { Mail, Shield, Search, Inbox, Clock, Zap } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function LynxMail() {
  const features = [
    {
      title: 'Secure Email',
      description: 'End-to-end encrypted email to keep your communications private and secure.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Smart Inbox',
      description: 'AI-powered organization that helps you focus on what matters most.',
      icon: <Inbox className="h-6 w-6" />
    },
    {
      title: 'Advanced Search',
      description: 'Find any email, attachment, or conversation in seconds with powerful search capabilities.',
      icon: <Search className="h-6 w-6" />
    },
    {
      title: 'Custom Domains',
      description: 'Use your own domain for a professional email address that matches your brand.',
      icon: <Mail className="h-6 w-6" />
    },
    {
      title: 'Scheduled Sending',
      description: 'Compose now, send later with scheduled email delivery.',
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: 'Lightning Fast',
      description: 'Experience blazing fast email with our optimized infrastructure.',
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Lynx Mail"
      description="A secure, private, and ad-free email service with powerful features to help you stay productive and in control of your communications."
      features={features}
      ctaText="Get Started"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Lynx Mail?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Lynx Mail is built with privacy and security as our top priorities. Unlike other email providers that 
            scan your emails to serve you ads, we believe your inbox should be a private space. Our end-to-end 
            encryption ensures that only you and your recipients can read your messages.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Security Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">End-to-End Encryption</h4>
                    <p className="text-sm text-gray-600">Your emails are encrypted before they leave your device</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Lock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Zero-Access Encryption</h4>
                    <p className="text-sm text-gray-600">We can't read your emails, even if we wanted to</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <ShieldOff className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">No Tracking</h4>
                    <p className="text-sm text-gray-600">We don't track your activity or scan your emails</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Productivity Features</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Smart Filters</h4>
                  <p className="text-sm text-gray-600">Automatically sort and prioritize your inbox</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Undo Send</h4>
                  <p className="text-sm text-gray-600">Recall emails within 30 seconds of sending</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Snooze</h4>
                  <p className="text-sm text-gray-600">Temporarily hide emails until you need them</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Templates</h4>
                  <p className="text-sm text-gray-600">Save time with reusable email templates</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Experience Better Email?</h3>
            <p className="mb-4">
              Join thousands of users who have taken back control of their inbox with Lynx Mail.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/signup"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Create Free Account
              </a>
              <a
                href="/pricing"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                View Pricing Plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
