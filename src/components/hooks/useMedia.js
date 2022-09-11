import React, { useEffect, useState } from "react";
import { breakpoints } from "../../constants";

const useMedia = (query) => {
  const listener = window.matchMedia(query);
  const [matches, setMatch] = useState(listener.matches);

  useEffect(() => {
    const onChange = ({ matches }) => setMatch(matches);
    listener.addEventListener("change", onChange);

    return () => listener.removeEventListener("change", onChange);
  }, []);

  return matches;
};

export const useDesktop = () => useMedia(breakpoints.desktop);
export const useTablet = () => useMedia(breakpoints.tablet);
export const useMobile = () => useMedia(breakpoints.mobile);

export const useMedias = () => {
  const isDesktop = useDesktop();
  const isTablet = useTablet();
  const isMobile = useMobile();
  return {
    isDesktop,
    isTablet,
    isMobile,
  };
};
