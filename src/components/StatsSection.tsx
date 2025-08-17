"use client";
import { motion } from "framer-motion";

const stats = [
  { number: "50K+", label: "Happy Attendees", icon: "👥" },
  { number: "500+", label: "Events Hosted", icon: "🎉" },
  { number: "100+", label: "Cities Worldwide", icon: "🌍" },
  { number: "98%", label: "Satisfaction Rate", icon: "⭐" },
];

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-95">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/8 via-blue-500/4 to-teal-500/8"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Trusted by
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Event Lovers
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
              Worldwide
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
          ></motion.div>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.15, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative p-8 rounded-3xl bg-white backdrop-blur-xl border border-gray-200 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>
                
                <div className="relative z-10 text-center">
                  <motion.div 
                    className="text-5xl mb-6 filter drop-shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <motion.div 
                    className="text-4xl sm:text-5xl font-black mb-3 bg-gradient-to-r from-gray-900 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <div className="text-sm sm:text-base font-semibold text-gray-700 tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-60 group-hover:animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-60 group-hover:animate-bounce"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
