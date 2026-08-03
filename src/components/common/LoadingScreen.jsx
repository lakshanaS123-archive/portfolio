// src/components/common/LoadingScreen.jsx
import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f]"
    >
      <div className="relative w-14 h-14">
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-purple-500/30 border-t-purple-400"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <motion.span
          className="absolute inset-2 rounded-full border-2 border-blue-500/30 border-t-blue-400"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-sm tracking-[0.2em] uppercase text-gray-500"
      >
        Loading Experience
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;