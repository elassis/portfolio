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
  misacordom,
  techniciansBanner,
  moviesBanner,
  roosterBanner,
} from "../assets/images/index";

export const MAIN_EXCERT = "I’m a pationated Software engineer who is more than happy to help you to {placeholder} the great solution you have in mind.";
export const SKILL_EXCERT = "Here you can see the variety of tools that I'm most proficient at.which showcase my versatility but also I have the ability adapt and learn new technologies fast.";

export const SKILLS = [
  {
    title: "frontend", tags: [
      { text: "Javascript | 5 years", src: jsLogo },
      { text: "React | 3 years", src: reactLogo },
      { text: "Redux | 3 years", src: reduxLogo },
      { text: "Webpack | 3 years", src: webpackLogo },
      { text: "HTML | 5 years", src: html5Logo },
      { text: "CSS | 5 years", src: cssLogo }
    ]
  },
  {
    title: "backend", tags: [
      { text: "PHP | 5 years", src: phpLogo },
      { text: "Laravel | 3 years", src: laravelLogo },
    ]
  },
  {
    title: "tools", tags: [
      { text: 'PHPunit | 3 years', src: phpunitLogo },
      { text: "Jest | 3 years", src: jestLogo },
      { text: "MySQL | 5 years", src: mysqlLogo },
      { text: "Wordpress | 5 years", src: wordpressLogo },
    ]
  },
];

export const PROJECTS = [
  {
    projectName: 'rooster management system',
    description: 'A complete app website to manage a rooster herd inventory, including fights and feeding, to help clients have more detailed information.',
    thumbnail: roosterBanner,
    links: [
      { url: 'https://github.com/elassis/proyecto_gallos?tab=readme-ov-file', logoName: 'github' },
      { url: 'https://gallerosoy.lfy.com.do/login/?redirect_to=https%3A%2F%2Fgallerosoy.lfy.com.do%2F', logoName: 'externalLink' },
    ],
    technologies: [
      jsLogo,
      wordpressLogo,
      mysqlLogo
    ]
  },
  {
    projectName: 'technicians workplace',
    description: 'This a website thought as a place where technicians and people how need a handyman can find their support on the go powered with many helpful features.',
    thumbnail: techniciansBanner,
    links: [
      { url: 'https://github.com/elassis/tecnicians_frontend', logoName: 'github' },
      { url: 'https://technicianfreelance.enmanuellassis.com/', logoName: 'externalLink' },
    ],
    technologies: [
      reactLogo,
      laravelLogo,
      mysqlLogo
    ]
  },
  {
    projectName: 'misacordom',
    description: 'This is my most recent freelance job, a marketing website for a local religious institution to help them promote their activities and creeds.',
    thumbnail: misacordom,
    links: [
      { url: '#', logoName: 'github' },
      { url: 'https://misacordom.com/', logoName: 'externalLink' },
    ],
    technologies: [
      jsLogo,
      wordpressLogo,
      mysqlLogo
    ]
  },
  {
    projectName: 'cinema system',
    description: 'Consumes data from Two APIs. the user can like and leave a comment to the desired tv show.',
    thumbnail: moviesBanner,
    links: [
      { url: 'https://elassis.github.io/module-2-capstone/', logoName: 'github' },
      { url: 'https://elassis.github.io/module-2-capstone/dist/', logoName: 'externalLink' },
    ],
    technologies: [
      jsLogo,
      reactLogo,
      reduxLogo
    ]
  }
];

export const TagsData = [
  { iconName: 'email', attribute: "mailto:enmanuellassis@gmail.com", text: "enmanuellassis@gmail.com" },
  { iconName: 'phone', attribute: "callto:+18294368573", text: "+18294368573" },
];

export const socialMediaIcons = [
  { iconName: 'linkedin', href: '#' },
  { iconName: 'instagram', href: '#' },
  { iconName: 'facebook', href: '#' },
];

export const endpoints = {
  development: 'http://localhost:5000',
  production: 'https://enmanuellassis.com/portfolio-backend',
};
