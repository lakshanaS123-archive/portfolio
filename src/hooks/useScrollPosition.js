// src/hooks/useScrollPosition.js
import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {}, []);

  return scrollPosition;
};

export default useScrollPosition;