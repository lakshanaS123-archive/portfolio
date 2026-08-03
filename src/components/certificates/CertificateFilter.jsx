// src/components/certificates/CertificateFilter.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";

const CertificateFilter = ({
  categories,
  active,
  onChange,
  search,
  onSearchChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
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
                  layoutId="certFilterPill"
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

      <div className="relative w-full md:w-80">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search certificates..."
          className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 backdrop-blur-xl focus:outline-none focus:border-purple-400/40 focus:bg-white/[0.07] transition-all duration-300"
        />
        {search && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <FiX className="text-sm" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CertificateFilter;