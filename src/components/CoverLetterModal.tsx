import React, { useState } from 'react';
import { X, Copy, Check, Mail, Phone, MapPin, ExternalLink, Printer, FileText, Send } from 'lucide-react';
import { cvData } from '../data/cvData';
import { emailHelper } from '../utils/emailHelper';

interface CoverLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CoverLetterModal: React.FC<CoverLetterModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [roleFocus, setRoleFocus] = useState<'general' | 'data' | 'infrastructure' | 'cybersecurity' | 'cloud' | 'automation' | 'software' | 'video' | 'design'>('general');

  if (!isOpen) return null;

  const getLetterText = () => {
    return `DANIEL MUIRURI ITUGI,
P.O BOX 187-10400,
NAIROBI, KENYA
+254799655572
DMUIRURI2000@GMAIL.COM
Portfolio: https://dmuiruri2000.wixsite.com/daniel-muiruri

Re: Application for Vacancy

Dear Hiring Team,

My name is Daniel Muiruri, a dedicated Computer Science graduate from South Eastern Kenya University with comprehensive hands-on expertise in data engineering (automated ETL/ELT pipelines, analytical data warehousing, dimensional modeling, and SQL tuning), enterprise ICT infrastructure management, cybersecurity risk mitigation, backup and disaster recovery solutions, cloud computing (Huawei HCIA Certified in Cloud Computing & Cloud Services), and full-stack software development.

Throughout my academic journey and 6+ years of technical consulting and ISP operations, I have engineered automated data pipelines, managed enterprise systems, configured robust network routing, enforced security best practices, and designed resilient data redundancy pipelines. Furthermore, I engineer Python data workflows, system administration automation, and high-availability database applications.

As an active member of the SEKU ICT Club and collaborative software initiatives, I thrive in fast-paced, cross-functional environments where teamwork, research-driven innovation, and proactive problem solving are essential.

I am eager to contribute my technical rigor, drive, and enthusiasm to your organization and look forward to discussing how my qualifications align with your objectives.

Yours sincerely,

Daniel Muiruri Itugi`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getLetterText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = () => {
    emailHelper.openDefaultMailClient({
      to: cvData.personalInfo.email,
      subject: 'Application & Interview Invitation - Daniel Muiruri',
      body: getLetterText(),
    });
  };

  const handleSendViaGmail = () => {
    emailHelper.openGmail({
      to: cvData.personalInfo.email,
      subject: 'Application & Interview Invitation - Daniel Muiruri',
      body: getLetterText(),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-sm shadow-2xl flex flex-col overflow-hidden text-white">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 font-mono">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-white/70" />
            <h2 className="text-xs uppercase tracking-widest text-white/90 font-semibold">Official Application Cover Letter</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/40 hover:text-white rounded-sm bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Role Emphasis Filter Selector */}
        <div className="px-6 py-3 bg-white/[0.02] border-b border-white/5 flex flex-wrap items-center gap-1.5 text-xs font-mono">
          <span className="text-white/40 text-[10px] uppercase tracking-wider mr-1">Highlight Focus:</span>
          <button
            onClick={() => setRoleFocus('general')}
            className={`px-2.5 py-1 rounded-sm text-xs transition-all ${
              roleFocus === 'general'
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            General CS
          </button>
          <button
            onClick={() => setRoleFocus('data')}
            className={`px-2.5 py-1 rounded-sm text-xs transition-all ${
              roleFocus === 'data'
                ? 'bg-emerald-400 text-black font-semibold shadow-sm'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            Data Engineering
          </button>
          <button
            onClick={() => setRoleFocus('infrastructure')}
            className={`px-2.5 py-1 rounded-sm text-xs transition-all ${
              roleFocus === 'infrastructure'
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            ICT Infrastructure & Systems
          </button>
          <button
            onClick={() => setRoleFocus('cybersecurity')}
            className={`px-2.5 py-1 rounded-sm text-xs transition-all ${
              roleFocus === 'cybersecurity'
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            Cybersecurity & DR
          </button>
          <button
            onClick={() => setRoleFocus('cloud')}
            className={`px-2.5 py-1 rounded-sm text-xs transition-all ${
              roleFocus === 'cloud'
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            Cloud (Huawei HCIA)
          </button>
          <button
            onClick={() => setRoleFocus('automation')}
            className={`px-2.5 py-1 rounded-sm text-xs transition-all ${
              roleFocus === 'automation'
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            DevOps & Automation
          </button>
          <button
            onClick={() => setRoleFocus('software')}
            className={`px-2.5 py-1 rounded-sm text-xs transition-all ${
              roleFocus === 'software'
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            Software Eng
          </button>
          <button
            onClick={() => setRoleFocus('video')}
            className={`px-2.5 py-1 rounded-sm text-xs transition-all ${
              roleFocus === 'video'
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            Elite Video
          </button>
          <button
            onClick={() => setRoleFocus('design')}
            className={`px-2.5 py-1 rounded-sm text-xs transition-all ${
              roleFocus === 'design'
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            UI/UX & Design
          </button>
        </div>

        {/* Letter Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-white/80 font-light leading-relaxed text-xs sm:text-sm bg-[#050505]">
          
          {/* Candidate Letterhead */}
          <div className="p-4 rounded-sm bg-white/[0.02] border border-white/5 text-xs space-y-1 font-mono">
            <div className="font-semibold text-white text-sm">DANIEL MUIRURI ITUGI</div>
            <div className="text-white/50">P.O BOX 187-10400, NAIROBI, KENYA</div>
            <div className="text-white/50">Phone: +254 799 655 572 | Email: DMUIRURI2000@GMAIL.COM</div>
            <div className="text-white/80">
              Portfolio:{' '}
              <a
                href={cvData.personalInfo.wixPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                https://dmuiruri2000.wixsite.com/daniel-muiruri
              </a>
            </div>
          </div>

          <div className="font-mono text-white/90 text-sm font-semibold border-b border-white/10 pb-2">
            Re: Application for Job Vacancy
          </div>

          <p>
            My name is <strong className="text-white font-medium">Daniel Muiruri</strong>, a dedicated Computer Science graduate from South Eastern Kenya University with extensive practical competence across{' '}
            <span className={roleFocus === 'data' ? 'text-emerald-400 font-semibold underline' : 'text-white'}>
              data engineering &amp; analytical warehousing
            </span>,{' '}
            <span className={roleFocus === 'infrastructure' || roleFocus === 'cybersecurity' ? 'text-emerald-400 font-semibold underline' : 'text-white'}>
              enterprise ICT infrastructure management
            </span>,{' '}
            <span className={roleFocus === 'cybersecurity' ? 'text-emerald-400 font-semibold underline' : 'text-white'}>
              cybersecurity &amp; risk management
            </span>,{' '}
            <span className={roleFocus === 'cloud' ? 'text-emerald-400 font-semibold underline' : 'text-white'}>
              cloud virtualization (Huawei HCIA Certified)
            </span>,{' '}
            <span className={roleFocus === 'automation' ? 'text-emerald-400 font-semibold underline' : 'text-white'}>
              enterprise workflow automation &amp; scripting
            </span>, and{' '}
            <span className={roleFocus === 'software' ? 'text-emerald-400 font-semibold underline' : 'text-white'}>
              full-stack software systems
            </span>.
          </p>

          <p>
            As an active member of the <strong className="text-white font-medium">SEKU ICT Club</strong>, I championed peer collaboration, research, and hands-on system deployments. I firmly believe in the power of seamless team collaboration and cross-functional synergy, knowing that structured communication is the foundation for managing high-availability systems and mission-critical digital infrastructure.
          </p>

          {roleFocus !== 'general' && (
            <div className="p-3.5 rounded-sm bg-white/5 border border-white/10 text-xs text-white/90 space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider block text-emerald-400">Role-Tailored Highlight:</span>
              {roleFocus === 'data' && (
                <p>Experienced Data Engineer with proven competence in designing automated ETL/ELT pipelines, architecting star/snowflake schema data warehouses, and processing high-throughput telemetry across Appville ISP networks and NAWASCO municipal utility systems using Python, SQL, PostgreSQL, DuckDB, and Parquet to deliver sub-minute analytics and automated data governance.</p>
              )}
              {roleFocus === 'infrastructure' && (
                <p>Equipped with 15+ months of combined enterprise ICT experience across Appville ISP and NAWASCO municipal systems — administering Linux/Windows servers, configuring MikroTik/Cisco routers, managing structured cabling, and guaranteeing 99.9% network uptime SLAs.</p>
              )}
              {roleFocus === 'cybersecurity' && (
                <p>Proficient in cybersecurity threat mitigation, network segmentation, firewall access control lists (ACLs), role-based access control (RBAC), and automated backup and disaster recovery (DR) protocols designed to minimize RTO and prevent data loss.</p>
              )}
              {roleFocus === 'cloud' && (
                <p>Certified in both Huawei HCIA Cloud Computing V4.0 and HCIA Cloud Service V3.0, with demonstrated capability in FusionCompute virtualization, cloud storage clustering, VPC network architecture, and cloud disaster recovery.</p>
              )}
              {roleFocus === 'automation' && (
                <p>Skilled in developing Python automation pipelines, cron/systemd scheduling, RESTful API integrations, and non-blocking data backup scripts that eliminate repetitive manual workflows and guarantee transactional data integrity.</p>
              )}
              {roleFocus === 'software' && (
                <p>Proven full-stack engineering expertise (PHP, MySQL, React, TypeScript, C++, Python) with deployed systems including the Kitui Referral Hospital Emergency Blood Bank, Landlord Property Management, and the Appville ISP Web Portal.</p>
              )}
              {roleFocus === 'video' && (
                <p>Elite video post-production specialist with master proficiency in Adobe Premiere Pro, DaVinci Resolve, CapCut Pro, and After Effects — delivering cinematic 4K color grading, multi-cam pacing, Foley sound design, and viral short-form social edits.</p>
              )}
              {roleFocus === 'design' && (
                <p>Track record in brand identity and vector logo creation for clients such as Insuite Tours & Safiris, alongside Figma UI/UX prototyping and commercial apparel photography retouching.</p>
              )}
            </div>
          )}

          <p>
            I am eager to contribute my technical rigor, innovation mindset, and proactive work ethic to your team. I welcome the opportunity to apply my knowledge in enterprise infrastructure, cloud resilience, and research-driven software development to help drive your technological mission forward.
          </p>

          <p>
            Thank you for considering my application. I eagerly look forward to discussing how my skills and collaborative spirit align with your team's upcoming goals.
          </p>

          <div className="pt-4 space-y-1 font-mono">
            <div>Yours sincerely,</div>
            <div className="font-medium text-white text-base">Daniel Muiruri Itugi</div>
          </div>

        </div>

        {/* Footer Action Bar */}
        <div className="p-4 bg-white/5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-white/5 border border-white/10 text-white/80 hover:text-white text-xs uppercase tracking-wider font-medium transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-white/40" />}
            {copied ? 'Copied to Clipboard' : 'Copy Text'}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSendViaGmail}
              className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-white text-black text-xs uppercase tracking-wider font-bold transition-all shadow-lg hover:bg-white/90"
              title="Open draft in Gmail in a new tab"
            >
              <Mail className="w-3.5 h-3.5 text-red-600" />
              <span>Send via Gmail</span>
            </button>

            <button
              onClick={handleSendEmail}
              className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs uppercase tracking-wider font-semibold transition-all"
              title="Open default email app"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Default Email</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
