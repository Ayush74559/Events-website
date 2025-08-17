"use client";
import { motion } from "framer-motion";

export default function MouseParallax({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="relative w-full h-full"
      whileHover={{ scale: 1.02, rotate: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {children}
    </motion.div>
  );
}
