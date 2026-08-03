// src/components/projects/ProjectFilter.jsx
import React from "react";
import { motion } from "framer-motion";

const ProjectFilter = ({ categories, active, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="relative px-4 py-2 text-sm rounded-full transition-colors duration-200"
          >
            {isActive && (
              <motion.span
                layoutId="filterPill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/25 to-blue-500/25 border border-purple-400/30"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilter;