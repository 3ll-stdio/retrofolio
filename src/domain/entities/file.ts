import { IFileExplorerOption, IDisplay, IImage } from "./window";

export interface IFile {
  name: string;
  display: IDisplay;
  image: IImage;
  metaInfo: IFileExplorerOption;
}

export interface IFiles {
  [key: string]: IFile;
}
