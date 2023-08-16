//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiPhone,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.png';
import Project2 from './assets/img/projects/p2.png';
import Project3 from './assets/img/projects/p3.png';
import Project4 from './assets/img/projects/p4.png';
import Project5 from './assets/img/projects/p5.png';
import Project6 from './assets/img/projects/p6.png';

// skills images
// import SkillImg1 from './assets/img/skills/html5.png';
// import SkillImg2 from './assets/img/skills/css3.png';
// import SkillImg3 from './assets/img/skills/js.png';
import SkillImg1 from './assets/img/skills/csharp.svg';
import SkillImg2 from './assets/img/skills/dotnet.svg';
import SkillImg3 from './assets/img/skills/dotnetcore.svg';
import SkillImg4 from './assets/img/skills/javascript.svg';
import SkillImg5 from './assets/img/skills/node.svg';
import SkillImg6 from './assets/img/skills/react.svg';
import SkillImg7 from './assets/img/skills/next.svg';
import SkillImg8 from './assets/img/skills/git.svg';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'sobre',
    href: 'about',
  },
  
  // {
  //   name: 'services',
  //   href: 'services',
  // },
  {
    name: 'contato',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiGithub/>,
    href: 'https://github.com/kauanmachado',
  },
  {
    icon: <FiLinkedin/>,
    href: 'https://www.linkedin.com/in/kauan-da-silva-machado-9830651b9/',
  },
];

export const stack = [
  {
    img: '',
    href: '',
  },
  {
    img: '',
    href: '',
  },
  {
    img: '',
    href: '',
  },
  {
    img: '',
    href: '',
  },
  
  
  
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'GoBarber',
    category: 'Plataforma de agendamento para barbearias',
    stack: 'node, react, express, sqlite, prisma',
    link: "https://github.com/kauanmachado/gobarber"
  },
  {
    id: '2',
    image: Project2,
    name: 'Livro de Receitas',
    category: 'Livro de receitas',
    stack: '.NET Core, Entity Framework, SQL Server',
    link: "https://github.com/kauanmachado/LivroDeReceitas"
  },
  {
    id: '3',
    image: Project3,
    name: 'Spacetime',
    category: 'Galeria de midias',
    stack: 'Next, React-native, Typescript, Tailwind, Expo',
    link: "https://github.com/kauanmachado/spacetime"
  },
  {
    id: '4',
    image: Project4,
    name: 'Awesome Dev Events',
    category: 'CRUD de eventos',
    stack: 'C#, ASP.NET Core 7, Entity Framework, Swagger',
    link: "https://github.com/kauanmachado/AwesomeDevEvents"
  },
  {
    id: '5',
    image: Project5,
    name: 'Pokedex',
    category: 'Listagem de pokemons',
    stack: 'React, JavaScript',
    link: "https://github.com/kauanmachado/pokedex"
  },
  {
    id: '6',
    image: Project6,
    name: 'KN Cursos',
    category: 'CRUD de cursos',
    stack: 'PHP, Laravel, bootstrap',
    link: "https://github.com/kauanmachado/KN-Cursos"
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },

];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

