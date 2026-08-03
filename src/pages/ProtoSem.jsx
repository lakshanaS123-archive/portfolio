// src/pages/ProtoSem.jsx

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle.jsx";
import JournalTimeline from "../components/protosem/JournalTimeline.jsx";
import { protosemJournal } from "../data/protosem.js";

const ProtoSem = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            ProtoSem Internship
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-3">
            My Learning Journey
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mt-5 leading-relaxed">
            This journal documents my six-month ProtoSem internship through
            weekly reflections, learning experiences, collaborative activities,
            technical projects and personal growth. Every week is recorded to
            showcase not only what I built, but also how I learned, adapted and
            developed as an engineering student.
          </p>

        </motion.div>

        <SectionTitle
          eyebrow="Weekly Progress"
          title="Engineering & Learning Journal"
          subtitle="A chronological record of activities, projects, teamwork, challenges and skills developed throughout the internship."
          align="left"
        />

        <JournalTimeline entries={protosemJournal} />

      </div>
    </div>
  );
};

export default ProtoSem;