// Project related interfaces
export interface Project {
  title: string;
  technologies: string[];
  translationKey: string;
  githubLink?: string;
  refLink?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  logo: string;
  link: string;
  translationKey: string;
}
