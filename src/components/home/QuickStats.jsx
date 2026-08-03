// src/components/home/QuickStats.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiFolder, FiAward, FiBriefcase, FiCpu } from "react-icons/fi";
import GlassCard from "../common/GlassCard.jsx";

const stats = [
  { icon: FiFolder, value: "3", label: "Projects Built" },
  { icon: FiAward, value: "8", label: "Certificates Earned" },
  { icon: FiBriefcase, value: "2", label: "Internships Completed" },
  { icon: FiCpu, value: "10+", label: "Technologies Used" },
];

const QuickStats = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <GlassCard key={stat.label} delay={i * 0.1} className="p-6 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-4"
            >
              <stat.icon className="text-purple-300 text-xl" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {stat.value}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              {stat.label}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default QuickStats;