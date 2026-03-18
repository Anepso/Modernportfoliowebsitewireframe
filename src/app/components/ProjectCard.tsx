import { useState } from 'react';
import { ExternalLink, Github, BookOpen, Maximize2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  onOpenModal?: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const { isDark } = useTheme();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 12, y: x * -12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.15)',
        boxShadow: isHovered
          ? '0 20px 60px rgba(99,102,241,0.3), 0 8px 20px rgba(0,0,0,0.4)'
          : isDark ? '0 4px 24px rgba(0,0,0,0.3)' : '0 4px 24px rgba(99,102,241,0.08)',
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.02 : 1})`,
        transition: 'transform 0.15s ease, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7) 100%)',
          }}
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-2.5 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: 'rgba(99,102,241,0.85)', backdropFilter: 'blur(8px)' }}
          >
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>
        {/* Expand button */}
        {onOpenModal && (
          <button
            onClick={() => onOpenModal(project)}
            className="absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
          >
            <Maximize2 size={14} />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="font-bold text-base mb-1.5 line-clamp-1"
          style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm mb-4 line-clamp-2 leading-relaxed"
          style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}
        >
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map(t => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-full text-xs font-medium"
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

        {/* Action buttons */}
        <div className="flex gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
            >
              <ExternalLink size={12} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-105"
              style={{
                background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.1)',
                color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
              }}
            >
              <Github size={12} /> GitHub
            </a>
          )}
          {onOpenModal && (
            <button
              onClick={() => onOpenModal(project)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-105 ml-auto"
              style={{
                background: 'rgba(236,72,153,0.12)',
                border: '1px solid rgba(236,72,153,0.25)',
                color: '#EC4899',
              }}
            >
              <BookOpen size={12} /> Case Study
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
