import { IWindow } from "./window";

export interface IProject {
  name: string;
  readme: {
    src: string;
    metaInfo: IWindow;
  };
  carousel: {
    images: string[];
    metaInfo: IWindow;
  };
  warning: {
    links: string[];
    metaInfo: IWindow;
  };
}

export interface IProjects {
  [key: string]: IProject;
}
