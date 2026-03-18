import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Download, ArrowRight, Github, Linkedin, Twitter, Mail,
  Sparkles, Code2, Zap, Star, ChevronRight, ExternalLink
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AnimatedCounter from '../components/AnimatedCounter';
import GlassCard from '../components/GlassCard';

const PROFILE_IMG = 'https://images.unsplash.com/photo-1638983752157-052aa1f15bf1?w=600&q=80';
const FEATURED_IMG = 'https://images.unsplash.com/photo-1641567535859-c58187ac4954?w=800&q=80';

const techStack = ['React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'AWS'];

const socials = [
  { icon: Github, href: 'https://github.com', label: 'GitHub', color: '#6366F1' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0EA5E9' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: '#38BDF8' },
  { icon: Mail, href: 'mailto:john@example.com', label: 'Email', color: '#EC4899' },
];

const stats = [
  { target: 50, suffix: '+', label: 'Projects Completed' },
  { target: 5, suffix: '+', label: 'Years Experience' },
  { target: 98, suffix: '%', label: 'Client Satisfaction' },
  { target: 12, suffix: 'k+', label: 'GitHub Stars' },
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    if (!deleting && charIdx < current.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), 80);
      return () => clearTimeout(t);
    } else if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    } else if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx(c => c - 1), 40);
      return () => clearTimeout(t);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx(i => (i + 1) % texts.length);
    }
  }, [charIdx, deleting, idx, texts]);

  return (
    <span>
      {texts[idx].slice(0, charIdx)}
      <span className="animate-pulse" style={{ color: '#EC4899' }}>|</span>
    </span>
  );
}

