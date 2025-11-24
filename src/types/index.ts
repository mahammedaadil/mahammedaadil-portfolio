export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  details: string;
  cgpa?: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}