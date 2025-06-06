import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import tetracodeLogo from '@/../public/tetracode.png';

type NavItem = {
  name: string;
  path: string;
  subItems?: NavItem[];
};

// Navigation items with translation keys and submenus
const navItems: NavItem[] = [
  { 
    name: 'home', 
    path: '/',
    subItems: [
      { name: 'Overview', path: '/overview' },
      { name: 'Mission & Vision', path: '/mission-vision' },
      { name: 'Leadership Team', path: '/leadership' },
      { name: 'News & Press', path: '/news' }
    ]
  },
  { 
    name: 'products', 
    path: '/products',
    subItems: [
      { 
        name: '📺 Broadcasting & Media', 
        path: '/products/broadcasting-media',
        subItems: [
          { name: 'TETRACODE TV (Live + On-demand)', path: '/products/tv' },
          { name: 'TETRACODE Radio', path: '/products/radio' },
          { name: 'Media Player (Cross-platform)', path: '/products/media-player' },
          { name: 'Digital Content Distribution', path: '/products/content-distribution' },
          { name: 'Creator Monetization Tools', path: '/products/monetization-tools' }
        ]
      },
      { 
        name: '🛫 Aviation & Aerospace', 
        path: '/products/aviation',
        subItems: [
          { name: 'Drone & UAV Services', path: '/products/drone-services' },
          { name: 'Flight Management Software', path: '/products/flight-software' },
          { name: 'Smart Airport Tech', path: '/products/airport-tech' },
          { name: 'TETRACODE Air Charter & Logistics', path: '/products/air-charter' }
        ]
      },
      { 
        name: '🧑‍💼 SaaS & Communication', 
        path: '/products/saas',
        subItems: [
          { name: 'TETRACODE Meet (Google Meet Alternative)', path: '/products/meet' },
          { name: 'TETRACODE Office Suite (Docs, Sheets, etc.)', path: '/products/office' },
          { name: 'TETRACODE Mail (Secure Email)', path: '/products/mail' },
          { name: 'Task & Project Manager', path: '/products/task-manager' }
        ]
      },
      { 
        name: '💸 Fintech & Banking', 
        path: '/products/fintech',
        subItems: [
          { name: 'Mobix (Super App)', path: '/products/mobix' },
          { name: 'TETRACODE Core Banking (Open Banking APIs)', path: '/products/core-banking' }
        ]
      },
      { 
        name: '☁️ Cloud & Hosting', 
        path: '/products/cloud',
        subItems: [
          { 
            name: 'TETRACODE Cloud (IaaS/PaaS) EC2', 
            path: '/products/cloud/iaas',
            subItems: [
              { name: 'Web Hosting', path: '/products/cloud/web-hosting' },
              { name: 'Cloud Storage EB5', path: '/products/cloud/storage' }
            ]
          },
          { name: 'CDN Services', path: '/products/cdn' }
        ]
      },
      { 
        name: '🎮 Gaming & Entertainment', 
        path: '/products/gaming',
        subItems: [
          { name: 'TETRACODE Cloud Gaming', path: '/products/cloud-gaming' },
          { name: 'Live Mobile Gaming Hub', path: '/products/gaming-hub' },
          { name: 'Developer Tools for Games', path: '/products/game-dev-tools' }
        ]
      },
      { 
        name: '🤖 AI & Innovation', 
        path: '/products/ai',
        subItems: [
          { 
            name: 'TETRACODE AI (Cloud AI Services)', 
            path: '/products/ai/cloud',
            subItems: [
              { name: 'Machine Learning APIs', path: '/products/ai/ml-apis' },
              { name: 'Text & Image Recognition', path: '/products/ai/recognition' }
            ]
          },
          { name: 'Chatbot Platform', path: '/products/ai/chatbot' },
          { name: 'Voice + Translation APIs', path: '/products/ai/voice-translation' }
        ]
      },
      { 
        name: '📱 Mobile & Super Apps', 
        path: '/products/mobile',
        subItems: [
          { name: 'TETRACODE App Store', path: '/products/app-store' },
          { name: 'Developer SDKs', path: '/products/developer-sdks' }
        ]
      }
    ]
  },
  { 
    name: 'solutions', 
    path: '/solutions',
    subItems: [
      { name: 'For Individuals', path: '/solutions/individuals' },
      { name: 'For Businesses', path: '/solutions/businesses' },
      { name: 'For Governments', path: '/solutions/governments' },
      { name: 'For Developers', path: '/solutions/developers' },
      { name: 'For Startups', path: '/solutions/startups' },
      { name: 'For Schools & Universities', path: '/solutions/education' }
    ]
  },
  { 
    name: 'about', 
    path: '/about',
    subItems: [
      { name: 'Our Story', path: '/about/story' },
      { name: 'Why Africa', path: '/about/africa' },
      { name: 'Team & Careers', path: '/careers' },
      { name: 'Blog', path: '/blog' },
      { name: 'Media Kit', path: '/press' }
    ]
  },
  { 
    name: 'contact', 
    path: '/contact',
    subItems: [
      { name: 'Get in Touch', path: '/contact' },
      { name: 'Find a Local Office', path: '/contact/offices' },
      { name: 'Request a Demo', path: '/demo' },
      { name: 'Feedback Form', path: '/feedback' }
    ]
  }
];

