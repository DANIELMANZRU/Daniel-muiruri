import React, { useState } from 'react';
import { Project } from '../types';
import { cvData } from '../data/cvData';
import { Code2, ExternalLink, CheckCircle2, Clock, Sparkles, Folder, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { soundEffects } from '../utils/soundEffects';

interface ProjectsSectionProps {
  onShowToast: (msg: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onShowToast }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web & Portals' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'systems', label: 'Systems & DB' },
    { id: 'branding', label: 'Branding & Design' },
    { id: 'automation', label: 'Scripting & Automation' },
  ];

  const handleCategoryChange = (catId: string) => {
    soundEffects.playTick(600);
    setActiveCategory(catId);
  };

  const handleOpenProject = (p: Project) => {
    soundEffects.playPop();
    setSelectedProject(p);
  };

  const filteredProjects = cvData.projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 relative bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 flex items-center gap-3">
            <span>[02]</span>
            <span>PORTFOLIO & ENGINEERING WORK</span>
            <span className="h-[1px] flex-1 bg-white/10 hidden sm:block"></span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Featured Projects & Systems
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-light">
            From healthcare blood bank management and commercial ISP portals to task automation scripts and brand graphic design.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-start gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-3.5 py-1.5 rounded-md text-xs uppercase tracking-wider font-mono transition-all ${
                activeCategory === cat.id
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="p-6 transition-all duration-300 flex flex-col justify-between shadow-xl cursor-pointer group hover:border-white/25"
            >
              <div className="space-y-4">
                {/* Header line: Category & Status */}
                <div className="flex items-center justify-between gap-2 font-mono">
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/70">
                    {project.category}
                  </span>

                  <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md bg-white/[0.02] text-white/50 border border-white/5">
                    {project.status === 'Deployed' ? (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Clock className="w-3 h-3 text-white/40" />
                    )}
                    {project.status}
                  </span>
                </div>

                {/* Title & Context */}
                <div>
                  <h3 className="text-lg font-medium text-white/90 group-hover:text-white transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  {project.clientOrContext && (
                    <p className="text-xs text-white/40 font-mono mt-0.5">
                      Context: {project.clientOrContext}
                    </p>
                  )}
                </div>

                {/* Summary */}
                <p className="text-white/60 text-xs font-light leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Key Highlights */}
                <ul className="space-y-1.5 text-xs text-white/50 font-light">
                  {project.highlights.slice(0, 2).map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-white/40 shrink-0 mt-1.5"></span>
                      <span className="line-clamp-2">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tech Badges & Details CTA */}
              <div className="pt-5 mt-4 border-t border-white/5 space-y-3 font-mono">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-md bg-white/5 group-hover:bg-white/10 border border-white/10 text-white/80 group-hover:text-white text-xs uppercase tracking-wider font-medium transition-all">
                  <span>View Project Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Detailed Modal */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onShowToast={onShowToast}
        />

      </div>
    </section>
  );
};
