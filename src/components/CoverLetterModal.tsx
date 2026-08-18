import React, { useState } from 'react';
import { X, Copy, Check, Mail, Phone, MapPin, ExternalLink, Printer, FileText } from 'lucide-react';
import { cvData } from '../data/cvData';

interface CoverLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CoverLetterModal: React.FC<CoverLetterModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [roleFocus, setRoleFocus] = useState<'general' | 'software' | 'it' | 'cloud' | 'design' | 'video'>('general');

  if (!isOpen) return null;

  const handleCopy = () => {
    const letterText = `DANIEL MUIRURI,
P.O BOX 187-10400,
NAIROBI, KENYA
+254799655572
DMUIRURI2000@GMAIL.COM
Portfolio: https://dmuiruri2000.wixsite.com/daniel-muiruri

Re: Application for the job vacancy

My name is Daniel Muiruri, a dedicated Computer Science graduate with a fervent passion for technology and its transformative potential. Throughout my academic journey, I have honed my expertise in software development, data analysis, graphics design, and software systems, consistently pushing the boundaries of what's possible in the digital realm.

As an active member of the Computer Science Club at my university, I thrived in collaborative environments, working alongside peers on diverse coding projects and competitions. I firmly believe in the power of teamwork, both in physical and remote settings, knowing that it is the cornerstone for achieving unparalleled success in any endeavor.

I am eager to contribute my skills, drive, and enthusiasm to a dynamic team that values innovation and continuous learning. I am enthusiastic about the opportunity to apply my knowledge in a real-world setting and to develop my capabilities further.

I am excited about the potential to contribute to your esteemed organization and am eager to discuss how my background, skills, and passion can align with your team's objectives. I am looking forward to the possibility of joining your team and contributing to its ongoing success.

Thank you for considering my application. I am eagerly anticipating the opportunity to discuss how my skills and experiences align with the goals of your team.

Yours sincerely,

Daniel Muiruri Itugi`;

    navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
        <div className="px-6 py-3 bg-white/[0.02] border-b border-white/5 flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-white/40 text-[10px] uppercase tracking-wider">Highlight Focus:</span>
          <button
            onClick={() => setRoleFocus('general')}
            className={`px-3 py-1 rounded-sm text-xs transition-all ${
              roleFocus === 'general'
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            General CS
          </button>
          <button
            onClick={() => setRoleFocus('software')}
            className={`px-3 py-1 rounded-sm text-xs transition-all ${
              roleFocus === 'software'
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            Software Eng
          </button>
          <button
            onClick={() => setRoleFocus('it')}
            className={`px-3 py-1 rounded-sm text-xs transition-all ${
              roleFocus === 'it'
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            IT Support
          </button>
          <button
            onClick={() => setRoleFocus('cloud')}
            className={`px-3 py-1 rounded-sm text-xs transition-all ${
              roleFocus === 'cloud'
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            Cloud (HCIA)
          </button>
          <button
            onClick={() => setRoleFocus('design')}
            className={`px-3 py-1 rounded-sm text-xs transition-all ${
              roleFocus === 'design'
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            Graphics & Media
          </button>
          <button
            onClick={() => setRoleFocus('video')}
            className={`px-3 py-1 rounded-sm text-xs transition-all ${
              roleFocus === 'video'
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            Elite Video Editing
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
            My name is <strong className="text-white font-medium">Daniel Muiruri</strong>, a dedicated Computer Science graduate from South Eastern Kenya University with a fervent passion for technology and its transformative potential. Throughout my academic journey, I have honed my expertise in{' '}
            <span className={roleFocus === 'software' ? 'text-emerald-400 font-semibold underline' : 'text-white'}>
              software development
            </span>,{' '}
            <span className={roleFocus === 'cloud' || roleFocus === 'it' ? 'text-emerald-400 font-semibold underline' : 'text-white'}>
              data analysis & IT infrastructure
            </span>,{' '}
            <span className={roleFocus === 'design' ? 'text-emerald-400 font-semibold underline' : 'text-white'}>
              graphics design
            </span>, and{' '}
            <span className="text-white">
              software architecture
            </span>, consistently pushing the boundaries of what's possible in the digital realm.
          </p>

          <p>
            As an active member of the <strong className="text-white font-medium">Computer Science Club</strong> at my university, I thrived in collaborative environments, working alongside peers on diverse coding projects and competitions. I firmly believe in the power of teamwork, both in physical and remote settings, knowing that it is the cornerstone for achieving unparalleled success in any endeavor.
          </p>

          {roleFocus !== 'general' && (
            <div className="p-3.5 rounded-sm bg-white/5 border border-white/10 text-xs text-white/90 space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider block text-emerald-400">Role Tailored Highlight:</span>
              {roleFocus === 'software' && (
                <p>Bringing practical full-stack experience (PHP, JavaScript, MySQL, C++, Python) with proven systems like the Kitui Referral Hospital Blood Bank, Landlord Property Manager, and deployed Appville ISP Web Portal.</p>
              )}
              {roleFocus === 'it' && (
                <p>Equipped with 9 months IT internship at NAWASCO and 6 months at Appville ISP, managing 24/7 network installations, user troubleshooting, hardware repairs, Wi-Fi, and CCTV setup.</p>
              )}
              {roleFocus === 'cloud' && (
                <p>Certified in Huawei HCIA Cloud Computing V4.0 and HCIA Cloud Service V3.0, with a deep understanding of cloud virtualization, infrastructure provisioning, and service architecture.</p>
              )}
              {roleFocus === 'design' && (
                <p>Proven track record in brand identity and vector logo creation for clients such as Insuite Tours & Safiris, alongside commercial apparel trend photography using Adobe Illustrator and Photoshop.</p>
              )}
              {roleFocus === 'video' && (
                <p>Elite video post-production specialist with master proficiency in Adobe Premiere Pro, DaVinci Resolve, CapCut Pro, and After Effects — delivering cinematic 4K color grading, multi-cam pacing, dynamic Foley sound design, and viral short-form social edits.</p>
              )}
            </div>
          )}

          <p>
            I am eager to contribute my skills, drive, and enthusiasm to a dynamic team that values innovation and continuous learning. I am enthusiastic about the opportunity to apply my knowledge in a real-world setting and to develop my capabilities further.
          </p>

          <p>
            I am excited about the potential to contribute to your esteemed organization and am eager to discuss how my background, skills, and passion can align with your team's objectives. I am looking forward to the possibility of joining your team and contributing to its ongoing success.
          </p>

          <p>
            Thank you for considering my application. I am eagerly anticipating the opportunity to discuss how my skills and experiences align with the goals of your team.
          </p>

          <div className="pt-4 space-y-1 font-mono">
            <div>Yours sincerely,</div>
            <div className="font-medium text-white text-base">Daniel Muiruri Itugi</div>
          </div>

        </div>

        {/* Footer Action Bar */}
        <div className="p-4 bg-white/5 border-t border-white/10 flex items-center justify-between font-mono">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white/80 hover:text-white text-xs uppercase tracking-wider font-medium transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-white/40" />}
            {copied ? 'Copied to Clipboard' : 'Copy Text'}
          </button>

          <a
            href={`mailto:${cvData.personalInfo.email}?subject=Job%20Opportunity%20-%20Daniel%20Muiruri`}
            className="flex items-center gap-2 px-5 py-2 rounded-md bg-white text-black text-xs uppercase tracking-wider font-semibold transition-all shadow-lg hover:bg-white/90"
          >
            <Mail className="w-3.5 h-3.5" />
            Send Email
          </a>
        </div>

      </div>
    </div>
  );
};
