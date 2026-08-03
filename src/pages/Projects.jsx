// src/pages/Projects.jsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle.jsx";
import ProjectGrid from "../components/projects/ProjectGrid.jsx";
import ProjectFilter from "../components/projects/ProjectFilter.jsx";
import SearchBar from "../components/projects/SearchBar.jsx";
import ProjectModal from "../components/projects/ProjectModal.jsx";
import { projects, categories } from "../data/projects.js";

const Projects = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = useMemo(
    () => projects.filter((p) => p.featured),
    []
  );

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-3">
            Projects
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            A collection of things I've built — from IoT dashboards to
            immersive VR experiences and intelligent systems.
          </p>
        </motion.div>

        {featuredProjects.length > 0 && (
          <section className="mb-20">
            <SectionTitle
              eyebrow="Highlighted Work"
              title="Featured Projects"
              align="left"
            />
            <ProjectGrid
              projects={featuredProjects}
              onOpen={setSelectedProject}
            />
          </section>
        )}

        <section>
          <SectionTitle eyebrow="Browse" title="All Projects" align="left" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <ProjectFilter
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <ProjectGrid
            projects={filteredProjects}
            onOpen={setSelectedProject}
            emptyMessage="No projects match your search or filter."
          />
        </section>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;