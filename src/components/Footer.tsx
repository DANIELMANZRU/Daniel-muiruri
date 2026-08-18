import React from 'react';
import { cvData } from '../data/cvData';
import { Mail, Phone, ExternalLink, ChevronUp, Github, Linkedin, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-white/40 text-xs py-12 font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="text-base font-medium text-white/90 tracking-tight">
              {cvData.personalInfo.fullName}
            </h3>
            <p className="text-white/40 font-mono text-xs">
              Software Developer & Systems Engineer • Nairobi, Kenya
            </p>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono">
            {cvData.personalInfo.github && (
              <a
                href={cvData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all"
              >
                <Github className="w-3.5 h-3.5 text-white/70" />
                <span>GitHub</span>
              </a>
            )}

            {cvData.personalInfo.linkedin && (
              <a
                href={cvData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            )}

            {cvData.personalInfo.whatsapp && (
              <a
                href={cvData.personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            )}

            <a
              href={`mailto:${cvData.personalInfo.email}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>Email</span>
            </a>

            <a
              href={`tel:${cvData.personalInfo.phone}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call</span>
            </a>

            <a
              href={cvData.personalInfo.wixPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all font-semibold"
            >
              <span>Wix Showcase</span>
              <ExternalLink className="w-3 h-3 text-white/60" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-md bg-white/5 border border-white/10 text-white/60 hover:text-white transition-colors"
            title="Back to Top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-[11px] font-mono">
          <p>© {new Date().getFullYear()} Daniel Muiruri Itugi. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
};
