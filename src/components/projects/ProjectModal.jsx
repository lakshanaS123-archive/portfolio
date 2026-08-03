// src/components/projects/ProjectModal.jsx

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiX,
  FiGithub,
  FiExternalLink,
  FiStar,
} from "react-icons/fi";

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-center justify-center px-6 bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0f0f16]/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-8 max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Close"
            >
              <FiX />
            </button>

            {project.featured && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 text-purple-300 mb-4">
                <FiStar className="text-[11px]" />
                Featured Project
              </span>
            )}

            <h3 className="text-2xl font-semibold text-white pr-10 mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="mb-8">
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-3">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 rounded-xl transition-all"
              >
                <FiGithub />
                View Code
              </a>

              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-3 rounded-xl shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
              ) : (
                <span className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-gray-600 bg-white/5 border border-white/5 px-4 py-3 rounded-xl cursor-not-allowed">
                  <FiExternalLink />
                  No Demo
                </span>
              )}

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;