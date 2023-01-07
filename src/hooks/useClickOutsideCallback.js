import React, { useEffect } from "react";

export default function useClickOutsideCallback(ref, callback, deps) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback(event);
    }
  }

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [deps, ref.current, callback]);
}
