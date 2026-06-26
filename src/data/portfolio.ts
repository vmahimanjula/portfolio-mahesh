import type {
  Profile,
  NavLink,
  SocialLink,
  SkillCategory,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  Stat,
} from '@/types';

export const profile: Profile = {
  name: 'Manjula V Mahesh',
  firstName: 'Manjula',
  lastName: 'V Mahesh',
  role: 'Front-End Developer',
  tagline:
    'I craft responsive, scalable and enterprise-grade user interfaces with React & TypeScript.',
  location: 'Chennai, India',
  phone: '+91 93814 13368',
  email: 'vmaheshmanjula@gmail.com',
  linkedin: 'https://www.linkedin.com/in/manjula-v-mahesh-082b31411',
  github: 'https://github.com/vmaheshmanjula',
  summary:
    'Front-End Developer with hands-on experience in React.js, TypeScript, JavaScript, Redux Toolkit, React Router, Vite, HTML, CSS and Tailwind CSS. Skilled in building responsive web applications, reusable component architectures, API integration, state management, authentication systems and enterprise-grade user interfaces. Experienced in collaborating with cross-functional teams to develop scalable solutions and improve application performance. Passionate about modern frontend development, user experience and writing clean, maintainable code.',
  roles: [
    'Front-End Developer',
    'React.js Engineer',
    'TypeScript Enthusiast',
    'UI Architect',
  ],
};

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/vmaheshmanjula', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manjula-v-mahesh-082b31411',
    icon: 'linkedin',
  },
  { label: 'Email', href: 'mailto:vmaheshmanjula@gmail.com', icon: 'mail' },
];

export const stats: Stat[] = [
  { value: '20+', label: 'Reusable Components' },
  { value: '30%', label: 'Less Dev Effort' },
  { value: '2', label: 'Enterprise Projects' },
  { value: '8.23', label: 'CGPA / 10' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'code',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python'],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    skills: [
      'React.js',
      'React Router',
      'React Flow',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },
  {
    title: 'State Management',
    icon: 'layers',
    skills: ['Redux Toolkit', 'redux-saga', 'redux-persist', 'Context API'],
  },
  {
    title: 'Tools & Platforms',
    icon: 'tool',
    skills: ['Git', 'GitHub', 'Vite', 'JIRA', 'MySQL'],
  },
  {
    title: 'AI / Computer Vision',
    icon: 'brain',
    skills: ['Machine Learning', 'OpenCV', 'MediaPipe', 'YOLO'],
  },
  {
    title: 'Methodologies',
    icon: 'workflow',
    skills: ['Agile / Scrum', 'Atomic Design', 'Cross-functional Teams'],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: 'Photon Interactive Pvt Ltd',
    title: 'Front-End Developer',
    period: 'Jun 2025 — Present',
    location: 'Chennai, India',
    type: 'work',
    points: [
      'Building enterprise-grade web applications with React 19, TypeScript and Vite using an atomic-design UI kit (atoms through pages).',
      'Integrated enterprise SSO (MSAL) with token exchange, Redux auth and protected routing alongside password login.',
      'Centralized HTTP calls in a reusable hook/wrapper for loading, error and data state — reducing duplicated fetch logic across pages and modals.',
      'Architected scalable state and navigation with Redux Toolkit, redux-saga, redux-persist and React Router.',
      'Designed agent orchestration as a visual workflow with run monitoring, status polling and progress feedback.',
    ],
  },
  {
    company: 'Photon Interactive Pvt Ltd',
    title: 'Front-End Developer Intern',
    period: 'Aug 2024 — May 2025',
    location: 'Chennai, India',
    type: 'internship',
    points: [
      'Designed and optimized prompts to improve accuracy and relevance of AI-generated responses.',
      'Collaborated with developers to integrate AI-powered features into applications and internal tools.',
      'Implemented real-time eye tracking and gaze estimation using OpenCV, MediaPipe and YOLO.',
      'Improved model efficiency and user experience through testing, debugging and iterative enhancements.',
      'Evaluated AI model outputs and refined prompts to enhance response quality and consistency.',
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: 'Photon.ai — Agentic AI Platform',
    role: 'Front-End Developer',
    description:
      'A complete enterprise-level agent platform and monitoring system — an AI / agent web app powering chat & code flows, operations dashboards, admin screens and project management.',
    highlights: [
      'React 19 + TypeScript on Vite with MSAL sign-in and protected routing.',
      'Large atomic-design UI kit driving dashboards, KPIs, modals and filters.',
      'Redux Toolkit + saga + persist for enterprise-grade state management.',
      'Visual agent orchestration with run progress, status polling and deploy actions.',
    ],
    tags: ['React 19', 'TypeScript', 'Vite', 'Redux Toolkit', 'redux-saga', 'MSAL'],
  },
  {
    name: 'Program Plan Builder',
    role: 'Front-End & Python Developer',
    description:
      'An internal web-based tool that automates project planning by generating sprint-wise plans, resource allocation and downloadable reports.',
    highlights: [
      'Developed 20+ reusable React components, reducing dev effort by 30%.',
      'Excel data upload, parsing and visualization within the interface.',
      'Interactive forms and layouts to configure tracks, sprints and parameters.',
      'Efficient state management ensuring smooth data rendering across components.',
    ],
    tags: ['React', 'TypeScript', 'Python', 'Excel Parsing', 'Data Viz'],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science Engineering',
    institution: 'Sathyabama Institute of Science and Technology, Chennai',
    period: '2020 — 2024',
    score: 'CGPA 8.23 / 10',
  },
];
