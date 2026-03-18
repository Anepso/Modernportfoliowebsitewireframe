import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Download, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const glass = {
    background: isDark
      ? scrolled ? 'rgba(10,10,10,0.85)' : 'rgba(10,10,10,0.6)'
      : scrolled ? 'rgba(240,242,255,0.9)' : 'rgba(240,242,255,0.7)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    borderBottom: isDark
      ? scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent'
      : scrolled ? '1px solid rgba(99,102,241,0.15)' : '1px solid transparent',
    transition: 'all 0.3s ease',
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={glass}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-lg"
              style={{
                background: 'linear-gradient(135deg, #6366F1, #EC4899)',
                boxShadow: '0 0 20px rgba(99,102,241,0.5)',
              }}
            >
              J
            </div>
            <span
              className="text-xl font-black tracking-tight hidden sm:block"
              style={{
                background: 'linear-gradient(135deg, #6366F1, #EC4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              JohnDoe.
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                  style={{
                    color: isActive ? '#6366F1' : isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)',
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(99,102,241,0.12)' }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
              style={{
                background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(99,102,241,0.1)',
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(99,102,241,0.2)',
                color: isDark ? 'rgba(255,255,255,0.7)' : '#6366F1',
              }}
              title="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <Link
              to="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #6366F1, #EC4899)',
                boxShadow: '0 4px 15px rgba(99,102,241,0.4)',
              }}
            >
              <Zap size={14} />
              Hire Me
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{
                background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(99,102,241,0.1)',
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(99,102,241,0.2)',
                color: isDark ? 'rgba(255,255,255,0.7)' : '#6366F1',
              }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{
                background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(99,102,241,0.1)',
                color: isDark ? 'rgba(255,255,255,0.7)' : '#6366F1',
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden p-4"
            style={{
              background: isDark ? 'rgba(10,10,10,0.95)' : 'rgba(240,242,255,0.97)',
              backdropFilter: 'blur(24px)',
              borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.15)',
            }}
          >
            <div className="flex flex-col gap-1 mb-4">
              {navLinks.map(link => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="px-4 py-3 rounded-lg text-sm font-medium"
                    style={{
                      color: isActive ? '#6366F1' : isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                      background: isActive ? 'rgba(99,102,241,0.12)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #6366F1, #EC4899)' }}
              >
                <Zap size={14} /> Hire Me
              </Link>
              <a
                href="/cv.pdf"
                download
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold"
                style={{
                  border: '1px solid rgba(99,102,241,0.4)',
                  color: '#6366F1',
                }}
              >
                <Download size={14} /> CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