export default function Home() {
  const { isDark } = useTheme();
  const [profileTilt, setProfileTilt] = useState({ x: 0, y: 0 });

  const handleProfileMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setProfileTilt({ x: y * 15, y: x * -15 });
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ─── HERO SECTION ─── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        {/* Gradient mesh background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isDark
              ? `radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.18) 0%, transparent 55%),
                 radial-gradient(ellipse at 80% 20%, rgba(236,72,153,0.12) 0%, transparent 55%),
                 radial-gradient(ellipse at 60% 80%, rgba(99,102,241,0.1) 0%, transparent 45%)`
              : `radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.1) 0%, transparent 55%),
                 radial-gradient(ellipse at 80% 20%, rgba(236,72,153,0.08) 0%, transparent 55%)`,
          }}
        />

        {/* Grid dots */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: isDark
              ? 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)'
              : 'radial-gradient(circle, rgba(99,102,241,0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{
                  background: isDark ? 'rgba(99,102,241,0.12)' : 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.3)',
                  color: '#818CF8',
                }}
              >
                <Sparkles size={14} className="text-[#EC4899]" />
                Available for new opportunities · 2026
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: '#22C55E' }}
                />
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-black tracking-tight mb-3"
                style={{
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  lineHeight: 1.05,
                  color: isDark ? '#FFFFFF' : '#0A0A0A',
                  letterSpacing: '-2px',
                }}
              >
                JOHN{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #6366F1, #EC4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  DOE
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-semibold mb-4"
                style={{
                  fontSize: '32px',
                  color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.75)',
                  letterSpacing: '-0.5px',
                }}
              >
                <TypewriterText
                  texts={['Fullstack Developer', 'UI/UX Designer', 'Cloud Architect', 'Open Source Contributor']}
                />
              </motion.h2>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8 leading-relaxed max-w-xl"
                style={{
                  fontSize: '18px',
                  color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)',
                }}
              >
                I craft high-performance web & mobile applications that delight users and drive business growth. Specializing in React, Node.js, and modern cloud architectures.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105"
                  style={{
                    background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                    border: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.12)',
                    color: isDark ? '#FFFFFF' : '#0A0A0A',
                  }}
                >
                  <Download size={18} />
                  Download CV
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-base text-white transition-all hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #6366F1, #EC4899)',
                    boxShadow: '0 8px 30px rgba(99,102,241,0.4)',
                  }}
                >
                  Hire Me <ArrowRight size={18} />
                </Link>
              </motion.div>

              {/* Socials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-3"
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}
                >
                  Follow me:
                </span>
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
              </motion.div>
            </motion.div>

            {/* Right: 3D Profile photo */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div
                className="relative"
                onMouseMove={handleProfileMouseMove}
                onMouseLeave={() => setProfileTilt({ x: 0, y: 0 })}
                style={{
                  transform: `perspective(1000px) rotateX(${profileTilt.x}deg) rotateY(${profileTilt.y}deg)`,
                  transition: 'transform 0.15s ease',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Outer glow ring */}
                <div
                  className="absolute -inset-4 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, #6366F1, #EC4899, #6366F1)',
                    opacity: 0.4,
                    filter: 'blur(20px)',
                    animation: 'spin 4s linear infinite',
                  }}
                />

                {/* Gradient border */}
                <div
                  className="relative p-1 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #6366F1, #EC4899, #6366F1)',
                    boxShadow: '0 0 40px rgba(99,102,241,0.5), 0 0 80px rgba(236,72,153,0.3)',
                  }}
                >
                  <div className="rounded-full overflow-hidden" style={{ width: 280, height: 280 }}>
                    <img
                      src={PROFILE_IMG}
                      alt="John Doe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -left-6 px-3 py-2 rounded-xl flex items-center gap-2"
                  style={{
                    background: isDark ? 'rgba(99,102,241,0.9)' : 'rgba(99,102,241,0.95)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 24px rgba(99,102,241,0.4)',
                  }}
                >
                  <Code2 size={16} className="text-white" />
                  <span className="text-white text-xs font-bold">50+ Projects</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -top-2 -right-8 px-3 py-2 rounded-xl flex items-center gap-2"
                  style={{
                    background: isDark ? 'rgba(236,72,153,0.9)' : 'rgba(236,72,153,0.95)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 24px rgba(236,72,153,0.4)',
                  }}
                >
                  <Star size={14} className="text-white" fill="white" />
                  <span className="text-white text-xs font-bold">Top Rated</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-1/2 -right-10 px-3 py-2 rounded-xl flex items-center gap-2"
                  style={{
                    background: isDark ? 'rgba(20,20,30,0.9)' : 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(99,102,241,0.3)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                  }}
                >
                  <Zap size={14} style={{ color: '#F59E0B' }} />
                  <span style={{ color: isDark ? '#fff' : '#0A0A0A', fontSize: '12px', fontWeight: 700 }}>Available Now</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Tech stack pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 flex flex-wrap items-center gap-3"
          >
            <span className="text-sm font-medium" style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}>
              Tech I use:
            </span>
            {techStack.map(t => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg text-sm font-medium"
                style={{
                  background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(99,102,241,0.08)',
                  border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.15)',
                  color: isDark ? 'rgba(255,255,255,0.7)' : '#4F46E5',
                }}
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs" style={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }}>Scroll</span>
          <div
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
            style={{ borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(99,102,241,0.3)' }}
          >
            <div
              className="w-1 h-2 rounded-full animate-bounce"
              style={{ background: '#6366F1' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ─── STATS ROW ─── */}
      <section className="py-16" style={{ borderTop: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(99,102,241,0.1)' }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div
            className="rounded-2xl p-8"
            style={{
              background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(20px)',
              border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(99,102,241,0.15)',
            }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="relative"
                  style={{
                    paddingRight: i < stats.length - 1 ? undefined : undefined,
                    borderRight: i < stats.length - 1 ? (isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(99,102,241,0.1)') : 'none',
                  }}
                >
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    label={stat.label}
                    isDark={isDark}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECT ─── */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: 'rgba(236,72,153,0.15)',
                      color: '#EC4899',
                      border: '1px solid rgba(236,72,153,0.3)',
                    }}
                  >
                    ✦ Featured Work
                  </span>
                </div>
                <h2
                  className="font-black"
                  style={{
                    fontSize: 'clamp(28px, 3vw, 40px)',
                    color: isDark ? '#FFFFFF' : '#0A0A0A',
                    letterSpacing: '-1px',
                  }}
                >
                  Highlighted Project
                </h2>
              </div>
              <Link
                to="/projects"
                className="hidden md:flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                style={{ color: '#6366F1' }}
              >
                View All Projects <ChevronRight size={16} />
              </Link>
            </div>

            {/* Featured card */}
            <div
              className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
              style={{
                background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(20px)',
                border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.15)',
                boxShadow: isDark ? '0 20px 80px rgba(99,102,241,0.2)' : '0 20px 80px rgba(99,102,241,0.12)',
              }}
            >
              <div className="relative overflow-hidden" style={{ minHeight: '320px' }}>
                <img
                  src={FEATURED_IMG}
                  alt="NexaDash Analytics"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to right, transparent 70%, rgba(0,0,0,0.3))' }}
                />
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 self-start"
                  style={{
                    background: 'rgba(99,102,241,0.15)',
                    color: '#818CF8',
                    border: '1px solid rgba(99,102,241,0.25)',
                  }}
                >
                  ★ Featured · Web App
                </span>

                <h3
                  className="font-black mb-3"
                  style={{
                    fontSize: '28px',
                    color: isDark ? '#FFFFFF' : '#0A0A0A',
                    letterSpacing: '-0.5px',
                  }}
                >
                  NexaDash Analytics
                </h3>

                <p
                  className="mb-6 leading-relaxed"
                  style={{
                    fontSize: '16px',
                    color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)',
                  }}
                >
                  Enterprise-grade analytics platform with real-time data visualization, AI-powered insights, and customizable dashboard widgets. Serving 500+ enterprise clients.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'D3.js'].map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: isDark ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.1)',
                        color: '#818CF8',
                        border: '1px solid rgba(99,102,241,0.25)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                      boxShadow: '0 4px 15px rgba(99,102,241,0.4)',
                    }}
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
                    style={{
                      background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)',
                      border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.1)',
                      color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
                    }}
                  >
                    <Github size={15} /> Source
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA to projects page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex justify-center"
          >
            <Link
              to="/projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 md:hidden"
              style={{ color: '#6366F1', border: '1px solid rgba(99,102,241,0.3)' }}
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Spin animation */}
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
