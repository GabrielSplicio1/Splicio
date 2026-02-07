
import { ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "Gabriel Splicio de Castro",
  email: "gabrielsplicio1@hotmail.com",
  phone: "+55 (43) 98487-7485",
  whatsapp: "5543984877485",
  github: "https://github.com/GabrielSplicio1",
  linkedin: "https://www.linkedin.com/in/gabriel-splicio-de-castro-937a201b4/",
  githubPages: "https://gabrielsplicio1.github.io/splicio/",
  
  // COMENTÁRIO: Substitua a URL abaixo pela URL da sua foto de perfil ou pelo caminho do arquivo local
  profileImage: "/img/minhafoto.png", 
  
  summaryShort: "Graduando em ADS e Desenvolvedor focado em resultados, com domínio em arquitetura SaaS e perfil analítico.",
  summaryLong: "Graduando em Análise e Desenvolvimento de Sistemas (2023–2026). Com experiência prévia em rotinas administrativas e gestão de processos, trago um perfil analítico, organizado e com visão estratégica para o desenvolvimento de software. Sou um desenvolvedor focado em resultados práticos, validado por projetos autorais ativos que demonstram competência técnica em C#, Node.js e tecnologias Web.",
  skills: {
    hard: ["C#", "Node.js", "Web Development", "MySQL", "Unreal Engine"],
    soft: ["Comunicação Efetiva", "Proatividade", "Trabalho em Equipe", "Organização"],
    tools: ["Visual Studio / VS Code", "Jira / Scrum", "Photoshop", "Sony Vegas", "Pacote Office"]
  },
  experiences: [
    {
      period: "2022 – 2024",
      role: "Autônomo",
      company: "Serviços Gerais & Tecnologia",
      description: "Manutenção de hardware (notebooks/desktops), logística como entregador Mercado Livre e motorista de aplicativo."
    },
    {
      period: "2021 – 2022",
      role: "Assistente Administrativo",
      company: "A.Yoshii Engenharia",
      description: "Lançamento de NF, coleta de assinaturas, emissão de documentos, organização de arquivos e suporte administrativo geral."
    },
    {
      period: "2017 – 2019",
      role: "Auxiliar de Estoque e Vendas",
      company: "Londripell Papelaria",
      description: "Gestão de estoque, atendimento ao cliente, serviços de impressão e cópias."
    }
  ],
  education: [
    {
      period: "2023 – 2026",
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "Unicesumar"
    },
    {
      period: "2021 – 2022",
      degree: "Técnico em Administração",
      institution: "Unifil"
    },
    {
      period: "2018 – 2021",
      degree: "Técnico em Desenvolvimento de Jogos",
      institution: "MicroCamp"
    }
  ],
  hobbies: ["Música", "Jogos", "Programação", "Hardware"],
  projects: [
    {
      id: "gxite",
      title: "G-Xite",
      status: "Ativo",
      description: "Programa com interface ImGui voltado para leitura e escrita de memória em processos.",
      longDescription: "O G-Xite é um software de engenharia de baixo nível desenvolvido em C#. O foco principal foi criar uma interface de usuário excepcional utilizando ImGui, garantindo uma experiência fluida. O sistema lida com operações complexas de leitura e escrita em memória de processos Windows de forma segura e eficiente.",
      techStack: ["C#", "ImGui", "WinAPI", ".NET"],
      features: [
        "Interface moderna e customizável",
        "Alta performance em leitura/escrita",
        "Otimização de memória",
        "UX intuitiva para ferramentas técnicas"
      ],
      link: "https://g-xite.netlify.app/",
      responsibility: "Projeto autoral",
      // COMENTÁRIO: Substitua a string abaixo pelo caminho ou URL da imagem do projeto G-Xite
      image: "/img/gxite.png" },
    {
      id: "autoinspect",
      title: "AutoInspect",
      status: "Em testes",
      description: "Sistema dedicado para vistorias veiculares e organização de leilões.",
      longDescription: "Sistema SaaS completo desenvolvido sob demanda para otimizar o fluxo de vistorias. Permite o gerenciamento de dados técnicos de veículos leves, pesados e motos, com foco total na geração automatizada de relatórios para editais de leilão.",
      techStack: ["Node.js", "React", "MySQL", "Tailwind CSS"],
      features: [
        "Criação e gestão de vistorias",
        "Anexo de fotos e documentos",
        "Geração de relatórios automáticos para editais",
        "Suporte a veículos leves e pesados"
      ],
      link: "https://autoinspectvistoria.netlify.app/",
      responsibility: "Feito sob demanda",
      // COMENTÁRIO: Substitua a URL abaixo pelo caminho ou URL da imagem do projeto AutoInspect
      image: "/img/auto-inspect.png" }
  ]
};
