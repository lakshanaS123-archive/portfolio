// src/components/protosem/WeekCard.jsx

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiChevronDown,
  FiGithub,
  FiExternalLink,
  FiCheckCircle,
  FiAward,
  FiTool,
  FiAlertCircle,
  FiCheckSquare,
  FiFileText,
  FiImage,
} from "react-icons/fi";
import GlassCard from "../common/GlassCard.jsx";
import StatusBadge from "./StatusBadge.jsx";

const Block = ({ icon: Icon, title, children }) => (
  <div>
    <div className="flex items-center gap-2 mb-3">
      <Icon className="text-purple-300 text-sm" />
      <h4 className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
        {title}
      </h4>
    </div>
    {children}
  </div>
);

const TagList = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span
        key={item}
        className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300"
      >
        {item}
      </span>
    ))}
  </div>
);

const WeekCard = ({ entry, delay = 0 }) => {
  const [open, setOpen] = useState(false);

  const {
    week,
    date,
    title,
    status,
    overview,
    tasksCompleted = [],
    skillsLearned = [],
    technologies = [],
    challenges,
    solution,
    github,
    demo,
    images = [],
    notes,
  } = entry;

  return (
    <GlassCard delay={delay} hover={false} className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
            <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              W{week}
            </span>
          </div>

          <div className="min-w-0">
            <h3 className="text-white font-semibold text-sm md:text-base truncate">
              {title}
            </h3>

            <p className="text-gray-500 text-xs mt-1">{date}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <StatusBadge status={status} />

          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400"
          >
            <FiChevronDown />
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 pt-2 border-t border-white/5 flex flex-col gap-7">

              <Block icon={FiFileText} title="Overview">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {overview}
                </p>
              </Block>

              {tasksCompleted.length > 0 && (
                <Block icon={FiCheckSquare} title="Tasks Completed">
                  <ul className="flex flex-col gap-2">
                    {tasksCompleted.map((task, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-400 text-sm"
                      >
                        <FiCheckCircle className="text-emerald-400 mt-0.5 shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </Block>
              )}

              <div className="grid sm:grid-cols-2 gap-7">
                {skillsLearned.length > 0 && (
                  <Block icon={FiAward} title="Skills Learned">
                    <TagList items={skillsLearned} />
                  </Block>
                )}

                {technologies.length > 0 && (
                  <Block icon={FiTool} title="Technologies Used">
                    <TagList items={technologies} />
                  </Block>
                )}
              </div>

              {(challenges || solution) && (
                <div className="grid sm:grid-cols-2 gap-7">

                  {challenges && (
                    <Block icon={FiAlertCircle} title="Challenges">
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {challenges}
                      </p>
                    </Block>
                  )}

                  {solution && (
                    <Block icon={FiCheckCircle} title="Solution">
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {solution}
                      </p>
                    </Block>
                  )}

                </div>
              )}

              {images.length > 0 && (
                <Block icon={FiImage} title="Screenshots">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {images.map((img, i) => (
                      <div
                        key={i}
                        className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5"
                      >
                        <img
                          src={img}
                          alt={`${title} screenshot ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </Block>
              )}

              {notes && (
                <Block icon={FiFileText} title="Notes">
                  <p className="text-gray-400 text-sm leading-relaxed italic">
                    {notes}
                  </p>
                </Block>
              )}

              {(github || demo) && (
                <div className="flex items-center gap-3 pt-2">

                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-xl transition-all"
                    >
                      <FiGithub />
                      Code
                    </a>
                  )}

                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2.5 rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )}

                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
};

export default WeekCard;