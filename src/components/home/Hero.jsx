// src/components/home/Hero.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiArrowDown,
} from "react-icons/fi";

import Button from "../common/Button.jsx";
import { profile } from "../../data/profile";
import profPhoto from "../../assets/prof_photo.jpeg";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/25 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/25 rounded-full blur-[120px] animate-pulse" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:32px_32px]" />
      </div>

      {/* Main Hero Content */}
      <div className="max-w-5xl mx-auto text-center pt-40 md:pt-36 pb-24">

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-2xl scale-110" />

            {/* Photo */}
            <img
              src={profPhoto}
              alt="Lakshana S"
              className="relative w-36 h-36 md:w-44 md:h-44 object-cover rounded-full border-4 border-purple-400/40 shadow-[0_0_35px_rgba(168,85,247,0.35)]"
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base text-purple-300 font-medium tracking-wide mb-4"
        >
          👋 Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          <span className="text-white">
            {profile.name}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent"
        >
          {profile.tagline}
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-gray-400 text-base md:text-lg leading-8 max-w-3xl mx-auto"
        >
          {profile.bio}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Button
            href={profile.resume}
            target="_blank"
            icon={FiDownload}
            variant="primary"
          >
            Download Resume
          </Button>

          <Button
            href={profile.github}
            target="_blank"
            icon={FiGithub}
            variant="outline"
          >
            GitHub
          </Button>

          <Button
            href={profile.linkedin}
            target="_blank"
            icon={FiLinkedin}
            variant="outline"
          >
            LinkedIn
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <FiArrowDown className="text-2xl" />
      </motion.div>
    </section>
  );
};

export default Hero;