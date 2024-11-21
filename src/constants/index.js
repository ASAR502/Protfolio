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
import Doctors from "../assets/Doctors.png"


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
    url: "https://drive.google.com/file/d/1zn8e7uEKnBocGyfmv8vmS7-1-xkOUBvE/view",
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
      " Their passion for coding and dedication to excellence are truly inspiring. They approach every project with enthusiasm and a proactive mindset, consistently delivering high-quality results. Their ability to learn quickly and stay updated with the latest trends in technology sets them apart",
    name: "Sumeet ",
    designation: "CEO",
    company: "Enso Innovation Co",
  },
  {
    testimonial:
      " A highly skilled full-stack developer with an exceptional grasp of data structures and algorithms. Their ability to solve complex problems and build efficient solutions is impressive. They are quick learners who adapt to new technologies effortlessly, making them an invaluable asset to any team",
    name: "Anzal hussain Abidi",
    designation: "SDE 2",
    company: "Zomato",
  },
  {
    testimonial:
      " An outstanding professional with a knack for innovation and problem-solving. Their technical expertise is complemented by excellent collaboration skills. They are always eager to take on challenges, continuously improving their craft and contributing fresh ideas that drive projects forward",
    name: "Faizullah ",
    designation: "Devops enginner",
    company: "S&P Global",
  },
];

const projects = [
  {
    name: "Doctor Appointment",
    description:
    "Web-based platform enabling users to search, book, and manage doctor appointments seamlessly, offering a convenient and efficient solution for healthcare scheduling" ,   tags: [
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
    image: Doctors,
    source_code_link: "https://appointmet.netlify.app/",
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
