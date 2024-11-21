import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import insta from "../assets/insta.png";
import what from "../assets/whats.png";
import gmail from "../assets/gmail.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    url: "https://drive.google.com/file/d/1MyPAiOjc2aQRbVgg3oG9UukK2graubHC/view?usp=sharing",
  },
];
export const contactme = [
  {
    id: "twitter",
    title: "twitter",
    image: insta,
  },
  {
    id: "instagram",
    title: "Work",
    image: insta,
  },
  {
    id: "linkdein",
    title: "Linkdein",
    image: what,
  },
  {
    id: "gmail",
    title: "Gmail",
    image: gmail,
  },
  {
    id: "what's app",
    title: "what's app",
    image: what,
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer ",
    icon: backend,
  },
  {
    title: " Creator",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DSA",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack  Developer",
    company_name: "Enso Inovation Lab",
    icon: starbucks,
    iconBg: "#383E57",
    date: "April-2024 - Continue",
    points: [
      "Developing and maintaining web applications using React.js and React redux toolkit in frontend i have used Materil UI and for backend use Node js .",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "For Storage i used Monogo DB for documneted Data base ",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React  Developer",
    company_name: "ORCA",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2022 - Aug 202",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sumeet ",
    designation: "CEO",
    company: "Enso Innovation Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Anzal hussain Abidi",
    designation: "SDE 2",
    company: "Zomato",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Faizullah ",
    designation: "Devops enginner",
    company: "S&P Global",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
