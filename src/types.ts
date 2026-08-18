export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'systems' | 'branding' | 'automation';
  summary: string;
  description: string;
  clientOrContext?: string;
  technologies: string[];
  status: 'Completed' | 'Deployed' | 'In Development';
  highlights: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  items: { name: string; level: 'Proficient' | 'Advanced' | 'Intermediate' | 'Learning'; notes?: string }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'Work Experience' | 'Internship' | 'Attachment';
  responsibilities: string[];
  keyAchievements?: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  qualification: string;
  period: string;
  status: string;
  details?: string;
}

export interface Reference {
  name: string;
  title: string;
  organization: string;
  phone: string;
  email: string;
  address: string;
}

export interface DanielCVData {
  personalInfo: {
    fullName: string;
    alias: string;
    headline: string;
    location: string;
    phone: string;
    email: string;
    poBox: string;
    wixPortfolio: string;
    github?: string;
    linkedin?: string;
    whatsapp?: string;
    bioSummary: string;
    clubRoles: string[];
    corePillars: string[];
  };
  projects: Project[];
  skills: SkillCategory[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  coursework: string[];
  activities: {
    hobbies: string[];
    clubActivities: string[];
  };
  references: Reference[];
}
