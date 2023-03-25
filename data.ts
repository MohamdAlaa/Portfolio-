import { RiComputerLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import {SiKnowledgebase} from "react-icons/si"
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import {IService , ISkill , IProject} from "./types";
import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>,<b>JavaScript</b>,<b> React Js</b>,<b>Next Js</b> and <b>TypeScript</b> ",
  },
  {
    Icon: AiOutlineTeam,
    title: "Professional team worker",
    about:
      "I can work with my team in a very professional way and adapt to any circumstances",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I handel API with Backend using <b>Rest API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver at problem solving site like <b>Codewars</b>,...  ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "I can't say I am UI/UX designer completely but I can help the UI Team alot ",
  },
  {
    Icon: SiKnowledgebase,
    title: "Know the ropes, learn the ropes",
    about:
      "I like to learn, to read a lot, and to be aware of  changes and new tec around me in my field ",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React Js",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Next Js",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Redux",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind CSS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Material UI",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: " RESTful APIs ",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: " Git & Github",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Sass",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Gulpjs",
    level: "60",
  },
];

export const projects: IProject[] = [
  // pizza
    { 
      id: 1,
      name: "Pizza Resurvation",
      description:"Pizza resurvation app show what kind of Pizza you want and show the price :)",
      image_path: "/images/pizza.png",
      github_url: "https://github.com/MohamdAlaa/Pizza-Restaurant",
      category: ["react"],
      key_techs: ["React"],
    },
   
  // portofolio
    {
      id: 2,
      name: "Simple Portofolio",
      image_path: "/images/portofolio.png",
      github_url: "https://github.com/MohamdAlaa/Portfolio-Website",
      category: ["react"],
      description:
        " First simple portifolio show information about me and my work backthin with a form to Email me :)",
      key_techs: ["React"],
    },

  // crypto
    {
      id: 3,
      name: "Cryptocurrency",
      image_path: "/images/cryptoo.png",
      github_url: "https://github.com/MohamdAlaa/Cryptocurrency-API",
      category: ["react"],
      description:
        "Simple Cryptocurrency app with all information you need about each currency price and rate it was first time to deal with api :)",
      key_techs: ["React", "REST API","Coingecko API"],
    },

  // weather
    {
      id: 4,
      name: "Weather App ",
      image_path: "/images/weather.png",
      github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
      category: ["react"],
      description:
        "Weather app show weathet about city which was givin with OpenWeatherMap API :)",
      key_techs: [
        "React","OpenWeatherMap API","Axios "],
    },
  // ninja
    {
      id: 5,
      name: "Simple Next JS App",
      image_path: "/images/nextninja.png",
      github_url: "https://github.com/MohamdAlaa/simple-next-js-project",
      category: [ "react","next"],
      description:
        "First and Simple next js project it was about learning next , routing, api , SSR , SSG :)" ,
      key_techs: ["React", "Next"],
    },
  // quiz
    {
      id: 6,
      name: "Quiz App",
      image_path: "/images/questioncard.png",
      github_url: "https://github.com/MohamdAlaa/Quiz-app",
      category: ["react","typescript"],
      description:
        "Quiz app and this time trye to compine React with Typescript and Api at the same time :)",
      key_techs: [ "React","Typescript ","styled-components","Trivia API"],
    },

  // real state
    {
      id: 7,
      name: "Realstate App",
      image_path: "/images/realstate.png",
      github_url: "https://github.com/MohamdAlaa/Real-Estate-Project",
      category: ["react"],
      description:
        "Realstate App for puying aVilla or home and also there is form to email me :)",
      key_techs: [
        "React","styled-components"],
    },
    
    // e-commerce
    {
      id: 8,
      name: "E-commerce",
      image_path: "/images/e-commerce.png",
      github_url: "https://github.com/MohamdAlaa/E-Commerce",
      category: ["react"],
      description:
        "An E-commerce app becaue i always want to try how u can deal with shopping card in this kind of apps it was Wonderful experience :)",
      key_techs: ["React","'styled-components"],
    },

];

