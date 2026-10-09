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

export type Highlight = {
  label: string;
  value: string;
};

export type AboutData = {
  name: string;
  title: string;
  location: string;
  availability: string;
  focus: string;
  proof: string[];
  highlights: Highlight[];
  bio: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
};

export const ABOUT: AboutData = {
  name: "Furkan Fidan",
  title: "Software Developer",
  location: "Konya, Turkey",
  availability: "Open to software roles",
  focus: "I build web and mobile products, and I care about how they behave when the network, the data, or the device is not ideal.",
  proof: ["Fleet tracking live", "Groningen research", "TÜBİTAK 3501"],
  highlights: [
    { label: "Now", value: "STEM Instructor, Konya Science Center" },
    { label: "Research", value: "University of Groningen" },
    { label: "Scholarship", value: "TÜBİTAK 3501" },
    { label: "Degree", value: "Computer Engineering · 3.13 GPA" },
  ],
  bio: [
    "Computer Engineering graduate. I ship cross-platform apps in Flutter, full-stack products in TypeScript and Node.js, and small systems that stay understandable: native modules, clear REST APIs, and as few dependencies as the problem allows.",
    "A research term at the University of Groningen was SDN load balancing on Ryu and Mininet. I also contributed to a TÜBİTAK 3501 project on machine learning for corneal imaging. I am looking for a software engineering role where the work leaves the repo and reaches people.",
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
      description: "Contributed to a TÜBİTAK 3501 project developing a machine learning model for corneal endothelial cell analysis in DMEK surgery patients."
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
