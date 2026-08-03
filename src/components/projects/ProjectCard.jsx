// src/components/projects/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import GlassCard from "../common/GlassCard.jsx";

const ProjectCard = ({ project, onOpen, delay = 0 }) => {
  const { title, description, tech, github, demo, featured } = project;

  return (
    <GlassCard
      delay={delay}
      className="group p-6 flex flex-col h-full cursor-pointer"
      onClick={() => onOpen(project)}
    >
      {featured && (
        <span className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 text-purple-300">
          <FiStar className="text-[11px]" /> Featured
        </span>
      )}

      <div className="flex-1">
        <h3 className="text-white font-semibold text-lg pr-16 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-5">
        {tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300"
          >
            {t}
          </span>
        ))}
        {tech.length > 4 && (
          <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-500">
            +{tech.length - 4}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/5">
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          whileHover={{ y: -2 }}
          className="flex items-center gap-2 text-xs font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-2 rounded-lg transition-all"
        >
          <FiGithub /> Code
        </motion.a>
        {demo ? (
          <motion.a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-xs font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 px-3.5 py-2 rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all"
          >
            <FiExternalLink /> Live Demo
          </motion.a>
        ) : (
          <span className="flex items-center gap-2 text-xs font-medium text-gray-600 bg-white/5 border border-white/5 px-3.5 py-2 rounded-lg cursor-not-allowed">
            <FiExternalLink /> No Demo
          </span>
        )}
      </div>
    </GlassCard>
  );
};

export default ProjectCard;