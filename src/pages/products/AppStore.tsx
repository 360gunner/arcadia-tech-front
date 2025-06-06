import { Smartphone, Zap, Shield, Download, Star, BarChart } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function AppStore() {
  const features = [
    {
      title: 'Wide Selection',
      description: 'Thousands of apps across all categories.',
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: 'Fast Downloads',
      description: 'Quick and reliable app installations.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Secure & Safe',
      description: 'All apps are thoroughly vetted for security.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Automatic Updates',
      description: 'Keep your apps up to date automatically.',
      icon: <Download className="h-6 w-6" />
    },
    {
      title: 'Editor\'s Choice',
      description: 'Handpicked apps selected by our experts.',
      icon: <Star className="h-6 w-6" />
    },
    {
      title: 'Usage Insights',
      description: 'Track your app usage and storage.',
      icon: <BarChart className="h-6 w-6" />
    }
  ];

  const featuredApps = [
    { 
      name: 'TETRA Mail', 
      category: 'Productivity', 
      rating: 4.8,
      icon: '📧',
      description: 'Secure email client with end-to-end encryption.'
    },
    { 
      name: 'TaskMaster', 
      category: 'Productivity', 
      rating: 4.7,
      icon: '✅',
      description: 'Powerful task management for teams.'
    },
    { 
      name: 'TETRA Cloud', 
      category: 'Cloud', 
      rating: 4.9,
      icon: '☁️',
      description: 'Access your files from anywhere with secure cloud storage with automatic backup.'
    },
    { 
      name: 'TETRA VPN', 
      category: 'Security', 
      rating: 4.7,
      icon: '🔒',
      description: 'Protect your privacy with our fast and secure VPN service.'
    },
    { 
      name: 'TETRA Pay', 
      category: 'Finance', 
      rating: 4.6,
      icon: '💳',
      description: 'Simple, secure mobile payments and money transfers.'
    },
    { 
      name: 'TETRA Music', 
      category: 'Entertainment', 
      rating: 4.8,
      icon: '🎵',
      description: 'Stream millions of songs ad-free with high quality audio.'
    },
  ];

  return (
    <ProductPageTemplate
      title="TETRA App Store"
      description="Discover and download the best apps for your devices. Safe, secure, and easy to use."
      features={features}
      ctaText="Browse Apps"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Featured Apps</h2>
        <div className="prose max-w-none">
          <p className="mb-6">
            Explore our curated collection of high-quality apps that enhance your digital experience. 
            From productivity tools to entertainment, find everything you need in one place.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {featuredApps.map((app, index) => (
              <div key={index} className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{app.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{app.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{app.category}</p>
                    <div className="flex items-center text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(app.rating) ? 'fill-current' : 'stroke-current'}`} 
                        />
                      ))}
                      <span className="text-gray-600 text-sm ml-2">{app.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600">{app.description}</p>
                    <button className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium">
                      Install
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">For Developers</h3>
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <p className="mb-4">
                  Want to publish your app on TETRA App Store? Join our developer program and reach millions of users.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Reach a global audience</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Earn 85% of revenue</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Powerful analytics</span>
                  </li>
                </ul>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                  Become a Developer
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">App Categories</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Games', 'Productivity', 'Social', 'Entertainment', 
                  'Education', 'Business', 'Lifestyle', 'Finance', 'Health',
                  'Music', 'Photo & Video', 'Utilities', 'News', 'Shopping'
                ].map((category, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer text-center">
                    <span className="text-sm font-medium">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Get the App</h3>
            <p className="mb-4">
              Download the TETRA App Store app to discover and install apps on your mobile device.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-black text-white rounded-md flex items-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.13 2.35.93 3 .93.61 0 1.65-.78 2.8-.68 1.12.11 2.01.64 2.63 1.23-2.27 1.37-1.84 4.45.4 5.39-.23.58-.35 1.18-.26 1.8 1.24.1 2.49-.58 3.23-1.68 3.13 1.55 4.11-5.5-.8-7.1-.62-.25-1.39-.42-1.96-.45h-.45c-1.09-.06-1.15.61-1.7.61H14v.01c-1.04-.88-2.42-1.19-3.7-1.22-2.8-.07-5.48 1.53-6.85 3.85-2.76 4.72-.8 10.18 1.68 13.61 1.08 1.5 2.15 2.75 3.85 2.75 1.37 0 1.85-.88 3.5-.88 1.64 0 2.05.88 3.5.85 1.53-.02 2.9-1.56 3.91-2.88.59-.85.99-1.5 1.5-2.45-3.59-1.67-3.3-6.52.33-7.96z"/>
                  <path d="M15.08 3.86c.08-.14.18-.3.24-.48.06-.18.11-.37.15-.57 0 .01 0 .01-.01.02.01-.08.02-.16.02-.24 0-.1-.01-.2-.03-.3-.02-.1-.05-.19-.09-.28-.04-.09-.09-.17-.15-.26-.06-.09-.13-.17-.2-.24-.08-.07-.16-.13-.25-.19-.08-.05-.16-.1-.25-.14-.09-.04-.18-.07-.28-.09-.1-.02-.2-.03-.3-.03-.08 0-.16.01-.24.02.01-.01.01-.01.02-.01-.2.04-.4.09-.58.15-.19.06-.36.15-.52.25-.16.1-.32.21-.46.34-.14.13-.27.28-.38.44-.11.16-.2.33-.28.51-.07.18-.13.37-.17.56-.04.19-.06.39-.06.59 0 .08.01.17.03.25.02.08.04.16.07.24.03.08.07.15.11.22.04.07.09.14.14.21.05.07.11.13.17.19.07.06.14.11.21.16.07.05.15.09.23.13.08.04.16.07.24.1.08.02.17.04.25.05.09.01.18.02.27.02.2 0 .4-.02.59-.07.19-.04.38-.1.56-.18.18-.08.35-.17.51-.29.16-.11.31-.24.45-.38.14-.14.26-.29.36-.45.1-.16.18-.33.25-.51.07-.18.12-.36.15-.55.04-.19.06-.38.06-.58 0-.09-.01-.19-.03-.28-.02-.09-.05-.18-.09-.27z"/>
                </svg>
                App Store
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm.921 1.972L11 11.5 4.53 20.214V3.786zM14.5 12l7.89 9.185a1.002 1.002 0 0 0 1.61-.92V3.734a1 1 0 0 0-1.61-.92L14.5 12zm-2.292 0L5.204 2.424 16.5 2v20l-11.296-.424L12.208 12z"/>
                </svg>
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
