import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Award, Server, Code2, FileText, ArrowRight, Download, CheckCircle2, Globe, Terminal, Copy, Github, Linkedin, MessageSquare, ExternalLink } from 'lucide-react';
import { cvData } from '../data/cvData';
import { SpotlightCard } from './SpotlightCard';
import { soundEffects } from '../utils/soundEffects';

interface HeroSectionProps {
  onOpenCoverLetter: () => void;
  onOpenPrintCv: () => void;
  onOpenCommandPalette: () => void;
  onShowToast: (msg: string) => void;
}

const ROLES = [
  'Full-Stack Software Developer',
  'ICT Infrastructure & Systems Specialist',
  'Huawei HCIA Cloud Solutions Engineer',
  'Cybersecurity & Disaster Recovery Specialist',
  'Space Digital Infrastructure & Geospatial Researcher',
  'Elite Video Editor & Motion Designer',
  'Product Designer & UI/UX Specialist',
  'Accounting & Financial Systems Specialist (CPA 1 & 2)',
  'Workflow Automation & Python Engineer',
  'Network Operations & ISP Engineer'
];

interface Interactive3DTerminalProps {
  activeTab: 'overview' | 'certs' | 'stack';
  setActiveTab: (tab: 'overview' | 'certs' | 'stack') => void;
}

