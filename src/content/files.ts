import { type IFiles } from "../domain";

type FileSeed = {
  id: string;
  name: string;
  owner: string;
  date: string;
  readmeSize: string;
  imageSize: string;
  imageExt: "png" | "webp";
};

const fileSeeds: FileSeed[] = [
  {
    id: "introduction",
    name: "Introduction",
    owner: "3ll",
    date: "22-10-2023",
    readmeSize: "4KB",
    imageSize: "5MB",
    imageExt: "png",
  },
  {
    id: "file-1",
    name: "File 1",
    owner: "Team A",
    date: "05-07-2023",
    readmeSize: "3KB",
    imageSize: "2MB",
    imageExt: "webp",
  },
  {
    id: "file-2",
    name: "File 2",
    owner: "Team B",
    date: "12-06-2021",
    readmeSize: "5.5KB",
    imageSize: "3.1MB",
    imageExt: "webp",
  },
  {
    id: "file-3",
    name: "File 3",
    owner: "Team A",
    date: "30-01-2021",
    readmeSize: "8.1KB",
    imageSize: "3MB",
    imageExt: "webp",
  },
  {
    id: "file-4",
    name: "File 4",
    owner: "Team C",
    date: "02-12-2019",
    readmeSize: "1.1KB",
    imageSize: "2.4MB",
    imageExt: "webp",
  },
];

const validateFileSeeds = (seeds: FileSeed[]) => {
  const ids = new Set<string>();

  for (const seed of seeds) {
    if (ids.has(seed.id)) {
      throw new Error(`Duplicate home file id: ${seed.id}`);
    }
    ids.add(seed.id);
  }
};

validateFileSeeds(fileSeeds);

export const files: IFiles = Object.fromEntries(
  fileSeeds.map((seed) => [
    seed.id,
    {
      name: seed.name,
      display: {
        src: `/assets/home/${seed.id}/readme.md`,
        metaInfo: {
          name: "readme.md",
          directory: `~/${seed.id}/readme.md`,
          type: "Markdown",
          size: seed.readmeSize,
          date: seed.date,
        },
      },
      image: {
        src: `/assets/home/${seed.id}/display-img.${seed.imageExt}`,
        metaInfo: {
          name: "Display Image",
          directory: `~/${seed.id}/images`,
          type: seed.imageExt.toUpperCase(),
          size: seed.imageSize,
          date: seed.date,
        },
      },
      metaInfo: {
        name: seed.name,
        type: "Markdown",
        date: seed.date,
        owner: seed.owner,
      },
    },
  ])
);
