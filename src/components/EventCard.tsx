import { motion } from "framer-motion";
import Image from "next/image";

export default function EventCard({ title, date, description, image }: { title: string; date: string; description: string; image: string }) {
  return (
    <motion.div
      className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden w-full max-w-sm cursor-pointer group transition-transform duration-300"
      whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
        </motion.div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-1 text-zinc-900 dark:text-white">{title}</h3>
        <p className="text-xs text-zinc-500 mb-2">{date}</p>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 line-clamp-3">{description}</p>
      </div>
    </motion.div>
  );
}
