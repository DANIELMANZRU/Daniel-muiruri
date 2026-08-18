import React from 'react';
import { cvData } from '../data/cvData';
import { GraduationCap, Award, Server, BookOpen, Music, Activity, Users, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl space-y-3 mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 flex items-center gap-3">
            <span>[04]</span>
            <span>ACADEMIC FOUNDATIONS & CERTIFICATIONS</span>
            <span className="h-[1px] flex-1 bg-white/10 hidden sm:block"></span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Education, Certifications & Leadership
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-light">
            Formal Computer Science degree, Huawei Cloud credentials, ALX Software Engineering certification, accounting milestones, and university ICT club involvement.
          </p>
        </div>

        {/* Education & Certs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cvData.education.map((edu) => (
            <div
              key={edu.id}
              className="bg-[#0a0a0a] border border-white/10 rounded-sm hover:border-white/20 p-6 shadow-xl space-y-3 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 font-mono">
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-white/70">
                    {edu.period}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm bg-white/[0.02] text-white/50 border border-white/5">
                    {edu.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white/90 leading-snug">{edu.qualification}</h3>
                  <p className="text-xs font-mono text-white/40 mt-1">{edu.institution}</p>
                </div>

                {edu.details && (
                  <p className="text-xs text-white/60 font-light leading-relaxed pt-2 border-t border-white/5">
                    {edu.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Extracurricular Activities, Hobbies & Leadership */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* SEKU ICT Club Leadership */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <div className="p-2 rounded-sm bg-white/5 border border-white/10 text-white/70">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-medium text-white/90">University Leadership & ICT Club</h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70 font-light">
              {cvData.activities.clubActivities.map((act, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-white/[0.02] p-3 rounded-sm border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Interests & Hobbies */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <div className="p-2 rounded-sm bg-white/5 border border-white/10 text-white/70">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-medium text-white/90">Interests, Creative Beat & Athletics</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-white/80 font-light font-mono">
              {cvData.activities.hobbies.map((hobby, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-sm bg-white/[0.02] border border-white/5 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                  <span>{hobby}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
