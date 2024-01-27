"use client";

import Login from "@/features/login/components/Login";
import { AnimatePresence, motion } from "framer-motion";

export default function login() {
  return (
    <div className="bg-secondary min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          className="bg-foreground min-h-screen min-w-full absolute"
          initial={{ x: "0" }}
          animate={{
            y: "-100%",
            transition: { duration: 1, ease: "linear" },
          }}
        ></motion.div>
      </AnimatePresence>
      <Login />
    </div>
  );
}
