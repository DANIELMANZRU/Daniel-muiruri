import React from 'react';
import { X, ExternalLink, Code2, CheckCircle2, ShieldCheck, Layers, Target, Check, TrendingUp } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onShowToast,
}) => {
  if (!project) return null;

  const handleClose = () => {
    soundEffects.playTick(500);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/15 rounded-lg shadow-2xl overflow-hidden text-white font-sans">
        
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="space-y-1 pr-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-white/10 border border-white/10 text-white/70 rounded-md">
                {project.category === 'data' ? 'Data Engineering' : project.category}
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                {project.status}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white pt-1">
              {project.title}
            </h3>
            {project.clientOrContext && (
              <p className="text-xs text-white/50 font-mono">
                Context: {project.clientOrContext}
              </p>
            )}
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 text-white/40 hover:text-white rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh] text-sm text-white/80 font-light leading-relaxed">
          
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 font-semibold flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-white/60" />
              Project Overview
            </h4>
            <p className="text-white/90 font-sans">{project.description}</p>
          </div>

          {/* Case Study: Problem -> Solution -> Measurable Outcome */}
          {project.caseStudy && (
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>Engineering Case Study</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  Verified Production Outcome
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-rose-400 font-semibold block mb-1">
                    [Problem / Operational Challenge]
                  </span>
                  <p className="text-white/80 leading-relaxed font-sans pl-2 border-l border-rose-500/30">
                    {project.caseStudy.problem}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-sky-400 font-semibold block mb-1">
                    [Engineering Solution & Architecture]
                  </span>
                  <p className="text-white/80 leading-relaxed font-sans pl-2 border-l border-sky-500/30">
                    {project.caseStudy.solution}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                    [Measurable Impact & Results]
                  </span>
                  <p className="text-white/80 leading-relaxed font-sans pl-2 border-l border-emerald-500/30 mb-2">
                    {project.caseStudy.outcome}
                  </p>
                  {project.caseStudy.metrics && (
                    <div className="flex flex-wrap gap-2 pt-1 pl-2">
                      {project.caseStudy.metrics.map((m, mi) => (
                        <span key={mi} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-semibold">
                          <TrendingUp className="w-3 h-3 text-emerald-400" />
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 font-semibold flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-white/60" />
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-mono bg-white/5 border border-white/10 text-white/80 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 font-semibold flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-white/60" />
              Key Features & Engineering Deliverables
            </h4>
            <ul className="space-y-2 font-mono text-xs text-white/70">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between font-mono text-xs">
          <span className="text-white/40">Daniel Muiruri Itugi Portfolio</span>
          <button
            onClick={() => {
              handleClose();
              const contactEl = document.getElementById('contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-4 py-2 bg-white text-black font-semibold uppercase tracking-wider text-[11px] hover:bg-white/90 rounded-md"
          >
            Inquire About This Project
          </button>
        </div>

      </div>
    </div>
  );
};
