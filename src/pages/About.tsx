import PageTemplate from '@/components/PageTemplate';

export default function About() {
  return (
    <PageTemplate 
      title="about.title"
      description="about.subtitle"
    >
      <div className="prose prose-lg max-w-none">
        <h2>Our Story</h2>
        <p>Lynx was founded with a vision to revolutionize technology services across Africa. Our journey began with a small team of passionate technologists committed to delivering innovative solutions tailored to the African market.</p>
        
        <h2>Our Mission</h2>
        <p>To empower businesses and individuals across Africa with cutting-edge technology solutions that drive growth, innovation, and digital transformation.</p>
        
        <h2>Our Vision</h2>
        <p>To become Africa's leading technology partner, recognized for excellence in delivering comprehensive digital solutions that shape the future of the continent.</p>
        
        <h2>Our Values</h2>
        <ul>
          <li><strong>Innovation:</strong> We constantly push boundaries to deliver cutting-edge solutions.</li>
          <li><strong>Excellence:</strong> We are committed to the highest standards in everything we do.</li>
          <li><strong>Integrity:</strong> We build trust through transparency and ethical practices.</li>
          <li><strong>Collaboration:</strong> We believe in the power of teamwork and partnerships.</li>
          <li><strong>Customer Focus:</strong> We prioritize our customers' success in every decision we make.</li>
        </ul>
      </div>
    </PageTemplate>
  );
}
