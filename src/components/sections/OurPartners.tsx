"use client";

import { TextEffect } from "@/animation/TextEffect";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { companyPartners } from "@/data/companyPartners";
import Image from "next/image";

const OurPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + itemsPerView >= companyPartners.length ? 0 : prev + itemsPerView
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getCurrentLogos = () => {
    const endIndex = currentIndex + itemsPerView;
    if (endIndex > companyPartners.length) {
      return companyPartners
        .slice(currentIndex)
        .concat(companyPartners.slice(0, endIndex - companyPartners.length));
    }
    return companyPartners.slice(currentIndex, endIndex);
  };

  return (
    <section className="py-32">
      <div className="container">
        <TextEffect
          as="span"
          preset="slide"
          per="word"
          className="text-[54px] font-medium space-x-1.5"
        >
          From ambitious startups to global companies, we partner with great
          businesses and industry leaders.
        </TextEffect>

        <div className="grid grid-cols-5 items-center gap-16 mt-20">
          <AnimatePresence mode="wait">
            {getCurrentLogos().map((logo, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                className="relative h-16"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.09,
                }}
              >
                <Image
                  src={logo}
                  alt="company logo"
                  height={100}
                  className="h-16"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
