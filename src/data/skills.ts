export type TechLevel = "expert" | "proficient" | "intermediate" | "beginner";
export type LangLevel = "Native" | "C2" | "C1" | "B2" | "B1" | "A2" | "A1";

export type SkillItem =
  | { kind: "tech";     name: string; level: TechLevel }
  | { kind: "lang";     name: string; level: LangLevel; note?: string }
  | { kind: "interest"; name: string; note?: string }
  | { kind: "method";   name: string; note?: string };

export type SkillCategory = {
  id: string;
  label: string;
  items: SkillItem[];
};

export type SkillGroup = {
  id: string;
  label: string;
  categories: SkillCategory[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "technical",
    label: "Technical",
    categories: [
      {
        id: "interface",
        label: "Interface",
        items: [
          { kind: "tech", name: "React", level: "proficient" },
          { kind: "tech", name: "TypeScript", level: "proficient" },
          { kind: "tech", name: "Tailwind CSS", level: "proficient" },
          { kind: "tech", name: "Flutter", level: "proficient" },
          { kind: "tech", name: "Dart", level: "proficient" },
          { kind: "tech", name: "Hive", level: "proficient" },
        ],
      },
      {
        id: "services",
        label: "Services",
        items: [
          { kind: "tech", name: "Node.js", level: "proficient" },
          { kind: "tech", name: "Python / FastAPI", level: "proficient" },
          { kind: "tech", name: "PostgreSQL", level: "proficient" },
          { kind: "tech", name: "SQLite", level: "proficient" },
          { kind: "tech", name: "Docker", level: "proficient" },
          { kind: "tech", name: "Java", level: "intermediate" },
          { kind: "tech", name: "Spring Boot", level: "intermediate" },
        ],
      },
      {
        id: "systems",
        label: "Systems",
        items: [
          { kind: "tech", name: "Ryu", level: "intermediate" },
          { kind: "tech", name: "OpenFlow", level: "intermediate" },
          { kind: "tech", name: "Mininet", level: "intermediate" },
          { kind: "tech", name: "Solidity", level: "intermediate" },
          { kind: "tech", name: "Hardhat", level: "intermediate" },
        ],
      },
      {
        id: "tools",
        label: "Tools",
        items: [
          { kind: "tech", name: "Git / GitHub", level: "proficient" },
          { kind: "tech", name: "Linux", level: "intermediate" },
          { kind: "tech", name: "Vercel", level: "intermediate" },
        ],
      },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    categories: [
      {
        id: "spoken",
        label: "Spoken Languages",
        items: [
          { kind: "lang", name: "Turkish", level: "Native" },
          { kind: "lang", name: "English", level: "B2" },
          { kind: "lang", name: "Dutch", level: "A1" },
        ],
      },
    ],
  },
  {
    id: "interests",
    label: "Interests",
    categories: [
      {
        id: "hobbies",
        label: "Hobbies",
        items: [
          { kind: "interest", name: "Chess" },
          { kind: "interest", name: "Linkedin Games" },
          { kind: "interest", name: "Table Tennis" },
        ],
      },
    ],
  },
];
