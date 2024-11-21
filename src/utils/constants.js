import {
  jsLogo,
  jestLogo,
  reactLogo,
  cssLogo,
  html5Logo,
  laravelLogo,
  mysqlLogo,
  phpunitLogo,
  reduxLogo,
  webpackLogo,
  phpLogo,
  wordpressLogo,
  tsLogo,
  nodeJsLogo,
  misacordom,
  techniciansBanner,
  moviesBanner,
} from "../assets/images/index";

export const MAIN_EXCERT = "I’m a pationated Software engineer who is more than happy to help you to create the great solution you have in mind.";
export const SKILL_EXCERT = "Here you can see the variety of tools that I'm most proficient at. which showcase my versatility but also I have the ability adapt and learn new technologies fast.";
export const PORTFOLIO_EXCERT = "These are my latest and bigger projects and detail information about them and links to both live site and github repository.";
export const CONTACT_EXCERT = "Here you'll find my contact information if you are interested in us working together with me as part of your team or as a freelancer.";
export const SKILLS = [
  {
    title: "frontend", tags: [
      { text: "Javascript | 5 years", src: jsLogo },
      { text: "TypeScript | < 1 year", src: tsLogo },
      { text: "React | 3 years", src: reactLogo },
      { text: "Redux | 3 years", src: reduxLogo },
      { text: "Webpack | 3 years", src: webpackLogo },
      { text: "HTML | 5 years", src: html5Logo },
      { text: "CSS | 5 years", src: cssLogo }
    ],
    durationTime: 1
  },
  {
    title: "backend", tags: [
      { text: "PHP | 5 years", src: phpLogo },
      { text: "Laravel | 3 years", src: laravelLogo },
      { text: "NodeJS | < 1 year", src: nodeJsLogo },

    ],
    durationTime: 1.5
  },
  {
    title: "tools", tags: [
      { text: "PHPunit | 3 years", src: phpunitLogo },
      { text: "Jest | 3 years", src: jestLogo },
      { text: "MySQL | 5 years", src: mysqlLogo },
      { text: "Wordpress | 5 years", src: wordpressLogo },
    ],
    durationTime: 2
  },
];

export const NavbarLinks = [
  { route: "#skills", text: "skills" },
  { route: "#portfolio", text: "portfolio" },
  { route: "#contact", text: "contact" },
];


export const PROJECTS = [
  {
    id: 0,
    projectName: 'technicians workplace',
    description: 'This a website thought as a place where technicians and people how need a handyman can find their support on the go powered with many helpful features.',
    thumbnail: techniciansBanner,
    links: [
      { route: 'https://github.com/elassis/tecnicians_frontend', logoName: 'github', text: "github repo" },
      { route: 'https://technicianfreelance.enmanuellassis.com/', logoName: 'externalLink', text: "Live site" },
    ],
    technologies: [
      { src: reactLogo, text: "react" },
      { src: laravelLogo, text: "laravel" },
      { src: mysqlLogo, text: "MySQL" },
    ]
  },
  {
    id: 1,
    projectName: 'misacordom',
    description: 'This is my most recent freelance job, a marketing website for a local religious institution to help them promote their activities and creeds.',
    thumbnail: misacordom,
    links: [
      { route: null, logoName: 'github', text: "github repo" },
      { route: 'https://misacordom.com/', logoName: 'externalLink', text: 'live site' },
    ],
    technologies: [
      { src: reactLogo, text: "react" },
      { src: laravelLogo, text: "laravel" },
      { src: mysqlLogo, text: "MySQL" },
    ]
  },
  {
    id: 2,
    projectName: 'cinema system',
    description: 'Consumes data from Two APIs. the user can like and leave a comment to the desired tv show.',
    thumbnail: moviesBanner,
    links: [
      { route: 'https://elassis.github.io/module-2-capstone/', logoName: 'github', text: "github repo" },
      { route: 'https://elassis.github.io/module-2-capstone/dist/', logoName: 'externalLink', text: "live site" },
    ],
    technologies: [
      { src: jsLogo, text: "javascript" },
      { src: reactLogo, text: "react" },
      { src: reduxLogo, text: "redux" },
    ]
  }
];

export const TagsData = [
  { iconName: 'email', attribute: "mailto:enmanuellassis@gmail.com", text: "enmanuellassis@gmail.com" },
  { iconName: 'phone', attribute: "callto:+18294368573", text: "+18294368573" },
];

export const socialMediaIcons = [
  { iconName: 'linkedin', href: 'https://www.linkedin.com/in/enmanuel-lassis-software-developer/' },
  { iconName: 'instagram', href: 'https://www.instagram.com/enmanuellassis/' },
  { iconName: 'facebook', href: 'https://www.facebook.com/elassis' },
];

export const endpoints = {
  development: 'http://localhost:5000',
  production: 'https://enmanuellassis.com/portfolio-backend',
};
