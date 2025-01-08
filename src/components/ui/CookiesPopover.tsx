"use client";

import { CustomCheckbox } from "./CustomCheckbox";
import { motion } from "framer-motion";
const CookiesPopover = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "fit-content" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="text-white space-y-5 mt-5 overflow-hidden"
    >
      <p className="text-xs">Choose which cookies you want to accept:</p>

      <div className="flex flex-col gap-y-2">
        <CustomCheckbox label="Essential (default)" />
        <CustomCheckbox label="Site Preferences" />
        <CustomCheckbox label="Analytics" />
        <CustomCheckbox label="Marketing" />
      </div>
      <p className="text-xs hover:underline pb-6 cursor-pointer">
        More in Privacy Policy
      </p>
    </motion.div>
  );
};

export default CookiesPopover;
