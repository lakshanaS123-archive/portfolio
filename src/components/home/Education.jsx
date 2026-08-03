// src/components/home/Education.jsx

import React from "react";
import SectionTitle from "../common/SectionTitle.jsx";
import Timeline from "../common/Timeline.jsx";
import { profile } from "../../data/profile";

const educationData = [
  {
    title: `${profile.degree} — ${profile.department}`,
    subtitle: profile.college,
    duration: profile.batch,
    description:
      "Pursuing a Bachelor of Technology in Information Technology with a strong interest in software engineering, full-stack web development, cloud computing, IoT systems, artificial intelligence and modern application development. Actively involved in technical projects, internships and ProtoSem.",
    meta: `CGPA: ${profile.cgpa} / 10`,
  },

  {
  title: "RJ Matriculation higheer secondary school",
  subtitle: "Higher Secondary School",
  duration: "2022 - 2024",
  description:
    "Completed Higher Secondary education with Mathematics and Computer Science, strengthening my analytical thinking and problem-solving skills. and a percentage of 95.8.",
  meta: "Computer Science Stream",
},

{
  title: "RJ Matriculation higheer secondary school",
  subtitle: "High School",
  duration: "2020 - 2022",
  description:
    "Completed Secondary education while developing a strong interest in technology and engineering. and a percentage of 96.8.",
  meta: "Science",
},
];

const Education = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 py-24">
      <SectionTitle
        eyebrow="Education"
        title="Academic Journey"
        subtitle="My educational background and learning journey."
        align="left"
      />

      <Timeline items={educationData} />
    </section>
  );
};

export default Education;