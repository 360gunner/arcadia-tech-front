
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/contexts/LanguageContext';

interface FooterProps {
  theme: 'light' | 'dark' | 'system';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const { t } = useTranslation();
  const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const products = [
    { name: 'TETRA TV', path: '/products/tetra-tv' },
    { name: 'TETRA Radio', path: '/products/tetra-radio' },
    { name: 'Media Player', path: '/products/media-player' },
    { name: 'TETRA Cloud', path: '/products/tetra-cloud' },
    { name: 'TETRA AI', path: '/products/tetra-ai' },
    { name: 'Core Banking', path: '/products/core-banking' },
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'News & Press', path: '/news' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  const resources = [
    { name: 'Documentation', path: '/developers' },
    { name: 'API Reference', path: '/developers/api' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Community', path: '/community' },
  ];

  const support = [
    { name: 'Help Center', path: '/support' },
    { name: 'Status', path: '/status' },
    { name: 'Contact Support', path: '/support/contact' },
    { name: 'System Requirements', path: '/system-requirements' },
    { name: 'Downloads', path: '/downloads' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'GDPR', path: '/gdpr' },
    { name: 'Sitemap', path: '/sitemap' },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, url: 'https://facebook.com/tetracode' },
    { icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com/tetracode' },
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/company/tetracode' },
    { icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com/tetracode' },
    { icon: <Youtube className="h-5 w-5" />, url: 'https://youtube.com/tetracode' },
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com/tetracode' },
  ];

  const currentYear = new Date().getFullYear();

  // Function to render navigation links with consistent styling
  const renderNavLinks = (items: { name: string; path: string }[]) => (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            to={item.path}
            className={`${
              isDark 
                ? 'text-gray-300 hover:text-blue-400' 
                : 'text-gray-600 hover:text-blue-600'
            } transition-colors text-sm`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className={`${isDark ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-6">
              <Link to="/" className="inline-block">
                <img 
                  src="/tetracode.png" 
                  alt="TETRACODE" 
                  className="h-32 w-auto transition-all duration-300 hover:opacity-90" 
                />
              </Link>
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-500'} text-sm mb-6`}>
              Empowering innovation through cutting-edge technology solutions across Africa and beyond.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    isDark 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-500 hover:text-blue-600'
                  } transition-colors`}
                  aria-label={social.url.split('/')[2]}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-800'} font-semibold text-lg mb-6`}>
              Products
            </h4>
            {renderNavLinks(products)}
          </div>

          <div>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-800'} font-semibold text-lg mb-6`}>
              Company
            </h4>
            {renderNavLinks(company)}
          </div>

          <div>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-800'} font-semibold text-lg mb-6`}>
              Resources
            </h4>
            {renderNavLinks(resources)}
          </div>

          <div>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-800'} font-semibold text-lg mb-6`}>
              Support
            </h4>
            {renderNavLinks(support)}
          </div>
        </div>

        <div className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} pt-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
              {currentYear} TETRACODE Technologies. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`${
                    isDark 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-500 hover:text-blue-600'
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
