// Project related interfaces
export interface Project {
  title: string;
  technologies: string[];
  translationKey: string;
  githubLink?: string;
  deploymentLink?: string;
  refPath?: string;
}