const Interactive3DTerminal: React.FC<Interactive3DTerminalProps> = ({ activeTab, setActiveTab }) => {
  const [transformStyle, setTransformStyle] = useState('rotateY(-6deg) rotateX(4deg)');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;

    setTransformStyle(`rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('rotateY(-6deg) rotateX(4deg) scale(1)');
  };

  return (
    <div 
      className="w-full max-w-md transition-all duration-300 ease-out"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`w-full bg-[#050505] rounded-xl border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_25px_rgba(16,185,129,0.15)] overflow-hidden font-mono text-xs transition-transform duration-200 ease-out ${
          !isHovered ? 'animate-float3d' : ''
        }`}
        style={{
          transform: transformStyle,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Terminal Header Bar */}
        <div className="bg-white/10 px-4 py-3 border-b border-white/10 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-inner"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-inner"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-inner"></div>
            <span className="text-[11px] text-white/70 font-semibold ml-2 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              daniel@appville-sys:~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
              3D SYS
            </span>
          </div>
        </div>

        {/* Terminal Tabs */}
        <div className="flex border-b border-white/10 bg-white/[0.03] text-[11px]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 px-3 border-r border-white/10 text-center transition-colors ${
              activeTab === 'overview' ? 'bg-white/10 text-emerald-400 font-bold border-b-2 border-b-emerald-400' : 'text-white/50 hover:text-white'
            }`}
          >
            overview.json
          </button>
          <button
            onClick={() => setActiveTab('certs')}
            className={`flex-1 py-2 px-3 border-r border-white/10 text-center transition-colors ${
              activeTab === 'certs' ? 'bg-white/10 text-emerald-400 font-bold border-b-2 border-b-emerald-400' : 'text-white/50 hover:text-white'
            }`}
          >
            certs.json
          </button>
          <button
            onClick={() => setActiveTab('stack')}
            className={`flex-1 py-2 px-3 text-center transition-colors ${
              activeTab === 'stack' ? 'bg-white/10 text-emerald-400 font-bold border-b-2 border-b-emerald-400' : 'text-white/50 hover:text-white'
            }`}
          >
            stack.json
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-5 text-[11px] leading-relaxed text-white/90 space-y-3 min-h-[220px]">
          <div className="text-white/30 text-[10px] flex items-center justify-between pb-1 border-b border-white/5">
            <span>// EXECUTION_LOG: active_session</span>
            <span>PING 12ms</span>
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-1.5 font-mono">
              <p><span className="text-emerald-400">"candidate"</span>: <span className="text-amber-300">"Daniel Muiruri Itugi"</span>,</p>
              <p><span className="text-emerald-400">"headline"</span>: <span className="text-amber-300">"ICT Infrastructure, Cloud & Full-Stack Eng"</span>,</p>
              <p><span className="text-emerald-400">"specialization"</span>: <span className="text-amber-300">"Cybersecurity, Disaster Recovery & Space Tech"</span>,</p>
              <p><span className="text-emerald-400">"experience"</span>: <span className="text-amber-300">"6+ Yrs Enterprise Systems, Media & ISP"</span>,</p>
              <p><span className="text-emerald-400">"status"</span>: <span className="text-emerald-300 font-semibold">"Available for High-Impact Roles"</span></p>
            </div>
          )}

          {activeTab === 'certs' && (
            <div className="space-y-1.5 font-mono">
              <p><span className="text-emerald-400">"huaweiCloud"</span>: <span className="text-sky-300">"HCIA Cloud Computing & Cloud Service (Certified)"</span>,</p>
              <p><span className="text-emerald-400">"softwareEng"</span>: <span className="text-sky-300">"ALX Software Engineering Certificate"</span>,</p>
              <p><span className="text-emerald-400">"virtualAssistant"</span>: <span className="text-sky-300">"ALX Virtual Assistant Specialist"</span>,</p>
              <p><span className="text-emerald-400">"accounting"</span>: <span className="text-sky-300">"KASNEB CPA Sections 1 & 2"</span></p>
            </div>
          )}

          {activeTab === 'stack' && (
            <div className="space-y-1.5 font-mono">
              <p><span className="text-emerald-400">"ict & security"</span>: <span className="text-purple-300">["MikroTik", "Linux Server", "Active Directory", "Firewalls"]</span>,</p>
              <p><span className="text-emerald-400">"cloud & space"</span>: <span className="text-purple-300">["Huawei Cloud", "Backup/DR", "QGIS/GDAL", "Telemetry"]</span>,</p>
              <p><span className="text-emerald-400">"fullstack"</span>: <span className="text-purple-300">["PHP", "MySQL", "React", "TypeScript", "Python"]</span>,</p>
              <p><span className="text-emerald-400">"creative suite"</span>: <span className="text-purple-300">["Premiere Pro", "DaVinci Resolve", "Figma", "Photoshop"]</span></p>
            </div>
          )}

          {/* Prompt Line */}
          <div className="pt-2 flex items-center gap-2 text-white/50 border-t border-white/10 text-[11px]">
            <span className="text-emerald-400 font-bold">&gt;</span>
            <span className="text-white/80">system.status --check --verified</span>
            <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block ml-auto"></span>
          </div>
        </div>

        {/* Footer Status Bar */}
        <div className="bg-white/5 px-4 py-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
          <span className="flex items-center gap-1.5">
            <Server className="w-3 h-3 text-sky-400" />
            <span>PORT 3000 (ACTIVE)</span>
          </span>
          <span className="text-emerald-400/80 font-mono">Hover to tilt in 3D ↺</span>
        </div>
      </div>
    </div>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCoverLetter,
  onOpenPrintCv,
  onOpenCommandPalette,
  onShowToast,
}) => {
  const { personalInfo } = cvData;
  const [activeTab, setActiveTab] = useState<'overview' | 'certs' | 'stack'>('overview');

  // Typewriter effect state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetText = ROLES[roleIndex];
    let timeoutSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && displayedText === targetText) {
      timeoutSpeed = 1800; // Pause at end of text
    } else if (isDeleting && displayedText === '') {
      timeoutSpeed = 300; // Pause before typing next role
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < targetText.length) {
          setDisplayedText(targetText.slice(0, displayedText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(targetText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, timeoutSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const scrollToContact = () => {
    soundEffects.playTick(600);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    soundEffects.playTick(800);
    navigator.clipboard.writeText(personalInfo.email);
    onShowToast(`Copied ${personalInfo.email} to clipboard!`);
  };

  const copyPhone = () => {
    soundEffects.playTick(800);
    navigator.clipboard.writeText(personalInfo.phone);
    onShowToast(`Copied ${personalInfo.phone} to clipboard!`);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#050505]">
      {/* Background Subtle Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20 -z-10 flex justify-between px-8">
        <div className="w-[1px] h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent"></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent"></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Side */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Headline with Typewriter Effect */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-[0.95] text-white/95">
                Daniel <span className="text-white/40 italic font-serif">Muiruri</span>
                <span className="sr-only"> — Full-Stack Software Developer, Huawei HCIA Cloud Solutions &amp; ICT Infrastructure Specialist in Nairobi, Kenya</span>
              </h1>

              {/* Typewriter text line */}
              <div className="min-h-[2.5rem] flex items-center pt-1">
                <p className="text-lg sm:text-2xl font-mono text-emerald-400 font-medium flex items-center tracking-tight">
                  <span className="text-white/30 mr-2 font-light">&gt;</span>
                  <span>{displayedText}</span>
                  <span className="w-2 h-5 bg-emerald-400 ml-1 animate-pulse inline-block"></span>
                </p>
              </div>
            </div>

            {/* Bio Statement */}
            <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              {personalInfo.bioSummary}
            </p>

            {/* Verified Qualifications Pills (Computer Science Graduate pill removed) */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-[0.7rem]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-white/80 text-xs font-light">
                <Code2 className="w-3.5 h-3.5 text-white/60" />
                ALX Software Engineering
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-white/80 text-xs font-light">
                <Server className="w-3.5 h-3.5 text-white/60" />
                Huawei HCIA Cloud Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-white/80 text-xs font-light">
                <Award className="w-3.5 h-3.5 text-white/60" />
                CPA 1 & 2
              </span>
            </div>

            {/* Quick Contact Info & Copy Buttons */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-white/60 pt-1">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#0a0a0a] border border-white/10 hover:border-white/30 text-white/80 transition-all hover:text-white"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.email}</span>
                <Copy className="w-3 h-3 text-white/30 ml-1" />
              </button>
              <button
                onClick={copyPhone}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#0a0a0a] border border-white/10 hover:border-white/30 text-white/80 transition-all hover:text-white"
                title="Click to copy phone"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>{personalInfo.phone}</span>
                <Copy className="w-3 h-3 text-white/30 ml-1" />
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-btn-contact"
                onClick={scrollToContact}
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-medium text-xs uppercase tracking-wider hover:bg-white/90 transition-all shadow-lg font-semibold"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </button>

              <button
                id="hero-btn-cover-letter"
                onClick={onOpenCoverLetter}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white/[0.02] border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-medium text-xs uppercase tracking-wider transition-all"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                Application Letter
              </button>

              <button
                id="hero-btn-print-cv"
                onClick={onOpenPrintCv}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white/[0.02] border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-medium text-xs uppercase tracking-wider transition-all"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                Print CV (PDF)
              </button>
            </div>

            {/* Social Links Row */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 font-mono text-xs">
              <span className="text-[10px] text-white/40 uppercase tracking-widest mr-1">Social Profiles:</span>
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all"
                >
                  <Github className="w-3.5 h-3.5 text-white/70" />
                  <span>GitHub</span>
                </a>
              )}
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              )}
              {personalInfo.whatsapp && (
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              )}
            </div>

          </div>

          {/* 3D Floating Interactive Terminal Side */}
          <div className="lg:col-span-5 flex justify-center items-center py-4">
            <Interactive3DTerminal
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
