import { ICarousel, IDisplay, IWarning } from "./window";

export interface IProject {
  name: string;
  card: IProjectCard;
  display: IDisplay;
  carousel: ICarousel;
  warning: IWarning;
}

export interface IProjects {
  [key: string]: IProject;
}

export interface IProjectCard {
  name: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
}
