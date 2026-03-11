export type SkillItem = {
  name: string;
  level: number; // 0–100
};

export type SkillCategory = {
  id: string;
  category: string;
  items: SkillItem[];
};

export const SKILLS: SkillCategory[] = [
  {
    id: "frontend",
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Framer Motion", level: 80 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    id: "backend",
    category: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "Python", level: 70 },
      { name: "PostgreSQL", level: 72 },
      { name: "MongoDB", level: 68 },
    ],
  },
  {
    id: "tools",
    category: "Tools & DevOps",
    items: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "Figma", level: 70 },
      { name: "VS Code / Cursor", level: 95 },
    ],
  },
];
