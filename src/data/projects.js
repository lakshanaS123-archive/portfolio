// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: "IoT Sensor Calibration Monitoring System",
    description:
      "Designed and developed a real-time IoT monitoring dashboard that detects sensor drift by comparing live sensor readings with weather API data. Features MQTT communication, calibration error analysis, sensor health monitoring, and interactive data visualization.",
    tech: [
      "Python",
      "Streamlit",
      "Arduino",
      "MQTT",
      "SQLite",
      "Coreflux IoT",
    ],
    github: "",
    demo: "",
    featured: true,
    category: "IoT",
  },

  {
    id: 2,
    title: "Smart Waste Management System",
    description:
      "Developed a database-driven smart waste management platform to manage smart bins, waste collection schedules, authorities, users, and collection tracking using a full-stack web application.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "MySQL",
    ],
    github: "",
    demo: "",
    featured: true,
    category: "Web",
  },

  {
    id: 3,
    title: "VR Rehab Automation System",
    description:
      "Designed a virtual reality rehabilitation concept that assists patients through immersive therapy sessions using interactive VR environments, improving engagement and recovery experiences.",
    tech: [
      "Unity",
      "C#",
      "VR",
    ],
    github: "",
    demo: "",
    featured: true,
    category: "VR",
  },

  {
    id: 4,
    title: "Smart Home Security System",
    description:
      "Built an AI-based knowledge-driven home security system capable of reasoning about security events, detecting abnormal situations, and generating intelligent alerts for homeowners.",
    tech: [
      "Python",
      "Artificial Intelligence",
      "Knowledge-Based Systems",
    ],
    github: "",
    demo: "",
    featured: false,
    category: "AI",
  },

  {
    id: 5,
    title: "Personal To-Do List Manager",
    description:
      "Created a responsive task management web application that allows users to organize daily activities, manage priorities, and track completed tasks with a clean and modern user interface.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "",
    demo: "",
    featured: false,
    category: "Web",
  },
];

export const categories = [
  "All",
  "IoT",
  "Web",
  "VR",
  "AI",
];