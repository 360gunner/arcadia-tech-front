import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface PageTemplateProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function PageTemplate({
  title,
  description,
  children,
  className = '',
}: PageTemplateProps) {
  const { t } = useTranslation();
  
  return (
    <div className={`container mx-auto px-4 py-12 ${className}`}>
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">{t(title)}</h1>
        {description && (
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t(description)}
          </p>
        )}
      </header>
      
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
}
