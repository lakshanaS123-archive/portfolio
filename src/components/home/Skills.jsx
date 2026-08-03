// src/components/home/Skills.jsx
import React from "react";
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiCloud,
  FiTool,
} from "react-icons/fi";
import SectionTitle from "../common/SectionTitle.jsx";
import GlassCard from "../common/GlassCard.jsx";

const skillGroups = [
  {
    icon: FiCode,
    title: "Programming",
    items: ["JavaScript", "Python", "Java", "C++"],
  },
  {
    icon: FiLayout,
    title: "Frontend",
    items: ["React", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    icon: FiServer,
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Flask"],
  },
  {
    icon: FiDatabase,
    title: "Databases",
    items: ["MySQL", "MongoDB", "Firebase", "PostgreSQL"],
  },
  {
    icon: FiCloud,
    title: "Cloud",
    items: ["AWS Basics", "Vercel", "Netlify", "Render"],
  },
  {
    icon: FiTool,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const Skills = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
      <SectionTitle
        eyebrow="Skills"
        title="What I work with"
        subtitle="A snapshot of the technologies and domains I'm comfortable building in."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <GlassCard key={group.title} delay={i * 0.08} className="p-6">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-4">
              <group.icon className="text-purple-300 text-lg" />
            </div>
            <h4 className="text-white font-semibold mb-3">{group.title}</h4>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;