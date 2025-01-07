import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import React, { useRef } from "react";

export const VelocityText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -1200]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section ref={targetRef} className="h-[80vh]">
      <div className="sticky top-0 flex h-[50vh] items-center overflow-hidden">
        <motion.p
          style={{ x }}
          className="velocity-text origin-bottom-left whitespace-nowrap font-semibold leading-[0.85] text-neutral-900 pl-20"
        >
          Elevate your digital presence
        </motion.p>
      </div>
    </section>
  );
};
