import { IProjects } from "@domain";

export const projects: IProjects = {
  "project-1": {
    name: "Project 1",
    card: {
      name: "Project 1",
      description:
        "This project aims to create a user-friendly application for task management. It includes features like creating tasks, setting deadlines, and categorizing tasks based on priority.",
      image: "/assets/projects/project-1/images/image-1.webp",
      url: "/projects/project-1",
      tags: ["Photoshop", "Illustrator", "Figma"],
    },
    display: {
      src: "/assets/projects/project-1/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/project-1/readme.md",
        type: "Markdown",
        size: "3KB",
        date: "05-07-2023",
      },
    },
    carousel: {
      images: [
        "/assets/projects/project-1/images/image-1.webp",
        "/assets/projects/project-1/images/image-2.webp",
        "/assets/projects/project-1/images/image-3.webp",
        "/assets/projects/project-1/images/image-4.webp",
        "/assets/projects/project-1/images/image-5.webp",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/project-1/images",
        type: "Folder",
        size: "16MB",
        date: "05-07-2023",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [
        {
          name: "Live Website",
          url: "/",
        },
        {
          name: "Github repo",
          url: "/",
        },
      ],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Alert",
        size: "3KB",
        date: "05-07-2023",
      },
    },
  },
  "project-2": {
    name: "Project 2",
    card: {
      name: "Project 2",
      description:
        "Project 2 is a web application for managing customer relationships. It provides an intuitive interface to store customer details, track interactions, and manage sales opportunities.",
      image: "/assets/projects/project-2/images/image-1.webp",
      url: "/projects/project-2",
      tags: ["React", "Redux", "SQL"],
    },
    display: {
      src: "/assets/projects/project-1/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/project-2/readme.md",
        type: "Markdown",
        size: "5.5KB",
        date: "12-06-2021",
      },
    },
    carousel: {
      images: [
        "/assets/projects/project-2/images/image-1.webp",
        "/assets/projects/project-2/images/image-2.webp",
        "/assets/projects/project-2/images/image-3.webp",
        "/assets/projects/project-2/images/image-4.webp",
        "/assets/projects/project-2/images/image-5.webp",
        "/assets/projects/project-2/images/image-6.webp",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/project-2/images",
        type: "Folder",
        size: "23MB",
        date: "12-06-2021",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [
        {
          name: "Live Website",
          url: "/",
        },
        {
          name: "Github repo",
          url: "/",
        },
      ],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Alert",
        size: "3KB",
        date: "12-06-2021",
      },
    },
  },
  "project-3": {
    name: "Project 3",
    card: {
      name: "Project 3",
      description:
        "Project 3 is a modern web application built with React and Redux. It offers a seamless user experience and a responsive design, making it suitable for various devices and screen sizes.",
      image: "/assets/projects/project-3/images/image-1.webp",
      url: "/projects/project-3",
      tags: ["Vue", "Typescript", "Python"],
    },
    display: {
      src: "/assets/projects/project-3/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/project-3/readme.md",
        type: "Markdown",
        size: "8.1KB",
        date: "30-01-2021",
      },
    },
    carousel: {
      images: [
        "/assets/projects/project-3/images/image-1.webp",
        "/assets/projects/project-3/images/image-2.webp",
        "/assets/projects/project-3/images/image-3.webp",
        "/assets/projects/project-3/images/image-4.webp",
        "/assets/projects/project-3/images/image-5.webp",
        "/assets/projects/project-3/images/image-6.webp",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/project-3/images",
        type: "Folder",
        size: "19.6MB",
        date: "30-01-2021",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [
        {
          name: "Live Website",
          url: "/",
        },
        {
          name: "Github repo",
          url: "/",
        },
      ],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Alert",
        size: "3KB",
        date: "30-01-2021",
      },
    },
  },
  "project-4": {
    name: "Project 4",
    card: {
      name: "Project 4",
      description:
        "Project 4 is a data analysis tool designed for researchers and data scientists. It provides powerful data visualization capabilities, statistical analysis tools, and machine learning algorithms for extracting insights from large datasets.",
      image: "/assets/projects/project-4/images/image-1.webp",
      url: "/projects/project-4",
      tags: ["Java", "Spring", "MVVM"],
    },
    display: {
      src: "/assets/projects/project-4/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/project-4/readme.md",
        type: "Markdown",
        size: "1.1KB",
        date: "02-12-2019",
      },
    },
    carousel: {
      images: [
        "/assets/projects/project-4/images/image-1.webp",
        "/assets/projects/project-4/images/image-2.webp",
        "/assets/projects/project-4/images/image-3.webp",
        "/assets/projects/project-4/images/image-4.webp",
        "/assets/projects/project-4/images/image-5.webp",
        "/assets/projects/project-4/images/image-6.webp",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/project-4/images",
        type: "Folder",
        size: "19.6MB",
        date: "02-12-2019",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [
        {
          name: "Live Website",
          url: "/",
        },
        {
          name: "Github repo",
          url: "/",
        },
      ],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Alert",
        size: "3KB",
        date: "02-12-2019",
      },
    },
  },
};
