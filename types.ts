// import { FunctionComponent } from "react";
import { IconType } from "react-icons";



export interface IService {
  Icon: IconType;
  title: string;
  about: string;
}

export interface ISkill {
  Icon: IconType;
  level: string;
  name: string;
}

export interface IProject {
  id:number
  name: string;
  description: string;
  image_path: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "react" | "next" | "typescript";
