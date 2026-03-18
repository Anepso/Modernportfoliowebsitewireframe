import { Link } from 'react-router';
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const socials = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:john@example.com', label: 'Email' },
];

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
  { label: 'Design System', to: '/design-system' },
];

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer
      style={{
        background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(99,102,241,0.04)',
        borderTop: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(99,102,241,0.15)',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black"
                style={{ background: 'linear-gradient(135deg, #6366F1, #EC4899)' }}
              >
                J
              </div>
              <span
                className="text-lg font-black"
                style={{
                  background: 'linear-gradient(135deg, #6366F1, #EC4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                JohnDoe.
              </span>
            </div>
            <p style={{ color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)', fontSize: '14px', lineHeight: '1.6', maxWidth: '260px' }}>
              Fullstack Developer building exceptional digital experiences. Available for freelance & full-time roles.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold mb-4" style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}>Quick Links</p>
            <div className="flex flex-col gap-2">
              {links.map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm transition-colors hover:text-[#6366F1]"
                  style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold mb-4" style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}>Connect</p>
            <div className="flex gap-3 mb-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.08)',
                    border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(99,102,241,0.2)',
                    color: isDark ? 'rgba(255,255,255,0.6)' : '#6366F1',
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)', fontSize: '13px' }}>
              john@example.com
            </p>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(99,102,241,0.1)' }}
        >
          <p style={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)', fontSize: '13px' }} className="flex items-center gap-1">
            © 2026 John Doe · Made with <Heart size={12} className="text-[#EC4899]" fill="#EC4899" /> in React
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm transition-all hover:text-[#6366F1]"
            style={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }}
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
