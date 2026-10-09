import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Laptop, Building2, Globe, Send, Clock, DollarSign, Layers } from 'lucide-react';

interface EngagementOption {
  id: string;
  name: string;
  category: string;
  estDuration: string;
  description: string;
  suggestedDeliverables: string[];
}

const ENGAGEMENT_TYPES: EngagementOption[] = [
  {
    id: 'fulltime-hire',
    name: 'Full-Time Employment',
    category: 'Permanent Role',
    estDuration: 'Immediate Availability',
    description: 'Hire Daniel as a full-time Data Engineer, Full-Stack Developer, Cloud Architect, or Systems Administrator.',
    suggestedDeliverables: ['Data Pipelines & Warehousing', 'Custom Web Applications', 'Cloud Architecture & APIs', 'Network & IT Infrastructure', 'Maintenance & Support']
  },
  {
    id: 'data-pipeline-build',
    name: 'Data Engineering & ETL Pipeline',
    category: 'Data & Analytics',
    estDuration: '1 – 2 Weeks',
    description: 'Design and deploy automated ETL/ELT pipelines, star-schema data warehouse, and real-time analytical dashboards.',
    suggestedDeliverables: ['Automated Python ETL Pipeline', 'Data Warehouse Schema Design', 'SQL Performance & Index Tuning', 'Data Quality Validation & Alerts', 'Documentation & Runbooks']
  },
  {
    id: 'parttime-contract',
    name: 'Part-Time / Retainer',
    category: 'Flexible Contract',
    estDuration: '10–20 Hours / Week',
    description: 'Ongoing technical consulting, website maintenance, design system updates, and regular photo editing lookbooks.',
    suggestedDeliverables: ['Weekly Site Updates', 'Feature Releases', 'Photo Retouching Bundles', 'Bug Fixes & Security Audits']
  },
  {
    id: 'freelance-web',
    name: 'Custom Web Application Build',
    category: 'Freelance Project',
    estDuration: '1 – 3 Weeks',
    description: 'End-to-end custom responsive web portal, e-commerce store, or company website with database & SEO.',
    suggestedDeliverables: ['Responsive UI/UX Frontend', 'Database & API Backend', 'SEO & Performance Speed', 'Domain & Hosting Setup', '1 Month Post-Launch Support']
  },
  {
    id: 'uiux-brand',
    name: 'UI/UX & Brand Identity Sprint',
    category: 'Design Project',
    estDuration: '3 – 7 Days',
    description: 'High-fidelity Figma wireframing, interactive prototypes, visual branding guidelines, and marketing assets.',
    suggestedDeliverables: ['Figma Clickable Prototypes', 'Brand Color & Typography System', 'Vector Logo & Banners', 'Mobile & Desktop Screens']
  },
  {
    id: 'photo-retouching',
    name: 'Photo Editing & Lookbook Package',
    category: 'Creative Media',
    estDuration: '24 – 48 Hours',
    description: 'High-volume commercial image color grading, frequency separation skin retouching, and product catalogue styling.',
    suggestedDeliverables: ['Batch Color Grading', 'Advanced Retouching & Dehazing', 'Web & Print High-Res Exports', 'E-Commerce Product Styling']
  },
  {
    id: 'video-editing-production',
    name: 'Elite Video Editing & Post-Production',
    category: 'Creative Media',
    estDuration: '24 – 72 Hours',
    description: 'Cinematic commercial video cuts, YouTube long-form pacing, viral vertical reels/TikToks, sound design, and color grading.',
    suggestedDeliverables: ['4K Cinematic Color Grading', 'Dynamic Sound Design & Audio Sync', 'Motion Titles & Subtitles', 'Vertical Reels & Long-Form Edits', 'Multi-Platform Export Bundles']
  },
  {
    id: 'ict-infra-cloud',
    name: 'ICT Infrastructure & Cloud Security Setup',
    category: 'Infrastructure & Security',
    estDuration: '3 – 10 Days',
    description: 'Enterprise ICT setup, network routing, firewall configuration, automated backup snapshot schedules, and cloud virtualization provisioning.',
    suggestedDeliverables: ['MikroTik/Cisco Network Configuration', 'Automated Backup & Disaster Recovery Pipeline', 'Firewall & Cybersecurity Access Control', 'Huawei/Linux Server Setup', 'SLA Health & Uptime Monitoring']
  }
];

