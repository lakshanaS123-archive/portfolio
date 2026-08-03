// src/pages/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle.jsx";
import ExperienceTimeline from "../components/experience/ExperienceTimeline.jsx";
import { experience } from "../data/experience.js";

const Experience = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Career Journey
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-3">
            Experience
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Internships, hackathons, and hands-on experiences that shaped my
            growth as a developer.
          </p>
        </motion.div>

        <SectionTitle eyebrow="Timeline" title="Where I've Worked" align="left" />

        <ExperienceTimeline items={experience} />
      </div>
    </div>
  );
};

export default Experience;