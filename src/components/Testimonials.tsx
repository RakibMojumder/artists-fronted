"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Testimonial from "./Testimonial";

export interface TTestimonial {
  _id: string;
  description: string;
  image: string;
  name: string;
  companyName: string;
}

const Testimonials = ({ testimonials }: { testimonials: TTestimonial[] }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className="py-32 relative bg-[#111111]">
      <div className="absolute inset-0 bg-gradient-sides opacity-70" />

      <div className="container relative">
        {/* Scroll Progress Line */}
        <div className="absolute top-32 -right-10 h-full">
          <div className="sticky top-1/2 -translate-y-1/2 h-[200px] w-2 bg-[#ffffff1a] rounded-full">
            <motion.div
              className="w-full bg-[#545cff] origin-top rounded-full"
              style={{
                scaleY: scrollYProgress,
                height: "100%",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 mb-3">
          <h1 className="text-4xl font-bold text-white">Client Feedback</h1>
          <div className="flex justify-between items-center mb-5">
            <p className="text-lg text-white/80">
              We’re collaborators - We build tight-knit partnerships with our
              clients.
            </p>
            <div className="flex items-center gap-x-3">
              <div className="size-9 animate-[spin_1s_linear_infinite] rounded-full border-2 border-r-transparent border-neutral-500"></div>
              <span className="text-lg text-neutral-500">Keep Scrolling</span>
            </div>
          </div>
        </div>

        {testimonials?.map((testimonial) => (
          <Testimonial key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
