"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { workSamples } from "@/data/scrollData";
import AnimatedButton from "./AnimatedButton";
import Project from "./Project";

export interface TProject {
  _id: string;
  title: string;
  image: string;
  tags: string[];
}

const Projects = ({ projects }: { projects: TProject[] }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [transformValue, setTransformValue] = useState("0%");

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const calculateTransform = () => {
      if (!targetRef.current) return;

      const cardWidth =
        document.querySelector(".work-sample")?.clientWidth ??
        window.innerWidth * 0.43125;
      const gap = 32;
      const totalWidth = (cardWidth + gap) * workSamples.length;
      const viewportWidth =
        document.querySelector(".home-page")?.clientWidth ?? window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;
      const percentage = (scrollDistance / totalWidth) * 100 + 8;

      setTransformValue(`-${percentage}%`);
    };

    calculateTransform();
    window.addEventListener("resize", calculateTransform);
    return () => window.removeEventListener("resize", calculateTransform);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", transformValue]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Scroll area */}
        <motion.div style={{ x }} className="flex gap-8">
          <div className="work-sample group relative h-[450px] min-w-[40vw] max-w-[500px] overflow-hidden rounded-[30px] py-14 pr-20 flex flex-col justify-between items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h1 className="text-6xl font-semibold">Work</h1>
                <span className="size-16 flex justify-center items-center text-3xl border border-slate-900 rounded-full">
                  {workSamples.length}
                </span>
              </div>
              <p className="text-xl font-medium max-w-72">
                A selection of our crafted work, built from scratch by our
                talented in-house team.
              </p>
            </div>

            <AnimatedButton
              text="Case Studies"
              className="py-4 px-16 border-primary text-xl"
            />
          </div>
          {projects?.map((project, index) => (
            <Project key={project._id} index={index} project={project} />
          ))}

          <div className="work-sample group relative h-[450px] min-w-[40vw] max-w-[500px] overflow-hidden rounded-[30px] py-14 pr-20 flex flex-col justify-center items-center space-y-10">
            <h1 className="text-6xl font-semibold">View More</h1>

            <AnimatedButton
              text="Case Studies"
              className="py-4 px-16 border-primary text-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
