export type ExperienceItem = {
  period: string;   // "Haz 2023 – Eyl 2023"
  title: string;
  company: string;
  type?: string;    // "Staj" | "Tam Zamanlı" | "Freelance" vb.
  description?: string;
};

export type EducationItem = {
  period: string;
  degree: string;
  department: string;
  school: string;
  gpa?: string;
  description?: string;
};

export type AboutData = {
  name: string;
  title: string;
  bio: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
};

export const ABOUT: AboutData = {
  name: "Furkan",
  title: "Full-Stack Developer",
  bio: [
    "Merhaba, ben Furkan. Kullanıcı deneyimini ön planda tutan, temiz ve sürdürülebilir kod yazmayı seven bir full-stack geliştiriciyim.",
    "Frontend'de React ve Next.js ile modern, performanslı arayüzler inşa ediyorum. Backend tarafında Node.js ve Python ile çalışıyorum. Animasyon ve etkileşim tasarımına özellikle ilgi duyuyorum.",
  ],
  experience: [
    {
      period: "2024 – Günümüz",
      title: "Full-Stack Developer",
      company: "Serbest / Freelance",
      type: "Freelance",
      description: "Web uygulamaları ve portfolyo projeleri geliştirme.",
    },
    {
      period: "Eyl 2023 – Şub 2024",
      title: "Frontend Developer",
      company: "Şirket Adı",
      type: "Staj",
      description: "React tabanlı uygulamalar, component kütüphanesi geliştirme.",
    },
    {
      period: "Haz 2023 – Eyl 2023",
      title: "Backend Developer",
      company: "Şirket Adı 2",
      type: "Staj",
      description: "Node.js ile REST API geliştirme.",
    },
  ],
  education: [
    {
      period: "2020 – 2024",
      degree: "Lisans",
      department: "Bilgisayar Mühendisliği",
      school: "Üniversite Adı",
      gpa: "3.40 / 4.00",
      description: "Veri yapıları, algoritmalar, yazılım mühendisliği odaklı müfredat.",
    },
  ],
};
