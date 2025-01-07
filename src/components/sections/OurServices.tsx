"use client";

import { TextEffect } from "@/animation/TextEffect";
import AnimatedButton from "../AnimatedButton";
import { motion } from "framer-motion";

const OurServices = () => {
  const services = [
    "E-Commerce",
    "Website Design",
    "Web Development",
    "Digital Products",
    "Brand Identities",
    "SEO Optimisation",
  ];

  return (
    <section className="container py-20">
      <div className="grid grid-cols-12 gap-12 items-center">
        <div className="space-y-8 col-span-5">
          <div>
            <TextEffect
              as="p"
              preset="slide"
              per="word"
              className="text-4xl md:text-5xl font-bold mb-6 space-x-1"
            >
              We&apos;re good at
            </TextEffect>
            <p className="text-lg text-muted-foreground mb-4">Services</p>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <TextEffect
                key={index}
                as="h3"
                preset="slide"
                per="line"
                className="text-2xl md:text-3xl font-semibold transition-colors cursor-pointer"
              >
                {service}
              </TextEffect>
            ))}
          </div>
        </div>

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
          className="col-span-7 bg-primary text-white rounded-3xl origin-top"
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
            className="p-12"
          >
            <h3 className="text-4xl leading-[50px] font-semibold mb-6">
              Let&apos;s start with a conversation about how we can help you!
              Get in touch, we&apos;re a nice bunch.
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <AnimatedButton
                text="Let's talk"
                className="px-12 py-4 bg-white text-xl rounded-full font-medium border-none hover:scale-105 transition-all duration-300"
              />
              <button className="px-8 py-3 border border-white rounded-full font-medium">
                0207 112 82 85
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
