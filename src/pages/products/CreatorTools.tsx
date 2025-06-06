import { Video, Mic, Image, Edit, Zap, Share2 } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function CreatorTools() {
  const features = [
    {
      title: 'Video Editor',
      description: 'Powerful video editing tools with drag-and-drop interface and professional effects.',
      icon: <Video className="h-6 w-6" />
    },
    {
      title: 'Audio Suite',
      description: 'Professional audio editing and enhancement tools for crystal clear sound.',
      icon: <Mic className="h-6 w-6" />
    },
    {
      title: 'Image Editor',
      description: 'Advanced image editing with filters, layers, and retouching tools.',
      icon: <Image className="h-6 w-6" />
    },
    {
      title: 'Templates',
      description: 'Hundreds of customizable templates for quick content creation.',
      icon: <Edit className="h-6 w-6" />
    },
    {
      title: 'One-Click Export',
      description: 'Export your content in multiple formats with optimized settings.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Easy Sharing',
      description: 'Share directly to social media or download for offline use.',
      icon: <Share2 className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="Creator Tools"
      description="Professional-grade creative tools designed for content creators of all levels to produce stunning visual and audio content."
      features={features}
      ctaText="Start Creating"
    >
      <div className="mt-12 bg-purple-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Everything You Need to Create</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Our Creator Tools suite provides everything you need to bring your creative vision to life. 
            Whether you're a beginner or a professional, our intuitive interface and powerful features 
            make it easy to create high-quality content.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>No watermarks on your final exports</li>
            <li>Cloud storage for all your projects</li>
            <li>Collaborate with team members in real-time</li>
            <li>Regular updates with new features and assets</li>
            <li>Royalty-free music and stock assets library</li>
          </ul>
          <p>
            Join thousands of creators who trust our tools to create amazing content every day.
          </p>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
