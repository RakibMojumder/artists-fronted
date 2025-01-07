"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { TextEffect } from "@/animation/TextEffect";
import { ArrowRight } from "lucide-react";

interface Service {
  name: string;
  caseStudy: {
    title: string;
    image: string;
  };
}

const services: Service[] = [
  {
    name: "Web Development",
    caseStudy: {
      title: "Alveena Website",
      image:
        "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/01_Alveena_Casa_London_Web_Design_New-250x250.jpg",
    },
  },
  {
    name: "UI/UX Design",
    caseStudy: {
      title: "Spotify Redesign",
      image:
        "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/01_Estate-Agency-Web-Design-London-250x250.jpg",
    },
  },
  {
    name: "Mobile Development",
    caseStudy: {
      title: "Nike Mobile App",
      image:
        "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/Fudli-Restaurant-Food-Order-System-250x250.jpg",
    },
  },
  {
    name: "Digital Marketing",
    caseStudy: {
      title: "Meta Campaign",
      image:
        "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/learning_featured-image-250x250.jpeg",
    },
  },
];

const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="py-32 relative bg-[#111111] overflow-hidden"
    >
      <div className="container">
        <TextEffect
          per="word"
          preset="slide"
          className="text-white text-xl space-x-[3px]"
        >
          Our team of experts can help you with...
        </TextEffect>

        <div className="relative">
          {services.map((service, index) => (
            <div key={index} className="relative mb-10 mt-6 last:mb-0">
              <motion.div
                className="cursor-pointer w-1/2"
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                  delay: index * 0.1,
                }}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
              >
                <motion.h3
                  className="text-5xl font-semibold text-white origin-left inline-block"
                  animate={{
                    scale: activeIndex === index ? 0.95 : 1,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                >
                  {service.name}
                </motion.h3>
              </motion.div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="absolute right-0 -top-3 flex items-center gap-4 w-1/2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                  >
                    <div className="text-right flex-1">
                      <h3 className="font-medium text-neutral-600">
                        Latest Case study
                      </h3>
                      <h1 className="text-2xl font-semibold text-white">
                        {service.caseStudy.title}
                      </h1>
                    </div>
                    <div className="relative size-16 flex-shrink-0">
                      <Image
                        src={service.caseStudy.image}
                        alt={service.caseStudy.title}
                        fill
                        className="object-contain rounded-full"
                      />
                    </div>
                    <ArrowRight size={40} className="text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="my-16 text-neutral-700 h-0.5 w-full"></div>

        <div className="flex justify-between items-end">
          <div className="space-y-8">
            <h1 className="text-5xl font-semibold text-primary">
              Creative Agency
            </h1>
            <p className="max-w-xl text-white text-2xl">
              We’re an award-winning creative agency based in London, focused on
              E-Commerce, Web Design London, Digital Products, Branding and SEO.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-white text-lg font-semibold inline-block px-12 py-3 border border-primary rounded-full">
              300 Projects
            </div>
            <div className="text-white text-lg font-semibold inline-block px-12 py-3 border border-primary rounded-full">
              15 Awards
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradients */}
      <div
        className="absolute -bottom-40 right-0 size-[600px] opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 75% 75%, #545cff 0%, transparent 50%)`,
        }}
      />
    </section>
  );
};

export default ServiceSection;
