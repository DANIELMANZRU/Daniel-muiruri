import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { Code2, Cloud, Palette, Wrench, Search, CheckCircle2, Award, BookOpen, Database } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-white/70" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-white/70" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-white/70" />;
      case 'Wrench':
      default:
        return <Wrench className="w-4 h-4 text-white/70" />;
    }
  };

  const filteredSkillCategories = cvData.skills.map((category) => {
    const filteredItems = category.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.notes && item.notes.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    return { ...category, items: filteredItems };
  }).filter((category) => category.items.length > 0);

  return (
    <section id="skills" className="py-20 relative bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl space-y-3 mb-10">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 flex items-center gap-3">
            <span>[03]</span>
            <span>DOMAIN COMPETENCIES & SKILLS</span>
            <span className="h-[1px] flex-1 bg-white/10 hidden sm:block"></span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Technical Domain Matrix
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-light">
            Verified expertise in data engineering (automated ETL, dimensional warehousing, SQL), cloud architecture, full-stack programming, network infrastructure, and cybersecurity.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mb-12">
          <div className="relative font-mono">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. ETL, SQL, PostgreSQL, Cloud, Python)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-sm bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkillCategories.map((cat, idx) => (
            <SpotlightCard
              key={idx}
              className="p-6 shadow-xl space-y-4 hover:border-white/25"
            >
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <div className="p-2 rounded-sm bg-white/5 border border-white/10">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <h3 className="text-lg font-medium text-white/90">{cat.category}</h3>
              </div>

              <div className="space-y-3">
                {cat.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-sm bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-white/20 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white/90">{skill.name}</span>
                        <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-sm bg-white/5 text-white/60">
                          {skill.level}
                        </span>
                      </div>
                      {skill.notes && (
                        <p className="text-xs text-white/50 mt-0.5 font-light">{skill.notes}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Coursework & Specialized Training */}
        <div className="mt-16 bg-[#0a0a0a] border border-white/10 rounded-sm p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-white/90 font-medium text-base">
            <BookOpen className="w-5 h-5 text-white/60" />
            <h3>Relevant Academic & Technical Coursework</h3>
          </div>
          <div className="flex flex-wrap gap-2 pt-2 font-mono">
            {cvData.coursework.map((course, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-sm bg-white/5 text-white/80 text-xs border border-white/10 flex items-center gap-2"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                {course}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
