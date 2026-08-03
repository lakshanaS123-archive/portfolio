// src/components/home/About.jsx

import React from "react";
import {
  FiCpu,
  FiCloud,
  FiCode,
  FiTrendingUp,
} from "react-icons/fi";

import SectionTitle from "../common/SectionTitle.jsx";
import GlassCard from "../common/GlassCard.jsx";
import { profile } from "../../data/profile";

const strengths = [
  {
    icon: FiCode,
    title: "Software Development",
    desc: "Building responsive web applications using React, JavaScript, Python and MySQL.",
  },
  {
    icon: FiCloud,
    title: "Cloud & IoT",
    desc: "Exploring cloud technologies, IoT systems and smart automation through academic and personal projects.",
  },
  {
    icon: FiCpu,
    title: "Problem Solver",
    desc: "Enjoy breaking down real-world problems into practical software solutions with clean design.",
  },
  {
    icon: FiTrendingUp,
    title: "Continuous Learner",
    desc: "Always learning new technologies through projects, internships, ProtoSem and self-study.",
  },
];

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">

      <SectionTitle
        eyebrow="About Me"
        title="Passionate about building technology that solves real problems"
        subtitle="A glimpse into my journey, interests and aspirations as a software developer."
      />

      <div className="grid md:grid-cols-2 gap-6 items-start">

        <GlassCard className="p-8 md:p-10">

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Hi! I'm <span className="text-purple-300 font-semibold">{profile.name}</span>,
            an {profile.department} undergraduate at{" "}
            <span className="text-white">{profile.college}</span>.
            I'm passionate about software development and enjoy transforming
            ideas into practical, user-friendly applications.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base mt-5">
            My interests include full-stack web development, cloud computing,
            IoT, artificial intelligence and database systems. Through academic
            projects, internships and ProtoSem, I've gained experience building
            applications that combine thoughtful design with efficient
            implementation.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base mt-5">
            My goal is to grow into a skilled software engineer who creates
            reliable, scalable and impactful technology while continuously
            learning modern tools, collaborating with teams and solving
            meaningful real-world challenges.
          </p>

        </GlassCard>

        <div className="grid sm:grid-cols-2 gap-5">

          {strengths.map((item, index) => (
            <GlassCard
              key={item.title}
              delay={index * 0.1}
              className="p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-4">
                <item.icon className="text-purple-300 text-xl" />
              </div>

              <h3 className="text-white font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </GlassCard>
          ))}

        </div>

      </div>

    </section>
  );
};

export default About;