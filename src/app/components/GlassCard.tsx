import { ReactNode, CSSProperties } from 'react';
import { useTheme } from '../context/ThemeContext';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  glow?: 'primary' | 'accent' | 'none';
  hover?: boolean;
  padding?: string;
}

export default function GlassCard({
  children,
  className = '',
  style = {},
  glow = 'none',
  hover = false,
  padding = '24px',
}: GlassCardProps) {
  const { isDark } = useTheme();

  const glowColor =
    glow === 'primary' ? 'rgba(99,102,241,0.25)' :
    glow === 'accent' ? 'rgba(236,72,153,0.25)' : 'transparent';

  return (
    <div
      className={`relative rounded-2xl transition-all duration-300 ${hover ? 'hover:scale-[1.02]' : ''} ${className}`}
      style={{
        background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.15)',
        boxShadow: glow !== 'none'
          ? `0 8px 40px ${glowColor}, 0 2px 8px rgba(0,0,0,0.2)`
          : isDark ? '0 4px 24px rgba(0,0,0,0.3)' : '0 4px 24px rgba(99,102,241,0.08)',
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
