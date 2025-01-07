"use client";

import { motion } from "framer-motion";

const LoadingLogo = () => {
  const lineVariants = {
    hidden: { height: 0 },
    visible: (i: number) => ({
      height: 32,
      transition: {
        duration: 0.4,
        delay: i * 0.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0, x: -20 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      x: 0,
      transition: {
        pathLength: {
          duration: 0.8,
          delay: 1 + i * 0.3,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
        opacity: {
          duration: 0.01,
          delay: 1 + i * 0.3,
        },
        x: {
          duration: 0.8,
          delay: 1 + i * 0.3,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
      },
    }),
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64.06 32"
      className="w-20 h-10"
    >
      {/* Vertical Lines */}
      <motion.rect
        x="12.31"
        y="0"
        width="6.78"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        custom={0}
        fill="white"
        style={{ transformOrigin: "top" }}
      />
      <motion.rect
        x="25.88"
        y="0"
        width="6.78"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        custom={1}
        fill="white"
        style={{ transformOrigin: "top" }}
      />
      <motion.rect
        x="44.97"
        y="0"
        width="6.78"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        custom={2}
        fill="white"
        style={{ transformOrigin: "top" }}
      />

      {/* Curved Lines */}
      <motion.path
        d="M0 32L6.78 32L12.31 0L5.53 0L0 32"
        stroke="white"
        fill="white"
        strokeLinecap="square"
        variants={curveVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      />
      <motion.path
        d="M32.66 32L39.44 32L44.97 0L38.19 0L32.66 32"
        stroke="white"
        fill="white"
        strokeLinecap="square"
        variants={curveVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      />
      <motion.path
        d="M57.28 0L51.75 32L58.53 32L64.06 0L57.28 0"
        stroke="white"
        fill="white"
        strokeLinecap="square"
        variants={curveVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      />
    </motion.svg>
  );
};

export default LoadingLogo;
