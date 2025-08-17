"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Priya & Rohit Sharma",
    role: "Wedding Couple",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=150&h=150&fit=crop&crop=face",
    text: "Ayush captured our wedding so beautifully! Every emotion, every moment was perfectly preserved. The cinematic shots were absolutely stunning. Our family still talks about how professional and creative he was.",
    rating: 5,
    category: "Wedding",
    location: "Dehradun"
  },
  {
    name: "Rajesh Kumar",
    role: "Corporate Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "Outstanding corporate event photography! Ayush understood our brand perfectly and delivered professional shots that we're using across our marketing. Highly recommend for any business event.",
    rating: 5,
    category: "Corporate",
    location: "Mussoorie"
  },
  {
    name: "Ananya Singh",
    role: "Model & Influencer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "The fashion shoot exceeded all my expectations! Ayush's creative vision and attention to lighting made every shot magazine-worthy. My portfolio has never looked better!",
    rating: 5,
    category: "Fashion",
    location: "Rishikesh"
  },
  {
    name: "The Gupta Family",
    role: "Birthday Celebration",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "Amazing birthday photography for our daughter's 5th birthday! Ayush captured all the joy and laughter perfectly. The candid shots are pure gold. Worth every penny!",
    rating: 5,
    category: "Birthday",
    location: "Haridwar"
  },
  {
    name: "Vikram & Sunita",
    role: "Pre-Wedding Shoot",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    text: "Our pre-wedding shoot was like a dream! Ayush made us feel so comfortable and the locations he chose were breathtaking. The photos tell our love story beautifully.",
    rating: 5,
    category: "Pre-Wedding",
    location: "Mussoorie Hills"
  },
  {
    name: "Tech Solutions Pvt Ltd",
    role: "Product Photography",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    text: "Professional product photography that boosted our online sales by 40%! Ayush understood our requirements perfectly and delivered high-quality images on time.",
    rating: 5,
    category: "Product",
    location: "Dehradun"
  }
];

const categories = ["All", "Wedding", "Corporate", "Fashion", "Birthday", "Pre-Wedding", "Product"];

