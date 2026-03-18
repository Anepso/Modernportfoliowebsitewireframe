import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, BookOpen, ChevronDown, Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ProjectCard, { Project } from '../components/ProjectCard';

const IMG1 = 'https://images.unsplash.com/photo-1641567535859-c58187ac4954?w=800&q=80';
const IMG2 = 'https://images.unsplash.com/photo-1771054931524-8c7c09dde0b8?w=800&q=80';
const IMG3 = 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=800&q=80';
const IMG4 = 'https://images.unsplash.com/photo-1642132652860-471b4228023e?w=800&q=80';
const IMG5 = 'https://images.unsplash.com/photo-1726137065519-c9a1b9eca951?w=800&q=80';
const IMG6 = IMG1;

const allProjects: Project[] = [
  {
    id: 1, title: 'NexaDash Analytics', description: 'Enterprise analytics platform with real-time data visualization and AI-powered insights.',
    image: IMG1, tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'], category: 'web', liveUrl: '#', githubUrl: '#', featured: true,
  },
  {
    id: 2, title: 'TaskFlow Mobile', description: 'Cross-platform productivity app with offline-first sync, smart reminders, and team collaboration.',
    image: IMG2, tech: ['React Native', 'Redux', 'Firebase', 'Expo'], category: 'mobile', liveUrl: '#', githubUrl: '#',
  },
  {
    id: 3, title: 'ShopSphere Commerce', description: 'Full-featured e-commerce platform with AI recommendations and seamless checkout.',
    image: IMG3, tech: ['Next.js', 'Tailwind', 'Stripe', 'MongoDB'], category: 'web', liveUrl: '#', githubUrl: '#',
  },
  {
    id: 4, title: 'CloudMetrics SaaS', description: 'B2B SaaS dashboard for monitoring cloud infrastructure costs and performance.',
    image: IMG4, tech: ['Vue.js', 'Python', 'FastAPI', 'Redis', 'Docker'], category: 'web', liveUrl: '#', githubUrl: '#',
  },
  {
    id: 5, title: 'PayVault Fintech', description: 'Secure digital wallet app with multi-currency support, spending analytics, and instant transfers.',
    image: IMG5, tech: ['React Native', 'Node.js', 'Plaid API', 'Stripe'], category: 'mobile', liveUrl: '#', githubUrl: '#',
  },
  {
    id: 6, title: 'DesignForge UI Kit', description: 'Comprehensive design system with 200+ components, Figma-to-code pipeline, and theme builder.',
    image: IMG6, tech: ['React', 'Storybook', 'Figma API', 'Rollup'], category: 'design', liveUrl: '#', githubUrl: '#',
  },
  {
    id: 7, title: 'AiChat Assistant', description: 'AI-powered customer support platform with GPT-4 integration and multi-language support.',
    image: IMG4, tech: ['Next.js', 'OpenAI', 'Prisma', 'Supabase'], category: 'web', liveUrl: '#', githubUrl: '#',
  },
  {
    id: 8, title: 'FitTrack Health', description: 'Health & fitness tracker with wearable integration, workout planning, and nutrition logging.',
    image: IMG2, tech: ['Flutter', 'Dart', 'Firebase', 'HealthKit'], category: 'mobile', liveUrl: '#', githubUrl: '#',
  },
  {
    id: 9, title: 'BrandKit Design Tool', description: 'Browser-based brand management tool for creating consistent visual identities at scale.',
    image: IMG3, tech: ['React', 'Canvas API', 'TypeScript', 'AWS S3'], category: 'design', liveUrl: '#', githubUrl: '#',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'Design' },
];

