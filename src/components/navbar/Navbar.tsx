"use client";

import Logo from "./Logo";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { motion, AnimatePresence } from "framer-motion";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const isVisible = useScrollDirection();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-white/70 backdrop-blur"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-[1200px] mx-auto flex justify-between items-center">
            <div className="w-16">
              <Logo />
            </div>

            <NavbarMenu />
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
