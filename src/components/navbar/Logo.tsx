"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Logo = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showInitialLogo, setShowInitialLogo] = useState(true);
  const [showLines, setShowLines] = useState(false);
  const [showSecondLines, setShowSecondLines] = useState(false);
  const [showFinalLogo, setShowFinalLogo] = useState(false);

  const curvedLineVariants = {
    initial: { opacity: 1, x: 0 },
    animate: { opacity: 1, x: 0 },
    exit: {
      opacity: 0,
      x: 15,
      transition: {
        duration: 0.3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const secondLineVariants = {
    initial: { height: 0 },
    animate: {
      height: 32,
      transition: {
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const finalCurvedVariants = {
    initial: { opacity: 0, x: -15 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const startAnimation = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Reset states if needed
    setShowFinalLogo(false);
    setShowInitialLogo(true);
    await new Promise((resolve) => setTimeout(resolve, 30));

    // Start animation sequence
    setShowInitialLogo(false);
    await new Promise((resolve) => setTimeout(resolve, 300));

    setShowLines(true);
    await new Promise((resolve) => setTimeout(resolve, 50));

    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");

    if (line1) line1.style.height = "0";
    await new Promise((resolve) => setTimeout(resolve, 200));
    if (line2) line2.style.height = "0";
    await new Promise((resolve) => setTimeout(resolve, 200));
    if (line3) line3.style.height = "0";
    await new Promise((resolve) => setTimeout(resolve, 200));

    setShowLines(false);
    setShowSecondLines(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setShowSecondLines(false);
    setShowFinalLogo(true);
    await new Promise((resolve) => setTimeout(resolve, 300));

    setIsAnimating(false);
  };

  return (
    <div className="cursor-pointer" onMouseEnter={startAnimation}>
      <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.06 32">
        <AnimatePresence mode="wait">
          {showInitialLogo && (
            <motion.g
              key="initial-logo"
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <rect id="line1-init" x="12.31" width="6.78" height="32" />
              <motion.path
                key="curve1-init"
                d="M0 32L6.78 32L12.31 0L5.53 0L0 32"
                variants={curvedLineVariants}
              />
              <rect id="line2-init" x="25.88" width="6.78" height="32" />
              <motion.path
                key="curve2-init"
                d="M32.66 32L39.44 32L44.97 0L38.19 0L32.66 32"
                variants={curvedLineVariants}
              />
              <rect id="line3-init" x="44.97" width="6.78" height="32" />
              <motion.path
                key="curve3-init"
                d="M57.28 0L51.75 32L58.53 32L64.06 0L57.28 0"
                variants={curvedLineVariants}
              />
            </motion.g>
          )}

          {showLines && (
            <motion.g key="lines">
              <rect
                id="line1"
                x="12.31"
                y="0"
                width="6.78"
                height="32"
                style={{
                  transformOrigin: "bottom",
                  transition: "height 0.6s cubic-bezier(0.2, 0.65, 0.3, 0.9)",
                }}
              />
              <rect
                id="line2"
                x="25.88"
                y="0"
                width="6.78"
                height="32"
                style={{
                  transformOrigin: "bottom",
                  transition: "height 0.6s cubic-bezier(0.2, 0.65, 0.3, 0.9)",
                }}
              />
              <rect
                id="line3"
                x="44.97"
                y="0"
                width="6.78"
                height="32"
                style={{
                  transformOrigin: "bottom",
                  transition: "height 0.6s cubic-bezier(0.2, 0.65, 0.3, 0.9)",
                }}
              />
            </motion.g>
          )}

          {showSecondLines && (
            <motion.g key="second-lines">
              <motion.rect
                id="line1-second"
                x="12.31"
                y="0"
                width="6.78"
                variants={secondLineVariants}
                initial="initial"
                animate="animate"
                style={{ transformOrigin: "top" }}
                transition={{ delay: 0 }}
              />
              <motion.rect
                id="line2-second"
                x="25.88"
                y="0"
                width="6.78"
                variants={secondLineVariants}
                initial="initial"
                animate="animate"
                style={{ transformOrigin: "top" }}
                transition={{ delay: 0.2 }}
              />
              <motion.rect
                id="line3-second"
                x="44.97"
                y="0"
                width="6.78"
                variants={secondLineVariants}
                initial="initial"
                animate="animate"
                style={{ transformOrigin: "top" }}
                transition={{ delay: 0.4 }}
              />
            </motion.g>
          )}

          {showFinalLogo && (
            <motion.g key="final-logo" initial="initial" animate="animate">
              <rect id="line1" x="12.31" width="6.78" height="32" />
              <motion.path
                d="M0 32L6.78 32L12.31 0L5.53 0L0 32"
                variants={finalCurvedVariants}
              />
              <rect id="line2" x="25.88" width="6.78" height="32" />
              <motion.path
                d="M32.66 32L39.44 32L44.97 0L38.19 0L32.66 32"
                variants={finalCurvedVariants}
              />
              <rect id="line3" x="44.97" width="6.78" height="32" />
              <motion.path
                d="M57.28 0L51.75 32L58.53 32L64.06 0L57.28 0"
                variants={finalCurvedVariants}
              />
            </motion.g>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
};

export default Logo;
