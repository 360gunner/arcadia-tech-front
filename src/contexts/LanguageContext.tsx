
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    banking: 'Banking',
    airlines: 'Airlines',
    tvBroadcasting: 'TV Broadcasting',
    services: 'Services',
    about: 'About',
    technologies: 'Technologies',
    caseStudies: 'Case Studies',
    contact: 'Contact',
    getStarted: 'Get Started',
    
    // Common
    learnMore: 'Learn More',
    contactUs: 'Contact Us',
    ourServices: 'Our Services',
    whyChooseUs: 'Why Choose Us',
    
    // Hero sections
    heroTitle: 'Innovative IT Solutions for Tomorrow',
    heroSubtitle: 'Transforming businesses through cutting-edge technology in banking, broadcasting, aviation, and enterprise solutions.',
    
    // Language selector
    language: 'Language',
    english: 'English',
    french: 'Français'
  },
  fr: {
    // Navigation
    home: 'Accueil',
    banking: 'Banque',
    airlines: 'Compagnies Aériennes',
    tvBroadcasting: 'Télédiffusion',
    services: 'Services',
    about: 'À Propos',
    technologies: 'Technologies',
    caseStudies: 'Études de Cas',
    contact: 'Contact',
    getStarted: 'Commencer',
    
    // Common
    learnMore: 'En Savoir Plus',
    contactUs: 'Nous Contacter',
    ourServices: 'Nos Services',
    whyChooseUs: 'Pourquoi Nous Choisir',
    
    // Hero sections
    heroTitle: 'Solutions IT Innovantes pour Demain',
    heroSubtitle: 'Transformer les entreprises grâce à une technologie de pointe dans la banque, la télédiffusion, l\'aviation et les solutions d\'entreprise.',
    
    // Language selector
    language: 'Langue',
    english: 'English',
    french: 'Français'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
