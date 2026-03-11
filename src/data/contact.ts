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
    value: "github.com/furkan",
    href: "https://github.com/furkan",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/furkan",
    href: "https://linkedin.com/in/furkan",
    icon: "linkedin",
  },
  {
    id: "email",
    label: "Email",
    value: "furkan@example.com",
    href: "mailto:furkan@example.com",
    icon: "email",
  },
];