export const ProjectEstimatorSection: React.FC = () => {
  const [selectedTypeId, setSelectedTypeId] = useState<string>('fulltime-hire');
  const [selectedWorkMode, setSelectedWorkMode] = useState<'remote' | 'onsite' | 'hybrid'>('remote');
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([
    'Custom Web Applications', 'Figma Design Systems'
  ]);

  const activeType = ENGAGEMENT_TYPES.find(t => t.id === selectedTypeId) || ENGAGEMENT_TYPES[0];

  const toggleDeliverable = (item: string) => {
    if (selectedDeliverables.includes(item)) {
      setSelectedDeliverables(selectedDeliverables.filter(d => d !== item));
    } else {
      setSelectedDeliverables([...selectedDeliverables, item]);
    }
  };

  const handleSendInquiry = () => {
    // Generate pre-filled query for contact section
    const summary = `Hi Daniel, I would like to discuss a ${activeType.name} opportunity (${selectedWorkMode.toUpperCase()} mode). Selected deliverables: ${selectedDeliverables.join(', ')}.`;
    
    // Scroll to contact form
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }

    // Pass message into message textarea if present
    setTimeout(() => {
      const msgInput = document.getElementById('contact-message-input') as HTMLTextAreaElement | null;
      if (msgInput) {
        msgInput.value = summary;
        msgInput.focus();
      }
    }, 600);
  };

  return (
    <section id="estimator" className="py-20 relative bg-[#050507] border-t border-white/10 font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-outfit font-semibold uppercase tracking-[0.2em] text-sky-400 flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            <span>Scope & Hiring Calculator</span>
          </p>
          <h2 className="text-3xl sm:text-5xl font-outfit font-extrabold text-white tracking-tight">
            Project & <span className="font-playfair italic font-normal text-sky-300">Hiring Scope Estimator</span>
          </h2>
          <p className="text-white/70 text-base font-outfit font-light leading-relaxed">
            Planning to hire full-time, contract part-time, or kickstart a freelance project? Select your scope requirements below to customize deliverables and generate an instant consultation inquiry.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Engagement Type & Options */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Engagement Type */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h3 className="text-xs uppercase font-outfit font-bold tracking-wider text-white/50 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px] font-bold">1</span>
                Select Engagement Type
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ENGAGEMENT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSelectedTypeId(type.id);
                      setSelectedDeliverables(type.suggestedDeliverables.slice(0, 3));
                    }}
                    className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2 font-outfit ${
                      selectedTypeId === type.id
                        ? 'bg-sky-500/10 border-sky-500/50 text-white shadow-lg'
                        : 'bg-white/[0.02] border-white/5 text-white/60 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-outfit font-semibold uppercase tracking-wider text-sky-400">{type.category}</span>
                      <h4 className="text-sm font-outfit font-bold text-white">{type.name}</h4>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-outfit text-white/50">
                      <Clock className="w-3 h-3 text-sky-400" />
                      <span>{type.estDuration}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Work Mode Arrangement */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h3 className="text-xs uppercase font-outfit font-bold tracking-wider text-white/50 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px] font-bold">2</span>
                Preferred Work Location
              </h3>

              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedWorkMode('remote')}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 font-outfit ${
                    selectedWorkMode === 'remote'
                      ? 'bg-emerald-500/10 border-emerald-500/50 text-white'
                      : 'bg-white/[0.02] border-white/5 text-white/60 hover:text-white'
                  }`}
                >
                  <Laptop className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-outfit font-bold">Remote</span>
                  <span className="text-[10px] font-outfit text-white/50">Worldwide</span>
                </button>

                <button
                  onClick={() => setSelectedWorkMode('onsite')}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 font-outfit ${
                    selectedWorkMode === 'onsite'
                      ? 'bg-sky-500/10 border-sky-500/50 text-white'
                      : 'bg-white/[0.02] border-white/5 text-white/60 hover:text-white'
                  }`}
                >
                  <Building2 className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-outfit font-bold">On-Site</span>
                  <span className="text-[10px] font-outfit text-white/50">Nairobi, KE</span>
                </button>

                <button
                  onClick={() => setSelectedWorkMode('hybrid')}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 font-outfit ${
                    selectedWorkMode === 'hybrid'
                      ? 'bg-purple-500/10 border-purple-500/50 text-white'
                      : 'bg-white/[0.02] border-white/5 text-white/60 hover:text-white'
                  }`}
                >
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-outfit font-bold">Hybrid</span>
                  <span className="text-[10px] font-outfit text-white/50">Flexible</span>
                </button>
              </div>
            </div>

            {/* Step 3: Select Deliverables */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h3 className="text-xs uppercase font-outfit font-bold tracking-wider text-white/50 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px] font-bold">3</span>
                Select Desired Deliverables
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeType.suggestedDeliverables.map((item, idx) => {
                  const isChecked = selectedDeliverables.includes(item);
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleDeliverable(item)}
                      className={`p-3 rounded-lg border text-xs cursor-pointer flex items-center justify-between transition-all font-outfit ${
                        isChecked
                          ? 'bg-sky-500/15 border-sky-500/40 text-white font-semibold'
                          : 'bg-white/[0.01] border-white/5 text-white/60 hover:bg-white/[0.03]'
                      }`}
                    >
                      <span>{item}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isChecked ? 'bg-sky-500 border-sky-400 text-black' : 'border-white/20'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Generated Summary Card */}
          <div className="lg:col-span-5 sticky top-24 font-outfit">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-sky-950/30 via-white/[0.02] to-black border border-sky-500/30 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[11px] font-outfit uppercase tracking-widest text-sky-400 font-semibold">Custom Scope Summary</p>
                  <h3 className="text-xl font-outfit font-bold text-white">{activeType.name}</h3>
                </div>
              </div>

              {/* Engagement Overview Details */}
              <div className="space-y-3 text-xs text-white/70 font-outfit">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/40">Work Arrangement:</span>
                  <span className="font-outfit text-emerald-400 uppercase font-semibold">{selectedWorkMode}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/40">Expected Timeline:</span>
                  <span className="font-outfit text-sky-300 font-medium">{activeType.estDuration}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/40">Location Target:</span>
                  <span className="font-outfit text-white/90">Nairobi, KE & Worldwide Remote</span>
                </div>
              </div>

              {/* Selected Deliverables List */}
              <div className="space-y-2 font-outfit">
                <p className="text-[11px] font-outfit text-white/50 uppercase tracking-wider font-semibold">Included Deliverables ({selectedDeliverables.length}):</p>
                <ul className="space-y-1.5">
                  {selectedDeliverables.map((del, i) => (
                    <li key={i} className="text-xs text-white/80 flex items-center gap-2 font-outfit">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></div>
                      <span>{del}</span>
                    </li>
                  ))}
                  {selectedDeliverables.length === 0 && (
                    <li className="text-xs text-amber-400/80 italic font-outfit">Select at least one deliverable from step 3</li>
                  )}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={handleSendInquiry}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-outfit font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 group"
              >
                <span>Generate Inquiry & Contact</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] text-center text-white/40 font-outfit">
                *Instantly pre-fills your scope details into Daniel's contact form.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
