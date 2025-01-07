"use client";

import { textChild, textContainer } from "@/animation/textAnimation";
import sectionBg from "../../../public/section-bg.svg";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Diagonal stripes background */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url(${sectionBg.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />

      <div className="h-full w-full flex justify-between items-center absolute top-0 left-0 z-10">
        <div className="h-full w-64 bg-white to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_right,black,transparent)]"></div>
        <div className="h-full w-64 bg-white to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_left,black,transparent)]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <motion.h1
          className="text-7xl font-semibold tracking-tight leading-[100px]"
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span className="inline-block" variants={textChild}>
            Crafting digital
          </motion.span>
          <br />
          <motion.span
            variants={textChild}
            className="inline-block animate-gradient bg-gradient-text"
          >
            experiences
          </motion.span>
          <br />
          <motion.span className="inline-block" variants={textChild}>
            since 2004
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
};

export default Experience;
