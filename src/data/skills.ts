export type TechLevel = "uzman" | "iyi" | "orta" | "başlangıç";
export type LangLevel = "Anadil" | "C2" | "C1" | "B2" | "B1" | "A2" | "A1";

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
    label: "Teknik",
    categories: [
      {
        id: "frontend",
        label: "Frontend",
        items: [
          { kind: "tech", name: "React / Next.js",  level: "uzman"      },
          { kind: "tech", name: "TypeScript",        level: "iyi"        },
          { kind: "tech", name: "Tailwind CSS",      level: "uzman"      },
          { kind: "tech", name: "Framer Motion",     level: "iyi"        },
          { kind: "tech", name: "HTML / CSS",        level: "uzman"      },
        ],
      },
      {
        id: "backend",
        label: "Backend",
        items: [
          { kind: "tech", name: "Node.js",       level: "iyi"        },
          { kind: "tech", name: "Express",       level: "iyi"        },
          { kind: "tech", name: "Python",        level: "orta"       },
          { kind: "tech", name: "PostgreSQL",    level: "orta"       },
          { kind: "tech", name: "MongoDB",       level: "orta"       },
        ],
      },
      {
        id: "tools",
        label: "Tools & DevOps",
        items: [
          { kind: "tech", name: "Git / GitHub",    level: "uzman"    },
          { kind: "tech", name: "Docker",          level: "başlangıç" },
          { kind: "tech", name: "Figma",           level: "orta"     },
          { kind: "tech", name: "VS Code / Cursor",level: "uzman"    },
        ],
      },
    ],
  },
  {
    id: "methodology",
    label: "Metodoloji",
    categories: [
      {
        id: "practices",
        label: "Çalışma Pratikleri",
        items: [
          { kind: "method", name: "Agile / Scrum" },
          { kind: "method", name: "Clean Code" },
          { kind: "method", name: "Component-Driven Development" },
          { kind: "method", name: "REST API Tasarımı" },
          { kind: "method", name: "Code Review" },
          { kind: "method", name: "Responsive Design" },
        ],
      },
    ],
  },
  {
    id: "languages",
    label: "Diller",
    categories: [
      {
        id: "spoken",
        label: "Konuşulan Diller",
        items: [
          { kind: "lang", name: "Türkçe", level: "Anadil" },
          { kind: "lang", name: "İngilizce", level: "B2" },
        ],
      },
    ],
  },
  {
    id: "interests",
    label: "İlgi Alanları",
    categories: [
      {
        id: "hobbies",
        label: "Hobiler",
        items: [
          { kind: "interest", name: "Satranç" },
          { kind: "interest", name: "Müzik" },
          { kind: "interest", name: "Fotoğrafçılık" },
        ],
      },
    ],
  },
];
