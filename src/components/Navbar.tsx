import React, { useState, useEffect } from 'react';
import { FileText, ExternalLink, Printer, Menu, X, Command, Volume2, VolumeX } from 'lucide-react';
import { cvData } from '../data/cvData';
import { soundEffects } from '../utils/soundEffects';

interface NavbarProps {
  onOpenCoverLetter: () => void;
  onOpenPrintCv: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCoverLetter,
  onOpenPrintCv,
  onOpenCommandPalette,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundEffects.enabled);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const state = soundEffects.toggleSound();
    setSoundEnabled(state);
  };

  const scrollToSection = (id: string) => {
    soundEffects.playTick(700);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-[#050505]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Logo / Brand Name */}
          <div
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-light tracking-tighter bg-gradient-to-br from-white/10 to-transparent text-white group-hover:border-white/40 transition-colors">
              DM
            </div>
            <h1 className="text-white/90 font-medium tracking-tight text-sm sm:text-base group-hover:text-white transition-colors whitespace-nowrap">
              Daniel Muiruri
            </h1>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-2.5 lg:gap-5">
            <button
              id="nav-link-experience"
              onClick={() => scrollToSection('experience')}
              className="text-[11px] uppercase tracking-[0.12em] lg:tracking-[0.15em] text-white/60 hover:text-white transition-colors font-medium whitespace-nowrap"
            >
              Experience
            </button>
            <button
              id="nav-link-projects"
              onClick={() => scrollToSection('projects')}
              className="text-[11px] uppercase tracking-[0.12em] lg:tracking-[0.15em] text-white/60 hover:text-white transition-colors font-medium whitespace-nowrap"
            >
              Projects
            </button>
            <button
              id="nav-link-skills"
              onClick={() => scrollToSection('skills')}
              className="text-[11px] uppercase tracking-[0.12em] lg:tracking-[0.15em] text-white/60 hover:text-white transition-colors font-medium whitespace-nowrap"
            >
              Skills
            </button>
            <button
              id="nav-link-education"
              onClick={() => scrollToSection('education')}
              className="text-[11px] uppercase tracking-[0.12em] lg:tracking-[0.15em] text-white/60 hover:text-white transition-colors font-medium whitespace-nowrap"
            >
              Education
            </button>
            <button
              id="nav-link-photography"
              onClick={() => scrollToSection('photography')}
              className="text-[11px] uppercase tracking-[0.12em] lg:tracking-[0.15em] text-cyan-300/90 hover:text-cyan-300 transition-colors font-medium whitespace-nowrap"
            >
              Media & Video
            </button>
            <button
              id="nav-link-estimator"
              onClick={() => scrollToSection('estimator')}
              className="text-[11px] uppercase tracking-[0.12em] lg:tracking-[0.15em] text-sky-300/90 hover:text-sky-300 transition-colors font-medium whitespace-nowrap"
            >
              Estimator
            </button>
            <button
              id="nav-link-contact"
              onClick={() => scrollToSection('contact')}
              className="text-[11px] uppercase tracking-[0.12em] lg:tracking-[0.15em] text-white/60 hover:text-white transition-colors font-medium whitespace-nowrap"
            >
              Contact
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              id="btn-nav-sound"
              onClick={toggleSound}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono rounded-md bg-white/[0.04] text-white/80 border border-white/10 hover:border-white/30 hover:text-white transition-all"
              title={soundEnabled ? 'Click to Mute Sound' : 'Click to Enable Sound'}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] text-emerald-400 uppercase tracking-wider font-semibold">Sound ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-white/40" />
                  <span className="text-[10px] text-white/40 uppercase tracking-wider font-semibold">Muted</span>
                </>
              )}
            </button>

            <button
              id="btn-nav-cover-letter"
              onClick={onOpenCoverLetter}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider rounded-md bg-white/[0.03] text-white/80 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5" />
              Cover Letter
            </button>

            <button
              id="btn-nav-print-cv"
              onClick={onOpenPrintCv}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded-md bg-white text-black hover:bg-white/90 transition-all font-semibold shadow-md whitespace-nowrap"
            >
              <Printer className="w-3.5 h-3.5" />
              Print CV
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white rounded-md bg-white/5 border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050505] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => scrollToSection('experience')}
              className="text-left px-3 py-2 rounded-sm bg-white/[0.02] border border-white/5 text-white/80 text-xs uppercase tracking-wider font-medium hover:bg-white/10"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left px-3 py-2 rounded-sm bg-white/[0.02] border border-white/5 text-white/80 text-xs uppercase tracking-wider font-medium hover:bg-white/10"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-left px-3 py-2 rounded-sm bg-white/[0.02] border border-white/5 text-white/80 text-xs uppercase tracking-wider font-medium hover:bg-white/10"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-left px-3 py-2 rounded-sm bg-white/[0.02] border border-white/5 text-white/80 text-xs uppercase tracking-wider font-medium hover:bg-white/10"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('photography')}
              className="text-left px-3 py-2 rounded-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs uppercase tracking-wider font-medium hover:bg-cyan-500/20"
            >
              Media & Video
            </button>
            <button
              onClick={() => scrollToSection('estimator')}
              className="text-left px-3 py-2 rounded-sm bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs uppercase tracking-wider font-medium hover:bg-sky-500/20"
            >
              Estimator
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left px-3 py-2 rounded-sm bg-white/[0.02] border border-white/5 text-white/80 text-xs uppercase tracking-wider font-medium hover:bg-white/10"
            >
              Contact
            </button>
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={toggleSound}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-sm text-xs uppercase tracking-wider font-mono font-medium bg-white/5 text-white border border-white/10"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span>UI Audio Effects: <strong className="text-emerald-400">ON</strong> (Click to Mute)</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-white/40" />
                  <span>UI Audio Effects: <strong className="text-white/40">OFF</strong> (Click to Enable)</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCoverLetter();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-sm text-xs uppercase tracking-wider font-medium bg-white/5 text-white border border-white/10 hover:bg-white/10"
            >
              <FileText className="w-4 h-4" />
              View Application Letter
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrintCv();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-sm text-xs uppercase tracking-wider font-semibold bg-white text-black"
            >
              <Printer className="w-4 h-4" />
              Print Full CV (PDF)
            </button>

            <a
              href={cvData.personalInfo.wixPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 text-xs uppercase tracking-wider font-medium text-white/60 hover:text-white"
            >
              <ExternalLink className="w-4 h-4" />
              Open Original Wix Portfolio
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
