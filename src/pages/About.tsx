import React from 'react';
import { motion } from 'framer-motion';
import PageTemplate from '@/components/PageTemplate';
import { Link } from 'react-router-dom';

// Animated Card Component
const FeatureCard = ({ title, description, icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

// Navigation Card Component
const NavCard = ({ title, description, to, icon }) => (
  <Link to={to} className="block group h-full">
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

const About = () => {
  return (
    <PageTemplate 
      title="About Us"
      description="We are a team of passionate individuals dedicated to creating innovative solutions that make a difference."
      className="space-y-16 md:space-y-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Values Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="Innovation"
                description="We constantly push boundaries to create cutting-edge solutions that solve real-world problems."
                icon="🚀"
                delay={0.1}
              />
              <FeatureCard 
                title="Excellence"
                description="We're committed to delivering the highest quality in everything we do, from code to customer service."
                icon="✨"
                delay={0.2}
              />
              <FeatureCard 
                title="Integrity"
                description="We build trust through transparency, honesty, and ethical business practices."
                icon="🤝"
                delay={0.3}
              />
            </div>
          </div>
        </div>

        {/* Explore More Section */}
        <div className="mt-24 py-12 bg-gray-50 dark:bg-gray-900 rounded-2xl">
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
              <NavCard 
                title="Our Story" 
                description="Learn about our journey, mission, and the vision that drives us forward."
                to="/about/story"
                icon="📜"
              />
              <NavCard 
                title="Why Africa" 
                description="Discover why we're committed to Africa's digital transformation."
                to="/about/africa"
                icon="🌍"
              />
              <NavCard 
                title="Team & Careers" 
                description="Meet our talented team and explore career opportunities."
                to="/about/careers"
                icon="👥"
              />
              <NavCard 
                title="Media Kit" 
                description="Access our brand assets, logos, and media resources."
                to="/about/media-kit"
                icon="📰"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center py-16">
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
              Join thousands of businesses and individuals who trust us for innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <Link
                to="/solutions"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default About;
