"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface ContentItem {
  number: string;
  text: string;
}

const contents: ContentItem[] = [
  {
    number: "20+",
    text: "Years of Experience in Digital Innovation",
  },
  {
    number: "500+",
    text: "Successful Projects Delivered Worldwide",
  },
  {
    number: "100%",
    text: "Client Satisfaction Rate on Every Project",
  },
  {
    number: "24/7",
    text: "Dedicated Support for Our Clients",
  },
];

const NumberedContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentVariants = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-8">
      <div className="font-medium text-lg size-16 bg-neutral-900 text-white inline-flex justify-center items-center rounded-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex + "-number"}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {contents[currentIndex].number}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="text-xl max-w-[400px] leading-tight text-neutral-400 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex + "-text"}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {contents[currentIndex].text}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NumberedContent;
