// src/hooks/useTheme.js
import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {}, []);

  return { theme, setTheme };
};

export default useTheme;