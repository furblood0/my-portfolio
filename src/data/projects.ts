export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;  // "/previews/project-id.png" — public/ klasöründen
  year?: string;   // "2024"
  github?: string;
  live?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "portfolio",
    title: "The Kinetic Blueprint",
    description:
      "Kişisel portfolyo sitesi. Sci-fi şematik estetiğine sahip, Framer Motion ile animasyonlu interaktif ana ekran.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    image: "/previews/portfolio.png",
    github: "https://github.com/furkan",
    live: "/",
  },
  {
    id: "project-2",
    title: "Proje Adı",
    description:
      "Kısa proje açıklaması. Projenin ne yaptığını, hangi problemi çözdüğünü anlatan birkaç cümle.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/previews/portfolio.jpg",
    github: "https://github.com/furkan",
  },
  {
    id: "project-3",
    title: "Proje Adı",
    description:
      "Kısa proje açıklaması. Projenin ne yaptığını, hangi problemi çözdüğünü anlatan birkaç cümle.",
    tags: ["TypeScript", "Express", "MongoDB"],
    github: "https://github.com/furkan",
    live: "#",
  },
  {
    id: "project-4",
    title: "Proje Adı",
    description:
      "Kısa proje açıklaması. Projenin ne yaptığını, hangi problemi çözdüğünü anlatan birkaç cümle.",
    tags: ["Python", "FastAPI", "Docker"],
    github: "https://github.com/furkan",
  },
];
