import React, { useState } from 'react';
import { X, Printer, Download, Check, Loader2, FileText, Copy, Sun, Moon, CheckCircle2 } from 'lucide-react';
import { cvData } from '../data/cvData';
import { openPrintWindow, downloadPdfDirect } from '../utils/pdfGenerator';

interface PrintableCvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintableCvModal: React.FC<PrintableCvModalProps> = ({ isOpen, onClose }) => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [previewTheme, setPreviewTheme] = useState<'light' | 'dark'>('light');

  if (!isOpen) return null;

  const handlePrint = () => {
    const opened = openPrintWindow();
    if (!opened) {
      window.print();
    }
  };

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    try {
      await downloadPdfDirect();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    } catch (err) {
      console.error('PDF download error:', err);
      openPrintWindow();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleCopyTextCv = async () => {
    const { personalInfo, education, projects, experiences, coursework, references } = cvData;
    const textCv = `CURRICULUM VITAE - ${personalInfo.fullName.toUpperCase()}
${personalInfo.headline}

CONTACT INFORMATION:
- Location: ${personalInfo.location}
- Phone: ${personalInfo.phone}
- Email: ${personalInfo.email}
- Portfolio: ${personalInfo.wixPortfolio}
- LinkedIn: ${personalInfo.linkedin}
- GitHub: ${personalInfo.github}

PROFESSIONAL SUMMARY:
${personalInfo.bioSummary}

EDUCATION & CERTIFICATIONS:
${education.map(e => `• ${e.qualification} — ${e.institution} (${e.period})${e.details ? `\n  ${e.details}` : ''}`).join('\n')}

TECHNICAL DOMAIN MATRIX & CORE COMPETENCIES:
• Data Engineering & Warehousing: Automated ETL/ELT pipelines, star/snowflake schemas, Python, PostgreSQL, DuckDB, Parquet, Airflow DAGs, SQL optimization, data governance.
• ICT Infrastructure & Systems Admin: Linux/Windows Server, Active Directory, Cisco/MikroTik routing, Cat6/Fiber cabling, VLANs, Wi-Fi, 24/7 SLA uptime.
• Cloud & Disaster Recovery: Huawei HCIA Cloud Computing V4.0 & Cloud Service V3.0 Certified, FusionCompute VM orchestration, snapshot policies, RPO/RTO strategies, offsite replication.
• Cybersecurity & Risk Management: Firewall ACLs, RBAC, network segmentation, vulnerability assessments, security audits.
• Software Engineering & Databases: PHP, MySQL, React, TypeScript, Tailwind CSS, Python, C++, REST APIs, Git.
• Space Digital Tech & Remote Sensing: Geospatial raster analysis (QGIS/GDAL), multispectral satellite image processing, telemetry computing.
• Creative Media & Accounting: Premiere Pro, DaVinci Resolve, CapCut Pro, Photoshop, Figma, CPA 1 & 2.

WORK EXPERIENCE & ATTACHMENTS:
${experiences.map(exp => `• ${exp.title} — ${exp.company} (${exp.period})\n${exp.responsibilities.map(r => `  - ${r}`).join('\n')}`).join('\n\n')}

KEY PROJECTS:
${projects.map(p => `• ${p.title} (${p.status})${p.clientOrContext ? ` [${p.clientOrContext}]` : ''}\n  ${p.description}`).join('\n\n')}

ACADEMIC COURSEWORK:
${coursework.join(', ')}

REFERENCES:
${references.map(ref => `• ${ref.name} — ${ref.title}, ${ref.organization}\n  Phone: ${ref.phone} | Email: ${ref.email}`).join('\n\n')}
`;
    try {
      await navigator.clipboard.writeText(textCv);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  const { personalInfo, education, projects, experiences, coursework, references } = cvData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[94vh] bg-[#0a0a0a] text-white border border-white/10 rounded-sm shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 bg-white/5 border-b border-white/10 font-mono gap-3">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            <div>
              <h2 className="text-xs uppercase tracking-widest text-white/90 font-semibold">Official Curriculum Vitae</h2>
              <p className="text-[10px] text-white/50 hidden sm:block">Clean 2-Page Format • No Cutoffs • ATS-Optimized</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {/* Theme Toggle for Preview */}
            <button
              onClick={() => setPreviewTheme(previewTheme === 'light' ? 'dark' : 'light')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs transition-colors"
              title={`Switch to ${previewTheme === 'light' ? 'Dark' : 'Light'} Preview`}
            >
              {previewTheme === 'light' ? <Moon className="w-3.5 h-3.5 text-amber-300" /> : <Sun className="w-3.5 h-3.5 text-amber-400" />}
              <span className="hidden md:inline">{previewTheme === 'light' ? 'Dark View' : 'A4 Paper View'}</span>
            </button>

            {/* Copy CV Text */}
            <button
              onClick={handleCopyTextCv}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs transition-colors"
              title="Copy plain text CV for job applications"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedText ? 'Copied!' : 'Copy Text'}</span>
            </button>

            {/* Primary Action: Direct Download PDF */}
            <button
              id="download-cv-pdf-btn"
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider shadow-lg transition-all rounded-sm disabled:opacity-50"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  <span>PDF Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            {/* Print / Save via Browser Window */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-white/90 shadow-lg transition-all rounded-sm"
              title="Open full print/save dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save Dialog</span>
              <span className="sm:hidden">Print</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-white/40 hover:text-white rounded-sm bg-white/5 hover:bg-white/10 transition-colors ml-1"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Container with Two Clean Sheets */}
        <div className={`p-4 sm:p-8 overflow-y-auto space-y-8 leading-relaxed transition-colors duration-200 ${
          previewTheme === 'light' 
            ? 'bg-slate-100' 
            : 'bg-[#050505]'
        }`}>
          
          {/* ================= PAGE 1 ================= */}
          <div className={`p-6 sm:p-8 rounded-sm shadow-md border space-y-6 ${
            previewTheme === 'light'
              ? 'bg-white text-[#1a202c] border-slate-300'
              : 'bg-[#0f0f0f] text-white/85 border-white/10'
          }`}>
            {/* Page Marker */}
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/40 border-b border-white/10 pb-2">
              <span className={previewTheme === 'light' ? 'text-teal-800 font-bold' : 'text-emerald-400 font-bold'}>Curriculum Vitae — Page 1 of 2</span>
              <span className={previewTheme === 'light' ? 'text-slate-400' : 'text-white/40'}>A4 Document Sheet 1</span>
            </div>

            {/* Header Contact Block */}
            <div className={`pb-4 space-y-2 border-b ${previewTheme === 'light' ? 'border-slate-800' : 'border-white/20'}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h1 className={`text-2xl sm:text-3xl font-extrabold uppercase tracking-tight ${previewTheme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                    {personalInfo.fullName}
                  </h1>
                  <p className={`font-mono text-xs sm:text-sm font-semibold mt-0.5 ${previewTheme === 'light' ? 'text-teal-700' : 'text-emerald-400'}`}>
                    {personalInfo.headline}
                  </p>
                </div>
                <span className={`self-start text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-sm font-bold ${
                  previewTheme === 'light' ? 'bg-teal-700 text-white' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}>
                  Verified Candidate
                </span>
              </div>

              {/* Contact Matrix */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono p-3 rounded-sm ${
                previewTheme === 'light' ? 'bg-slate-50 border border-slate-200 text-slate-700' : 'bg-white/[0.02] border border-white/5 text-white/70'
              }`}>
                <div><strong className={previewTheme === 'light' ? 'text-slate-900' : 'text-white'}>Location:</strong> {personalInfo.location} ({personalInfo.poBox})</div>
                <div><strong className={previewTheme === 'light' ? 'text-slate-900' : 'text-white'}>Phone:</strong> <a href={`tel:${personalInfo.phone}`} className={previewTheme === 'light' ? 'text-teal-700 hover:underline' : 'text-emerald-400 hover:underline'}>{personalInfo.phone}</a></div>
                <div><strong className={previewTheme === 'light' ? 'text-slate-900' : 'text-white'}>Email:</strong> <a href={`mailto:${personalInfo.email}`} className={previewTheme === 'light' ? 'text-teal-700 hover:underline' : 'text-emerald-400 hover:underline'}>{personalInfo.email}</a></div>
                <div><strong className={previewTheme === 'light' ? 'text-slate-900' : 'text-white'}>Portfolio:</strong> <a href={personalInfo.wixPortfolio} target="_blank" rel="noopener noreferrer" className={previewTheme === 'light' ? 'text-teal-700 hover:underline' : 'text-emerald-400 hover:underline'}>daniel-muiruri.wixsite.com</a></div>
                <div><strong className={previewTheme === 'light' ? 'text-slate-900' : 'text-white'}>LinkedIn:</strong> <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={previewTheme === 'light' ? 'text-teal-700 hover:underline' : 'text-emerald-400 hover:underline'}>linkedin.com/in/dmuiruri2000</a></div>
                <div><strong className={previewTheme === 'light' ? 'text-slate-900' : 'text-white'}>GitHub:</strong> <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={previewTheme === 'light' ? 'text-teal-700 hover:underline' : 'text-emerald-400 hover:underline'}>github.com/DANIELMANZRU</a></div>
              </div>
            </div>

            {/* Profile Statement */}
            <div className="space-y-1.5">
              <h2 className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 flex items-center justify-between border-b ${
                previewTheme === 'light' ? 'border-slate-300 text-slate-900' : 'border-white/10 text-white'
              }`}>
                <span>Professional Profile & Career Summary</span>
              </h2>
              <p className={`text-justify leading-relaxed text-xs font-normal ${
                previewTheme === 'light' ? 'text-slate-700' : 'text-white/70'
              }`}>
                {personalInfo.bioSummary}
              </p>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-2">
              <h2 className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 border-b ${
                previewTheme === 'light' ? 'border-slate-300 text-slate-900' : 'border-white/10 text-white'
              }`}>
                Education & Professional Certifications
              </h2>
              <ul className="space-y-2">
                {education.map((edu) => (
                  <li key={edu.id} className="flex flex-col sm:flex-row sm:justify-between items-start gap-1 sm:gap-4">
                    <div>
                      <span className={`font-bold text-xs sm:text-sm ${previewTheme === 'light' ? 'text-slate-900' : 'text-white'}`}>{edu.qualification}</span> —{' '}
                      <span className={`font-mono text-xs font-semibold ${previewTheme === 'light' ? 'text-slate-600' : 'text-white/70'}`}>{edu.institution}</span>
                      {edu.details && <p className={`text-[11px] mt-0.5 ${previewTheme === 'light' ? 'text-slate-500' : 'text-white/50'}`}>{edu.details}</p>}
                    </div>
                    <span className={`font-mono text-[11px] font-semibold shrink-0 ${previewTheme === 'light' ? 'text-slate-500' : 'text-white/40'}`}>{edu.period}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Skills Matrix */}
            <div className="space-y-2">
              <h2 className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 border-b ${
                previewTheme === 'light' ? 'border-slate-300 text-slate-900' : 'border-white/10 text-white'
              }`}>
                Technical Domain Matrix & Core Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className={`p-2.5 rounded-sm border ${
                  previewTheme === 'light' ? 'bg-slate-50 border-slate-200 border-l-4 border-l-teal-600' : 'bg-white/[0.02] border-white/5 border-l-4 border-l-emerald-500'
                }`}>
                  <span className={`font-mono font-bold block mb-0.5 ${previewTheme === 'light' ? 'text-teal-800' : 'text-emerald-400'}`}>Data Engineering &amp; Warehousing:</span>
                  <p className={`text-[11px] ${previewTheme === 'light' ? 'text-slate-600' : 'text-white/70'}`}>Automated ETL/ELT pipelines, star/snowflake schemas, Python, PostgreSQL, DuckDB, Parquet, SQL optimization &amp; telemetry streaming.</p>
                </div>
                <div className={`p-2.5 rounded-sm border ${
                  previewTheme === 'light' ? 'bg-slate-50 border-slate-200 border-l-4 border-l-teal-600' : 'bg-white/[0.02] border-white/5 border-l-4 border-l-emerald-500'
                }`}>
                  <span className={`font-mono font-bold block mb-0.5 ${previewTheme === 'light' ? 'text-teal-800' : 'text-emerald-400'}`}>ICT Infrastructure &amp; Systems:</span>
                  <p className={`text-[11px] ${previewTheme === 'light' ? 'text-slate-600' : 'text-white/70'}`}>Linux/Windows Server, Active Directory, structured cabling, router/switch config, VLANs, Wi-Fi, 24/7 SLA uptime.</p>
                </div>
                <div className={`p-2.5 rounded-sm border ${
                  previewTheme === 'light' ? 'bg-slate-50 border-slate-200 border-l-4 border-l-teal-600' : 'bg-white/[0.02] border-white/5 border-l-4 border-l-emerald-500'
                }`}>
                  <span className={`font-mono font-bold block mb-0.5 ${previewTheme === 'light' ? 'text-teal-800' : 'text-emerald-400'}`}>Cloud & Disaster Recovery:</span>
                  <p className={`text-[11px] ${previewTheme === 'light' ? 'text-slate-600' : 'text-white/70'}`}>Huawei HCIA Cloud Computing V4.0 & Cloud Service V3.0, automated snapshot policies, RPO/RTO strategies, offsite data replication.</p>
                </div>
                <div className={`p-2.5 rounded-sm border ${
                  previewTheme === 'light' ? 'bg-slate-50 border-slate-200 border-l-4 border-l-teal-600' : 'bg-white/[0.02] border-white/5 border-l-4 border-l-emerald-500'
                }`}>
                  <span className={`font-mono font-bold block mb-0.5 ${previewTheme === 'light' ? 'text-teal-800' : 'text-emerald-400'}`}>Cybersecurity & Threat Risk:</span>
                  <p className={`text-[11px] ${previewTheme === 'light' ? 'text-slate-600' : 'text-white/70'}`}>Firewall filtering, network segmentation, role-based access control (RBAC), endpoint security, vulnerability scanning.</p>
                </div>
                <div className={`p-2.5 rounded-sm border ${
                  previewTheme === 'light' ? 'bg-slate-50 border-slate-200 border-l-4 border-l-teal-600' : 'bg-white/[0.02] border-white/5 border-l-4 border-l-emerald-500'
                }`}>
                  <span className={`font-mono font-bold block mb-0.5 ${previewTheme === 'light' ? 'text-teal-800' : 'text-emerald-400'}`}>Software Engineering & DBs:</span>
                  <p className={`text-[11px] ${previewTheme === 'light' ? 'text-slate-600' : 'text-white/70'}`}>PHP, MySQL (data redundancy & indexing), HTML5/CSS3, JavaScript/TypeScript, React, C++, Python (automation & raster analytics).</p>
                </div>
                <div className={`p-2.5 rounded-sm border ${
                  previewTheme === 'light' ? 'bg-slate-50 border-slate-200 border-l-4 border-l-teal-600' : 'bg-white/[0.02] border-white/5 border-l-4 border-l-emerald-500'
                }`}>
                  <span className={`font-mono font-bold block mb-0.5 ${previewTheme === 'light' ? 'text-teal-800' : 'text-emerald-400'}`}>Space Tech & Remote Sensing:</span>
                  <p className={`text-[11px] ${previewTheme === 'light' ? 'text-slate-600' : 'text-white/70'}`}>Geospatial data analysis, multispectral satellite raster processing (QGIS/GDAL), remote sensing pipelines & space digital infrastructure.</p>
                </div>
                <div className={`p-2.5 rounded-sm border ${
                  previewTheme === 'light' ? 'bg-slate-50 border-slate-200 border-l-4 border-l-teal-600' : 'bg-white/[0.02] border-white/5 border-l-4 border-l-emerald-500'
                }`}>
                  <span className={`font-mono font-bold block mb-0.5 ${previewTheme === 'light' ? 'text-teal-800' : 'text-emerald-400'}`}>Creative Suite & Accounting:</span>
                  <p className={`text-[11px] ${previewTheme === 'light' ? 'text-slate-600' : 'text-white/70'}`}>Adobe Premiere Pro, DaVinci Resolve, CapCut Pro, Photoshop, Figma, CPA 1 & 2 (accounting/controls), ALX Certified VA.</p>
                </div>
              </div>
            </div>

            {/* Page 1 Footer */}
            <div className={`flex justify-between items-center text-[10px] font-mono pt-3 border-t ${
              previewTheme === 'light' ? 'border-slate-200 text-slate-400' : 'border-white/5 text-white/40'
            }`}>
              <span>{personalInfo.fullName} • Curriculum Vitae</span>
              <span>End of Page 1</span>
            </div>
          </div>


          {/* ================= PAGE 2 ================= */}
          <div className={`p-6 sm:p-8 rounded-sm shadow-md border space-y-6 ${
            previewTheme === 'light'
              ? 'bg-white text-[#1a202c] border-slate-300'
              : 'bg-[#0f0f0f] text-white/85 border-white/10'
          }`}>
            {/* Page Marker */}
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/40 border-b border-white/10 pb-2">
              <span className={previewTheme === 'light' ? 'text-teal-800 font-bold' : 'text-emerald-400 font-bold'}>Curriculum Vitae — Page 2 of 2</span>
              <span className={previewTheme === 'light' ? 'text-slate-400' : 'text-white/40'}>A4 Document Sheet 2</span>
            </div>

            {/* Subheader */}
            <div className={`pb-2.5 flex flex-col sm:flex-row justify-between items-start sm:items-baseline border-b ${
              previewTheme === 'light' ? 'border-slate-800' : 'border-white/20'
            }`}>
              <div>
                <h3 className={`font-extrabold text-sm uppercase tracking-tight ${previewTheme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                  {personalInfo.fullName} — Professional Engagements & Projects
                </h3>
              </div>
              <span className={`text-[11px] font-mono font-semibold ${previewTheme === 'light' ? 'text-slate-500' : 'text-white/40'}`}>
                {personalInfo.email} | {personalInfo.phone}
              </span>
            </div>

            {/* Work Experience */}
            <div className="space-y-2.5">
              <h2 className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 border-b ${
                previewTheme === 'light' ? 'border-slate-300 text-slate-900' : 'border-white/10 text-white'
              }`}>
                Work Experience & Professional Engagements
              </h2>
              <div className="space-y-2.5">
                {experiences.map((exp) => (
                  <div key={exp.id} className={`space-y-1 p-2.5 rounded-sm border ${
                    previewTheme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.02] border-white/5'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <span className={`font-bold text-xs sm:text-sm ${previewTheme === 'light' ? 'text-slate-900' : 'text-white'}`}>{exp.title} — {exp.company}</span>
                      <span className={`font-mono text-[11px] font-semibold ${previewTheme === 'light' ? 'text-slate-500' : 'text-white/40'}`}>{exp.period}</span>
                    </div>
                    <ul className={`list-disc list-inside text-[11px] space-y-0.5 pl-1 ${
                      previewTheme === 'light' ? 'text-slate-700' : 'text-white/70'
                    }`}>
                      {exp.responsibilities.slice(0, 3).map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className={`text-[10px] font-mono pt-0.5 ${previewTheme === 'light' ? 'text-teal-700' : 'text-emerald-400'}`}>
                        Key Stack: {exp.technologies.join(' • ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Major Projects */}
            <div className="space-y-2.5">
              <h2 className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 border-b ${
                previewTheme === 'light' ? 'border-slate-300 text-slate-900' : 'border-white/10 text-white'
              }`}>
                Key Featured Projects & Deployed Systems
              </h2>
              <ul className="space-y-2 text-xs">
                {projects.slice(0, 4).map((p) => (
                  <li key={p.id} className={`space-y-1 p-2.5 rounded-sm border ${
                    previewTheme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.02] border-white/5'
                  }`}>
                    <div className="flex justify-between items-baseline">
                      <span className={`font-bold text-xs sm:text-sm ${previewTheme === 'light' ? 'text-slate-900' : 'text-white'}`}>{p.title} {p.clientOrContext ? `(${p.clientOrContext})` : ''}</span>
                      <span className={`font-mono text-[10px] font-bold ${previewTheme === 'light' ? 'text-teal-700' : 'text-emerald-400'}`}>{p.status}</span>
                    </div>
                    <p className={`text-[11px] ${previewTheme === 'light' ? 'text-slate-600' : 'text-white/70'}`}>{p.description}</p>
                    {p.highlights && p.highlights.length > 0 && (
                      <ul className={`list-disc list-inside space-y-0.5 pt-0.5 pl-1 text-[11px] ${
                        previewTheme === 'light' ? 'text-slate-600' : 'text-white/60'
                      }`}>
                        {p.highlights.slice(0, 2).map((h, hIdx) => (
                          <li key={hIdx}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Coursework */}
            <div className="space-y-1.5">
              <h2 className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 border-b ${
                previewTheme === 'light' ? 'border-slate-300 text-slate-900' : 'border-white/10 text-white'
              }`}>
                Relevant Academic Coursework
              </h2>
              <div className="flex flex-wrap gap-1.5 pt-0.5 font-mono text-[11px]">
                {coursework.map((c, idx) => (
                  <span key={idx} className={`px-2 py-0.5 rounded-sm border font-medium ${
                    previewTheme === 'light' ? 'bg-slate-100 text-slate-800 border-slate-300' : 'bg-white/5 text-white/75 border-white/10'
                  }`}>
                    ✓ {c}
                  </span>
                ))}
              </div>
            </div>

            {/* References */}
            <div className={`space-y-1.5 pt-1 border-t ${previewTheme === 'light' ? 'border-slate-300' : 'border-white/10'}`}>
              <h2 className={`text-xs font-mono font-bold uppercase tracking-wider ${
                previewTheme === 'light' ? 'text-slate-900' : 'text-white'
              }`}>
                Professional References
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {references.map((ref, idx) => (
                  <div key={idx} className={`text-[11px] space-y-0.5 font-mono p-2.5 rounded-sm border ${
                    previewTheme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-white/[0.02] border-white/5 text-white/70'
                  }`}>
                    <span className={`font-bold block ${previewTheme === 'light' ? 'text-slate-900' : 'text-white'}`}>{ref.name}</span>
                    <p className={previewTheme === 'light' ? 'text-teal-700 font-medium' : 'text-emerald-400'}>{ref.title}</p>
                    <p className={previewTheme === 'light' ? 'text-slate-500' : 'text-white/50'}>{ref.organization}</p>
                    <p className="pt-0.5">Phone: {ref.phone}</p>
                    <p>Email: {ref.email}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Page 2 Footer */}
            <div className={`flex justify-between items-center text-[10px] font-mono pt-3 border-t ${
              previewTheme === 'light' ? 'border-slate-200 text-slate-400' : 'border-white/5 text-white/40'
            }`}>
              <span>Official CV • Verified Portfolio: {personalInfo.wixPortfolio}</span>
              <span>End of Page 2</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
