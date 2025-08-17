"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    { icon: "📸", title: "Wedding Photography", desc: "Capturing your special day with artistic vision" },
    { icon: "🎥", title: "Cinematic Videography", desc: "Creating timeless films of your precious moments" },
    { icon: "🏢", title: "Corporate Events", desc: "Professional coverage for business gatherings" },
    { icon: "👶", title: "Portrait Sessions", desc: "Beautiful portraits that tell your story" },
    { icon: "🎉", title: "Special Occasions", desc: "Birthdays, anniversaries, and celebrations" },
    { icon: "👗", title: "Fashion Shoots", desc: "High-end fashion and lifestyle photography" }
  ];

  const team = [
    { 
      name: "Arjun Sharma", 
      role: "Lead Photographer & Founder", 
      experience: "8+ years",
      specialty: "Wedding & Portrait Photography"
    },
    { 
      name: "Priya Mehta", 
      role: "Cinematographer", 
      experience: "6+ years",
      specialty: "Cinematic Videography"
    },
    { 
      name: "Rohan Singh", 
      role: "Creative Director", 
      experience: "5+ years",
      specialty: "Fashion & Commercial Photography"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1200+", label: "Events Captured" },
    { number: "8+", label: "Years Experience" },
    { number: "50+", label: "Awards Won" }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-zinc-900 to-gray-900 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700/10 via-zinc-600/5 to-gray-700/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-600/20 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight">
              About Our Story
            </h1>
          </motion.div>
          
          <motion.div
            className="space-y-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <p className="text-2xl sm:text-3xl font-light text-white mb-6 italic">
              "We don't just take pictures, we create stories."
            </p>
            <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Located in the heart of Dehradun, we are a team of passionate photographers and videographers dedicated to capturing your special moments in the most beautiful way. From candid wedding shots to high-end cinematic films, we ensure every memory stays alive forever.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 bg-gradient-to-br from-gray-900 via-zinc-900 to-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-2xl p-6 backdrop-blur-sm border border-gray-200 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-gray-900 via-zinc-900 to-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From intimate moments to grand celebrations, we specialize in creating visual stories that last a lifetime.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm border border-gray-200 dark:border-zinc-700 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-gray-900 via-zinc-900 to-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate professionals dedicated to capturing your most precious moments with creativity and expertise.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-zinc-800 dark:to-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {member.role}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Experience:</span> {member.experience}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Specialty:</span> {member.specialty}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Create Your Story?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Let's capture your special moments and create memories that will last a lifetime. 
              Get in touch with us today to discuss your photography and videography needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <motion.button
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </motion.button>
              <motion.a
                href="https://www.instagram.com/ayush_chaudhary_032/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📷</span> Follow on Instagram
              </motion.a>
              <motion.a
                href="https://wa.me/917455932245?text=Hi! I'm interested in your photography services. Can you please share more details?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💬</span> WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
