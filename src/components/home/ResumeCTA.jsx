// src/components/home/ResumeCTA.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import GlassCard from "../common/GlassCard.jsx";
import Button from "../common/Button.jsx";

const ResumeCTA = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 py-24">
      <GlassCard className="relative overflow-hidden p-10 md:p-16 text-center">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-2xl md:text-3xl font-semibold text-white mb-3"
        >
          Want the full picture?
        </motion.h3>
        <p className="relative text-gray-400 text-sm md:text-base max-w-md mx-auto mb-8">
          Download my resume for a detailed overview of my experience,
          projects, and technical skills.
        </p>
        <div className="relative flex justify-center">
          <Button href="/resume.pdf" target="_blank" icon={FiDownload}>
            Download Resume
          </Button>
        </div>
      </GlassCard>
    </section>
  );
};

export default ResumeCTA;