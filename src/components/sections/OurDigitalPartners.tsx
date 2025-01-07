"use client";

import { TextEffect } from "@/animation/TextEffect";
import { motion } from "framer-motion";
import AnimatedCounter from "../AnimatedCounter";

const OurDigitalPartners = () => {
  return (
    <section className="container py-32 grid grid-cols-2 gap-10">
      <div>
        <div className="space-y-8">
          <TextEffect
            per="word"
            preset="slide"
            className="text-5xl font-medium space-x-1"
          >
            Your Digital Partner
          </TextEffect>
          <TextEffect as="p" per="line" preset="slide" className="text-xl">
            {`We partner with companies of all sizes to solve
             complex business challenges and define their
             digital strategies and objectives that deliver 
             results. We help bring ideas to life and create
              brands, websites & digital products that work.`}
          </TextEffect>
        </div>

        <div className="flex items-center gap-x-5 mt-24">
          <div className="flex items-center">
            <div className="size-16 bg-neutral-200 rounded-full"></div>
            <div className="size-16 bg-gray-400 rounded-full -ml-6"></div>
            <div className="size-16 bg-red-400 rounded-full -ml-6"></div>
          </div>
          <p className="text-neutral-600 text-xl">
            Brands who&apos;ve trusted us...
          </p>
        </div>
      </div>

      <div className="flex justify-end ">
        <motion.div
          viewport={{ once: true }}
          initial={{ height: 0 }}
          whileInView={{
            height: "fit-content",
            transition: {
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
          className="bg-[#ECF1F4] rounded-3xl mt-20 w-full overflow-hidden origin-top"
        >
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.45,
                delay: 0.6,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            className="px-10 py-14 flex items-center divide-x"
          >
            <div className="p-5 space-y-8 flex-1 text-center">
              <AnimatedCounter
                end={20}
                delay={0.6}
                className="text-5xl font-semibold"
              />
              <p className="text-xl">Years on the market</p>
            </div>
            <div className="p-5 space-y-8 flex-1 text-center">
              <AnimatedCounter
                end={500}
                delay={0.6}
                className="text-5xl font-semibold"
              />
              <p className="text-xl">Satisfied Customers</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurDigitalPartners;
