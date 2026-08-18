import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { cvData } from '../data/cvData';

interface PrintableCvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintableCvModal: React.FC<PrintableCvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0a0a0a] text-white border border-white/10 rounded-sm shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10 font-mono print:hidden">
          <div className="flex items-center gap-2">
            <Printer className="w-4 h-4 text-white/70" />
            <h2 className="text-xs uppercase tracking-widest text-white/90 font-semibold">Printable Official CV View</h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-white/90 shadow-lg transition-all rounded-md"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save as PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-white/40 hover:text-white rounded-md bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Container */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 text-white/80 text-xs sm:text-sm leading-relaxed print:p-0 print:overflow-visible print:text-black print:bg-white">
          
          {/* Header Contact Block */}
          <div className="border-b-2 border-white/20 print:border-black pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-light uppercase tracking-tight text-white print:text-black">
              {cvData.personalInfo.fullName}
            </h1>
            <p className="font-mono text-emerald-400 print:text-black text-sm">{cvData.personalInfo.headline}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-white/60 print:text-black/80 pt-1">
              <span>{cvData.personalInfo.poBox}</span>
              <span>•</span>
              <span>Phone: {cvData.personalInfo.phone}</span>
              <span>•</span>
              <span>Email: {cvData.personalInfo.email}</span>
              <span>•</span>
              <span>Portfolio: {cvData.personalInfo.wixPortfolio}</span>
            </div>
          </div>

          {/* Profile Statement */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-white print:text-black border-b border-white/10 print:border-black/20 pb-1">
              Professional Profile
            </h2>
            <p className="text-justify leading-relaxed text-white/70 print:text-black/80">
              {cvData.personalInfo.bioSummary}
            </p>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-white print:text-black border-b border-white/10 print:border-black/20 pb-1">
              Education & Professional Certifications
            </h2>
            <ul className="space-y-2">
              {cvData.education.map((edu) => (
                <li key={edu.id} className="flex justify-between items-start gap-4">
                  <div>
                    <span className="font-medium text-white print:text-black text-sm">{edu.qualification}</span> —{' '}
                    <span className="text-white/70 print:text-black/80 font-mono text-xs">{edu.institution}</span>
                    {edu.details && <p className="text-xs text-white/50 print:text-black/60">{edu.details}</p>}
                  </div>
                  <span className="font-mono text-xs text-white/40 print:text-black/50 shrink-0">{edu.period}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-white print:text-black border-b border-white/10 print:border-black/20 pb-1">
              Technical & Domain Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-mono font-semibold text-white print:text-black block">Programming Languages:</span>
                <p className="text-white/70 print:text-black/80">PHP, C++, HTML5/CSS3, JavaScript, Python (learning)</p>
              </div>
              <div>
                <span className="font-mono font-semibold text-white print:text-black block">Databases & Cloud:</span>
                <p className="text-white/70 print:text-black/80">MySQL, Huawei HCIA Cloud Computing V4.0, Huawei HCIA Cloud Service V3.0</p>
              </div>
              <div>
                <span className="font-mono font-semibold text-white print:text-black block">Development, Video & Creative Tools:</span>
                <p className="text-white/70 print:text-black/80">Adobe Premiere Pro, DaVinci Resolve, CapCut Pro, Adobe Photoshop, Adobe Lightroom, Adobe Illustrator, Figma, VS Code, Git, XAMPP, Android Studio, Intuit QuickBooks</p>
              </div>
              <div>
                <span className="font-mono font-semibold text-white print:text-black block">Accounting & Administrative:</span>
                <p className="text-white/70 print:text-black/80">CPA 1 & 2 (Pursuing CPA 3), ALX Certified Virtual Assistant, Customer Care & Sales</p>
              </div>
            </div>
          </div>

          {/* Major Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-white print:text-black border-b border-white/10 print:border-black/20 pb-1">
              Key Projects
            </h2>
            <ul className="space-y-2 text-xs">
              {cvData.projects.map((p) => (
                <li key={p.id} className="space-y-0.5">
                  <div className="text-white print:text-black flex justify-between">
                    <span className="font-medium text-sm">{p.title} {p.clientOrContext ? `(${p.clientOrContext})` : ''}</span>
                    <span className="font-mono text-[11px] text-emerald-400 print:text-black">{p.status}</span>
                  </div>
                  <p className="text-white/70 print:text-black/80">{p.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-white print:text-black border-b border-white/10 print:border-black/20 pb-1">
              Work Experience, Internships & Attachments
            </h2>
            <div className="space-y-4">
              {cvData.experiences.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium text-sm text-white print:text-black">{exp.title} — {exp.company}</span>
                    <span className="font-mono text-xs text-white/40 print:text-black/50">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-white/70 print:text-black/80 space-y-1 pl-2">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* References */}
          <div className="space-y-2 pt-2 border-t border-white/10 print:border-black/20">
            <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-white print:text-black">
              Reference
            </h2>
            {cvData.references.map((ref, idx) => (
              <div key={idx} className="text-xs text-white/70 print:text-black/80 space-y-0.5 font-mono">
                <span className="font-bold text-white print:text-black block">{ref.name}</span>
                <p>{ref.title}, {ref.organization}</p>
                <p>Phone: {ref.phone} | Email: {ref.email}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
