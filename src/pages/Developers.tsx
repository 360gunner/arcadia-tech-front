import { Code, Terminal, GitBranch, BookOpen, Cpu, Zap } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';

type ResourceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
};

const ResourceCard = ({ icon, title, description, link }: ResourceCardProps) => (
  <a
    href={link}
    className="block p-6 border rounded-lg hover:border-primary/50 hover:shadow-md transition-all h-full"
  >
    <div className="flex items-start">
      <div className="p-2 bg-primary/10 text-primary rounded-lg mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </a>
);

export default function Developers() {
  const resources = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: 'API Documentation',
      description: 'Comprehensive guides and references for all our APIs.',
      link: '/developers/docs',
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: 'SDKs & Plugins',
      description: 'Client libraries and plugins for popular programming languages.',
      link: '/developers/sdks',
    },
    {
      icon: <Terminal className="h-5 w-5" />,
      title: 'Developer Portal',
      description: 'Access to developer tools, dashboards, and analytics.',
      link: '/developers/portal',
    },
    {
      icon: <GitBranch className="h-5 w-5" />,
      title: 'Open Source Projects',
      description: 'Contribute to our open source projects and libraries.',
      link: 'https://github.com/tetracode-tech',
      external: true,
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: 'Test Environments',
      description: 'Sandbox and testing environments for development.',
      link: '/developers/sandbox',
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: 'Quickstarts',
      description: 'Get started quickly with our step-by-step tutorials.',
      link: '/developers/quickstarts',
    },
  ];

  return (
    <PageTemplate
      title="Developer Resources"
      description="Everything you need to build amazing applications with TETRACODE technology."
    >
      <div className="space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>

        <div className="bg-muted/50 p-8 rounded-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Join Our Developer Community</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Community Forum</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with other developers, ask questions, and share your knowledge in our community forum.
                </p>
                <a
                  href="/community"
                  className="inline-flex items-center text-primary font-medium"
                >
                  Visit Forum
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">API Status</h3>
                <p className="text-muted-foreground mb-4">
                  Check the status of our APIs and services in real-time.
                </p>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm font-medium">All Systems Operational</span>
                </div>
                <a
                  href="/status"
                  className="inline-flex items-center text-primary font-medium mt-2"
                >
                  View Status Page
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-primary/5 p-8 rounded-xl border border-primary/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Build with TETRACODE</h2>
            <p className="text-muted-foreground mb-6">
              Ready to start building? Our developer tools and APIs make it easy to integrate TETRACODE technology
              into your applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/developers/docs/getting-started"
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/contact/sales"
                className="px-6 py-3 border font-medium rounded-lg hover:bg-muted/50 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
