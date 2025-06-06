import { Link } from 'react-router-dom';
import { Radio, Tv, Plane, Video, Mic, Mail, Server, Gamepad, Cpu, MessageSquare, Smartphone } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';

type ProductCategory = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  items: {
    title: string;
    description: string;
    link: string;
  }[];
};

export default function Products() {
  const categories: ProductCategory[] = [
    {
      id: 'broadcasting',
      title: 'Broadcasting & Media',
      description: 'Innovative solutions for modern media distribution',
      icon: <Tv className="h-6 w-6" />,
      link: '/products/tetra-tv',
      items: [
        {
          title: 'TETRA TV',
          description: 'Next-generation IPTV platform',
          link: '/products/tetra-tv'
        },
        {
          title: 'TETRA Radio',
          description: 'Digital radio broadcasting',
          link: '/products/tetra-radio'
        },
        {
          title: 'Media Player',
          description: 'Cross-platform media playback',
          link: '/products/media-player'
        },
        {
          title: 'Digital Content Distribution',
          description: 'Content delivery network',
          link: '/products/content-distribution'
        },
        {
          title: 'Creator Tools',
          description: 'For content creators',
          link: '/products/creator-tools'
        }
      ]
    },
    {
      id: 'aviation',
      title: 'Aviation & Aerospace',
      description: 'Cutting-edge aviation technology',
      icon: <Plane className="h-6 w-6" />,
      link: '/products/flight-software',
      items: [
        {
          title: 'Drone Services',
          description: 'Aerial solutions',
          link: '/products/drone-services'
        },
        {
          title: 'Flight Software',
          description: 'Aviation management systems',
          link: '/products/flight-software'
        },
        {
          title: 'Airport Tech',
          description: 'Airport management solutions',
          link: '/products/airport-tech'
        },
        {
          title: 'Air Charter',
          description: 'Private aviation services',
          link: '/products/air-charter'
        }
      ]
    },
    {
      id: 'saas',
      title: 'SaaS & Communication',
      description: 'Business productivity tools',
      icon: <Mail className="h-6 w-6" />,
      link: '/products/tetra-meet',
      items: [
        {
          title: 'TETRA Meet',
          description: 'Video conferencing solution',
          link: '/products/tetra-meet'
        },
        {
          title: 'Office Suite',
          description: 'Productivity tools',
          link: '/products/office-suite'
        },
        {
          title: 'TETRA Mail',
          description: 'Secure email platform',
          link: '/products/tetra-mail'
        },
        {
          title: 'Task Manager',
          description: 'Project management',
          link: '/products/task-manager'
        },
        {
          title: 'Mobix',
          description: 'Mobile applications',
          link: '/products/mobix'
        }
      ]
    },
    {
      id: 'fintech',
      title: 'Fintech & Banking',
      description: 'Financial technology solutions',
      icon: <Server className="h-6 w-6" />,
      link: '/products/core-banking',
      items: [
        {
          title: 'Core Banking',
          description: 'Banking platform',
          link: '/products/core-banking'
        }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & Hosting',
      description: 'Scalable infrastructure',
      icon: <Server className="h-6 w-6" />,
      link: '/products/tetra-cloud',
      items: [
        {
          title: 'TETRA Cloud (IaaS/PaaS)',
          description: 'Cloud infrastructure services',
          link: '/products/tetra-cloud'
        },
        {
          title: 'CDN Services',
          description: 'Content delivery network',
          link: '/products/cdn'
        }
      ]
    },
    {
      id: 'gaming',
      title: 'Gaming & Entertainment',
      description: 'Interactive entertainment',
      icon: <Gamepad className="h-6 w-6" />,
      link: '/products/cloud-gaming',
      items: [
        {
          title: 'Cloud Gaming',
          description: 'Streaming platform',
          link: '/products/cloud-gaming'
        },
        {
          title: 'Gaming Hub',
          description: 'Gaming community',
          link: '/products/gaming-hub'
        },
        {
          title: 'Game Dev Tools',
          description: 'Development resources',
          link: '/products/game-dev-tools'
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI & Innovation',
      description: 'Artificial intelligence solutions',
      icon: <Cpu className="h-6 w-6" />,
      link: '/products/tetra-ai',
      items: [
        {
          title: 'TETRA AI',
          description: 'Artificial intelligence platform',
          link: '/products/tetra-ai'
        },
        {
          title: 'Chatbot Platform',
          description: 'AI assistants',
          link: '/products/chatbot'
        },
        {
          title: 'Voice APIs',
          description: 'Speech technology',
          link: '/products/voice-apis'
        }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile & Super Apps',
      description: 'Mobile solutions',
      icon: <Smartphone className="h-6 w-6" />,
      link: '/products/app-store',
      items: [
        {
          title: 'App Store',
          description: 'Application marketplace',
          link: '/products/app-store'
        },
        {
          title: 'Developer SDKs',
          description: 'Development tools',
          link: '/products/developer-sdks'
        }
      ]
    }
  ];

  return (
    <PageTemplate
      title="Our Products & Services"
      description="Explore our comprehensive suite of technology solutions designed to power your digital transformation."
    >
      <div className="space-y-16">
        {categories.map((category) => (
          <div key={category.id} className="border-b pb-12 last:border-b-0 last:pb-0">
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {category.icon}
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-semibold">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {category.items.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="block p-6 border rounded-lg hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  <div className="mt-4 text-sm text-primary font-medium flex items-center">
                    Learn more
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
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}
