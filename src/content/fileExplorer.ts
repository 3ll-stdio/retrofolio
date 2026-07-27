import { type IFileExplorer } from "../domain";
import { files } from "./files";

const parseDate = (date: string) => {
  const [day, month, year] = date.split("-").map((value) => Number.parseInt(value, 10));
  return new Date(year, month - 1, day).getTime();
};

const latestDate = Object.values(files)
  .map((file) => file.metaInfo.date)
  .sort((a, b) => parseDate(b) - parseDate(a))[0];

const fileCount = Object.keys(files).length;

export const fileExplorer: IFileExplorer = {
  files: files,
  metaInfo: {
    name: "Files",
    directory: "~/Home/files",
    type: "Folder",
    size: `${fileCount} items`,
    date: latestDate,
  },
};
