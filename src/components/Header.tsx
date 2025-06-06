import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

type NavItem = {
  name: string;
  path: string;
  subItems?: NavItem[];
};

// Navigation items with translation keys
const navItems: NavItem[] = [
  { name: 'home', path: '/' },
  { name: 'products', path: '/products' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
];

const NavItem: React.FC<{ 
  item: NavItem; 
  isActive: boolean; 
  onClick: () => void;
  t: (key: string) => string;
}> = ({ item, isActive, onClick, t }) => {
  return (
    <Link
      to={item.path}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
      }`}
      onClick={onClick}
    >
      {t(item.name)}
    </Link>
  );
};

const MobileMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  currentPath: string;
  onNavClick: () => void;
  t: (key: string) => string;
}> = ({ isOpen, onClose, navItems, currentPath, onNavClick, t }) => {
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
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
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
            <Link to="/" className="text-xl font-bold text-blue-600">
              Lynx
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
      />
    </nav>
  );
};

export default Header;