const NavItem: React.FC<{ 
  item: NavItem; 
  isActive: boolean; 
  onClick: () => void;
  t: (key: string) => string;
  isMobile?: boolean;
}> = ({ item, isActive, onClick, t, isMobile = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        setIsHovered(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={itemRef}>
      <div 
        className={`flex items-center ${hasSubItems ? 'cursor-default' : ''}`}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        <Link
          to={item.path}
          className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${
            isActive
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
          }`}
          onClick={() => {
            onClick();
            if (!hasSubItems) setIsHovered(false);
          }}
        >
          {t(item.name)}
          {hasSubItems && (
            <ChevronDown 
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${isHovered ? 'transform rotate-180' : ''}`} 
            />
          )}
        </Link>
      </div>
      
      {hasSubItems && (isHovered || isMobile) && (
        <div 
          className={`absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 ${
            isMobile ? 'relative w-full mt-0 ml-4' : 'py-1'
          }`}
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
          <div className="py-1">
            {item.subItems?.map((subItem, index) => (
              <Link
                key={index}
                to={subItem.path}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  onClick();
                  setIsHovered(false);
                }}
              >
                {t(subItem.name)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MobileMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  currentPath: string;
  onNavClick: () => void;
  t: (key: string) => string;
  theme: 'light' | 'dark' | 'system';
  onThemeToggle: () => void;
}> = ({ isOpen, onClose, navItems, currentPath, onNavClick, t, theme, onThemeToggle }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-lg rounded-b-lg">
      <div className="px-2 pt-2 pb-4 space-y-1">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            item={item}
            isActive={currentPath === item.path}
            onClick={() => {
              onNavClick();
              onClose();
            }}
            t={t}
          />
        ))}
        <div className="px-3 py-2">
          <LanguageSelector />
          <button
            onClick={onThemeToggle}
            className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

type HeaderProps = {
  theme: 'light' | 'dark' | 'system';
  onThemeToggle: () => void;
};

const Header: React.FC<HeaderProps> = ({ theme, onThemeToggle }) => {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Debug language changes
  useEffect(() => {
    console.log('Header language changed to:', language);
  }, [language]);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white md:bg-opacity-90'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={tetracodeLogo} 
                alt="TETRACODE" 
                className="h-28 w-auto transition-all duration-300 hover:opacity-90" 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavItem
                key={item.path}
                item={item}
                isActive={location.pathname === item.path}
                onClick={handleNavClick}
                t={t}
              />
            ))}
            <div className="ml-4">
              <LanguageSelector />
              <button
                onClick={onThemeToggle}
                className="hidden p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navItems={navItems}
        currentPath={location.pathname}
        onNavClick={handleNavClick}
        t={t}
        theme={theme}
        onThemeToggle={onThemeToggle}
      />
    </nav>
  );
};

export default Header;
