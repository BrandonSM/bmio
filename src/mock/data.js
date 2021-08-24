import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Brandon McGinnis', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'code and \'que', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Brandon McGinnis',
  subtitle: '& I\'m a digital consultant.',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'What\'s a digital consultant you ask? ',
  paragraphTwo: "",
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/brandon-mcginnis', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'The Smoke & Swine Co react native app',
    info: 'Built this app for my BBQ trailer - The Smoke & Swine Co. Square integration for the menu, ordering, and payments. Trailer locator to find the best BBQ around.',
    info2: '',
    url: 'https://smokeandswine.co',
    repo: 'https://github.com/BrandonSM/SmokeAndSwineApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'GolfPress',
    info: 'Need to keep track of bets on the golf course? We\'ve got an app for that.',
    info2: '',
    url: 'https://brandonmcginnis.com',
    repo: 'https://github.com/BrandonSM', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Crypto Token (secret)',
    info: 'Crypto Token utilizing Ethereum blockchain, Solidity, Hardhat, etherjs, and React',
    info2: '',
    url: 'https://brandonmcginnis.com',
    repo: 'https://github.com/BrandonSM', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in working with me?',
  btn: 'Let\'s Start a Conversation',
  email: 'hello@brandonmcginnis.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/TheBBQDev',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/brandon-mcginnis/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/BrandonSM/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false,
};
