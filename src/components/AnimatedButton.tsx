"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const AnimatedButton = ({
  text,
  className = "",
  onClick,
}: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const textVariants = {
    initial: {
      y: 0,
    },
    hover: {
      y: -50,
      transition: {
        duration: 0.25,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    appear: {
      y: [50, 0],
      transition: {
        duration: 0.25,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const handleHover = () => {
    setIsHovered(true);
    setHasInteracted(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 150);
  };

  return (
    <motion.button
      className={cn(
        "relative px-6 py-2 border border-black bg-white text-black rounded-full overflow-hidden",
        className
      )}
      onHoverStart={handleHover}
      onClick={onClick}
    >
      <motion.span
        className="block font-medium"
        initial="initial"
        animate={
          hasInteracted && isHovered
            ? "hover"
            : hasInteracted
            ? "appear"
            : "initial"
        }
        variants={textVariants}
      >
        {text}
      </motion.span>
    </motion.button>
  );
};

export default AnimatedButton;
