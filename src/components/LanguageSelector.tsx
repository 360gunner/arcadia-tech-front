
import React, { useCallback, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  // Debug: Log when language changes
  useEffect(() => {
    console.log('Current language in selector:', language);
  }, [language]);

  // Memoize the change handler to prevent unnecessary re-renders
  const handleLanguageChange = useCallback((value: string) => {
    console.log('Language changed to:', value);
    setLanguage(value as 'en' | 'fr');
  }, [setLanguage]);

  return (
    <div className="flex items-center space-x-2" data-testid="language-selector">
      <Globe size={18} className="text-gray-600" />
      <Select 
        value={language} 
        onValueChange={handleLanguageChange}
      >
        <SelectTrigger className="w-32 h-8 text-sm">
          <SelectValue>{t('language')}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">{t('english')}</SelectItem>
          <SelectItem value="fr">{t('french')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default React.memo(LanguageSelector);
