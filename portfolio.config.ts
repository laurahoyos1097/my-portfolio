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
  siteUrl: 'https://laurahoyos.vercel.app',
  ogImage: 'https://laurahoyos.vercel.app/ogimage.png',
  repository: 'https://github.com/laurahoyos1097/my-portfolio',
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
    "This interactive portfolio is a personal project built by customizing a template originally created by @itsnitinr. I've adapted its structure, content, and design to reflect my interests and skills, while using it as an opportunity to explore web development and learn by building something of my own.",
  ],
  beyondCode: [
    "I've always been drawn to graphic design, beautiful visuals, and all the little details that make something feel just right. I enjoy exploring colours, typography, and composition, and finding ways to bring ideas to life through design.",
    "Outside of tech, I love getting creative with crafts and colouring, and I also enjoy gaming. Whether I'm making something by hand or getting lost in a game, I like having spaces where I can explore my creativity and enjoy the process.",
  ]
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
    href: 'https://www.linkedin.com/in/laurahoyos1097/',
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
      'Work placement completed as part of the Intermediate Vocational Training Programme in Microcomputer Systems and Networks.',
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
  // Languages & Markup
  {
    id: 'html-css',
    name: 'HTML5 & CSS3',
    publisher: 'Web Technologies',
    category: 'Languages & Markup',
    icon: SiHtml5,
    color: '#E34F26',
    description: 'Markup and styling technologies for building web pages.',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    publisher: 'JavaScript',
    category: 'Languages & Markup',
    icon: SiJavascript,
    color: '#F7DF1E',
    description: 'Programming language for interactive web experiences.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    publisher: 'Microsoft',
    category: 'Languages & Markup',
    icon: SiTypescript,
    color: '#3178C6',
    description: 'Typed programming language built on JavaScript.',
  },
  {
    id: 'php',
    name: 'PHP',
    publisher: 'PHP',
    category: 'Languages & Markup',
    icon: VscCode,
    color: '#777BB4',
    description: 'Server-side programming language for dynamic web applications.',
  },
  {
    id: 'java',
    name: 'Java',
    publisher: 'Oracle',
    category: 'Languages & Markup',
    icon: VscCode,
    color: '#E76F00',
    description: 'Object-oriented programming language used in application development.',
  },
  {
    id: 'xml',
    name: 'XML',
    publisher: 'W3C',
    category: 'Languages & Markup',
    icon: VscCode,
    color: '#0060AC',
    description: 'Markup language for structuring and storing data.',
  },

  // Frameworks, Runtimes & Libraries
  {
    id: 'nodejs',
    name: 'Node.js',
    publisher: 'OpenJS Foundation',
    category: 'Frameworks, Runtimes & Libraries',
    icon: SiNodedotjs,
    color: '#339933',
    description: 'JavaScript runtime for server-side development.',
  },
  {
    id: 'express',
    name: 'Express.js',
    publisher: 'Express',
    category: 'Frameworks, Runtimes & Libraries',
    icon: SiExpress,
    color: '#FFFFFF',
    description: 'Web framework for building applications and APIs with Node.js.',
  },

  // Backend, Servers & Cloud
  {
    id: 'apache',
    name: 'Apache HTTP Server',
    publisher: 'Apache Software Foundation',
    category: 'Backend, Servers & Cloud',
    icon: VscSettings,
    color: '#D22128',
    description: 'Web server for hosting websites and configuring virtual hosts.',
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    publisher: 'Microsoft',
    category: 'Backend, Servers & Cloud',
    icon: VscSettings,
    color: '#0078D4',
    description: 'Cloud computing platform and related services.',
  },
  {
    id: 'aws',
    name: 'AWS',
    publisher: 'Amazon Web Services',
    category: 'Backend, Servers & Cloud',
    icon: VscSettings,
    color: '#FF9900',
    description: 'Cloud platform providing infrastructure and computing services.',
  },

  // Databases
  {
    id: 'mysql',
    name: 'MySQL',
    publisher: 'Oracle',
    category: 'Databases',
    icon: VscFiles,
    color: '#4479A1',
    description: 'Relational database management system.',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    publisher: 'MongoDB',
    category: 'Databases',
    icon: SiMongodb,
    color: '#47A248',
    description: 'NoSQL database for storing data in document format.',
  },
  {
    id: 'access',
    name: 'Microsoft Access',
    publisher: 'Microsoft',
    category: 'Databases',
    icon: VscFiles,
    color: '#A4373A',
    description: 'Database management tool for creating and managing databases.',
  },

  // CMS & Web Development
  {
    id: 'wordpress',
    name: 'WordPress',
    publisher: 'WordPress Foundation',
    category: 'CMS & Web Development',
    icon: VscCode,
    color: '#21759B',
    description: 'Content management system for building and managing websites.',
  },
  {
    id: 'elementor',
    name: 'Elementor',
    publisher: 'Elementor',
    category: 'CMS & Web Development',
    icon: VscEdit,
    color: '#92003B',
    description: 'Visual page builder for WordPress websites.',
  },
  {
    id: 'wpbakery',
    name: 'WPBakery',
    publisher: 'WPBakery',
    category: 'CMS & Web Development',
    icon: VscEdit,
    color: '#00A0D2',
    description: 'Page builder for designing WordPress website layouts.',
  },

  // Development Tools & Systems
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    publisher: 'Microsoft',
    category: 'Development Tools & Systems',
    icon: VscVscode,
    color: '#007ACC',
    description: 'Code editor for web development and programming.',
  },
  {
    id: 'intellij-idea',
    name: 'IntelliJ IDEA',
    publisher: 'JetBrains',
    category: 'Development Tools & Systems',
    icon: VscCode,
    color: '#087CFA',
    description: 'IDE for Java development and programming projects.',
  },
  {
    id: 'eclipse',
    name: 'Eclipse',
    publisher: 'Eclipse Foundation',
    category: 'Development Tools & Systems',
    icon: VscCode,
    color: '#2C2255',
    description: 'IDE used for Java development and programming.',
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    publisher: 'GitHub',
    category: 'Development Tools & Systems',
    icon: SiGit,
    color: '#F05032',
    description: 'Version control and repository hosting for software projects.',
  },
  {
    id: 'virtualization',
    name: 'VMware & VirtualBox',
    publisher: 'VMware & Oracle',
    category: 'Development Tools & Systems',
    icon: VscSettings,
    color: '#607078',
    description: 'Virtualization tools used to create and run virtual machines.',
  },
  {
    id: 'packet-tracer',
    name: 'Cisco Packet Tracer',
    publisher: 'Cisco',
    category: 'Development Tools & Systems',
    icon: VscSettings,
    color: '#049FD9',
    description: 'Network simulation tool for learning and practicing networking.',
  },

  // Design & UI Tools
  {
    id: 'figma',
    name: 'Figma',
    publisher: 'Figma',
    category: 'Design & UI Tools',
    icon: SiFigma,
    color: '#F24E1E',
    description: 'Design and prototyping tool for user interfaces.',
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    publisher: 'Adobe',
    category: 'Design & UI Tools',
    icon: VscEdit,
    color: '#31A8FF',
    description: 'Image editing and graphic design software.',
  },
  {
    id: 'illustrator',
    name: 'Adobe Illustrator',
    publisher: 'Adobe',
    category: 'Design & UI Tools',
    icon: VscEdit,
    color: '#FF9A00',
    description: 'Vector graphics and illustration software.',
  },
  {
    id: 'lightroom',
    name: 'Adobe Lightroom',
    publisher: 'Adobe',
    category: 'Design & UI Tools',
    icon: VscEdit,
    color: '#31A8FF',
    description: 'Photo editing and organization software.',
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
    title: 'Figma UI Design',
    description:
      'An original Instagram-inspired social media mockup designed from Scratch.',
    logo: '/logos/figma.svg',
    link: 'https://www.figma.com/proto/PMj3ZGa7CTw5EzFIKEOp7t/Untitled?node-id=1-693&t=UfWVriUrhjzwygPQ-1',
    slug: 'figma-ui-design',
    preview: '/projects/figma-project-merged.png',
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
