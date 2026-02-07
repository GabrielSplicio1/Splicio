
export interface Project {
  id: string;
  title: string;
  status: 'Ativo' | 'Em testes';
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  link: string;
  responsibility: 'Projeto autoral' | 'Feito sob demanda';
  image: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
}

export interface ProfileData {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  githubPages: string;
  profileImage: string;
  summaryShort: string;
  summaryLong: string;
  skills: {
    hard: string[];
    soft: string[];
    tools: string[];
  };
  experiences: Experience[];
  education: Education[];
  hobbies: string[];
  projects: Project[];
}
