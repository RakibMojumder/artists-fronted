"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { TTestimonial } from "./Testimonials";

const Testimonial = ({ testimonial }: { testimonial: TTestimonial }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-6 p-16 rounded-2xl mb-10 last:mb-0 backdrop-blur-sm border border-neutral-600"
      style={{
        scale,
      }}
    >
      <p className="text-2xl leading-relaxed text-white">
        {testimonial.description}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={60}
            height={60}
            className="size-14 rounded-full"
            priority
          />
          <h3 className="text-2xl font-semibold bg-gradient-text inline-block">
            {testimonial.name}
          </h3>
        </div>
        <h3 className="text-2xl font-semibold text-primary">
          {testimonial.companyName}
        </h3>
      </div>
    </motion.div>
  );
};

export default Testimonial;
