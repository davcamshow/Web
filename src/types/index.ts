export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'soft-skills';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  live?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}