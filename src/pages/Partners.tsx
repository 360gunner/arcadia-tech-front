import { Handshake, Users, GitPullRequest, BarChart, Globe, Award } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';

type PartnerProgram = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
};

const PartnerProgramCard = ({ icon, title, description, link }: PartnerProgram) => (
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

export default function Partners() {
  const partnerPrograms = [
    {
      icon: <Handshake className="h-5 w-5" />,
      title: 'Reseller Program',
      description: 'Resell TETRACODE products and services to your customers.',
      link: '/partners/reseller',
    },
    {
      icon: <GitPullRequest className="h-5 w-5" />,
      title: 'Integration Partners',
      description: 'Integrate your solutions with TETRACODE technology.',
      link: '/partners/integration',
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Technology Alliances',
      description: 'Strategic partnerships with leading technology providers.',
      link: '/partners/technology',
    },
    {
      icon: <BarChart className="h-5 w-5" />,
      title: 'Channel Partners',
      description: 'Distribute and implement TETRACODE solutions.',
      link: '/partners/channel',
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: 'Global System Integrators',
      description: 'Deliver comprehensive solutions with TETRACODE technology.',
      link: '/partners/integrators',
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: 'Become a Partner',
      description: 'Join our partner network and grow your business.',
      link: '/partners/join',
    },
  ];

  return (
    <PageTemplate
      title="Partner with TETRACODE"
      description="Join our partner ecosystem and grow your business with TETRACODE technology solutions."
    >
      <div className="space-y-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground">
            At TETRACODE, we believe in the power of partnerships. Our partner ecosystem is designed to help you
            grow your business, expand your offerings, and deliver exceptional value to your customers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Partner Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerPrograms.map((program, index) => (
              <PartnerProgramCard key={index} {...program} />
            ))}
          </div>
        </div>

        <div className="bg-muted/50 p-8 rounded-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Why Partner with TETRACODE?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Grow Your Business</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Access to innovative technology solutions
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Competitive partner margins
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Joint marketing opportunities
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Partner Benefits</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dedicated partner support
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Training and certification
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sales and technical enablement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-primary/5 p-8 rounded-xl border border-primary/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Partner with TETRACODE?</h2>
            <p className="text-muted-foreground mb-6">
              Join our growing network of partners and start delivering innovative solutions to your customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/partners/join"
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Become a Partner
              </a>
              <a
                href="/contact/partnerships"
                className="px-6 py-3 border font-medium rounded-lg hover:bg-muted/50 transition-colors"
              >
                Contact Partnerships
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
