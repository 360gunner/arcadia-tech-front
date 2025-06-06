import { useTranslation } from '../contexts/LanguageContext';

export default function Status() {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">System Status</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="p-4 mb-4 bg-green-50 text-green-700 rounded-md">
            <p className="font-medium">All systems operational</p>
            <p className="text-sm mt-1">Last updated: {new Date().toLocaleString()}</p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Service Status</h2>
            <div className="space-y-4">
              {[
                { name: 'Web Application', status: 'operational' },
                { name: 'API Services', status: 'operational' },
                { name: 'Database', status: 'operational' },
                { name: 'Authentication', status: 'operational' },
                { name: 'File Storage', status: 'operational' },
              ].map((service, index) => (
                <div key={index} className="flex justify-between items-center p-3 border-b border-gray-100">
                  <span>{service.name}</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {service.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>For any issues, please contact our support team.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
