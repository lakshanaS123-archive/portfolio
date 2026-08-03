// src/components/experience/ExperienceTimeline.jsx
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard.jsx";

const ExperienceTimeline = ({ items = [] }) => {
  return (
    <div className="relative pl-8 md:pl-10">
      <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/60 via-blue-500/40 to-transparent" />

      <div className="flex flex-col gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <span
              className={`absolute -left-8 md:-left-10 top-6 w-3.5 h-3.5 rounded-full ring-4 ring-[#0a0a0f] ${
                item.status === "current"
                  ? "bg-gradient-to-r from-emerald-400 to-blue-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]"
                  : "bg-gradient-to-r from-purple-400 to-blue-400 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
              }`}
            />
            <ExperienceCard item={item} delay={index * 0.1} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;