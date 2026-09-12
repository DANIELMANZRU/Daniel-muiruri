import { cvData } from '../data/cvData';

export interface EmailPayload {
  to?: string;
  subject?: string;
  body?: string;
}

export const emailHelper = {
  getRecipient: (): string => cvData.personalInfo.email,

  openGmail: (payload?: EmailPayload): void => {
    const to = payload?.to || cvData.personalInfo.email;
    const su = encodeURIComponent(payload?.subject || 'Job Opportunity / Inquiry for Daniel Muiruri');
    const body = encodeURIComponent(payload?.body || '');
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  },

  openOutlook: (payload?: EmailPayload): void => {
    const to = payload?.to || cvData.personalInfo.email;
    const subject = encodeURIComponent(payload?.subject || 'Job Opportunity / Inquiry for Daniel Muiruri');
    const body = encodeURIComponent(payload?.body || '');
    const url = `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${subject}&body=${body}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  },

  openYahoo: (payload?: EmailPayload): void => {
    const to = payload?.to || cvData.personalInfo.email;
    const subj = encodeURIComponent(payload?.subject || 'Job Opportunity / Inquiry for Daniel Muiruri');
    const body = encodeURIComponent(payload?.body || '');
    const url = `https://compose.mail.yahoo.com/?to=${to}&subj=${subj}&body=${body}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  },

  openDefaultMailClient: (payload?: EmailPayload): boolean => {
    const to = payload?.to || cvData.personalInfo.email;
    const subject = encodeURIComponent(payload?.subject || 'Job Opportunity / Inquiry for Daniel Muiruri');
    const body = encodeURIComponent(payload?.body || '');
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

    try {
      // Create hidden link and click
      const a = document.createElement('a');
      a.href = mailto;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
      }, 500);
      return true;
    } catch (e) {
      window.location.href = mailto;
      return true;
    }
  },

  copyEmail: async (): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(cvData.personalInfo.email);
      return true;
    } catch {
      return false;
    }
  },

  copyFullMessage: async (payload: EmailPayload): Promise<boolean> => {
    const text = `To: ${payload.to || cvData.personalInfo.email}
Subject: ${payload.subject || 'Inquiry'}

${payload.body || ''}`;
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }
};
