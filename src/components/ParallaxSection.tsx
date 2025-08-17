import { motion } from "framer-motion";

export default function ParallaxSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      className="w-full py-16 px-4 bg-gradient-to-r from-blue-100/60 via-white/80 to-pink-100/60 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 rounded-2xl shadow-lg my-12"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      {children}
    </motion.section>
  );
}
