import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Award } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { soundEffects } from '../utils/soundEffects';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('appville-multirole');

  const toggleExpand = (id: string) => {
    soundEffects.playTick(600);
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 relative bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 flex items-center gap-3">
            <span>[01]</span>
            <span>EXPERIENCE & WORK HISTORY</span>
            <span className="h-[1px] flex-1 bg-white/10 hidden sm:block"></span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Work Experience & Internships
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-light">
            Hands-on technical roles spanning software development, ISP network engineering, IT department operations, and customer experience campaigns.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 lg:ml-12 space-y-8">
          {cvData.experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} className="relative pl-6 sm:pl-8 group">
                
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#050505] border border-white/40 group-hover:border-white transition-colors"></div>

                {/* Experience Card */}
                <SpotlightCard className="p-6 shadow-xl space-y-4 hover:border-white/25">
                  
                  {/* Card Top Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-widest font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/70">
                          {exp.type}
                        </span>
                        <span className="text-xs text-white/40 flex items-center gap-1 font-mono">
                          <MapPin className="w-3 h-3 text-white/40" />
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-white/90 pt-2">{exp.title}</h3>
                      <div className="text-xs text-white/60 flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-3.5 h-3.5 text-white/40" />
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50 px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-white/40" />
                        {exp.period}
                      </span>

                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="p-1.5 rounded-md bg-white/5 border border-white/10 text-white/60 hover:text-white transition-colors"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Duties & Achievements List */}
                  {isExpanded && (
                    <div className="space-y-4 pt-4 border-t border-white/5 text-xs sm:text-sm text-white/70 font-light animate-fadeIn">
                      <div className="space-y-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 block">
                          Key Responsibilities:
                        </span>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2.5">
                              <span className="w-1 h-1 rounded-full bg-white/40 shrink-0 mt-2"></span>
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                        <div className="p-4 rounded-sm bg-white/[0.02] border border-white/5 space-y-2 font-mono text-xs">
                          <span className="font-semibold text-[10px] uppercase tracking-[0.2em] text-white/50 flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-white/40" />
                            Highlights & Key Outcomes:
                          </span>
                          <ul className="space-y-1.5 text-white/80">
                            {exp.keyAchievements.map((ach, aIdx) => (
                              <li key={aIdx} className="flex items-start gap-2">
                                <span className="text-emerald-400">•</span>
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                </SpotlightCard>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
