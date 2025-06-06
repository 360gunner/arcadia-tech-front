import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';

type Language = 'en' | 'fr';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

// 1. Define translations
const translations: Translations = {
  en: {
    language: 'Language',
    english: 'English',
    french: 'Français',
    home: 'Home',
    products: 'Products',
    about: 'About',
    contact: 'Contact',
    contactSales: 'Contact Sales',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    ourServices: 'Our Services',
    whyChooseUs: 'Why Choose Us',
    backToProducts: 'Back to Products',
    login: 'Sign In',
    companyName: 'TETRACODE',
    companyTagline: 'Innovative Technology Solutions'
  },
  fr: {
    language: 'Langue',
    english: 'English',
    french: 'Français',
    home: 'Accueil',
    products: 'Produits',
    about: 'À Propos',
    contact: 'Contact',
    contactSales: 'Ventes',
    getStarted: 'Commencer',
    learnMore: 'En Savoir Plus',
    ourServices: 'Nos Services',
    whyChooseUs: 'Pourquoi Nous Choisir',
    backToProducts: 'Retour aux Produits',
    login: 'Connexion',
    companyName: 'TETRACODE',
    companyTagline: 'Solutions Technologiques Innovantes'
  }
};

// 2. Create context
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  forceUpdate: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 3. Create provider
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Get initial language from localStorage, browser language, or default to 'en'
  const getInitialLanguage = (): Language => {
    if (typeof window === 'undefined') return 'en';
    
    // Check localStorage first
    const savedLang = localStorage.getItem('lynx_language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      return savedLang;
    }
    
    // Then check browser language
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'fr' ? 'fr' : 'en';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage());
  const [_, forceUpdate] = useState({});
  
  // Update document language when language changes
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('lynx_language', language);
    
    // Force a re-render of all components using the translation
    forceUpdate({});
    
    // Dispatch a custom event that other components can listen to
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language } }));
  }, [language]);

  // Translation function with fallback
  const t = useCallback((key: string): string => {
    // Try to get the translation for the current language
    const translation = translations[language]?.[key];
    
    // If not found, try English as fallback
    if (!translation && language !== 'en') {
      return translations.en[key] || key;
    }
    
    return translation || key;
  }, [language]);

  // Handle language change
  const setLanguage = useCallback((newLang: Language) => {
    if (newLang !== language) {
      console.log('Setting language to:', newLang);
      setLanguageState(newLang);
    }
  }, [language]);

  // Context value
  const contextValue = React.useMemo(() => ({
    language,
    setLanguage,
    t,
    forceUpdate: () => forceUpdate({})
  }), [language, setLanguage, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// 4. Create hooks
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useTranslation = () => {
  const { t, language } = useLanguage();
  return { t, i18n: { language } };
};

// 5. Direct t function for components outside the context
export const t = (key: string, lang: Language = 'en'): string => {
  return translations[lang]?.[key] || key;
};
