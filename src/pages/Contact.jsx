// src/pages/Contact.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import SectionTitle from "../components/common/SectionTitle.jsx";
import GlassCard from "../components/common/GlassCard.jsx";
import { profile } from "../data/profile";

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-28">

      <SectionTitle
        eyebrow="Get In Touch"
        title="Let's Connect"
        subtitle="I'm always open to internships, collaborations, projects and networking opportunities."
      />

      <div className="grid md:grid-cols-2 gap-8 mt-12">

        {/* Contact Details */}

        <GlassCard className="p-8">

          <h2 className="text-2xl font-semibold text-white mb-8">
            Contact Information
          </h2>

          <div className="space-y-7">

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition"
            >
              <FiMail className="text-xl" />
              <span>{profile.email}</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition"
            >
              <FiGithub className="text-xl" />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition"
            >
              <FiLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>

            <div className="flex items-center gap-4 text-gray-300">
              <FiMapPin className="text-xl" />
              <span>{profile.location}</span>
            </div>

          </div>

        </GlassCard>

        {/* Contact Form */}

        <GlassCard className="p-8">

          <h2 className="text-2xl font-semibold text-white mb-8">
            Send a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-400"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-400 resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold"
            >
              Send Message
            </motion.button>

          </form>

        </GlassCard>

      </div>

    </section>
  );
};

export default Contact;