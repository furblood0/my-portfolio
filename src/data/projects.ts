export type ProjectCategory = "web" | "backend" | "mobile" | "tool";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  featured?: boolean;
  image?: string;
  year?: string;
  github?: string;
  live?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "myblog",
    title: "MyBlog",
    description:
      "A full-stack blog platform with JWT authentication, post management with a draft/published workflow, and a dark distraction-free editor with live preview. Cover images can be uploaded or linked externally. Backed by PostgreSQL running in Docker, served via a Node.js/Express REST API.",
    tags: ["React", "Node.js", "Express.js", "PostgreSQL", "Docker", "JWT"],
    category: "web",
    featured: true,
    image: "https://raw.githubusercontent.com/furblood0/MyBlogProject/main/project1/public/dashboard.png",
    year: "2025",
    github: "https://github.com/furblood0/MyBlogProject",
  },
  {
    id: "fastnote",
    title: "FastNote",
    description:
      "A fast and modern note-taking Chrome extension accessible with a single click from the toolbar. Supports multiple notes, real-time search by title and content, note pinning, dark/light theme, and syncs across all Chrome-connected devices via chrome.storage.sync.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Chrome Extension"],
    category: "tool",
    image:
      "https://raw.githubusercontent.com/furblood0/not-defteri-chrome-extension/main/assets/ss3.png",
    year: "2025",
    github: "https://github.com/furblood0/not-defteri-chrome-extension",
  },
  {
    id: "portfolio",
    title: "Portfolio Site",
    description:
      "Personal portfolio site with a sci-fi schematic aesthetic. Features an interactive main canvas built with Framer Motion animations and a sliding panel system.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    category: "web",
    year: "2026",
    image: "/previews/portfolio.png",
    github: "https://github.com/furblood0",
    live: "/",
  },
];
