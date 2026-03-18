import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Zap, ArrowRight, Download, Github, ExternalLink, Search,
  Bell, Check, X, Info, Star, Heart, Code2, Layers, Palette, Type
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import GlassCard from '../components/GlassCard';

const colors = [
  { name: 'Primary', value: '#6366F1', hex: '#6366F1', use: 'CTAs, Links, Accents' },
  { name: 'Accent', value: '#EC4899', hex: '#EC4899', use: 'Highlights, Badges' },
  { name: 'Background', value: '#0A0A0A', hex: '#0A0A0A', use: 'Page Background' },
  { name: 'Surface', value: 'rgba(255,255,255,0.05)', hex: '#1A1A2E', use: 'Cards, Modals' },
  { name: 'Indigo 400', value: '#818CF8', hex: '#818CF8', use: 'Secondary Labels' },
  { name: 'Purple', value: '#8B5CF6', hex: '#8B5CF6', use: 'Gradient Midpoint' },
  { name: 'Success', value: '#22C55E', hex: '#22C55E', use: 'Status, Available' },
  { name: 'Warning', value: '#F59E0B', hex: '#F59E0B', use: 'Ratings, Alerts' },
  { name: 'Info', value: '#0EA5E9', hex: '#0EA5E9', use: 'Links, Info States' },
  { name: 'Danger', value: '#EF4444', hex: '#EF4444', use: 'Errors, Destructive' },
];

const typeScale = [
  { name: 'H1 / Hero', size: '72px', weight: '900', sample: 'JOHN DOE' },
  { name: 'H2 / Section', size: '40px', weight: '900', sample: 'Featured Projects' },
  { name: 'H3 / Card', size: '24px', weight: '700', sample: 'NexaDash Analytics' },
  { name: 'H4 / Label', size: '18px', weight: '600', sample: 'Fullstack Developer' },
  { name: 'Body / Regular', size: '18px', weight: '400', sample: 'I craft high-performance web applications' },
  { name: 'Small / Caption', size: '14px', weight: '400', sample: 'Tech I use: React, TypeScript, Node.js' },
  { name: 'XS / Badge', size: '12px', weight: '600', sample: 'WEB APP  ·  FEATURED' },
];

const iconSet = [
  Zap, ArrowRight, Download, Github, ExternalLink, Search,
  Bell, Check, X, Info, Star, Heart, Code2, Layers, Palette, Type
];

