import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const DebugLanguage: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    console.log('Debug - Current language:', language);
    console.log('Debug - HTML lang attribute:', document.documentElement.lang);
    console.log('Debug - localStorage language:', localStorage.getItem('lynx_language'));
  }, [language]);

  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white text-xs p-2 rounded-md z-50 opacity-75">
      <div>Current Language: <strong>{language}</strong></div>
      <div>HTML lang: <strong>{document.documentElement.lang}</strong></div>
    </div>
  );
};

export default DebugLanguage;
