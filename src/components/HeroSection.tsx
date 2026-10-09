import React, { useState, useEffect } from 'react';
import { Mail, Phone, FileText, Download, Copy, Github, Linkedin, MessageSquare } from 'lucide-react';
import { cvData } from '../data/cvData';
import { HeroInteractiveCard } from './HeroInteractiveCard';
import { soundEffects } from '../utils/soundEffects';

interface HeroSectionProps {
  onOpenCoverLetter: () => void;
  onOpenPrintCv: () => void;
  onOpenCommandPalette: () => void;
  onShowToast: (msg: string) => void;
}

const ROLES = [
  'Data Engineer & Pipeline Architect',
  'Full-Stack Software Developer',
  'ICT Infrastructure & Systems Specialist',
  'Huawei HCIA Cloud Solutions Engineer',
  'Data Warehouse & SQL Optimization Specialist',
  'Cybersecurity & Disaster Recovery Specialist',
  'Elite Video Editor & Motion Designer',
  'Product Designer & UI/UX Specialist',
  'Accounting & Financial Systems Specialist (CPA 1 & 2)',
  'Workflow Automation & Python Engineer',
  'Network Operations & ISP Engineer'
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCoverLetter,
  onOpenPrintCv,
  onOpenCommandPalette,
  onShowToast,
}) => {
  const { personalInfo } = cvData;

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

          {/* Interactive Multi-Mode Engineering Card (Dossier / Topology / Terminal) */}
          <div
            className="lg:col-span-5 flex justify-center items-center py-4 w-[400px] h-[400px]"
            style={{ width: '400px', height: '400px' }}
          >
            <HeroInteractiveCard
              onShowToast={onShowToast}
              onScrollToContact={scrollToContact}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
