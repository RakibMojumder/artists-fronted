import { useEffect } from "react";

export const useScrollLock = (lock: boolean) => {
  useEffect(() => {
    if (lock) {
      // Store current scroll position
      const scrollY = window.scrollY;

      // Add styles to prevent scrolling
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll"; // Prevent layout shift
    } else {
      // Get scroll position from body top
      const scrollY = document.body.style.top;

      // Remove styles
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";

      // Restore scroll position
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      // Cleanup styles on unmount
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
    };
  }, [lock]);
};
