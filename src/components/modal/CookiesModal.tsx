"use client";

import { Settings } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import CookiesPopover from "../ui/CookiesPopover";
import { useState } from "react";

const CookiesModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ y: 50, opacity: 0, left: "50%", translateX: "-50%" }}
          animate={{
            y: 0,
            opacity: 1,
            left: "50%",
            translateX: "-50%",
            transition: { duration: 0.6, delay: 5, ease: "easeInOut" },
          }}
          exit={{
            y: 50,
            opacity: 0,
            left: "50%",
            translateX: "-50%",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          className="fixed bottom-10 bg-neutral-900 min-w-fit rounded-[20px] p-4 pl-6 border border-neutral-200"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 150%, #545cff 0, transparent 50%)",
          }}
        >
          <div className="flex justify-between items-center gap-x-10">
            <h1 className="text-[22px] text-white">We use cookies</h1>
            <div className="flex items-center gap-x-5">
              <Settings
                onClick={() => setShow(true)}
                className={`text-white bg-white/20 backdrop-blur p-2.5 size-10 rounded-full cursor-pointer ${
                  show ? "opacity-0" : "opacity-100"
                }`}
              />
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 bg-white text-black rounded-full"
              >
                Accept
              </button>
            </div>
          </div>
          {show && <CookiesPopover />}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiesModal;
