// src/hooks/useOnScreen.js
import { useState, useEffect, useRef } from "react";

const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {}, []);

  return [ref, isVisible];
};

export default useOnScreen;