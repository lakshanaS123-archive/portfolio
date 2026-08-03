// src/components/common/SectionTitle.jsx
import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ eyebrow, title, subtitle, align = "center" }) => {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${alignment} gap-3 mb-14`}
    >
      {eyebrow && (
        <span className="text-xs font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;