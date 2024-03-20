"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";

export default function Home() {
  const [shouldExit, setShouldExit] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const exitTimeout = setTimeout(() => {
      setShouldExit(false);
    }, 1500); // Set the delay for 1 second
    return () => clearTimeout(exitTimeout);
  }, []);

  useEffect(() => {
    const exitTimeout = setTimeout(() => {
      router.push("/login");
    }, 2500); // Set the delay for 1 second
    return () => clearTimeout(exitTimeout);
  }, [router]);

  return (
    <div className="bg-foreground h-screen flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence>
        {shouldExit ? (
          <motion.img
            src={"logo.png"}
            initial={{ x: "100%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            exit={{
              x: "-100%",
              opacity: 0,
              transition: { duration: 1, ease: "easeInOut" },
            }}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
