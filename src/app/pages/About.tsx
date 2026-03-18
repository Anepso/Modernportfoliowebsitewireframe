import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis
} from 'recharts';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Award, GraduationCap, Briefcase, Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import GlassCard from '../components/GlassCard';

const PROFILE_IMG = 'https://images.unsplash.com/photo-1638983752157-052aa1f15bf1?w=600&q=80';

const radarData = [
  { skill: 'Frontend', value: 95 },
  { skill: 'Backend', value: 88 },
  { skill: 'Mobile', value: 80 },
  { skill: 'DevOps', value: 72 },
  { skill: 'Design', value: 78 },
  { skill: 'Database', value: 85 },
];

const skills = [
  { name: 'React / Next.js', level: 95, color: '#6366F1' },
  { name: 'TypeScript', level: 90, color: '#8B5CF6' },
  { name: 'Node.js / Express', level: 88, color: '#EC4899' },
  { name: 'Python / FastAPI', level: 82, color: '#F59E0B' },
  { name: 'AWS / Cloud', level: 75, color: '#10B981' },
  { name: 'UI / UX Design', level: 78, color: '#06B6D4' },
  { name: 'React Native', level: 80, color: '#F97316' },
  { name: 'PostgreSQL / MongoDB', level: 85, color: '#6366F1' },
];

const timeline = [
  {
    year: '2026', title: 'Senior Fullstack Engineer', company: 'TechVision Inc.', location: 'San Francisco, CA',
    description: 'Leading a team of 8 engineers building enterprise SaaS products used by Fortune 500 companies.',
    icon: Briefcase, color: '#6366F1', current: true,
  },
  {
    year: '2024', title: 'Lead Frontend Developer', company: 'StartupX', location: 'Remote',
    description: 'Architected and delivered the company\'s flagship React application, growing the user base to 200k+.',
    icon: Briefcase, color: '#EC4899', current: false,
  },
  {
    year: '2022', title: 'Frontend Engineer', company: 'BigTech Corp', location: 'New York, NY',
    description: 'Built and maintained high-performance web apps, achieving 40% improvement in Core Web Vitals.',
    icon: Briefcase, color: '#8B5CF6', current: false,
  },
  {
    year: '2020', title: 'Junior Developer', company: 'Digital Agency', location: 'Austin, TX',
    description: 'Developed responsive web solutions for 30+ clients across various industries.',
    icon: Briefcase, color: '#10B981', current: false,
  },
  {
    year: '2019', title: 'B.Sc. Computer Science', company: 'MIT', location: 'Cambridge, MA',
    description: 'Graduated with honors. Thesis on "Optimizing React rendering performance at scale".',
    icon: GraduationCap, color: '#F59E0B', current: false,
  },
];

const testimonials = [
  {
    id: 1,
    quote: "John is an exceptional developer who delivered our complex analytics platform on time and under budget. His attention to detail and code quality are second to none.",
    name: "Sarah Chen",
    role: "CTO, TechVision Inc.",
    avatar: "SC",
    rating: 5,
    company: "TechVision",
  },
  {
    id: 2,
    quote: "Working with John transformed our startup's product. He not only wrote clean, maintainable code but also brought brilliant UX ideas that our users absolutely love.",
    name: "Marcus Williams",
    role: "CEO, StartupX",
    avatar: "MW",
    rating: 5,
    company: "StartupX",
  },
  {
    id: 3,
    quote: "John's expertise in React and cloud architecture helped us scale from 10k to 500k users seamlessly. He's the kind of engineer every team needs.",
    name: "Elena Rodriguez",
    role: "VP Engineering, ScaleUp",
    avatar: "ER",
    rating: 5,
    company: "ScaleUp",
  },
];

