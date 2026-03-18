import { Outlet, useLocation } from 'react-router';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

function RootContent() {
  const { isDark } = useTheme();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: isDark ? '#0A0A0A' : '#F0F2FF',
        color: isDark ? '#FFFFFF' : '#0A0A0A',
        fontFamily: "'Inter', sans-serif",
        transition: 'background 0.3s ease, color 0.3s ease',
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default function Root() {
  return (
    <ThemeProvider>
      <RootContent />
    </ThemeProvider>
  );
}
