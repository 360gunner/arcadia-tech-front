import React, { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';
import { useMaterialUpdate } from '../hooks/useMaterialUpdate';
import PageTemplate from '@/components/PageTemplate';
import { Link } from 'react-router-dom';

// Simple fallback component
const Fallback = () => (
  <div className="w-full h-64 md:h-96 bg-gray-50 dark:bg-gray-900 rounded-xl flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="w-16 h-16 bg-blue-200 dark:bg-blue-900 rounded-full mb-4"></div>
      <p className="text-gray-500 dark:text-gray-400">Loading 3D...</p>
    </div>
  </div>
);

// Error boundary for 3D components
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null }> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('3D Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-64 md:h-96 bg-red-50 dark:bg-red-900/20 rounded-xl flex flex-col items-center justify-center p-4">
          <p className="text-red-600 dark:text-red-400 font-medium">3D content failed to load</p>
          <p className="text-sm text-red-500 dark:text-red-300 mt-2 text-center">
            {this.state.error?.message || 'Unknown error occurred'}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

// Simple 3D sphere component
const EarthSphere = ({ color }: { color: string }) => {
  return (
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial 
        color={color}
        metalness={0.8}
        roughness={0.2}
      />
    </Sphere>
  );
};

// 3D Earth Component with error boundary and proper cleanup
const Earth3D = () => {
  const { theme } = useTheme();
  const color = theme === 'dark' ? '#3b82f6' : '#1d4ed8';
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Only render on client-side to avoid SSR issues
  useEffect(() => {
    console.log('Mounting Earth3D component');
    setMounted(true);
    return () => {
      console.log('Unmounting Earth3D component');
      setMounted(false);
    };
  }, []);

  if (!mounted) {
    return <Fallback />;
  }

  try {
    return (
      <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden relative">
        <ErrorBoundary>
          <Suspense fallback={<Fallback />}>
            <Canvas 
              camera={{ position: [0, 0, 5], fov: 50 }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance',
                stencil: false,
                depth: true
              }}
              dpr={Math.min(window.devicePixelRatio, 2)}
              onCreated={({ gl }) => {
                console.log('WebGL context created');
                gl.setClearColor(0x000000, 0);
              }}
              onError={(event) => {
                const errorMessage = event instanceof Error 
                  ? event.message 
                  : typeof event === 'string' 
                    ? event 
                    : 'Failed to load 3D content';
                console.error('Canvas error:', errorMessage);
                setError(errorMessage);
              }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <EarthSphere color={color} />
              <OrbitControls 
                enableZoom={false}
                autoRotate
                autoRotateSpeed={2}
                enableDamping
                dampingFactor={0.25}
              />
            </Canvas>
          </Suspense>
        </ErrorBoundary>
        {error && (
          <div className="absolute bottom-2 right-2 bg-red-500 text-white text-xs p-2 rounded">
            {error}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error in Earth3D render:', error);
    return (
      <div className="w-full h-64 md:h-96 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-red-600 dark:text-red-400 font-medium">Failed to initialize 3D</p>
          <p className="text-sm text-red-500 dark:text-red-300 mt-2">
            {error instanceof Error ? error.message : 'Unknown error occurred'}
          </p>
        </div>
      </div>
    );
  }
};

// Animated Card Component
const FeatureCard = ({ title, description, icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

// Navigation Card Component
const AboutNavCard = ({ title, description, link, icon }) => (
  <Link to={link} className="block group">
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-3xl mb-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      <div className="mt-4 text-blue-600 dark:text-blue-400 flex items-center group-hover:translate-x-1 transition-transform">
        Learn more
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </Link>
);

export default function About() {
  return (
    <PageTemplate 
      title="About TETRACODE"
      description="Empowering Africa's digital future through innovative technology solutions"
      className="space-y-16 md:space-y-24"
    >
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Shaping Africa's Digital Future
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We're on a mission to empower Africa through innovative technology solutions that drive growth, 
          create opportunities, and transform industries across the continent.
        </motion.p>
        <div className="w-full max-w-3xl mx-auto">
          <Earth3D />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Guiding principles that define who we are and how we work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Innovation" 
              description="We constantly push boundaries to deliver cutting-edge solutions that solve real-world challenges."
              icon="💡"
              delay={0.1}
            />
            <FeatureCard 
              title="Excellence" 
              description="We are committed to the highest standards in everything we do, from code to customer service."
              icon="✨"
              delay={0.2}
            />
            <FeatureCard 
              title="Integrity" 
              description="We build trust through transparency, honesty, and ethical business practices."
              icon="🤝"
              delay={0.3}
            />
            <FeatureCard 
              title="Collaboration" 
              description="We believe in the power of teamwork and partnerships to achieve extraordinary results."
              icon="👥"
              delay={0.4}
            />
            <FeatureCard 
              title="Customer Focus" 
              description="We prioritize our customers' success in every decision we make and solution we build."
              icon="🎯"
              delay={0.5}
            />
            <FeatureCard 
              title="Impact" 
              description="We measure our success by the positive change we create in Africa's digital landscape."
              icon="🌍"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Discover More
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Learn more about our journey, team, and impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AboutNavCard 
              title="Our Story" 
              description="Learn about our journey, mission, and the vision that drives us forward."
              link="/about/story"
              icon="📜"
            />
            <AboutNavCard 
              title="Why Africa" 
              description="Discover why we're committed to Africa's digital transformation."
              link="/about/africa"
              icon="🌍"
            />
            <AboutNavCard 
              title="Team & Careers" 
              description="Meet our talented team and explore career opportunities."
              link="/about/careers"
              icon="👥"
            />
            <AboutNavCard 
              title="Media Kit" 
              description="Access our brand assets, logos, and media resources."
              link="/about/media-kit"
              icon="📰"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <motion.div 
          className="max-w-3xl mx-auto px-4 py-12 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Digital Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses and individuals who trust TETRACODE for innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Get in Touch
            </a>
            <a
              href="/solutions"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
            >
              Explore Solutions
            </a>
          </div>
        </motion.div>
      </section>
    </PageTemplate>
  );
}
