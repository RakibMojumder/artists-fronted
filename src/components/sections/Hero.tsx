"use client";

import { motion, AnimatePresence } from "framer-motion";
import NumberedContent from "../NumberedContent";
import AnimatedButton from "../AnimatedButton";
import { textChild, textContainer } from "@/animation/textAnimation";

interface HeroProps {
  startAnimation: boolean;
}

const Hero = ({ startAnimation }: HeroProps) => {
  const bottomSection = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.section
      className={`
        transform transition-all duration-1000 delay-500
        ${
          startAnimation
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }
      `}
      initial={{ opacity: 0, y: 50 }}
      animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
    >
      <div className="container h-screen flex flex-col">
        <div className="flex-1 flex items-center">
          <AnimatePresence>
            {startAnimation && (
              <motion.h1
                className="text-7xl md:text-8xl font-semibold w-2/3 flex flex-col gap-4 leading-[1.2]"
                variants={textContainer}
                initial="hidden"
                animate="visible"
              >
                <div>
                  <motion.span
                    variants={textChild}
                    className="inline-block mr-[1rem]"
                  >
                    Crafting
                  </motion.span>
                  <motion.span
                    variants={textChild}
                    className="inline-block mr-[1rem] animate-gradient bg-gradient-text pb-2"
                  >
                    Digital
                  </motion.span>
                </div>
                <motion.span variants={textChild} className="inline-block">
                  Experiences
                </motion.span>
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          className="grid grid-cols-2 pb-10"
          variants={bottomSection}
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
        >
          <div>
            <NumberedContent />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-medium max-w-[330px]">
              We build engaging websites, brands &amp; innovative e-commerce
              solutions.
            </p>
            <div>
              <AnimatedButton
                text="Case Studies"
                className="text-2xl bg-[#545CFF] text-white py-4 px-8 border-none hover:scale-105 duration-300"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
