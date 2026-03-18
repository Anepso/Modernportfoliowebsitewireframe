import { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import {
  Send, Calendar, Github, Linkedin, Mail, MessageCircle,
  Phone, MapPin, CheckCircle, Paperclip, Clock, Zap
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import GlassCard from '../components/GlassCard';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
  file?: FileList;
}

const services = [
  'Web Development',
  'Mobile App',
  'UI/UX Design',
  'Technical Consulting',
  'Code Review',
  'Other',
];

const socials = [
  { icon: Linkedin, label: 'LinkedIn', handle: 'linkedin.com/in/johndoe', href: 'https://linkedin.com', color: '#0EA5E9', bg: 'rgba(14,165,233,0.12)' },
  { icon: Github, label: 'GitHub', handle: 'github.com/johndoe', href: 'https://github.com', color: '#818CF8', bg: 'rgba(129,140,248,0.12)' },
  { icon: Mail, label: 'Email', handle: 'john@example.com', href: 'mailto:john@example.com', color: '#EC4899', bg: 'rgba(236,72,153,0.12)' },
  { icon: MessageCircle, label: 'WhatsApp', handle: '+1 (555) 012-3456', href: 'https://wa.me/15550123456', color: '#22C55E', bg: 'rgba(34,197,94,0.12)' },
];

const clientLogos = [
  { name: 'TechVision', initials: 'TV', color: '#6366F1' },
  { name: 'StartupX', initials: 'SX', color: '#EC4899' },
  { name: 'BigTech', initials: 'BT', color: '#0EA5E9' },
  { name: 'ScaleUp', initials: 'SU', color: '#10B981' },
  { name: 'InnovateCo', initials: 'IC', color: '#F59E0B' },
  { name: 'CloudBase', initials: 'CB', color: '#8B5CF6' },
];

export default function Contact() {
  const { isDark } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise(res => setTimeout(res, 1500));
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
  };

  const inputStyle = {
    width: '100%',
    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.9)',
    border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(99,102,241,0.2)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: isDark ? '#FFFFFF' : '#0A0A0A',
    fontSize: '15px',
    outline: 'none',
    fontFamily: "'Inter', sans-serif",
    transition: 'border-color 0.2s',
  };

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(236,72,153,0.12)', color: '#EC4899', border: '1px solid rgba(236,72,153,0.25)' }}
          >
            ◆ Get In Touch
          </span>
          <h1
            className="font-black mb-4"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: isDark ? '#FFFFFF' : '#0A0A0A', letterSpacing: '-1.5px' }}
          >
            Let's{' '}
            <span style={{ background: 'linear-gradient(135deg, #6366F1, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Build Something
            </span>
          </h1>
          <p style={{ fontSize: '18px', color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
            Have a project in mind? Let's talk and bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── LEFT: FORM ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <GlassCard padding="40px">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'rgba(34,197,94,0.15)' }}
                  >
                    <CheckCircle size={32} style={{ color: '#22C55E' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>Message Sent!</h3>
                  <p className="mb-6" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
                    I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, #6366F1, #EC4899)' }}
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <h3 className="text-lg font-bold mb-6" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>
                    Send a Message
                  </h3>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}>
                        Full Name *
                      </label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        placeholder="John Smith"
                        style={inputStyle}
                      />
                      {errors.name && <p className="text-xs mt-1" style={{ color: '#EC4899' }}>{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}>
                        Email Address *
                      </label>
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' }
                        })}
                        placeholder="john@company.com"
                        type="email"
                        style={inputStyle}
                      />
                      {errors.email && <p className="text-xs mt-1" style={{ color: '#EC4899' }}>{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}>
                      Service Needed *
                    </label>
                    <select
                      {...register('service', { required: 'Please select a service' })}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="" style={{ background: isDark ? '#111118' : '#FFFFFF' }}>Select a service...</option>
                      {services.map(s => (
                        <option key={s} value={s} style={{ background: isDark ? '#111118' : '#FFFFFF' }}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-xs mt-1" style={{ color: '#EC4899' }}>{errors.service.message}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}>
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'Message too short' } })}
                      rows={5}
                      placeholder="Tell me about your project, timeline, and budget..."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    />
                    {errors.message && <p className="text-xs mt-1" style={{ color: '#EC4899' }}>{errors.message.message}</p>}
                  </div>

                  {/* File upload */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}>
                      Attachment (optional)
                    </label>
                    <label
                      className="flex items-center gap-3 cursor-pointer px-4 py-3 rounded-xl transition-all"
                      style={{
                        background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(99,102,241,0.04)',
                        border: `2px dashed ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(99,102,241,0.2)'}`,
                      }}
                    >
                      <Paperclip size={16} style={{ color: '#6366F1' }} />
                      <span className="text-sm" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
                        {fileName || 'Click to upload brief, mockup, or spec...'}
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        {...register('file')}
                        onChange={e => setFileName(e.target.files?.[0]?.name || '')}
                      />
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, #6366F1, #EC4899)',
                      boxShadow: '0 8px 30px rgba(99,102,241,0.4)',
                      fontSize: '16px',
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <><Send size={18} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>

          {/* ── RIGHT: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Quick info */}
            <GlassCard padding="28px">
              <h3 className="font-bold mb-5" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>Contact Info</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'john@example.com', href: 'mailto:john@example.com' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 012-3456', href: 'tel:+15550123456' },
                  { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 transition-all hover:translate-x-1"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)' }}
                    >
                      <Icon size={16} style={{ color: '#6366F1' }} />
                    </div>
                    <div>
                      <div className="text-xs" style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}>{label}</div>
                      <div className="text-sm font-medium" style={{ color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)' }}>{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-5 p-3 rounded-xl" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22C55E' }} />
                <span className="text-sm font-medium" style={{ color: '#22C55E' }}>Available for new projects</span>
              </div>
            </GlassCard>

            {/* Calendly */}
            <GlassCard padding="28px" glow="primary">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
              >
                <Calendar size={18} className="text-white" />
              </div>
              <h3 className="font-bold mb-2" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>Book a Call</h3>
              <p className="text-sm mb-4" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
                Schedule a free 30-min discovery call to discuss your project.
              </p>
              <div className="flex gap-2 mb-4">
                {[
                  { icon: Clock, text: '30 min' },
                  { icon: Zap, text: 'Free' },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                    style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.08)', color: '#818CF8' }}
                  >
                    <Icon size={12} /> {text}
                  </div>
                ))}
              </div>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                  boxShadow: '0 4px 15px rgba(99,102,241,0.4)',
                }}
              >
                <Calendar size={15} /> Schedule on Calendly
              </a>
            </GlassCard>

            {/* Social links */}
            <GlassCard padding="28px">
              <h3 className="font-bold mb-4" style={{ color: isDark ? '#FFFFFF' : '#0A0A0A' }}>Find Me Online</h3>
              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, handle, href, color, bg }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-all hover:translate-x-1"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: bg, border: `1px solid ${color}30` }}
                    >
                      <Icon size={15} style={{ color }} />
                    </div>
                    <div>
                      <div className="text-xs font-medium" style={{ color }}>{label}</div>
                      <div className="text-xs" style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}>{handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* ── CLIENT LOGOS ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <p className="text-center text-sm font-medium mb-8" style={{ color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)' }}>
            TRUSTED BY AMAZING CLIENTS
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {clientLogos.map(({ name, initials, color }) => (
              <div
                key={name}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl"
                style={{
                  background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)',
                  border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(99,102,241,0.12)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black"
                  style={{ background: color }}
                >
                  {initials}
                </div>
                <span className="text-sm font-semibold" style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)' }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