function SkillBar({ name, level, color, isDark, delay }: { name: string; level: number; color: string; isDark: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium" style={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)' }}>{name}</span>
        <span className="text-sm font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}bb)` }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  const { isDark } = useTheme();
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const prevTestimonial = () => setTestimonialIdx(i => (i - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () => setTestimonialIdx(i => (i + 1) % testimonials.length);

  const avatarColors = ['#6366F1', '#EC4899', '#10B981'];

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* ── BIO ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: 'rgba(99,102,241,0.12)', color: '#818CF8', border: '1px solid rgba(99,102,241,0.25)' }}
            >
              ◆ About Me
            </span>
            <h1
              className="font-black mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: isDark ? '#FFFFFF' : '#0A0A0A', letterSpacing: '-1.5px', lineHeight: 1.1 }}
            >
              Crafting Digital{' '}
              <span style={{ background: 'linear-gradient(135deg, #6366F1, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Experiences
              </span>{' '}
              That Matter
            </h1>
            <p className="mb-4 leading-relaxed" style={{ fontSize: '18px', color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)' }}>
              I'm a fullstack developer with 5+ years of experience building scalable web and mobile applications. My passion lies at the intersection of beautiful design and clean engineering.
            </p>
            <p className="mb-8 leading-relaxed" style={{ fontSize: '16px', color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
              From concept to deployment, I bring ideas to life with modern technologies like React, TypeScript, and Node.js. I believe great software should be fast, accessible, and delightful to use.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: MapPin, text: 'San Francisco, CA' },
                { icon: Calendar, text: 'Available from April 2026' },
                { icon: Award, text: '5+ Years Experience' },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
                  style={{
                    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(99,102,241,0.08)',
                    border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.15)',
                    color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                  }}
                >
                  <Icon size={14} style={{ color: '#6366F1' }} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-3xl opacity-30"
                style={{ background: 'linear-gradient(135deg, #6366F1, #EC4899)', filter: 'blur(20px)' }}
              />
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ width: 340, height: 400, border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(99,102,241,0.2)' }}
              >
                <img src={PROFILE_IMG} alt="John Doe" className="w-full h-full object-cover" />
              </div>
              <GlassCard
                className="absolute -bottom-6 -right-6"
                padding="16px"
                glow="primary"
                style={{ minWidth: '160px' }}
              >
                <div className="text-2xl font-black" style={{ color: '#6366F1' }}>50+</div>
                <div className="text-xs" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>Projects Completed</div>
              </GlassCard>
            </div>
          </div>
        </motion.div>

        {/* ── SKILLS ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: 'rgba(99,102,241,0.12)', color: '#818CF8', border: '1px solid rgba(99,102,241,0.25)' }}>
              ◆ Skills
            </span>
            <h2 className="font-black" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: isDark ? '#FFFFFF' : '#0A0A0A', letterSpacing: '-1px' }}>
              Technical Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skill bars */}
            <GlassCard padding="32px">
              <h3 className="font-bold mb-6 text-base" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>Proficiency Levels</h3>
              {skills.map((s, i) => (
                <SkillBar key={s.name} {...s} isDark={isDark} delay={i * 0.06} />
              ))}
            </GlassCard>

            {/* Radar chart */}
            <GlassCard padding="32px">
              <h3 className="font-bold mb-6 text-base" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>Skills Radar</h3>
              <div style={{ height: 320 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(99,102,241,0.15)'} />
                    <PolarAngleAxis
                      dataKey="skill"
                      tick={{ fill: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)', fontSize: 13, fontFamily: 'Inter' }}
                    />
                    <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      dataKey="value"
                      stroke="#6366F1"
                      fill="#6366F1"
                      fillOpacity={0.25}
                      strokeWidth={2}
                      dot={{ r: 4, fill: '#6366F1' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        {/* ── EXPERIENCE TIMELINE ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
          id="experience"
        >
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: 'rgba(236,72,153,0.12)', color: '#EC4899', border: '1px solid rgba(236,72,153,0.25)' }}>
              ◆ Experience
            </span>
            <h2 className="font-black" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: isDark ? '#FFFFFF' : '#0A0A0A', letterSpacing: '-1px' }}>
              Career Timeline
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(99,102,241,0.15)' }}
            />

            <div className="space-y-6">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex gap-6 pl-0"
                  >
                    {/* Icon */}
                    <div
                      className="relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center z-10"
                      style={{
                        background: isDark ? '#0A0A0A' : '#F0F2FF',
                        border: `2px solid ${item.color}`,
                        boxShadow: `0 0 20px ${item.color}40`,
                      }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 rounded-2xl p-5 mb-1"
                      style={{
                        background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.8)',
                        border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(99,102,241,0.12)',
                      }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-bold text-base" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>
                            {item.title}
                          </h3>
                          <p className="text-sm font-medium" style={{ color: item.color }}>{item.company}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span
                            className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                            style={{ background: `${item.color}20`, color: item.color }}
                          >
                            {item.year}
                          </span>
                          {item.current && (
                            <span
                              className="px-2 py-0.5 rounded-full text-xs font-semibold"
                              style={{ background: 'rgba(34,197,94,0.15)', color: '#22C55E' }}
                            >
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <MapPin size={12} style={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }} />
                        <span className="text-xs" style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}>{item.location}</span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)' }}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── TESTIMONIALS ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: 'rgba(245,158,11,0.12)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.25)' }}>
              ◆ Testimonials
            </span>
            <h2 className="font-black" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: isDark ? '#FFFFFF' : '#0A0A0A', letterSpacing: '-1px' }}>
              What Clients Say
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard padding="40px" glow="primary">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonials[testimonialIdx].rating }).map((_, i) => (
                      <Star key={i} size={18} style={{ color: '#F59E0B' }} fill="#F59E0B" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote
                    className="text-lg leading-relaxed mb-8"
                    style={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.75)', fontStyle: 'italic' }}
                  >
                    "{testimonials[testimonialIdx].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: avatarColors[testimonialIdx] }}
                    >
                      {testimonials[testimonialIdx].avatar}
                    </div>
                    <div>
                      <div className="font-bold" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>
                        {testimonials[testimonialIdx].name}
                      </div>
                      <div className="text-sm" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
                        {testimonials[testimonialIdx].role}
                      </div>
                    </div>
                    <div className="ml-auto">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: 'rgba(99,102,241,0.12)', color: '#818CF8' }}
                      >
                        {testimonials[testimonialIdx].company}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.08)',
                    border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(99,102,241,0.2)',
                    color: isDark ? 'rgba(255,255,255,0.7)' : '#6366F1',
                  }}
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialIdx(i)}
                      className="rounded-full transition-all"
                      style={{
                        width: testimonialIdx === i ? 24 : 8,
                        height: 8,
                        background: testimonialIdx === i ? '#6366F1' : isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.08)',
                    border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(99,102,241,0.2)',
                    color: isDark ? 'rgba(255,255,255,0.7)' : '#6366F1',
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
