import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DebugLanguage from '@/components/DebugLanguage';

type Theme = 'light' | 'dark' | 'system';

export default function MainLayout() {
  const [theme, setTheme] = useState<Theme>('light');

  // Apply theme class to HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    // Remove all theme classes first
    root.classList.remove('light', 'dark');
    
    // Apply the current theme
    if (theme === 'system') {
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    
    // Save theme preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <main className="flex-grow pt-20">
        <Outlet context={{ theme, toggleTheme }} />
      </main>
      <Footer theme={theme} />
      {/* <DebugLanguage /> */}
    </div>
  );
}
