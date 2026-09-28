// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Project type
export type projectType = {
  number: string;
  title: string;
  category: string;
  description: string;
  type: 'external' | 'figma';
  url?: string;
  figmaUrl?: string;
};

// Nav
const navLinks = [
  {
    label: 'Work',
    url: '#work',
  },
  {
    label: 'About',
    url: '#about',
  },
  {
    label: 'Process',
    url: '#process',
  },
  {
    label: 'Research',
    url: '#research',
  },
  {
    label: 'Playground',
    url: '#playground',
  },
  {
    label: 'Contact',
    url: '#contact',
  },
];

const navbarLinks = [
  {
    label: 'Nikhil Gupta',
    url: '#hero',
  },
  ...navLinks,
  {
    label: 'Resume',
    url: '#resume',
  },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nikhil-gupta-6b7705288',
  },
  {
    label: 'Figma',
    url: 'https://www.figma.com/@nikhil8424',
  },
  {
    label: 'GitHub',
    url: 'https://www.github.com/nikhil8424',
  },
  {
    label: 'Medium',
    url: 'https://medium.com/@guptanikhil8424',
  },
];

// Projects configuration
const projects: projectType[] = [
  {
    number: '01',
    title: 'My Portfolio',
    category: 'UI/UX · Portfolio Design · Interaction Design',
    description: 'My existing portfolio website showcasing UI/UX and product design work.',
    type: 'external',
    url: 'https://port-1tpr.vercel.app/',
  },
  {
    number: '02',
    title: 'Amazon Redesign',
    category: 'UX Audit · E-commerce · Product Design',
    description: 'An e-commerce UX redesign and exploration project.',
    type: 'figma',
    figmaUrl: 'https://www.figma.com/design/Q3cR2DbUI08GtapXkuj064/Untitled?node-id=0-1&t=iXteS1CBfqbdydic-1',
  },
  {
    number: '03',
    title: 'FoodMap',
    category: 'Product Design · Food Tech · UX/UI',
    description: 'A digital product experience for discovering and ordering food from local/home kitchens.',
    type: 'figma',
    figmaUrl: 'https://www.figma.com/design/w9dXLgxxmEtJtLogqvM6XA/food-map?node-id=0-1&p=f&t=8I014UTySFpuAkMu-0',
  },
  {
    number: '04',
    title: 'Travel Website',
    category: 'Web Design · UX/UI · Interaction Design',
    description: 'A travel planning and discovery experience.',
    type: 'figma',
    figmaUrl: 'https://www.figma.com/design/t49D11S2nf42BJo42JnM4e/travel?node-id=0-1&p=f&t=u8wPqEwSFPALpeKL-0',
  },
  {
    number: '05',
    title: 'PawCare',
    category: 'UI/UX · Healthcare · Platform Design',
    description: 'An animal-care platform focused on creating a simple and accessible experience for pet owners.',
    type: 'figma',
    figmaUrl: 'https://www.figma.com/design/EpXpABpPoVHdtkOOi5CSbD/pawcare--animal-care-platform?node-id=0-1&p=f&t=rD8WXR9fFQXka0ib-0',
  },
  {
    number: '06',
    title: 'Research Paper',
    category: 'Research · Academic · Experimental',
    description: 'Experimental research paper on [topic] - pre-publication version available on Zenodo.',
    type: 'external',
    url: 'https://zenodo.org/records/21543953',
  },
];

export {
  socialLinks,
  navLinks,
  navbarLinks,
  projects,
};
