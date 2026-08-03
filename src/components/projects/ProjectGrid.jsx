// src/components/projects/ProjectGrid.jsx
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard.jsx";

const ProjectGrid = ({ projects, onOpen, emptyMessage = "No projects found." }) => {
  if (!projects.length) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-sm">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={project} onOpen={onOpen} delay={i * 0.05} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGrid;