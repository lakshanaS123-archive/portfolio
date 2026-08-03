// src/components/common/Timeline.jsx
import React from "react";
import { motion } from "framer-motion";

const Timeline = ({ items = [] }) => {
  return (
    <div className="relative pl-8 md:pl-10">
      <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/60 via-blue-500/40 to-transparent" />

      <div className="flex flex-col gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-8 md:-left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 shadow-[0_0_12px_rgba(139,92,246,0.6)] ring-4 ring-[#0a0a0f]" />

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 md:p-6 hover:border-purple-400/30 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h4 className="text-white font-semibold text-base md:text-lg">
                  {item.title}
                </h4>
                <span className="text-xs text-gray-500 font-medium">
                  {item.duration}
                </span>
              </div>
              <p className="text-purple-300 text-sm mb-2">{item.subtitle}</p>
              {item.description && (
                <p className="text-gray-400 text-sm leading-relaxed mb-2">
                  {item.description}
                </p>
              )}
              {item.meta && (
                <p className="text-gray-500 text-xs">{item.meta}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;