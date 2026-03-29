export type TimelineItem = {
  year: string;
  title: string;
  place: string;
  description?: string;
};

export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  location?: string;
  type?: string;
  description?: string;
};

export type EducationItem = {
  period: string;
  degree: string;
  department: string;
  school: string;
  location?: string;
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
  name: "Furkan Fidan",
  title: "Software Developer",
  bio: [
    "Hi, I'm Furkan. I'm a computer engineering student and software developer with a passion for building cross-platform products — from polished web apps with React and Next.js to mobile experiences with Flutter.",
    "I enjoy working across the full stack because I believe understanding the whole picture makes you a better developer at every layer.",
  ],
  experience: [
    {
      period: "Sep 2025 – Nov 2025",
      title: "Research Intern",
      company: "University of Groningen",
      location: "Groningen, Netherlands",
      type: "Internship",
      description: "Developed an SDN-based load balancer in Python to optimize network traffic flows and reduce latency. Conducted failover testing to ensure fault tolerance across large-scale data traffic distributions.",
    },
    {
      period: "Jun 2025 – Jul 2025",
      title: "SAP Intern",
      company: "Konya Şeker Sanayi ve Ticaret A.Ş.",
      location: "Konya, Turkey",
      type: "Internship",
      description: "Analyzed business workflows across SAP FI, CO, and MM modules to improve process visibility. Identified system bottlenecks and authored technical documentation to standardize SAP procedures.",
    },
    {
      period: "Jul 2024 – Aug 2024",
      title: "Mobile Developer Intern",
      company: "Atiker Yazılım",
      location: "Konya, Turkey",
      type: "Internship",
      description: "Designed and deployed a full-stack mobile application from scratch within the Clomosy system. Developed components using TRObject and managed local data storage with SQLite.",
    },
  ],
  education: [
    {
      period: "Sep 2021 – Jul 2026 (Expected)",
      degree: "Bachelor of Science",
      department: "Computer Engineering",
      school: "Konya Food and Agriculture University",
      location: "Konya, Turkey",
      gpa: "3.14 / 4.00",
    },
  ],
};
