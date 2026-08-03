// src/layouts/PageWrapper.jsx
import React from "react";
import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return <motion.div>{children}</motion.div>;
};

export default PageWrapper;