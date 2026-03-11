export type ContactLink = {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "twitter";
};

export const CONTACT_LINKS: ContactLink[] = [
  {
    id: "github",
    label: "GitHub",
    value: "github.com/furblood0",
    href: "https://github.com/furblood0",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/furkanfidan0",
    href: "https://linkedin.com/in/furkanfidan0",
    icon: "linkedin",
  },
  {
    id: "email",
    label: "Email",
    value: "furkanfidan.2357@gmail.com",
    href: "mailto:furkanfidan.2357@gmail.com",
    icon: "email",
  },
];
