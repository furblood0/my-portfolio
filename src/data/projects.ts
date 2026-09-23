export type ProjectCategory = "web" | "backend" | "mobile" | "tool" | "game" | "desktop";

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
    id: "servis-takip-sistemi",
    title: "Servis Takip Sistemi",
    description:
      "Engineered a cross-platform (Web & Android) fleet tracking application featuring live telemetry (speed, duration, remaining distance), poor-signal handling, and an automated trip completion mechanism using geofencing.",
    tags: ["Flutter", "Dart", "OpenStreetMap", "Geofencing", "REST API"],
    category: "mobile",
    featured: true,
    image: "",
    year: "2026",
    live: "https://kbm-servis-takip.web.app/",
    github: "",
  },
  {
    id: "movie-tracker",
    title: "Movie Tracker",
    description:
      "Built a self-hosted movie and TV show tracking journal, architecting a full-stack media platform with zero external npm dependencies, leveraging native Node.js HTTP/crypto modules and node:sqlite with schema migrations, prepared statements, and custom rate limiting.",
    tags: ["Vanilla JavaScript", "Node.js/node:http", "TMDb API", "SQLite", "CSS3"],
    category: "web",
    featured: false,
    image: "",
    year: "2026",
    github: "https://github.com/furblood0/movie-tracker",
  },
  {
    id: "myblog",
    title: "MyBlog",
    description:
      "A full-stack blog platform with JWT authentication, post management with a draft/published workflow, and a dark distraction-free editor with live preview. Cover images can be uploaded or linked externally. Backed by PostgreSQL running in Docker, served via a Node.js/Express REST API.",
    tags: ["React", "Node.js", "Express.js", "PostgreSQL", "Docker", "JWT"],
    category: "web",
    featured: false,
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
    live: "https://chromewebstore.google.com/detail/lhgeipjalllkjpjdcjifeplpjjoncmpo",
  },
  {
    id: "netchat",
    title: "NetChat",
    description:
      "A TCP-based multi-user desktop chat application built with Python and PyQt5. Supports group chat and private messaging, PBKDF2-SHA256 password hashing, read receipts, persistent message history via SQLite, and a real-time online user list. Server runs 24/7 on Oracle Cloud.",
    tags: ["Python", "PyQt5", "asyncio", "SQLite", "TCP"],
    category: "desktop",
    year: "2025",
    github: "https://github.com/furblood0/network",
  },
  {
    id: "minigame",
    title: "MiniGame",
    description:
      "A browser-based infinite runner built with Phaser 3. Dodge rocks and boxes, collect hearts for bonus points, and beat your high score. Features double jump, speed scaling over time, localStorage persistence, and a confetti effect on new records.",
    tags: ["JavaScript", "Phaser 3", "HTML5", "Canvas"],
    category: "game",
    image:
      "https://raw.githubusercontent.com/furblood0/MiniGame/main/screenshots/ss2.png",
    year: "2025",
    github: "https://github.com/furblood0/MiniGame",
  },
  {
    id: "youtube-clone",
    title: "YouTube Clone",
    description:
      "A static YouTube homepage clone built with plain HTML and CSS. Replicates the original interface with a header, sidebar navigation, and a responsive video grid — layout powered by Flexbox and CSS Grid.",
    tags: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
    category: "web",
    image:
      "https://raw.githubusercontent.com/furblood0/Youtube-clone/master/ss1.png",
    year: "2023",
    github: "https://github.com/furblood0/Youtube-clone",
  },
  {
    id: "portfolio-v1",
    title: "Portfolio Old Version",
    description:
      "Previous-generation personal portfolio built with React and TypeScript. Features a Markdown-powered blog system, a backend-integrated contact form with a secure admin panel for message management, and a project showcase with category filtering. Frontend on GitHub Pages, backend on Render.",
    tags: ["React", "TypeScript", "Vite", "Express.js", "SQLite", "CSS3"],
    category: "web",
    year: "2025",
    github: "https://github.com/furblood0/furblood0.github.io",
    live: "https://furblood0.github.io/",
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
