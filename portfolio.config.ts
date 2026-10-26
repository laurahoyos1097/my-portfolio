import type { IconType } from 'react-icons';
import {
  VscAccount,
  VscCode,
  VscEdit,
  VscGithubAlt,
  VscFiles,
  VscMail,
  VscSettings,
  VscVscode,
} from 'react-icons/vsc';
import {
  SiExpress,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { Project } from '@/types';

// Everything personal about the portfolio lives here. Edit this file to make
// the template your own; pages and components read from it.

export const profile = {
  name: 'Laura Hoyos',
  role: 'Web Development Student',
  currentPosition: 'Student',
  location: 'Marbella, Spain',
  siteUrl: 'https://vscode-portfolio.vercel.app',
  ogImage: 'https://imgur.com/4zi5KkQ.png',
  repository: 'https://github.com/itsnitinr/vscode-portfolio',
  metaDescription:
    'Laura Hoyos, web development student interested in frontend development, web design, and creative digital experiences.',
  ogDescription:
    'The personal portfolio of Laura Hoyos, exploring web development, design, and technology.',
  keywords: [
    'Laura Hoyos',
    'web development student',
    'frontend development',
    'web design',
    'DAW',
    'DAM',
    'developer portfolio',
  ],
  intro:
    'Web development student passionate about creating thoughtful digital experiences, combining development, design, and technology.',
  bio: [
    "I'm currently studying Web Application Development and Multiplatform Application Development (DAW/DAM), exploring different technologies and building projects along the way.",
    "I'm especially interested in frontend development, web design, user experience, and finding creative ways to bring ideas to life through code.",
  ],
  beyondCode: 'Beyond coding, I enjoy exploring visual design, experimenting with typography, color palettes, and composition, and paying attention to the small details that bring a design together. I am particularly interested in the intersection of design and technology, and in how creativity can be used to create digital experiences that are both visually appealing and functional. I also enjoy creating personalized handmade products, which allows me to explore new ideas and turn them into something tangible.',
};


export interface Social {
  id: string;
  handle: string;
  href: string;
}

export const socials: Social[] = [
  {
    id: 'github',
    handle: 'laurahoyos1097',
    href: 'https://github.com/laurahoyos1097',
  },
  {
    id: 'linkedin',
    handle: 'Laura Hoyos',
    href: 'https://www.linkedin.com/in/laura-hoyos-484809338/',
  },
  {
    id: 'email',
    handle: 'laurahoyos.1097@gmail.com',
    href: 'mailto:laurahoyos.1097@gmail.com',
  },
];


export const getSocial = (id: string) => socials.find(s => s.id === id);

export interface Experience {
  role: string;
  company?: string;
  period: string;
  highlights?: string[];
  description?: string;
}

export const experience: Experience[] = [
  {
    role: 'Web Development Intern',
    company: 'Ebooz',
    period: 'March 2025 – June 2025',
    description:
      'Work placement completed as part of the Intermediate Vocational Training Programme in Microcomputer Systems and Networks .',
    highlights: [
      'Created and modified web pages using WordPress and Elementor.',
      'Worked on page layout and styling with HTML and CSS.',
      'Identified and fixed website issues to improve page presentation and functionality.',
    ],
  },
];

// Your skills, shown as installed extensions in the Extensions view. Each one
// gets a detail page at /extensions/<id>.
export interface Extension {
  id: string;
  name: string;
  publisher: string;
  category: string;
  icon: IconType;
  // Brand color for the icon
  color: string;
  // One-liner shown in the extensions list
  description: string;
  // Longer write-up shown on the extension's detail page
  details?: string;
  // Shown where VS Code shows the version, e.g. "4 years"
  experience?: string;
}


export const extensions: Extension[] = [
  {
    id: 'html-css',
    name: 'HTML & CSS',
    publisher: 'W3C',
    category: 'Languages',
    icon: SiHtml5,
    color: '#e34f26',
    description:
      'Creating and styling web pages with HTML and CSS, focusing on structure, layout, and responsive design.',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    publisher: 'Ecma International',
    category: 'Languages',
    icon: SiJavascript,
    color: '#f7df1e',
    description:
      'Practising JavaScript fundamentals and building interactive web experiences.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    publisher: 'Microsoft',
    category: 'Languages',
    icon: SiTypescript,
    color: '#3178c6',
    description:
      'Learning typed JavaScript and applying it in web development coursework.',
  },
  {
    id: 'php',
    name: 'PHP',
    publisher: 'The PHP Group',
    category: 'Languages',
    icon: VscCode,
    color: '#777bb4',
    description:
      'Practising server-side programming and creating dynamic web pages.',
  },
  {
    id: 'java',
    name: 'Java',
    publisher: 'Oracle',
    category: 'Languages',
    icon: VscCode,
    color: '#e76f00',
    description:
      'Practising programming fundamentals and object-oriented programming.',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    publisher: 'OpenJS Foundation',
    category: 'Tools',
    icon: SiNodedotjs,
    color: '#5fa04e',
    description:
      'Exploring JavaScript runtime tools and server-side development.',
  },
  {
    id: 'express',
    name: 'Express',
    publisher: 'OpenJS Foundation',
    category: 'Frameworks',
    icon: SiExpress,
    color: '#888888',
    description:
      'Learning to build web servers and backend applications with Express.',
  },
  {
    id: 'apache',
    name: 'Apache HTTP Server',
    publisher: 'Apache Software Foundation',
    category: 'Tools',
    icon: VscSettings,
    color: '#d22128',
    description:
      'Practising web server configuration, virtual hosts, and HTTPS.',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    publisher: 'MongoDB, Inc.',
    category: 'Databases',
    icon: SiMongodb,
    color: '#47a248',
    description:
      'Learning document-based data storage and NoSQL database concepts.',
  },
  {
    id: 'mysql',
    name: 'MySQL & SQL',
    publisher: 'Oracle',
    category: 'Databases',
    icon: VscFiles,
    color: '#4479a1',
    description:
      'Practising database queries and relational database fundamentals.',
  },
  {
    id: 'access',
    name: 'Microsoft Access',
    publisher: 'Microsoft',
    category: 'Databases',
    icon: VscFiles,
    color: '#a4373a',
    description:
      'Working with databases, tables, queries, and structured information.',
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    publisher: 'WordPress Foundation',
    category: 'Tools',
    icon: VscCode,
    color: '#21759b',
    description:
      'Building and customising websites with WordPress and page builders.',
  },
  {
    id: 'figma',
    name: 'Figma',
    publisher: 'Figma',
    category: 'Design',
    icon: SiFigma,
    color: '#f24e1e',
    description:
      'Exploring interface design, layouts, and digital prototypes.',
  },
  {
    id: 'adobe',
    name: 'Adobe Creative Tools',
    publisher: 'Adobe',
    category: 'Design',
    icon: VscEdit,
    color: '#ff4b4b',
    description:
      'Creating visual content with Photoshop, Illustrator, Lightroom, and After Effects.',
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    publisher: 'GitHub',
    category: 'Tools',
    icon: SiGit,
    color: '#f05032',
    description:
      'Managing repositories, tracking changes, and practising version control.',
  },
];


export const getExtension = (id: string) => extensions.find(e => e.id === id);

// Extension names grouped by category, in the order they're listed above
export const skills = extensions.reduce<Record<string, string[]>>(
  (groups, { category, name }) => {
    (groups[category] ??= []).push(name);
    return groups;
  },
  {}
);


export const projects: Project[] = [
  {
    title: 'MiniInventario',
    description:
      'A Java console application for managing products, including adding, listing, and searching inventory items.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/laurahoyos1097/ED_4.1_MiniInventario',
    slug: 'miniinventario',
  },
  {
    title: 'Client-Side Web Development',
    description:
      'A collection of coursework exploring JavaScript and client-side web development.',
    logo: '/logos/js_icon.svg',
    link: 'https://github.com/laurahoyos1097/tareas-dwec',
    slug: 'client-side-web-development',
  },
  {
    title: 'Server-Side Web Development',
    description:
      'A collection of server-side web development exercises and projects.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/laurahoyos1097/tareas-dwes',
    slug: 'server-side-web-development',
  },
  {
    title: 'Markup Languages',
    description:
      'Web development coursework focused on HTML, CSS, and markup languages.',
    logo: '/logos/html_icon.svg',
    link: 'https://github.com/laurahoyos1097/tareas-lenguaje-de-marcas',
    slug: 'markup-languages',
  },
];


export interface Route {
  path: string;
  label: string;
  // Activity bar and command palette icon
  icon: IconType;
  // Where the route's icon sits in the activity bar, if at all
  activityBar?: 'top' | 'bottom';
  // Second key of the "G <key>" navigation chord
  shortcut?: string;
  // Routes with a file appear in the explorer and tabs bar
  file?: {
    name: string;
    icon: string;
  };
}

export const routes: Route[] = [
  {
    path: '/',
    label: 'Home',
    icon: VscFiles,
    activityBar: 'top',
    shortcut: 'h',
    file: { name: 'home.tsx', icon: '/logos/react_icon.svg' },
  },
  {
    path: '/about',
    label: 'About',
    icon: VscAccount,
    activityBar: 'bottom',
    shortcut: 'a',
    file: { name: 'about.html', icon: '/logos/html_icon.svg' },
  },
  {
    path: '/contact',
    label: 'Contact',
    icon: VscMail,
    activityBar: 'top',
    shortcut: 'c',
    file: { name: 'contact.css', icon: '/logos/css_icon.svg' },
  },
  {
    path: '/projects',
    label: 'Projects',
    icon: VscCode,
    activityBar: 'top',
    shortcut: 'p',
    file: { name: 'projects.js', icon: '/logos/js_icon.svg' },
  },
  {
    path: '/github',
    label: 'GitHub',
    icon: VscGithubAlt,
    activityBar: 'top',
    shortcut: 'g',
    file: { name: 'github.md', icon: '/logos/markdown_icon.svg' },
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: VscSettings,
    activityBar: 'bottom',
    shortcut: 's',
  },
];

export const fileRoutes = routes.filter(
  (route): route is Route & { file: NonNullable<Route['file']> } =>
    route.file !== undefined
);
