export type TimelineItem = {
  year: string;
  title: string;
  place: string;
  description?: string;
};

export type AboutData = {
  name: string;
  title: string;
  bio: string[];
  timeline: TimelineItem[];
};

export const ABOUT: AboutData = {
  name: "Furkan",
  title: "Full-Stack Developer",
  bio: [
    "Merhaba, ben Furkan. Kullanıcı deneyimini ön planda tutan, temiz ve sürdürülebilir kod yazmayı seven bir full-stack geliştiriciyim.",
    "Frontend'de React ve Next.js ile modern, performanslı arayüzler inşa ediyorum. Backend tarafında Node.js ve Python ile çalışıyorum. Animasyon ve etkileşim tasarımına özellikle ilgi duyuyorum.",
  ],
  timeline: [
    {
      year: "2024",
      title: "Full-Stack Developer",
      place: "Serbest / Freelance",
      description: "Web uygulamaları ve portfolyo projeleri geliştirme.",
    },
    {
      year: "2023",
      title: "Frontend Developer",
      place: "Şirket Adı",
      description: "React tabanlı uygulamalar, component kütüphanesi geliştirme.",
    },
    {
      year: "2022",
      title: "Bilgisayar Mühendisliği",
      place: "Üniversite Adı",
      description: "Lisans eğitimi.",
    },
  ],
};
