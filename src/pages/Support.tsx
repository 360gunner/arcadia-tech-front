import { LifeBuoy, MessageSquare, BookOpen, AlertCircle, Phone, Mail, MessageCircle, FileText } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';

type SupportCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
};

const SupportCard = ({ icon, title, description, link, linkText }: SupportCardProps) => (
  <div className="p-6 border rounded-lg h-full flex flex-col">
    <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
    <a
      href={link}
      className="inline-flex items-center text-primary font-medium mt-auto"
    >
      {linkText}
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
);

export default function Support() {
  const supportOptions = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: 'Help Center',
      description: 'Find answers to common questions in our comprehensive knowledge base.',
      link: '/support/help-center',
      linkText: 'Visit Help Center',
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: 'Community Forum',
      description: 'Connect with other users and get help from the Lynx community.',
      link: '/community',
      linkText: 'Join Community',
    },
    {
      icon: <AlertCircle className="h-5 w-5" />,
      title: 'System Status',
      description: 'Check the status of Lynx services and view incident reports.',
      link: '/status',
      linkText: 'View Status',
    },
  ];

  const contactOptions = [
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time.',
      link: '/support/chat',
      linkText: 'Start Chat',
      available: 'Available 24/7',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone Support',
      description: 'Speak directly with a support representative.',
      link: 'tel:+213XXXXXXXX',
      linkText: 'Call Us',
      available: 'Mon-Fri, 8AM-5PM GMT+1',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond as soon as possible.',
      link: 'mailto:support@lynx.tech',
      linkText: 'Email Us',
      available: 'Typically responds within 24 hours',
    },
  ];

  return (
    <PageTemplate
      title="Support Center"
      description="We're here to help. Find answers, get support, or contact our team."
    >
      <div className="space-y-12">
        <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">How can we help you today?</h2>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search help articles, documentation, and more..."
                className="w-full px-6 py-4 pr-12 border rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Support Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => (
              <SupportCard key={`support-${index}`} {...option} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Support</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <div key={`contact-${index}`} className="p-6 border rounded-lg">
                <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <div className="flex items-center justify-between">
                  <a
                    href={option.link}
                    className="inline-flex items-center text-primary font-medium"
                  >
                    {option.linkText}
                  </a>
                  <span className="text-xs text-muted-foreground">
                    {option.available}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted/50 p-8 rounded-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: 'How do I reset my password?',
                  answer: 'You can reset your password by visiting the password reset page and following the instructions.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards, PayPal, and bank transfers.'
                },
                {
                  question: 'How do I cancel my subscription?',
                  answer: 'You can cancel your subscription at any time from the account settings page.'
                },
                {
                  question: 'Do you offer discounts for non-profits?',
                  answer: 'Yes, we offer special pricing for registered non-profit organizations.'
                },
              ].map((faq, index) => (
                <div key={index} className="border-b pb-4">
                  <button className="flex items-center justify-between w-full text-left py-2 font-medium">
                    <span>{faq.question}</span>
                    <svg
                      className="h-5 w-5 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="mt-2 text-muted-foreground">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