export default function DesignSystem() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'components' | 'icons'>('colors');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const tabs = [
    { id: 'colors', label: 'Colors', icon: Palette },
    { id: 'typography', label: 'Typography', icon: Type },
    { id: 'components', label: 'Components', icon: Layers },
    { id: 'icons', label: 'Icons', icon: Code2 },
  ] as const;

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(99,102,241,0.12)', color: '#818CF8', border: '1px solid rgba(99,102,241,0.25)' }}
          >
            ◆ Design System
          </span>
          <h1 className="font-black mb-3"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: isDark ? '#FFFFFF' : '#0A0A0A', letterSpacing: '-1.5px' }}>
            Portfolio{' '}
            <span style={{ background: 'linear-gradient(135deg, #6366F1, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Design System
            </span>
          </h1>
          <p style={{ fontSize: '18px', color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)', maxWidth: '600px' }}>
            A comprehensive visual language guide — colors, typography, components, and interactive patterns used throughout the portfolio.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {['React 18', 'TypeScript', 'Tailwind CSS v4', 'Motion', 'Recharts'].map(b => (
              <span key={b} className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.08)', color: isDark ? 'rgba(255,255,255,0.6)' : '#4F46E5', border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(99,102,241,0.2)' }}>
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tab navigation */}
        <div
          className="flex gap-1 p-1 rounded-xl mb-10 w-fit"
          style={{
            background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)',
            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.15)',
          }}
        >
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all"
              style={{ color: activeTab === id ? '#FFFFFF' : isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}
            >
              {activeTab === id && (
                <motion.span layoutId="ds-tab" className="absolute inset-0 rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }} />
              )}
              <span className="relative flex items-center gap-2">
                <Icon size={14} /> {label}
              </span>
            </button>
          ))}
        </div>

        {/* ── COLORS ── */}
        {activeTab === 'colors' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {colors.map(color => (
                <div
                  key={color.name}
                  className="rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-105"
                  style={{
                    background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.85)',
                    border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.15)',
                  }}
                  onClick={() => copyColor(color.hex)}
                >
                  <div className="h-20 w-full" style={{ background: color.value }} />
                  <div className="p-3">
                    <div className="text-sm font-bold mb-0.5" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>{color.name}</div>
                    <div className="text-xs font-mono mb-1" style={{ color: '#818CF8' }}>{color.hex}</div>
                    <div className="text-xs" style={{ color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.4)' }}>{color.use}</div>
                    {copiedColor === color.hex && (
                      <div className="text-xs font-medium mt-1" style={{ color: '#22C55E' }}>✓ Copied!</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Gradients */}
            <div className="mt-8">
              <h3 className="text-base font-bold mb-4" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>Gradients</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Primary Gradient', gradient: 'linear-gradient(135deg, #6366F1, #EC4899)', code: 'from #6366F1 to #EC4899' },
                  { name: 'Indigo Gradient', gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)', code: 'from #6366F1 to #8B5CF6' },
                  { name: 'Glow Effect', gradient: 'radial-gradient(circle, rgba(99,102,241,0.4), transparent)', code: 'rgba(99,102,241,0.4)' },
                ].map(g => (
                  <div key={g.name} className="rounded-2xl overflow-hidden"
                    style={{ background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.85)', border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.15)' }}>
                    <div className="h-24 w-full" style={{ background: g.gradient }} />
                    <div className="p-3">
                      <div className="text-sm font-bold" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>{g.name}</div>
                      <div className="text-xs font-mono" style={{ color: '#818CF8' }}>{g.code}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ── TYPOGRAPHY ── */}
        {activeTab === 'typography' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <GlassCard padding="0px" className="overflow-hidden">
              <div className="p-6 pb-0">
                <div className="text-sm font-semibold mb-1" style={{ color: '#818CF8' }}>Font Family</div>
                <div className="text-2xl font-black mb-1" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>Inter</div>
                <div className="text-sm" style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}>
                  Weights: 300 · 400 · 500 · 600 · 700 · 800 · 900
                </div>
              </div>
              <div className="mt-6">
                {typeScale.map((t, i) => (
                  <div
                    key={t.name}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 p-6"
                    style={{ borderTop: i > 0 ? (isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(99,102,241,0.08)') : 'none' }}
                  >
                    <div style={{ minWidth: '180px' }}>
                      <div className="text-xs font-semibold" style={{ color: '#818CF8' }}>{t.name}</div>
                      <div className="text-xs" style={{ color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)' }}>
                        {t.size} · weight {t.weight}
                      </div>
                    </div>
                    <div
                      className="flex-1 truncate"
                      style={{
                        fontSize: Math.min(parseInt(t.size), 40) + 'px',
                        fontWeight: parseInt(t.weight),
                        color: isDark ? '#FFFFFF' : '#0A0A0A',
                        letterSpacing: parseInt(t.size) >= 40 ? '-1.5px' : '-0.3px',
                        lineHeight: 1.1,
                      }}
                    >
                      {t.sample}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* ── COMPONENTS ── */}
        {activeTab === 'components' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">

            {/* Buttons */}
            <section>
              <h3 className="text-base font-bold mb-5" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>Button Variants</h3>
              <GlassCard padding="28px">
                <div className="flex flex-wrap gap-4">
                  {/* Primary */}
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #6366F1, #EC4899)', boxShadow: '0 8px 24px rgba(99,102,241,0.4)' }}>
                    <Zap size={15} /> Primary Button
                  </button>

                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                    style={{ background: 'transparent', border: '1.5px solid #6366F1', color: '#6366F1' }}>
                    <ArrowRight size={15} /> Outline Button
                  </button>

                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
                    style={{ background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(99,102,241,0.08)', color: isDark ? 'rgba(255,255,255,0.8)' : '#4F46E5', border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(99,102,241,0.2)' }}>
                    Ghost Button
                  </button>

                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                    style={{ background: '#EC4899', boxShadow: '0 8px 24px rgba(236,72,153,0.4)' }}>
                    <Heart size={15} /> Accent Button
                  </button>

                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                    style={{ background: '#22C55E', boxShadow: '0 8px 24px rgba(34,197,94,0.3)' }}>
                    <Check size={15} /> Success Button
                  </button>

                  <button disabled className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold cursor-not-allowed opacity-40"
                    style={{ background: 'linear-gradient(135deg, #6366F1, #EC4899)', color: '#FFFFFF' }}>
                    Disabled State
                  </button>
                </div>

                {/* Icon buttons */}
                <div className="flex flex-wrap gap-3 mt-6 pt-6" style={{ borderTop: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(99,102,241,0.1)' }}>
                  {[
                    { icon: Github, bg: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)', color: isDark ? '#fff' : '#0A0A0A', border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.1)' },
                    { icon: Download, bg: 'rgba(99,102,241,0.15)', color: '#818CF8', border: '1px solid rgba(99,102,241,0.25)' },
                    { icon: ExternalLink, bg: 'rgba(236,72,153,0.12)', color: '#EC4899', border: '1px solid rgba(236,72,153,0.25)' },
                    { icon: Bell, bg: 'rgba(245,158,11,0.12)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.25)' },
                  ].map(({ icon: Icon, bg, color, border }) => (
                    <button key={color} className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110" style={{ background: bg, border, color }}>
                      <Icon size={16} />
                    </button>
                  ))}
                </div>
              </GlassCard>
            </section>

            {/* Glass Cards */}
            <section>
              <h3 className="text-base font-bold mb-5" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>Glass Card Variants</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <GlassCard padding="24px">
                  <h4 className="font-bold mb-2" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>Default Glass</h4>
                  <p className="text-sm" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
                    Standard glassmorphism card with backdrop blur and subtle border.
                  </p>
                </GlassCard>
                <GlassCard padding="24px" glow="primary">
                  <h4 className="font-bold mb-2" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>Primary Glow</h4>
                  <p className="text-sm" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
                    Glass card with indigo/primary glow shadow effect.
                  </p>
                </GlassCard>
                <GlassCard padding="24px" glow="accent">
                  <h4 className="font-bold mb-2" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>Accent Glow</h4>
                  <p className="text-sm" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
                    Glass card with pink/accent glow shadow effect.
                  </p>
                </GlassCard>
              </div>
            </section>

            {/* Badges */}
            <section>
              <h3 className="text-base font-bold mb-5" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>Badges & Labels</h3>
              <GlassCard padding="28px">
                <div className="flex flex-wrap gap-3">
                  {[
                    { text: 'React', bg: 'rgba(99,102,241,0.15)', color: '#818CF8', border: 'rgba(99,102,241,0.3)' },
                    { text: 'TypeScript', bg: 'rgba(14,165,233,0.15)', color: '#0EA5E9', border: 'rgba(14,165,233,0.3)' },
                    { text: 'Next.js', bg: 'rgba(255,255,255,0.08)', color: isDark ? '#fff' : '#0A0A0A', border: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)' },
                    { text: 'Live ✓', bg: 'rgba(34,197,94,0.15)', color: '#22C55E', border: 'rgba(34,197,94,0.3)' },
                    { text: '★ Featured', bg: 'rgba(245,158,11,0.15)', color: '#F59E0B', border: 'rgba(245,158,11,0.3)' },
                    { text: 'WEB APP', bg: 'rgba(236,72,153,0.12)', color: '#EC4899', border: 'rgba(236,72,153,0.25)' },
                  ].map(b => (
                    <span key={b.text} className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: b.bg, color: b.color, border: `1px solid ${b.border}` }}>
                      {b.text}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </section>

            {/* Glassmorphism spec */}
            <section>
              <h3 className="text-base font-bold mb-5" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>Glassmorphism Spec</h3>
              <GlassCard padding="28px">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { prop: 'background', dark: 'rgba(255,255,255,0.04)', light: 'rgba(255,255,255,0.75)' },
                    { prop: 'backdrop-filter', dark: 'blur(20px)', light: 'blur(20px)' },
                    { prop: 'border', dark: '1px solid rgba(255,255,255,0.08)', light: '1px solid rgba(99,102,241,0.15)' },
                    { prop: 'box-shadow (default)', dark: '0 4px 24px rgba(0,0,0,0.3)', light: '0 4px 24px rgba(99,102,241,0.08)' },
                    { prop: 'box-shadow (glow)', dark: '0 8px 40px rgba(99,102,241,0.25)', light: '0 8px 40px rgba(99,102,241,0.15)' },
                    { prop: 'border-radius', dark: '16px', light: '16px' },
                  ].map(s => (
                    <div key={s.prop}>
                      <div className="text-xs font-bold mb-1" style={{ color: '#818CF8' }}>{s.prop}</div>
                      <div className="text-xs font-mono mb-0.5" style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}>
                        Dark: {s.dark}
                      </div>
                      <div className="text-xs font-mono" style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}>
                        Light: {s.light}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </section>
          </motion.div>
        )}

        {/* ── ICONS ── */}
        {activeTab === 'icons' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm mb-6" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
              Icons from <strong>lucide-react</strong> — consistent, customizable, and accessible.
            </p>
            <GlassCard padding="28px">
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
                {iconSet.map((Icon, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl cursor-pointer transition-all hover:scale-110"
                    style={{
                      background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(99,102,241,0.06)',
                      border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(99,102,241,0.12)',
                    }}
                  >
                    <Icon size={20} style={{ color: i % 2 === 0 ? '#6366F1' : '#EC4899' }} />
                    <span className="text-[10px] text-center" style={{ color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)' }}>
                      {Icon.displayName || 'Icon'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6" style={{ borderTop: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(99,102,241,0.1)' }}>
                <p className="text-sm font-medium mb-3" style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)' }}>Usage example:</p>
                <div
                  className="rounded-xl p-4 font-mono text-sm"
                  style={{
                    background: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.04)',
                    border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
                    color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                  }}
                >
                  <span style={{ color: '#EC4899' }}>import</span>{' '}
                  {'{ Zap, ArrowRight }'}{' '}
                  <span style={{ color: '#EC4899' }}>from</span>{' '}
                  <span style={{ color: '#22C55E' }}>'lucide-react'</span>
                  <br />
                  <span style={{ color: '#818CF8' }}>{'<Zap size={16} className="text-[#6366F1]" />'}</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </div>
    </div>
  );
}
