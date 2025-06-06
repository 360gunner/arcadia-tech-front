import { useTranslation } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ProductPageTemplateProps {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  ctaText?: string;
  ctaLink?: string;
  children?: React.ReactNode;
}

export default function ProductPageTemplate({
  title,
  description,
  features,
  ctaText,
  ctaLink = '/contact',
  children
}: ProductPageTemplateProps) {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <Link 
        to="/products" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        {t('backToProducts')}
      </Link>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-600 mb-12">{description}</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {children}
        
        {ctaText && (
          <div className="mt-16 text-center">
            <Link
              to={ctaLink}
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
