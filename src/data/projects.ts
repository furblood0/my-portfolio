export type ProjectCategory = "web" | "backend" | "mobile" | "tool" | "game" | "desktop";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  featured?: boolean;
  /** One-line outcome. Shown before the longer description. */
  summary: string;
  /** Study or previous-generation work, listed after selected projects. */
  archive?: boolean;
  image?: string;
  year?: string;
  github?: string;
  live?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "blindkeys",
    title: "BlindKeys",
    description:
      "Everyone sees the same sentence that day. You memorize it, the screen goes dark, and you type without seeing the letters. The server scores the round and tells you where your hands drifted on a Turkish Q keyboard.",
    summary:
      "Memorize the day's sentence, type it in the dark, and the server tells you where your hands drifted.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel", "Neon"],
    category: "web",
    featured: true,
    image: "/previews/blindkeys.png",
    year: "2026",
    live: "https://www.blindkeys.com/",
  },
  {
    id: "servis-takip-sistemi",
    title: "Servis Takip Sistemi",
    description:
      "Engineered a cross-platform (Web & Android) fleet tracking application featuring live telemetry (speed, duration, remaining distance), poor-signal handling, and an automated trip completion mechanism using geofencing.",
    summary:
      "Live fleet tracking on web and Android: telemetry, weak-signal trips, and geofenced completion.",
    tags: ["Flutter", "Dart", "OpenStreetMap", "Geofencing", "REST API"],
    category: "mobile",
    featured: false,
    year: "2026",
    live: "https://kbm-servis-takip.web.app/",
    github: "",
  },
  {
    id: "bbuddy",
    title: "BBuddy",
    description:
      "A quiet budget app for student spending: allowance, scholarships, dorm costs, groceries, and subscriptions. Set a limit at the start of the month, record money in and money out, and the home screen shows what remains, how much of the limit is used, and the net. It does not connect to a bank or write to a server. Everything entered stays on the device.",
    summary:
      "Student budget on the phone: a monthly limit, income and spending, kept only on the device.",
    tags: ["Flutter", "Dart"],
    category: "mobile",
    featured: false,
    image: "/previews/bbuddy.jpg",
    year: "2026",
    github: "https://github.com/furblood0/bbuddy",
  },
  {
    id: "smartrestoran",
    title: "SmartRestoran",
    description:
      "A working demo of the handoff between waiter and kitchen in a single restaurant. The waiter orders from the available menu, the kitchen sees the ticket, and a ready dish waits on screen for the table. No payments, sign-in, or multiple branches. Database passwords exist only for local Docker.",
    summary:
      "Waiter-to-kitchen handoff for one restaurant: menu order, kitchen ticket, and a table waiting on screen.",
    tags: ["Java", "Spring Boot", "Spring Cloud Gateway", "Eureka", "PostgreSQL", "React", "Docker"],
    category: "web",
    image: "/previews/smartrestoran.png",
    year: "2026",
    github: "https://github.com/furblood0/smartrestoran",
  },
  {
    id: "netshield",
    title: "NetShield SDN",
    description:
      "An SDN controller that balances traffic, fails over when a server or link drops, and keeps a live view of the network. Client traffic is shared across servers behind one address, and a reverse NAT hides that split. The controller sends heartbeats, marks a dead server down, and shifts traffic to the ones still up. A source that sends packets faster than the threshold is dropped at the switch. Servers that join are learned by MAC, and a FastAPI panel shows health and blocked traffic.",
    summary:
      "SDN load balancing, failover, and switch-level protection, with a live network panel.",
    tags: ["Python", "Ryu", "OpenFlow", "Mininet", "FastAPI", "Docker"],
    category: "backend",
    year: "2026",
    github: "https://github.com/furblood0/netshield",
  },
  {
    id: "kenar",
    title: "Kenar",
    description:
      "A fast and modern note-taking Chrome extension accessible with a single click from the toolbar. Supports multiple notes, real-time search by title and content, note pinning, dark/light theme, and syncs across all Chrome-connected devices via chrome.storage.sync.",
    summary:
      "Chrome notes from the toolbar: search, pins, themes, and sync across signed-in devices.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Chrome Extension"],
    category: "tool",
    image: "/previews/kenar.png",
    year: "2025",
    github: "https://github.com/furblood0/not-defteri-chrome-extension",
    live: "https://chromewebstore.google.com/detail/lhgeipjalllkjpjdcjifeplpjjoncmpo",
  },
  {
    id: "movie-tracker",
    title: "Movie Tracker",
    description:
      "Built a self-hosted movie and TV show tracking journal, architecting a full-stack media platform with zero external npm dependencies, leveraging native Node.js HTTP/crypto modules and node:sqlite with schema migrations, prepared statements, and custom rate limiting.",
    summary:
      "Self-hosted movie and TV journal on Node.js and SQLite, with no external npm dependencies.",
    tags: ["Vanilla JavaScript", "Node.js/node:http", "TMDb API", "SQLite", "CSS3"],
    category: "web",
    featured: false,
    image: "/previews/movie-tracker.jpg",
    year: "2026",
    github: "https://github.com/furblood0/movie-tracker",
  },
  {
    id: "murekkep",
    title: "Mürekkep",
    description:
      "A full-stack blog platform with JWT authentication, post management with a draft/published workflow, and a dark distraction-free editor with live preview. Cover images can be uploaded or linked externally. Backed by PostgreSQL running in Docker, served via a Node.js/Express REST API.",
    summary:
      "Full-stack blog with JWT auth, a draft workflow, live preview, and PostgreSQL in Docker.",
    tags: ["React", "Node.js", "Express.js", "PostgreSQL", "Docker", "JWT"],
    category: "web",
    featured: false,
    image: "/previews/murekkep.png",
    year: "2025",
    github: "https://github.com/furblood0/MyBlogProject",
  },
  {
    id: "netchat",
    title: "NetChat",
    description:
      "A TCP-based multi-user desktop chat application built with Python and PyQt5. Supports group chat and private messaging, PBKDF2-SHA256 password hashing, read receipts, persistent message history via SQLite, and a real-time online user list. Server runs 24/7 on Oracle Cloud.",
    summary:
      "Multi-user desktop chat over TCP, with accounts, private messages, and SQLite history.",
    tags: ["Python", "PyQt5", "asyncio", "SQLite", "TCP"],
    category: "desktop",
    year: "2025",
    github: "https://github.com/furblood0/network",
  },
  {
    id: "mesaj-tahtasi",
    title: "Mesaj Tahtası",
    description:
      "A small note board on Ethereum. Connect a wallet, send a short note with a little ETH, and the note stays inside the contract. Posting needs at least 0.0001 ETH. Empty notes and notes over 280 bytes are rejected. The writer is stored as the sending address. Reading the board does not ask the wallet to sign. Only the address that deployed the board can withdraw what has accumulated, and the notes are not deleted.",
    summary:
      "An Ethereum note board: a wallet, a short note with a little ETH, kept inside the contract.",
    tags: ["Solidity", "Hardhat", "Ethereum"],
    category: "web",
    image: "/previews/mesaj-tahtasi.png",
    year: "2026",
    github: "https://github.com/furblood0/Ethereum",
  },
  {
    id: "minigame",
    title: "MiniGame",
    description:
      "A browser-based infinite runner built with Phaser 3. Dodge rocks and boxes, collect hearts for bonus points, and beat your high score. Features double jump, speed scaling over time, localStorage persistence, and a confetti effect on new records.",
    summary:
      "Browser endless runner in Phaser 3, with speed scaling and saved high scores.",
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
    summary: "Layout study of the YouTube homepage, built with HTML, Flexbox, and CSS Grid.",
    tags: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
    category: "web",
    archive: true,
    image:
      "https://raw.githubusercontent.com/furblood0/Youtube-clone/master/ss1.png",
    year: "2023",
    github: "https://github.com/furblood0/Youtube-clone",
  },
];
