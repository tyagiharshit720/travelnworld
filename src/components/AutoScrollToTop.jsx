// src/components/AutoScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AutoScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when path changes
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default AutoScrollToTop;
