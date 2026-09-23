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
        id: "frontend",
        label: "Frontend",
        items: [
          { kind: "tech", name: "React",        level: "proficient"       },
          { kind: "tech", name: "Next.js",       level: "proficient"       },
          { kind: "tech", name: "Tailwind CSS",  level: "proficient"       },
          { kind: "tech", name: "TypeScript",    level: "proficient"   },
          { kind: "tech", name: "JavaScript",    level: "proficient"   },
        ],
      },
      {
        id: "backend",
        label: "Backend",
        items: [
          { kind: "tech", name: "Node.js / Express", level: "proficient"   },
          { kind: "tech", name: "Python / FastAPI",  level: "proficient"   },
          { kind: "tech", name: "Java",               level: "intermediate" },
          { kind: "tech", name: "Dart Frog",          level: "intermediate" },
          { kind: "tech", name: "PostgreSQL",         level: "proficient"   },
          { kind: "tech", name: "SQLite",             level: "proficient"   },
          { kind: "tech", name: "MSSQL",              level: "intermediate" },
        ],
      },
      {
        id: "mobile",
        label: "Mobile",
        items: [
          { kind: "tech", name: "Flutter",            level: "proficient"   },
          { kind: "tech", name: "Dart",               level: "proficient"   },
          { kind: "tech", name: "Riverpod / Provider",level: "proficient"   },
          { kind: "tech", name: "Hive",               level: "proficient"   },
          { kind: "tech", name: "Firebase",           level: "proficient" },
        ],
      },
      {
        id: "tools",
        label: "Tools & DevOps",
        items: [
          { kind: "tech", name: "Git / GitHub",    level: "proficient"       },
          { kind: "tech", name: "Docker",          level: "intermediate" },
          { kind: "tech", name: "Figma",           level: "beginner" },
          { kind: "tech", name: "GitHub Actions",  level: "beginner"     },
          { kind: "tech", name: "Linux",           level: "intermediate"     },
          { kind: "tech", name: "SAP",             level: "intermediate"     },
          { kind: "tech", name: "Vercel",         level: "intermediate"     },
        ],
      },
    ],
  },
  {
    id: "methodology",
    label: "Methodology",
    categories: [
      {
        id: "practices",
        label: "Work Practices",
        items: [
          { kind: "method", name: "Agile / Scrum" },
          { kind: "method", name: "Clean Code" },
          { kind: "method", name: "REST API Design" },
          { kind: "method", name: "Responsive Design" },
          { kind: "method", name: "Version Control (Git Flow)" },
          { kind: "method", name: "Cross-Platform Development" },
          { kind: "method", name: "MVC / MVVM" },
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
          { kind: "lang", name: "English", level: "B2"     },
          { kind: "lang", name: "Dutch",   level: "A1"     },
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
          { kind: "interest", name: "Open Source Exploration" },
        ],
      },
    ],
  },
];
