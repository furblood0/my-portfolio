export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  location?: string;
  type?: string;
  /** A paragraph, or an array of bullet points. */
  description?: string | string[];
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
    "Hi, I'm Furkan. I am a Computer Engineering graduate with an international research background and hands-on experience in modern web (Node.js/TypeScript) and cross-platform mobile (Flutter) ecosystems.",
    "I specialize in architecting native solutions with minimal external dependencies, designing RESTful APIs, and developing practical software focused on network optimization."
  ],
  experience: [
    {
      period: "Jul. 2026 – Present",
      title: "STEM Instructor",
      company: "Konya Science Center",
      location: "Konya, Turkey",
      type: "Internship",
      description: [
        "Conduct LEGO SPIKE Prime / robotics coding and STEM workshops for student groups to foster algorithmic thinking and problem-solving skills.",
        "Lead interactive guided tours and deliver scientific and technical demonstrations across multidisciplinary exhibition galleries.",
      ],
    },
    {
      period: "Sep 2025 – Nov 2025",
      title: "Research Intern",
      company: "University of Groningen",
      location: "Groningen, Netherlands",
      type: "Internship",
      description: [
        "Developed an SDN-based Load Balancer using Python on the Ryu Controller, managing switch communication via the OpenFlow protocol.",
        "Simulated virtual network topologies on Mininet and conducted traffic analysis and failover testing with Wireshark to verify system resilience.",
      ],
    },
    {
      period: "May 2025 – Nov. 2025",
      title: "Undergraduate Researcher (TUBITAK 3501 Scholar)",
      company: "University of Health Sciences & Ankara Bilkent City Hospital",
      location: "Remote",
      type: "Internship",
      description: "Contributed to a TUBITAK 3501 project focused on developing a machine learning model for corneal endothelialcell analysis in DMEK surgery patients."
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
      period: "Sep 2021 – Jul 2026",
      degree: "Bachelor of Science",
      department: "Computer Engineering",
      school: "Konya Food and Agriculture University",
      location: "Konya, Turkey",
      gpa: "3.13 / 4.00",
    },
  ],
};
