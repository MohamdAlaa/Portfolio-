import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import {IService , ISkill , IProject} from "./types";
import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  // pizza
    { 
      name: "Pizza Resurvation",
      description:"Pizza resurvation app ",
      image_path: "/images/pizza.png",
      github_url: "https://github.com/MohamdAlaa/Pizza-Restaurant",
      category: ["react"],
      key_techs: ["React"],
    },
   
  // portofolio
    {
      name: "Simple Portofolio",
      image_path: "/images/portofolio.png",
      github_url: "https://github.com/MohamdAlaa/Portfolio-Website",
      category: ["react"],
      description:
        "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
      key_techs: ["React"],
    },

  // crypto
    {
      name: "Cryptocurrency",
      image_path: "/images/cryptoo.png",
      github_url: "https://github.com/MohamdAlaa/Cryptocurrency-API",
      category: ["react"],
      description:
        "Basic Realtime Chat App where one can create a room can talk to each other",
      key_techs: ["React", "REST API"],
    },

  // weather
    {
      name: "Weather App ",
      image_path: "/images/weather.png",
      github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
      category: ["react"],
      description:
        'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
      key_techs: [
        "React","OpenWeatherMap API","Axios "],
    },
  // ninja
    {
      name: "Simple Next JS App",
      image_path: "/images/nextninja.png",
      github_url: "https://github.com/MohamdAlaa/simple-next-js-project",
      category: [ "react","next"],
      description:
        "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
      key_techs: ["React", "Next"],
    },
  // quiz
    {
      name: "Quiz App",
      image_path: "/images/quiz.png",
      github_url: "https://github.com/MohamdAlaa/Quiz-app",
      category: ["react","typescript"],
      description:
        "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
      key_techs: [ "React","Typescript ","styled-components","Trivia API"],
    },

  // real state
    {
      name: "Realstate App",
      image_path: "/images/realstate.png",
      github_url: "https://github.com/MohamdAlaa/Real-Estate-Project",
      category: ["react"],
      description:
        "Social Media app for developers who can share project,create posts,etc...",
      key_techs: [
        "React","styled-components"],
    },
  
  // e-commerce
    {
      name: "E-commerce",
      image_path: "/images/e-commerce.png",
      github_url: "https://github.com/MohamdAlaa/E-Commerce",
      category: ["react"],
      description:
        "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
      key_techs: ["React","'styled-components"],
    },

];

