// src/components/common/Button.jsx
import React from "react";
import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.5)]",
  outline:
    "bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/30",
  ghost: "text-gray-300 hover:text-white hover:bg-white/5",
};

const Button = ({
  children,
  onClick,
  variant = "primary",
  icon: Icon,
  href,
  target,
  type = "button",
  className = "",
  ...props
}) => {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="text-base" />}
      {children}
    </>
  );

  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      href={href}
      target={target}
      rel={href ? "noopener noreferrer" : undefined}
      type={!href ? type : undefined}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...props}
    >
      {content}
    </MotionTag>
  );
};

export default Button;