"use client";

import { motion } from "framer-motion";

const Logo = () => {
  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: (i: number) => ({
      scaleY: 1,
      transition: {
        duration: 0.3,
        delay: i * 0.15,
      },
    }),
  };

  const curveVariants = {
    hidden: { pathLength: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      transition: {
        duration: 0.5,
        delay: 0.6 + i * 0.2,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transform-gpu"
    >
      {/* Vertical Lines */}
      <motion.rect
        x="20"
        y="20"
        width="2"
        height="40"
        fill="white"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        custom={0}
        style={{ transformOrigin: "top" }}
      />
      <motion.rect
        x="39"
        y="20"
        width="2"
        height="40"
        fill="white"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{ transformOrigin: "top" }}
      />
      <motion.rect
        x="58"
        y="20"
        width="2"
        height="40"
        fill="white"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        custom={2}
        style={{ transformOrigin: "top" }}
      />

      {/* Curved Lines */}
      <motion.path
        d="M 22 30 C 22 30, 39 25, 39 30"
        stroke="white"
        strokeWidth="2"
        fill="none"
        variants={curveVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      />
      <motion.path
        d="M 22 40 C 22 40, 39 35, 39 40"
        stroke="white"
        strokeWidth="2"
        fill="none"
        variants={curveVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      />
      <motion.path
        d="M 22 50 C 22 50, 39 45, 39 50"
        stroke="white"
        strokeWidth="2"
        fill="none"
        variants={curveVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      />
    </motion.svg>
  );
};

export default Logo;
