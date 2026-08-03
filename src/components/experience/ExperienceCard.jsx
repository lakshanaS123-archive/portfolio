// src/components/experience/ExperienceCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiClock } from "react-icons/fi";
import GlassCard from "../common/GlassCard.jsx";

const ExperienceCard = ({ item, delay = 0 }) => {
  const { organization, role, duration, status, description, skills } = item;
  const isCurrent = status === "current";

  return (
    <GlassCard delay={delay} className="group p-6 md:p-7">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
            <FiBriefcase className="text-purple-300 text-lg" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
              {role}
            </h3>
            <p className="text-purple-300 text-sm mt-0.5">{organization}</p>
          </div>
        </div>

        {isCurrent ? (
          <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-500/15 to-emerald-400/10 border border-emerald-400/30 text-emerald-300 shrink-0">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            />
            Ongoing
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 shrink-0">
            <FiClock className="text-[11px]" />
            Completed
          </span>
        )}
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-5">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </GlassCard>
  );
};

export default ExperienceCard;