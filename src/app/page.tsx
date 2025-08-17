
// ...existing code...

"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialsSection from "../components/TestimonialsSection";
import events from "../utils/dummyEvents";

function HeroWithMouseBg() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div
      ref={ref}
      id="hero"
      className="relative w-full flex flex-col items-center justify-center py-48 px-6 overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 min-h-screen"
      onMouseMove={e => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
          setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
      }}
    >
      {/* Background Image with Increased Visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      ></div>
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.15), transparent 80%)`,
        }}
        transition={{ type: "tween", duration: 0.3 }}
      />
      <motion.h1
        className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent relative z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Discover Amazing Events
      </motion.h1>
      <motion.p
        className="text-xl sm:text-2xl text-zinc-700 dark:text-zinc-300 text-center max-w-4xl mb-12 relative z-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Explore, connect, and experience the best events around you. Professional Photography & Video Shoot Services in Dehradun — Weddings, Corporate Events, Birthdays, Fashion Shoots & More.
      </motion.p>
      <Link
        href="/events"
        className="relative z-10 px-12 py-5 rounded-full bg-blue-600 text-white font-bold shadow-xl hover:bg-pink-500 transition-colors text-xl hover:scale-105 transform transition-transform duration-300"
      >
        Book Now
      </Link>
    </div>
  );
}

function EventsCarousel() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Blur Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900"></div>
      <div className="absolute inset-0 backdrop-blur-3xl bg-zinc-900/30 dark:bg-zinc-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-zinc-900/80 dark:bg-zinc-800/80 backdrop-blur-sm px-8 py-4 rounded-full mb-12 border border-gray-700/50 dark:border-zinc-700/50 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-green-700 dark:text-green-400">LIVE</span>
            </div>
            <span className="text-sm font-bold tracking-wider bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
              FEATURED EVENTS
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </motion.div>

          {/* Main Heading - Similar to "Trusted by Event Lovers Worldwide" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight tracking-tight text-center">
              <span className="block bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 dark:from-gray-300 dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-2">
                Trusted by
              </span>
              <span className="block bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent font-black">
                Event Lovers
              </span>
              <span className="block bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 dark:from-gray-300 dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                Worldwide
              </span>
            </h2>
          </motion.div>
          
          {/* Clean Description */}
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Join thousands of passionate event enthusiasts who trust us to discover amazing experiences. 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> Find events that inspire, educate, and connect you with like-minded people.</span>
          </motion.p>

          {/* Simple Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Attendees</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">200+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Amazing Events</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {events.slice(0, 3).map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.2, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -15,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-zinc-900/90 dark:bg-zinc-800/90 backdrop-blur-sm border border-gray-700/50 dark:border-zinc-700/50">
                {/* Subtle Glow Effect */}
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
                
                {/* Event Card */}
                <div className="relative z-10">
                  <EventCard {...event} />
                </div>

                {/* Clean Action Button */}
                <div className="absolute bottom-6 left-6 right-6 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-pink-600 text-white py-4 rounded-2xl font-bold text-sm tracking-wider shadow-2xl relative overflow-hidden group/btn"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      JOIN EVENT
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div className="mb-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Ready to discover your next amazing event?
            </p>
            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/events"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white px-12 py-6 rounded-full font-bold text-lg tracking-wider shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative z-10">EXPLORE ALL EVENTS</span>
                <motion.svg 
                  className="w-6 h-6 relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Secure Booking
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Instant Confirmation
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              24/7 Support
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroWithMouseBg />
      <EventsCarousel />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
