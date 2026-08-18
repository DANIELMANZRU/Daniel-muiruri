import React, { useState, useEffect } from 'react';
import { Search, FileText, Printer, Mail, ExternalLink, Briefcase, GraduationCap, Code2, Sparkles, X, Terminal, ArrowRight, Phone } from 'lucide-react';
import { cvData } from '../data/cvData';
import { soundEffects } from '../utils/soundEffects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCoverLetter: () => void;
  onOpenPrintCv: () => void;
  onShowToast: (msg: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenCoverLetter,
  onOpenPrintCv,
  onShowToast,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        soundEffects.playPop();
        if (isOpen) {
          onClose();
        } else {
          // Open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollTo = (id: string) => {
    soundEffects.playTick(700);
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    soundEffects.playTick(900);
    navigator.clipboard.writeText(cvData.personalInfo.email);
    onShowToast(`Copied ${cvData.personalInfo.email} to clipboard!`);
    onClose();
  };

  const copyPhone = () => {
    soundEffects.playTick(900);
    navigator.clipboard.writeText(cvData.personalInfo.phone);
    onShowToast(`Copied ${cvData.personalInfo.phone} to clipboard!`);
    onClose();
  };

  const actions = [
    {
      id: 'sec-experience',
      title: 'Jump to Work Experience',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-white/60" />,
      action: () => scrollTo('experience'),
    },
    {
      id: 'sec-projects',
      title: 'Jump to Featured Projects',
      category: 'Navigation',
      icon: <Code2 className="w-4 h-4 text-white/60" />,
      action: () => scrollTo('projects'),
    },
    {
      id: 'sec-skills',
      title: 'Jump to Skills & Competencies',
      category: 'Navigation',
      icon: <Sparkles className="w-4 h-4 text-white/60" />,
      action: () => scrollTo('skills'),
    },
    {
      id: 'sec-education',
      title: 'Jump to Education & Certifications',
      category: 'Navigation',
      icon: <GraduationCap className="w-4 h-4 text-white/60" />,
      action: () => scrollTo('education'),
    },
    {
      id: 'sec-contact',
      title: 'Jump to Contact & Verification',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-white/60" />,
      action: () => scrollTo('contact'),
    },
    {
      id: 'doc-cover-letter',
      title: 'View Official Cover Letter',
      category: 'Documents',
      icon: <FileText className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onClose();
        onOpenCoverLetter();
      },
    },
    {
      id: 'doc-print-cv',
      title: 'Open Printable Official CV',
      category: 'Documents',
      icon: <Printer className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onClose();
        onOpenPrintCv();
      },
    },
    {
      id: 'copy-email',
      title: 'Copy Email Address',
      category: 'Quick Contact',
      icon: <Mail className="w-4 h-4 text-sky-400" />,
      action: copyEmail,
    },
    {
      id: 'copy-phone',
      title: 'Copy Phone Number',
      category: 'Quick Contact',
      icon: <Phone className="w-4 h-4 text-sky-400" />,
      action: copyPhone,
    },
    {
      id: 'wix-portfolio',
      title: 'Open Original Wix Portfolio',
      category: 'External Link',
      icon: <ExternalLink className="w-4 h-4 text-amber-400" />,
      action: () => {
        window.open(cvData.personalInfo.wixPortfolio, '_blank');
        onClose();
      },
    },
  ];

  const filteredActions = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#0a0a0a] border border-white/15 rounded-lg shadow-2xl overflow-hidden font-mono text-white">
        
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-white/5">
          <Search className="w-4 h-4 text-white/40 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search section..."
            className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-white/30"
            autoFocus
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] bg-white/10 border border-white/15 rounded-md text-white/50 ml-2">
            ESC
          </kbd>
          <button
            onClick={onClose}
            className="p-1 text-white/40 hover:text-white ml-2 rounded-md hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="p-8 text-center text-xs text-white/40">
              No matching commands or sections found for "{query}"
            </div>
          ) : (
            filteredActions.map((act) => (
              <button
                key={act.id}
                onClick={act.action}
                className="w-full text-left px-3 py-2.5 rounded-md hover:bg-white/10 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  {act.icon}
                  <div>
                    <div className="text-xs font-medium text-white/90 group-hover:text-white">
                      {act.title}
                    </div>
                    <div className="text-[10px] text-white/40">
                      {act.category}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/80 group-hover:translate-x-0.5 transition-all" />
              </button>
            ))
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-[10px] text-white/30">
          <div className="flex items-center gap-2">
            <Terminal className="w-3 h-3 text-emerald-400" />
            <span>Daniel Muiruri Portfolio OS</span>
          </div>
          <span>Press ESC to close</span>
        </div>

      </div>
    </div>
  );
};
