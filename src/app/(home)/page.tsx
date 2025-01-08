"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";
import ServiceSection from "@/components/sections/ServiceSection";
import LoadingScreen from "@/components/LoadingScreen";
import { motion, AnimatePresence } from "framer-motion";
import OurDigitalPartners from "@/components/sections/OurDigitalPartners";
import OurPartners from "@/components/sections/OurPartners";
import { VelocityText } from "@/components/sections/VelocityText";
import WorkReviews from "@/components/sections/WorkReviews";
import OurServices from "@/components/sections/OurServices";
import Experience from "@/components/sections/Experience";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ParallaxImage from "@/components/sections/ParallaxImage";
import CookiesModal from "@/components/modal/CookiesModal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      <AnimatePresence>
        {!isLoading && (
          <motion.main
            className="home-page min-h-screen mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
          >
            <Hero startAnimation={!isLoading} />
            <ProjectsSection />
            <ServiceSection />
            <OurDigitalPartners />
            <ParallaxImage />
            <OurPartners />
            <VelocityText />
            <WorkReviews />
            <Experience />
            <OurServices />
            <TestimonialSection />
            <CookiesModal />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
