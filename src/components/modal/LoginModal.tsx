"use client";

import { FormEvent, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon } from "lucide-react";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useClickOutside } from "@/hooks/useClickOutside";
import { toast } from "sonner";
import { useLoginUserMutation } from "@/redux/feature/user/userApi";
import Spinner from "../Spinner";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/feature/user/userSlice";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("rakib@gmail.com");
  const [password, setPassword] = useState("123456");
  const modalRef = useRef<HTMLDivElement>(null);
  useScrollLock(isOpen);
  useClickOutside(modalRef as React.RefObject<HTMLElement>, onClose);
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    try {
      const res = await loginUser({ email, password }).unwrap();
      const { token } = res.data;
      Cookies.set("token", token);
      dispatch(setToken(token));
      toast.success("Login successful");
      onClose();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

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
            className="w-full max-w-2xl bg-neutral-950 rounded-3xl p-20 relative"
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
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-medium text-white">Login</h2>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors"
              >
                <XIcon className="size-6" />
              </button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full rounded-xl px-8 py-4 text-lg font-medium ${
                  isLoading
                    ? "bg-primary/30 flex justify-center items-center"
                    : "bg-primary text-white"
                }`}
              >
                {isLoading ? <Spinner /> : "Login"}
              </button>
            </form>

            {/* Background Gradients */}
            <div
              className="absolute -bottom-40 right-0 size-[600px] opacity-40 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 75% 75%, #545cff 0%, transparent 50%)`,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
