"use client";
import ParallaxSection from "../../components/ParallaxSection";
import MouseParallax from "../../components/MouseParallax";
import EventCard from "../../components/EventCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

import { useState } from "react";
import events from "../../utils/dummyEvents";

const allCategories: string[] = Array.from(new Set((events as { category?: string }[]).map((e) => e.category || "General")));

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const filteredEvents = (events as { category?: string; date: string }[]).filter((event) => {
    const matchCategory = selectedCategory === "All" || (event.category || "General") === selectedCategory;
    const matchDate = !selectedDate || event.date === selectedDate;
    return matchCategory && matchDate;
  });
  return (
    <>
      <Navbar />
      
      {/* Modern Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Premium Background - Matching Main UI */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/10 via-gray-700/5 to-gray-800/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl"></div>
        
        {/* Animated Background Elements - Updated Colors */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-gray-600/20 to-gray-700/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="relative z-10 flex flex-col items-center pt-32 pb-16 px-4 sm:px-6">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-xl px-8 py-4 rounded-full mb-12 border border-gray-700/50 shadow-xl"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-green-700 dark:text-green-400">LIVE EVENTS</span>
            </div>
            <span className="text-sm font-bold tracking-wider bg-gradient-to-r from-blue-700 to-pink-700 bg-clip-text text-transparent">
              EVENT CATALOG
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12 max-w-5xl"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Discover Amazing Events
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Find and join exciting events happening around the world. From tech conferences to creative workshops, 
              <span className="font-semibold text-white"> discover experiences that inspire and connect you with amazing people.</span>
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mb-12 text-sm font-medium"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-3 rounded-full shadow-lg border border-white/20">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Verified Organizers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-3 rounded-full shadow-lg border border-white/20">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Instant Booking</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-3 rounded-full shadow-lg border border-white/20">
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Premium Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Filters */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full max-w-5xl mx-auto mb-16"
          >
            <div className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-zinc-700/50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  Find Your Perfect Event
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Filter by category and date to discover events tailored to your interests</p>
              </div>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto" aria-label="Event filters">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Category</label>
                  <select
                    className="w-full bg-white dark:bg-zinc-700 border-2 border-gray-200 dark:border-zinc-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 shadow-lg"
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    aria-label="Filter by category"
                  >
                    <option value="All">🌟 All Categories</option>
                    {allCategories.map((cat: string) => (
                      <option key={cat} value={cat}>
                        {cat === 'Tech' ? '💻' : cat === 'Frontend' ? '🎨' : cat === 'Music' ? '🎵' : '📝'} {cat}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full bg-white dark:bg-zinc-700 border-2 border-gray-200 dark:border-zinc-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 shadow-lg"
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)}
                    aria-label="Filter by date"
                  />
                </div>
              </form>
              
              {/* Stats */}
              <div className="flex justify-center gap-8 mt-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{filteredEvents.length}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Events Available</div>
                </div>
                <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
                <div>
                  <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">{allCategories.length}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full max-w-7xl mx-auto px-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="col-span-full text-center py-20"
                >
                  <div className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-gray-200/50 dark:border-zinc-700/50">
                    <div className="text-6xl mb-6">🔍</div>
                    <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">No Events Found</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Try adjusting your filters or check back soon for new events.</p>
                    <button
                      onClick={() => {
                        setSelectedCategory("All");
                        setSelectedDate("");
                      }}
                      className="bg-gradient-to-r from-blue-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Clear Filters
                    </button>
                  </div>
                </motion.div>
              ) : (
                filteredEvents.map((event: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.2 + i * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-zinc-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-zinc-700/50">
                      {/* Hover Glow */}
                      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700"></div>
                      
                      <div className="relative z-10">
                        <MouseParallax>
                          <EventCard {...event} />
                        </MouseParallax>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
