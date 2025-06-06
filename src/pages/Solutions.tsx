import { User, Briefcase, Building2, Code2, Rocket, GraduationCap } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';

type SolutionCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
};

const SolutionCard = ({ icon, title, description, link }: SolutionCardProps) => (
  <a
    href={link}
    className="flex flex-col p-6 border rounded-lg hover:border-primary/50 hover:shadow-md transition-all h-full"
  >
    <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
    <div className="text-primary font-medium flex items-center">
      Explore solutions
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
  </a>
);

export default function Solutions() {
  const solutions = [
    {
      icon: <User className="h-6 w-6" />,
      title: 'For Individuals',
      description: 'Personalized technology solutions to enhance your digital life and productivity.',
      link: '/solutions/individuals',
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'For Businesses',
      description: 'Comprehensive enterprise solutions to drive growth and efficiency.',
      link: '/solutions/businesses',
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: 'For Governments',
      description: 'Secure and scalable technology for public sector digital transformation.',
      link: '/solutions/governments',
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'For Developers',
      description: 'Powerful tools and APIs to build the next generation of applications.',
      link: '/developers',
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'For Startups',
      description: 'Flexible and cost-effective solutions to launch and scale your startup.',
      link: '/solutions/startups',
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'For Schools & Universities',
      description: 'Educational technology solutions to enhance learning experiences.',
      link: '/solutions/education',
    },
  ];

  return (
    <PageTemplate
      title="Tailored Solutions for Every Need"
      description="Discover how our technology solutions can transform your organization and drive success."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <SolutionCard key={index} {...solution} />
        ))}
      </div>
      
      <div className="mt-16 bg-muted/50 p-8 rounded-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-6">
            Our team of experts can help design a custom solution tailored to your specific requirements.
            Contact us today to discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
