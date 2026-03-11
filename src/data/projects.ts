export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;  // "/previews/project-id.png" — served from public/
  year?: string;   // "2024"
  github?: string;
  live?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "portfolio",
    title: "The Kinetic Blueprint",
    description:
      "Personal portfolio site with a sci-fi schematic aesthetic. Features an interactive main canvas built with Framer Motion animations and a sliding panel system.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    year: "2024",
    image: "/previews/portfolio.png",
    github: "https://github.com/furkan",
    live: "/",
  },
  {
    id: "project-2",
    title: "Project Name",
    description:
      "Short project description. A few sentences explaining what the project does and what problem it solves.",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/furkan",
  },
  {
    id: "project-3",
    title: "Project Name",
    description:
      "Short project description. A few sentences explaining what the project does and what problem it solves.",
    tags: ["TypeScript", "Express", "MongoDB"],
    github: "https://github.com/furkan",
  },
  {
    id: "project-4",
    title: "Project Name",
    description:
      "Short project description. A few sentences explaining what the project does and what problem it solves.",
    tags: ["Python", "FastAPI", "Docker"],
    github: "https://github.com/furkan",
  },
];
