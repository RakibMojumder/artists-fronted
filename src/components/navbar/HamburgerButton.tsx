"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface HamburgerButtonProps {
  onClick: () => void;
}

const HamburgerButton = ({ onClick }: HamburgerButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const lineVariants = {
    initial: {
      scaleX: 1,
      y: 0,
      opacity: 1,
    },
    hover: (custom: number) => ({
      scaleX: 1.2,
      y: -30,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9],
        delay: custom * 0.15,
      },
    }),
    appear: (custom: number) => ({
      y: [30, 0],
      opacity: [0, 1],
      scaleX: [1.2, 1],
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
        delay: custom * 0.15,
      },
    }),
  };

  const handleHover = () => {
    setIsHovered(true);
    setHasInteracted(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 550);
  };

  return (
    <motion.div
      className="size-10 flex flex-col justify-center items-center gap-y-1 cursor-pointer border border-black rounded-full overflow-hidden"
      onHoverStart={handleHover}
      onClick={onClick}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        className="w-3.5 h-0.5 bg-black block origin-center"
        initial="initial"
        animate={
          hasInteracted && isHovered
            ? "hover"
            : hasInteracted
            ? "appear"
            : "initial"
        }
        variants={lineVariants}
        custom={0}
      />
      <motion.span
        className="w-3.5 h-0.5 bg-black block origin-center"
        initial="initial"
        animate={
          hasInteracted && isHovered
            ? "hover"
            : hasInteracted
            ? "appear"
            : "initial"
        }
        variants={lineVariants}
        custom={1}
      />
    </motion.div>
  );
};

export default HamburgerButton;
