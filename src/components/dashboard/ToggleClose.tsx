import { motion } from "framer-motion";
import { ChevronsLeft } from "lucide-react";
// import { FiChevronsRight } from "react-icons/fi";

interface ToggleCloseProps {
  open: boolean;
  setOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const ToggleClose = ({ open, setOpen }: ToggleCloseProps) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((prev) => !prev)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <ChevronsLeft />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

export default ToggleClose;
