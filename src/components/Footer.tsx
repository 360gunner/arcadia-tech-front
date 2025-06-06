
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useTranslation();
  
  const products = [
    { name: 'Lynx TV', path: '/products/lynx-tv' },
    { name: 'Lynx Radio', path: '/products/lynx-radio' },
    { name: 'Media Player', path: '/products/media-player' },
    { name: 'Lynx Cloud', path: '/products/lynx-cloud' },
    { name: 'Lynx AI', path: '/products/lynx-ai' },
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
    { icon: <Facebook className="h-5 w-5" />, url: 'https://facebook.com/lynx' },
    { icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com/lynx' },
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/company/lynx' },
    { icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com/lynx' },
    { icon: <Youtube className="h-5 w-5" />, url: 'https://youtube.com/lynx' },
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com/lynx' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Lynx
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering innovation through cutting-edge technology solutions across Africa and beyond.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.url.split('/')[2]}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {products.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © {currentYear} Lynx Technologies. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="hover:text-white transition-colors"
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
