// src/pages/Certificates.jsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle.jsx";
import CertificateGrid from "../components/certificates/CertificateGrid.jsx";
import CertificateFilter from "../components/certificates/CertificateFilter.jsx";
import { certificates, certificateCategories } from "../data/certificates.js";

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCertificates = useMemo(() => {
    return certificates.filter((c) => {
      const matchesCategory =
        activeCategory === "All" || c.category === activeCategory;
      const query = search.toLowerCase();
      const matchesSearch =
        c.title.toLowerCase().includes(query) ||
        c.organization.toLowerCase().includes(query) ||
        c.skills.some((s) => s.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

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
            Achievements
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-3">
            Professional Certifications
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Courses, credentials, and certifications I've earned while
            building my skills across development, cloud, and AI.
          </p>
        </motion.div>

        <section>
          <SectionTitle
            eyebrow="Browse"
            title="All Certificates"
            align="left"
          />

          <CertificateFilter
            categories={certificateCategories}
            active={activeCategory}
            onChange={setActiveCategory}
            search={search}
            onSearchChange={setSearch}
          />

          <CertificateGrid
            certificates={filteredCertificates}
            emptyMessage="No certificates match your search or filter."
          />
        </section>
      </div>
    </div>
  );
};

export default Certificates;