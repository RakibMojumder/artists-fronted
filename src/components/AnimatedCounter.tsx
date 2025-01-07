"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2,
  delay = 0,
  className,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const count = useSpring(0, { duration: duration * 1000 });
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  useEffect(() => {
    if (shouldAnimate) {
      count.set(end);
    }
  }, [shouldAnimate, count, end]);

  return (
    <motion.span
      ref={ref}
      className={cn("text-4xl font-bold", className)}
      aria-live="polite"
    >
      {rounded}
    </motion.span>
  );
}
