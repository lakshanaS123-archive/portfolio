// src/components/certificates/CertificateCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiExternalLink, FiCalendar, FiHash } from "react-icons/fi";
import GlassCard from "../common/GlassCard.jsx";

const CertificateCard = ({ certificate, delay = 0 }) => {
  const {
    title,
    organization,
    issueDate,
    credentialId,
    category,
    skills,
    credentialUrl,
  } = certificate;

  return (
    <GlassCard delay={delay} className="group p-6 flex flex-col h-full">
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
          <FiAward className="text-purple-300 text-xl" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
          {category}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="text-white font-semibold text-base leading-snug mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{organization}</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1.5">
            <FiCalendar className="text-sm" />
            {issueDate}
          </div>
          {credentialId && (
            <div className="flex items-center gap-1.5">
              <FiHash className="text-sm" />
              {credentialId}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-white/5">
        <motion.a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 text-xs font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2.5 rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all"
        >
          View Certificate <FiExternalLink className="text-[11px]" />
        </motion.a>
      </div>
    </GlassCard>
  );
};

export default CertificateCard;