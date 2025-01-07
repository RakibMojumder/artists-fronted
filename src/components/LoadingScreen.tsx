"use client";

import { useEffect, useState } from "react";
import LoadingLogo from "./LoadingLogo";

interface Props {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete();
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [isLoading, onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 bg-black z-50 transform transition-transform duration-1000 ease-in-out pointer-events-none ${
        isLoading ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ position: "fixed", willChange: "transform" }}
    >
      <div className="h-full w-full flex items-center justify-center">
        <LoadingLogo />
      </div>
    </div>
  );
};

export default LoadingScreen;
