"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon } from "lucide-react";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useClickOutside } from "@/hooks/useClickOutside";
import Lenis from "@studio-freight/lenis";

interface NavigationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ListItem = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const textVariants = {
    initial: { y: 0 },
    hover: {
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    appear: {
      y: ["100%", 0],
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const handleHover = () => {
    setIsHovered(true);
    setHasInteracted(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  return (
    <motion.div
      className="overflow-hidden cursor-pointer inline-block"
      onHoverStart={handleHover}
    >
      <motion.div
        initial="initial"
        animate={
          hasInteracted && isHovered
            ? "hover"
            : hasInteracted
            ? "appear"
            : "initial"
        }
        variants={textVariants}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const NavigationModal = ({ isOpen, onClose }: NavigationModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useScrollLock(isOpen);
  useClickOutside(modalRef as React.RefObject<HTMLElement>, onClose);

  useEffect(() => {
    if (!contentRef.current) return;

    const modalLenis = new Lenis({
      wrapper: contentRef.current,
      content: contentRef.current,
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      modalLenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      modalLenis.destroy();
    };
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-white/5 backdrop-blur overflow-hidden flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            ref={modalRef}
            className="max-w-4xl w-full h-[85vh] bg-neutral-950 rounded-3xl relative overflow-hidden"
            initial={{
              y: "-100%",
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.6,
                ease: [0.32, 0.72, 0, 1],
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
          >
            <div className="absolute inset-0 flex flex-col p-20 pb-0">
              {/* Header */}
              <div className="flex-none flex justify-between items-center">
                <h2 className="text-2xl font-medium text-white">Navigation</h2>
                <button
                  onClick={onClose}
                  className="text-white/70 hover:text-white transition-colors bg-neutral-700 rounded-full p-2.5"
                >
                  <XIcon size={20} absoluteStrokeWidth />
                </button>
              </div>

              {/* Navigation Content */}
              <div
                ref={contentRef}
                className="pt-12 mt-3 flex-1 pb-20 overflow-y-auto scrollbar-hide"
              >
                <div className="space-y-20">
                  <ul className="space-y-6">
                    <li className="flex items-center gap-x-4">
                      <ListItem>
                        <div className="group flex items-center gap-x-4 text-white">
                          <span className="text-5xl font-semibold">
                            Case Studies
                          </span>
                        </div>
                      </ListItem>
                      <span className="flex size-16 items-center justify-center rounded-full border border-white/20 text-xl text-white">
                        13
                      </span>
                    </li>
                    <li>
                      <ListItem>
                        <div className="text-5xl font-semibold text-white">
                          Our Agency
                        </div>
                      </ListItem>
                    </li>
                    <li>
                      <ListItem>
                        <div className="text-5xl font-semibold text-white">
                          Contact Us
                        </div>
                      </ListItem>
                    </li>
                    <li>
                      <ListItem>
                        <div className="text-5xl font-semibold text-white">
                          News
                        </div>
                      </ListItem>
                    </li>
                  </ul>

                  <div className="flex justify-between items-center">
                    <div className="space-y-4">
                      <h3 className="text-gray-400 text-sm font-medium">
                        Follow us
                      </h3>
                      <div className="flex items-center gap-6">
                        <div className="text-white hover:text-gray-300 transition-colors cursor-pointer">
                          Instagram
                        </div>
                        <div className="text-white hover:text-gray-300 transition-colors cursor-pointer">
                          Facebook
                        </div>
                        <div className="text-white hover:text-gray-300 transition-colors cursor-pointer">
                          Twitter
                        </div>
                        <div className="text-white hover:text-gray-300 transition-colors cursor-pointer">
                          Award
                        </div>
                      </div>
                    </div>

                    <button className="bg-[#6366f1] hover:bg-[#5558e6] text-white rounded-full px-8 py-4 text-lg font-medium">
                      Get in touch
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Gradients */}
            <div
              className="absolute -bottom-40 right-0 size-[600px] opacity-40 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 60% 75%, #545cff 0%, transparent 50%)`,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationModal;
