import { IFiles } from "./file";

export interface IWindow {
  name: string;
  type: string;
  date: string;
  directory: string;
  size: string;
}

export interface IDisplay {
  src: string;
  metaInfo: IWindow;
}

export interface IFileExplorer {
  files: IFiles;
  metaInfo: IWindow;
}

export interface IFileExplorerOption {
  name: string;
  type: string;
  date: string;
  owner: string;
}

export interface IImage {
  src: string;
  metaInfo: IWindow;
}

export interface ICarousel {
  images: string[];
  metaInfo: IWindow;
}

export interface IWarning {
  links: string[];
  metaInfo: IWindow;
}
