// src/components/home/TechStack.jsx

import React from "react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle.jsx";

const techStack = [
  { icon: SiReact, name: "React", color: "text-sky-400" },
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { icon: SiHtml5, name: "HTML5", color: "text-orange-400" },
  { icon: SiCss, name: "CSS3", color: "text-blue-400" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
  { icon: SiPython, name: "Python", color: "text-yellow-300" },
  { icon: SiMysql, name: "MySQL", color: "text-blue-300" },
  { icon: SiGit, name: "Git", color: "text-orange-500" },
  { icon: SiGithub, name: "GitHub", color: "text-gray-300" },
  { icon: VscVscode, name: "VS Code", color: "text-blue-500" },
];

const TechStack = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
      <SectionTitle
        title="Tools I build with daily"
        subtitle="Technologies and tools I use to develop modern web applications."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mt-10">
        {techStack.map((tech, i) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5"
            >
              <Icon className={`text-4xl ${tech.color}`} />
              <span className="text-sm text-gray-300">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;