export default function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const filteredTestimonials = activeCategory === "All" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
      {/* Modern Glass Morphism Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,105,180,0.3),transparent_50%)]"></div>
      </div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-400/10 to-rose-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-violet-400/10 rounded-lg rotate-45 blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Professional Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Verified Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-zinc-900/80 dark:bg-zinc-800/80 backdrop-blur-lg px-8 py-4 rounded-full mb-12 border border-gray-700/60 dark:border-zinc-700/60 shadow-2xl"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg"></div>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 tracking-wider">
                VERIFIED PHOTOGRAPHER
              </span>
            </div>
            <span className="text-sm font-bold tracking-wider bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
              📸 CLIENT TESTIMONIALS
            </span>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 leading-[0.95]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
              Capturing
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Precious Moments
            </span>
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Real stories from couples, families, and businesses who trusted us to capture their most important moments across{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
              Dehradun and Uttarakhand
            </span>
          </motion.p>
          
          {/* Professional Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
          >
            {[
              { number: "5.0", label: "★ Rating", color: "from-yellow-500 to-orange-500" },
              { number: "500+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
              { number: "8+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
              { number: "100%", label: "Satisfaction", color: "from-emerald-500 to-green-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group relative"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="bg-zinc-900/70 dark:bg-zinc-800/70 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/40 dark:border-zinc-700/40 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentTestimonialIndex(0);
              }}
              className={`relative px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "text-white shadow-xl scale-105"
                  : "bg-zinc-800/60 dark:bg-zinc-800/60 backdrop-blur-lg text-gray-300 dark:text-gray-300 hover:bg-zinc-700/80 dark:hover:bg-zinc-700/80 shadow-lg border border-gray-700/40 dark:border-zinc-700/40"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeCategory === category && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full"
                  layoutId="activeCategory"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {category} {category !== "All" && `(${testimonials.filter(t => t.category === category).length})`}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Premium Testimonial Display */}
        <div className="relative mb-20">
          <motion.div
            key={`${activeCategory}-${currentTestimonialIndex}`}
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.95 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="max-w-5xl mx-auto"
          >
            {filteredTestimonials.length > 0 && (
              <div className="relative bg-zinc-900/80 dark:bg-zinc-800/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-gray-700/40 dark:border-zinc-700/40 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-100/60 to-pink-100/60 dark:from-blue-900/20 dark:to-pink-900/20 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-100/60 to-cyan-100/60 dark:from-purple-900/20 dark:to-cyan-900/20 rounded-tr-full"></div>
                
                {/* Category Badge */}
                <div className="absolute top-8 right-8 bg-gradient-to-r from-blue-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  📸 {filteredTestimonials[currentTestimonialIndex]?.category}
                </div>

                <div className="relative z-10">
                  {/* Star Rating */}
                  <div className="flex justify-center mb-8 gap-2">
                    {[...Array(filteredTestimonials[currentTestimonialIndex]?.rating || 5)].map((_, starIndex) => (
                      <motion.div 
                        key={starIndex}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: starIndex * 0.1, 
                          duration: 0.6,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="text-yellow-400 text-3xl drop-shadow-lg"
                      >
                        ★
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="text-center mb-12">
                    <motion.p 
                      className="text-2xl sm:text-4xl text-gray-200 dark:text-gray-200 leading-relaxed font-light italic max-w-4xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      &quot;{filteredTestimonials[currentTestimonialIndex]?.text}&quot;
                    </motion.p>
                  </div>
                  
                  {/* Client Profile */}
                  <motion.div 
                    className="flex items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white dark:ring-zinc-700 shadow-xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={filteredTestimonials[currentTestimonialIndex]?.image} 
                          alt={filteredTestimonials[currentTestimonialIndex]?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Camera Badge */}
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-lg">📸</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-white dark:text-white mb-2">
                        {filteredTestimonials[currentTestimonialIndex]?.name}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">
                        {filteredTestimonials[currentTestimonialIndex]?.role}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 flex items-center justify-center gap-2 font-medium">
                        <span className="text-lg">📍</span>
                        {filteredTestimonials[currentTestimonialIndex]?.location}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Navigation Controls */}
          {filteredTestimonials.length > 1 && (
            <>
              {/* Arrow Buttons */}
              <div className="flex justify-center gap-6 mt-12">
                <motion.button
                  onClick={prevTestimonial}
                  className="w-16 h-16 bg-zinc-900 dark:bg-zinc-800 rounded-full shadow-xl flex items-center justify-center text-gray-300 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-gray-700/40 dark:border-zinc-700/40"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  className="w-16 h-16 bg-zinc-900 dark:bg-zinc-800 rounded-full shadow-xl flex items-center justify-center text-gray-300 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-gray-700/40 dark:border-zinc-700/40"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-3 mt-8">
                {filteredTestimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonialIndex
                        ? "bg-gradient-to-r from-blue-600 to-pink-600 scale-125 shadow-lg"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-zinc-900/80 to-zinc-800/80 dark:from-zinc-800/80 dark:to-zinc-900/80 backdrop-blur-lg rounded-3xl p-16 shadow-2xl border border-gray-700/40 dark:border-zinc-700/40"
        >
          <h3 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
            Ready to Create Your Story?
          </h3>
          <p className="text-xl text-gray-300 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who trusted us with their precious moments. Let&apos;s discuss your photography needs and create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="https://wa.me/917455932245?text=Hi!%20I%27m%20interested%20in%20your%20photography%20services.%20Can%20you%20please%20share%20more%20details%3F"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-5 rounded-full font-bold text-lg tracking-wide shadow-2xl hover:shadow-green-500/30 transition-all duration-500 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center gap-3">
                💬 WhatsApp Chat
              </span>
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white px-10 py-5 rounded-full font-bold text-lg tracking-wide shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center gap-3">
                📞 Book Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
