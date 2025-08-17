import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-32 px-4 bg-gradient-to-br from-blue-100 via-white to-pink-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
      <motion.div
        className="text-center space-y-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Professional Photography
          <br />
          <span className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-700 dark:text-gray-300">
            & Video Services
          </span>
        </motion.h1>
        
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
            Explore, connect, and experience the best events around you.
          </p>
          
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
            Professional Photography & Video Shoot Services in 
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent"> Dehradun</span>
            <br />
            — Weddings, Corporate Events, Birthdays, Fashion Shoots & More
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 text-sm sm:text-base text-gray-500 dark:text-gray-500 font-medium">
            <span className="px-4 py-2 bg-white/50 dark:bg-zinc-800/50 rounded-full backdrop-blur-sm border border-gray-200 dark:border-zinc-700">
              Weddings
            </span>
            <span className="px-4 py-2 bg-white/50 dark:bg-zinc-800/50 rounded-full backdrop-blur-sm border border-gray-200 dark:border-zinc-700">
              Corporate Events
            </span>
            <span className="px-4 py-2 bg-white/50 dark:bg-zinc-800/50 rounded-full backdrop-blur-sm border border-gray-200 dark:border-zinc-700">
              Birthdays
            </span>
            <span className="px-4 py-2 bg-white/50 dark:bg-zinc-800/50 rounded-full backdrop-blur-sm border border-gray-200 dark:border-zinc-700">
              Fashion Shoots
            </span>
            <span className="px-4 py-2 bg-white/50 dark:bg-zinc-800/50 rounded-full backdrop-blur-sm border border-gray-200 dark:border-zinc-700">
              & More
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
