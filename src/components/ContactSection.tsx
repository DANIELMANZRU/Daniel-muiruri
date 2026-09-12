import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { Mail, Phone, MapPin, ExternalLink, Send, CheckCircle2, UserCheck, Building2, Copy, Check, Github, Linkedin, MessageSquare, Laptop, Globe, Briefcase, Clock } from 'lucide-react';
import { emailHelper } from '../utils/emailHelper';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMsg, setCopiedMsg] = useState(false);

  const getFullBody = () => {
    return `Hello Daniel,\n\n${formState.message}\n\nFrom:\nName: ${formState.name}\nEmail: ${formState.email}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Trigger default mail client or Gmail with formatted message
    const payload = {
      to: cvData.personalInfo.email,
      subject: formState.subject || `Inquiry from ${formState.name}`,
      body: getFullBody(),
    };

    // Open mail client
    emailHelper.openDefaultMailClient(payload);
    setSubmitted(true);
  };

  const handleSendViaGmail = () => {
    emailHelper.openGmail({
      to: cvData.personalInfo.email,
      subject: formState.subject || (formState.name ? `Inquiry from ${formState.name}` : 'Job Opportunity / Inquiry for Daniel Muiruri'),
      body: formState.message ? getFullBody() : 'Hi Daniel,\n\nI would like to connect regarding an opportunity.',
    });
  };

  const handleSendViaOutlook = () => {
    emailHelper.openOutlook({
      to: cvData.personalInfo.email,
      subject: formState.subject || (formState.name ? `Inquiry from ${formState.name}` : 'Job Opportunity / Inquiry for Daniel Muiruri'),
      body: formState.message ? getFullBody() : 'Hi Daniel,\n\nI would like to connect regarding an opportunity.',
    });
  };

  const handleSendViaDefault = () => {
    emailHelper.openDefaultMailClient({
      to: cvData.personalInfo.email,
      subject: formState.subject || (formState.name ? `Inquiry from ${formState.name}` : 'Job Opportunity / Inquiry for Daniel Muiruri'),
      body: formState.message ? getFullBody() : 'Hi Daniel,\n\nI would like to connect regarding an opportunity.',
    });
  };

  const handleCopyMessage = async () => {
    await emailHelper.copyFullMessage({
      to: cvData.personalInfo.email,
      subject: formState.subject || 'Inquiry',
      body: getFullBody(),
    });
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2500);
  };

  const copyEmail = async () => {
    await emailHelper.copyEmail();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#050505] border-t border-white/10 font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability & Hiring Status Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-white/[0.03] to-sky-950/40 border border-emerald-500/30 shadow-2xl backdrop-blur-md relative overflow-hidden font-outfit">
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-outfit font-semibold tracking-wider uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open for Opportunities</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-outfit font-bold text-white tracking-tight">
                Available for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400 font-extrabold">Full-Time</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 font-extrabold">Part-Time</span> Hiring
              </h3>

              <p className="text-white/70 text-sm font-outfit font-light leading-relaxed">
                Ready for immediate engagement in Full-Stack Software Engineering, Product Design (UI/UX), Network Engineering, and Cloud/IT Support roles.
              </p>
            </div>

            {/* Work Modes Grid */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full lg:w-auto font-outfit text-xs shrink-0">
              <div className="flex flex-col items-center justify-center px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-center hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all group">
                <Laptop className="w-5 h-5 text-emerald-400 mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold">Remote</span>
                <span className="text-[10px] text-white/50 font-medium">Worldwide</span>
              </div>

              <div className="flex flex-col items-center justify-center px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-center hover:border-sky-500/50 hover:bg-sky-500/10 transition-all group">
                <Building2 className="w-5 h-5 text-sky-400 mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold">On-Site</span>
                <span className="text-[10px] text-white/50 font-medium">Nairobi, KE</span>
              </div>

              <div className="flex flex-col items-center justify-center px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-center hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group">
                <Globe className="w-5 h-5 text-purple-400 mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold">Hybrid</span>
                <span className="text-[10px] text-white/50 font-medium">Flexible</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl space-y-3 mb-16 font-outfit">
          <p className="text-xs font-outfit font-semibold uppercase tracking-[0.2em] text-white/40 flex items-center gap-3">
            <span>[05]</span>
            <span>GET IN TOUCH & VERIFICATION</span>
            <span className="h-[1px] flex-1 bg-white/10 hidden sm:block"></span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-white tracking-tight">
            Contact & Professional Reference
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-outfit font-light">
            Interested in hiring Daniel for a full-stack, cloud, IT support, or graphic design role? Send a message directly or connect via phone or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Cards & Reference */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 sm:p-8 shadow-xl space-y-6">
              <h3 className="text-lg font-medium text-white/90">Direct Contact Information</h3>

              <div className="space-y-3 text-xs sm:text-sm font-light">
                
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-sm bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-sm bg-white/5 text-white/70">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest block">Email Address</span>
                      <a href={`mailto:${cvData.personalInfo.email}`} className="text-white/90 font-mono font-medium hover:text-white">
                        {cvData.personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-sm text-white/40 hover:text-white bg-white/5 transition-colors"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-sm bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-sm bg-white/5 text-white/70">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest block">Mobile / WhatsApp</span>
                    <a href={`tel:${cvData.personalInfo.phone}`} className="text-white/90 font-mono font-medium hover:text-white">
                      {cvData.personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-sm bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-sm bg-white/5 text-white/70">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest block">Postal & Location</span>
                    <span className="text-white/90 font-mono font-medium block">{cvData.personalInfo.location}</span>
                  </div>
                </div>

                {/* GitHub Link */}
                {cvData.personalInfo.github && (
                  <div className="flex items-center gap-3 p-3.5 rounded-sm bg-white/[0.02] border border-white/5">
                    <div className="p-2 rounded-sm bg-white/5 text-white/70">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest block">GitHub Profile</span>
                      <a
                        href={cvData.personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 font-mono font-medium hover:underline block"
                      >
                        github.com/DANIELMANZRU
                      </a>
                    </div>
                  </div>
                )}

                {/* LinkedIn Link */}
                {cvData.personalInfo.linkedin && (
                  <div className="flex items-center gap-3 p-3.5 rounded-sm bg-white/[0.02] border border-white/5">
                    <div className="p-2 rounded-sm bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest block">LinkedIn Profile</span>
                      <a
                        href={cvData.personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 font-mono font-medium hover:underline block truncate max-w-[200px] sm:max-w-[260px]"
                      >
                        linkedin.com/in/dmuiruri2000
                      </a>
                    </div>
                  </div>
                )}

                {/* WhatsApp Link */}
                {cvData.personalInfo.whatsapp && (
                  <div className="flex items-center gap-3 p-3.5 rounded-sm bg-white/[0.02] border border-white/5">
                    <div className="p-2 rounded-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest block">Direct WhatsApp Chat</span>
                      <a
                        href={cvData.personalInfo.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 font-mono font-medium hover:underline block"
                      >
                        wa.me/254799655572
                      </a>
                    </div>
                  </div>
                )}

                {/* Portfolio Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-sm bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-sm bg-white/5 text-white/70">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest block">Original Wix Showcase</span>
                    <a
                      href={cvData.personalInfo.wixPortfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/90 font-mono font-medium hover:underline block truncate max-w-[200px] sm:max-w-[260px]"
                    >
                      dmuiruri2000.wixsite.com/daniel-muiruri
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Verified Reference Card */}
            {cvData.references.map((ref, idx) => (
              <div key={idx} className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 shadow-xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-mono uppercase tracking-widest">
                  <UserCheck className="w-3.5 h-3.5" />
                  Verified Reference
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white/90">{ref.name}</h4>
                  <p className="text-xs font-mono text-white/50">{ref.title} • {ref.organization}</p>
                </div>
                <div className="pt-2 border-t border-white/5 space-y-1 text-xs text-white/70 font-mono">
                  <p>Phone: <a href={`tel:${ref.phone}`} className="text-white hover:underline font-bold">{ref.phone}</a></p>
                  <p>Email: <a href={`mailto:${ref.email}`} className="text-white hover:underline">{ref.email}</a></p>
                  <p className="text-white/40">Address: {ref.address}</p>
                </div>
              </div>
            ))}

          </div>

          {/* Right Side: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 sm:p-8 shadow-xl space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white/90">Send Daniel a Direct Message</h3>
                <p className="text-xs font-mono text-white/40 mt-1">
                  Leave a note or job inquiry and Daniel will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-sm bg-white/[0.02] border border-white/10 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email Prepared & Initiated</h4>
                    <p className="text-xs font-mono text-white/60 mt-1 max-w-md mx-auto">
                      Your inquiry has been compiled. If your desktop client didn't open automatically, choose your preferred email service below:
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                    <button
                      onClick={handleSendViaGmail}
                      className="px-3.5 py-2 rounded-sm bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-white/90 transition-all flex items-center gap-1.5 shadow-md"
                    >
                      <Mail className="w-3.5 h-3.5 text-red-500" />
                      <span>Send in Gmail Web</span>
                    </button>
                    <button
                      onClick={handleSendViaOutlook}
                      className="px-3.5 py-2 rounded-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-sky-400" />
                      <span>Send in Outlook Web</span>
                    </button>
                    <button
                      onClick={handleCopyMessage}
                      className="px-3.5 py-2 rounded-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                    >
                      {copiedMsg ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedMsg ? 'Copied!' : 'Copy Note'}</span>
                    </button>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-white/40 hover:text-white underline font-mono"
                    >
                      ← Edit or Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-white/40">Your Full Name *</label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-white/40">Your Email Address *</label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. jane@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Subject / Role Opportunity</label>
                    <input
                      id="contact-subject-input"
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Full-Stack Developer Position / Interview Request"
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Message *</label>
                    <textarea
                      id="contact-message-input"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Write your message or inquiry here..."
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>

                  {/* Primary & Direct Mail Triggers */}
                  <div className="pt-2 space-y-3">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message (Email)</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleSendViaGmail}
                        className="px-4 py-3 rounded-sm bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-white/90 transition-all flex items-center justify-center gap-1.5 shadow"
                        title="Open with Gmail compose in a new tab"
                      >
                        <Mail className="w-3.5 h-3.5 text-red-600" />
                        <span>Open via Gmail</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleSendViaOutlook}
                        className="px-4 py-3 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                        title="Open with Outlook compose in a new tab"
                      >
                        <Mail className="w-3.5 h-3.5 text-sky-400" />
                        <span>Outlook Web</span>
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-white/50 pt-1">
                      <button
                        type="button"
                        onClick={handleCopyMessage}
                        className="text-white/40 hover:text-white underline flex items-center gap-1"
                      >
                        {copiedMsg ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedMsg ? 'Message Copied!' : 'Copy Form Content to Clipboard'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleSendViaDefault}
                        className="text-white/40 hover:text-white underline"
                      >
                        Open in Default Mail Client
                      </button>
                    </div>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
