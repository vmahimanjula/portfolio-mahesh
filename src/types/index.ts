export interface NavLink {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  resume: string;
  summary: string;
  roles: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  title: string;
  period: string;
  location: string;
  type: 'work' | 'internship';
  points: string[];
}

export interface ProjectItem {
  name: string;
  role: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  score: string;
}

export interface Stat {
  value: string;
  label: string;
}
