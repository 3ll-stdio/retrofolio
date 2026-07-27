import { type IProjects, type IWarning } from "../domain";

type ProjectSeed = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  date: string;
  readmeSize: string;
  imageFolderSize: string;
  imagePaths: string[];
  links: IWarning["links"];
};

const warningMessage = "** Look here for more info **";

const projectSeeds: ProjectSeed[] = [
  {
    id: "project-1",
    name: "Project 1",
    description:
      "This project aims to create a user-friendly application for task management. It includes features like creating tasks, setting deadlines, and categorizing tasks based on priority.",
    tags: ["Photoshop", "Illustrator", "Figma"],
    date: "05-07-2023",
    readmeSize: "3KB",
    imageFolderSize: "16MB",
    imagePaths: [
      "/assets/projects/project-1/images/image-1.webp",
      "/assets/projects/project-1/images/image-2.webp",
      "/assets/projects/project-1/images/image-3.webp",
      "/assets/projects/project-1/images/image-4.webp",
      "/assets/projects/project-1/images/image-5.webp",
    ],
    links: [
      { name: "Live Website", url: "/" },
      { name: "Github repo", url: "/" },
    ],
  },
  {
    id: "project-2",
    name: "Project 2",
    description:
      "Project 2 is a web application for managing customer relationships. It provides an intuitive interface to store customer details, track interactions, and manage sales opportunities.",
    tags: ["React", "Redux", "SQL"],
    date: "12-06-2021",
    readmeSize: "5.5KB",
    imageFolderSize: "23MB",
    imagePaths: [
      "/assets/projects/project-2/images/image-1.webp",
      "/assets/projects/project-2/images/image-2.webp",
      "/assets/projects/project-2/images/image-3.webp",
      "/assets/projects/project-2/images/image-4.webp",
      "/assets/projects/project-2/images/image-5.webp",
      "/assets/projects/project-2/images/image-6.webp",
    ],
    links: [
      { name: "Live Website", url: "/" },
      { name: "Github repo", url: "/" },
    ],
  },
  {
    id: "project-3",
    name: "Project 3",
    description:
      "Project 3 is a modern web application built with React and Redux. It offers a seamless user experience and a responsive design, making it suitable for various devices and screen sizes.",
    tags: ["Vue", "Typescript", "Python"],
    date: "30-01-2021",
    readmeSize: "8.1KB",
    imageFolderSize: "19.6MB",
    imagePaths: [
      "/assets/projects/project-3/images/image-1.webp",
      "/assets/projects/project-3/images/image-2.webp",
      "/assets/projects/project-3/images/image-3.webp",
      "/assets/projects/project-3/images/image-4.webp",
      "/assets/projects/project-3/images/image-5.webp",
      "/assets/projects/project-3/images/image-6.webp",
    ],
    links: [
      { name: "Live Website", url: "/" },
      { name: "Github repo", url: "/" },
    ],
  },
  {
    id: "project-4",
    name: "Project 4",
    description:
      "Project 4 is a data analysis tool designed for researchers and data scientists. It provides powerful data visualization capabilities, statistical analysis tools, and machine learning algorithms for extracting insights from large datasets.",
    tags: ["Java", "Spring", "MVVM"],
    date: "02-12-2019",
    readmeSize: "1.1KB",
    imageFolderSize: "19.6MB",
    imagePaths: [
      "/assets/projects/project-4/images/image-1.webp",
      "/assets/projects/project-4/images/image-2.webp",
      "/assets/projects/project-4/images/image-3.webp",
      "/assets/projects/project-4/images/image-4.webp",
      "/assets/projects/project-4/images/image-5.webp",
      "/assets/projects/project-4/images/image-6.webp",
    ],
    links: [
      { name: "Live Website", url: "/" },
      { name: "Github repo", url: "/" },
    ],
  },
];

const validateProjectSeeds = (seeds: ProjectSeed[]) => {
  const ids = new Set<string>();

  for (const seed of seeds) {
    if (ids.has(seed.id)) {
      throw new Error(`Duplicate project id: ${seed.id}`);
    }
    ids.add(seed.id);

    if (!seed.imagePaths.length) {
      throw new Error(`Project ${seed.id} has no images.`);
    }

    if (!seed.imagePaths.every((path) => path.startsWith(`/assets/projects/${seed.id}/images/`))) {
      throw new Error(`Project ${seed.id} has an invalid image path.`);
    }
  }
};

validateProjectSeeds(projectSeeds);

export const projects: IProjects = Object.fromEntries(
  projectSeeds.map((seed) => [
    seed.id,
    {
      name: seed.name,
      card: {
        name: seed.name,
        description: seed.description,
        image: seed.imagePaths[0],
        url: `/projects/${seed.id}`,
        tags: seed.tags,
      },
      display: {
        src: `/assets/projects/${seed.id}/readme.md`,
        metaInfo: {
          name: "readme.md",
          directory: `~/${seed.id}/readme.md`,
          type: "Markdown",
          size: seed.readmeSize,
          date: seed.date,
        },
      },
      carousel: {
        images: seed.imagePaths,
        metaInfo: {
          name: "Images",
          directory: `~/${seed.id}/images`,
          type: "Folder",
          size: seed.imageFolderSize,
          date: seed.date,
        },
      },
      warning: {
        message: warningMessage,
        links: seed.links,
        metaInfo: {
          name: "Warning",
          directory: "~/system/warning",
          type: "System Alert",
          size: "3KB",
          date: seed.date,
        },
      },
    },
  ])
);
