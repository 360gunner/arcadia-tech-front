import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';

export default function Contact() {
  return (
    <PageTemplate 
      title="Contact Us"
      description="Get in touch with our team for any inquiries or support."
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="bg-muted/50 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">contact@lynx.tech</p>
                <p className="text-muted-foreground">support@lynx.tech</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+213 XX XX XX XX</p>
                <p className="text-muted-foreground">+213 XX XX XX XX (Support)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">123 Tech Park, Sidi Abdellah</p>
                <p className="text-muted-foreground">Algiers, Algeria</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Working Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 - 18:00</p>
                <p className="text-muted-foreground">Saturday: 9:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
