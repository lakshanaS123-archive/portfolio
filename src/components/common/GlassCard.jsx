// src/components/common/GlassCard.jsx
import React from "react";
import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
  hover = true,
  as = "div",
  delay = 0,
  ...props
}) => {
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={
        hover
          ? { y: -6, borderColor: "rgba(139,92,246,0.35)" }
          : undefined
      }
      className={`relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default GlassCard;