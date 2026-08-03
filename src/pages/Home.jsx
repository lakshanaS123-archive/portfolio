// src/pages/Home.jsx

import React from "react";

import Hero from "../components/home/Hero.jsx";
import QuickStats from "../components/home/QuickStats.jsx";
import About from "../components/home/About.jsx";
import Skills from "../components/home/Skills.jsx";
import TechStack from "../components/home/TechStack.jsx";
import Education from "../components/home/Education.jsx";
import ResumeCTA from "../components/home/ResumeCTA.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <QuickStats />
      <About />
      <Skills />
      <TechStack />
      <Education />
      <ResumeCTA />
    </>
  );
};

export default Home;