function ProjectModal({ project, onClose, isDark }: { project: Project; onClose: () => void; isDark: boolean }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 40 }}
          transition={{ type: 'spring', damping: 20 }}
          className="w-full max-w-3xl rounded-2xl overflow-hidden"
          style={{
            background: isDark ? '#111118' : '#FFFFFF',
            border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(99,102,241,0.2)',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6))' }} />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white"
              style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-black mb-1" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>{project.title}</h3>
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                  style={{ background: 'rgba(99,102,241,0.15)', color: '#818CF8' }}
                >
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
              </div>
            </div>

            <p className="leading-relaxed mb-6" style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)', fontSize: '16px' }}>
              {project.description} This project was built to solve real-world problems at scale, featuring optimized performance, accessibility compliance, and a seamless user experience across all devices.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[['Timeline', '3 months'], ['Role', 'Lead Developer'], ['Team Size', '4 people'], ['Status', 'Live ✓']].map(([k, v]) => (
                <div key={k} className="rounded-xl p-4" style={{ background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(99,102,241,0.05)' }}>
                  <div className="text-xs font-medium mb-0.5" style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}>{k}</div>
                  <div className="text-sm font-semibold" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>{v}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ background: isDark ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.1)', color: '#818CF8', border: '1px solid rgba(99,102,241,0.25)' }}>
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a href={project.liveUrl || '#'} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #6366F1, #EC4899)' }}>
                <ExternalLink size={15} /> Live Demo
              </a>
              <a href={project.githubUrl || '#'} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium"
                style={{ background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)', color: isDark ? '#fff' : '#0A0A0A', border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.1)' }}>
                <Github size={15} /> GitHub
              </a>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium ml-auto"
                style={{ background: 'rgba(236,72,153,0.12)', border: '1px solid rgba(236,72,153,0.25)', color: '#EC4899' }}>
                <BookOpen size={15} /> Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = allProjects.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const displayed = filtered.slice(0, displayCount);
  const hasMore = displayCount < filtered.length;

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(99,102,241,0.12)', color: '#818CF8', border: '1px solid rgba(99,102,241,0.25)' }}
          >
            ◆ Portfolio
          </span>
          <h1
            className="font-black mb-4"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              color: isDark ? '#FFFFFF' : '#0A0A0A',
              letterSpacing: '-1.5px',
            }}
          >
            My{' '}
            <span style={{ background: 'linear-gradient(135deg, #6366F1, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Projects
            </span>
          </h1>
          <p className="max-w-xl mx-auto" style={{ fontSize: '18px', color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
            A curated collection of my work — from enterprise web apps to mobile products and design systems.
          </p>
        </motion.div>

        {/* Filter bar + Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-10 items-center justify-between"
        >
          {/* Category filters */}
          <div
            className="flex gap-1 p-1 rounded-xl overflow-x-auto"
            style={{
              background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)',
              border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.15)',
            }}
          >
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setDisplayCount(6); }}
                className="relative px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all"
                style={{
                  color: activeCategory === cat.id
                    ? '#FFFFFF'
                    : isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                }}
              >
                {activeCategory === cat.id && (
                  <motion.span
                    layoutId="cat-active"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                  />
                )}
                <span className="relative">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div
            className="relative flex items-center w-full sm:w-72"
            style={{
              background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.9)',
              border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(99,102,241,0.2)',
              borderRadius: '12px',
            }}
          >
            <Search size={16} className="absolute left-3" style={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }} />
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full bg-transparent py-2.5 pl-9 pr-4 text-sm outline-none"
              style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}
            />
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <ProjectCard project={project} onOpenModal={setSelectedProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {displayed.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg" style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}>
              No projects found matching your search.
            </p>
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setDisplayCount(c => c + 3)}
              className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
              style={{
                background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.08)',
                border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(99,102,241,0.2)',
                color: isDark ? '#FFFFFF' : '#6366F1',
              }}
            >
              Load More <ChevronDown size={16} />
              <span
                className="px-2 py-0.5 rounded-full text-xs"
                style={{ background: 'rgba(99,102,241,0.2)', color: '#818CF8' }}
              >
                {filtered.length - displayCount} more
              </span>
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          isDark={isDark}
        />
      )}
    </div>
  );
}
