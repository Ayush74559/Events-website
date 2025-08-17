"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [simulated, setSimulated] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send message");
      setSimulated(!!data?.simulated);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        location: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (err) {
      alert((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Our Studio",
      details: ["Rajpur Road, Dehradun", "Uttarakhand 248009", "India"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["+91 74559 32245", "Available 9 AM - 8 PM", "Quick response guaranteed"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: ["info@dehradunphotography.com", "bookings@dehradunphotography.com", "Quick response guaranteed"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: "⏰",
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM", "24/7 for events"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    "Wedding Photography",
    "Corporate Events",
    "Birthday Parties",
    "Fashion Shoots",
    "Pre-Wedding Shoots",
    "Baby Photography",
    "Product Photography",
    "Other"
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight">
              Let&apos;s Create Magic
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Ready to capture your special moments? Get in touch and let&apos;s discuss how we can make your vision come to life.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section 
        className="py-16 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-zinc-800 dark:to-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-black via-gray-900 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent mb-6">
              Book Your Session
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll get back to you within 24 hours with a personalized quote.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-gray-200 dark:border-zinc-700 rounded-3xl p-8 shadow-2xl"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for reaching out. We&apos;ll contact you within 24 hours to discuss your photography needs.
                </p>
                {simulated && (
                  <p className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                    Note: Email sending was simulated in development because RESEND_API_KEY isn&apos;t set. No email was actually sent.
                  </p>
                )}
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={fadeInUp}>
                    <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-zinc-600 rounded-xl px-4 py-3 bg-white dark:bg-zinc-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                      placeholder="Enter your full name"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-zinc-600 rounded-xl px-4 py-3 bg-white dark:bg-zinc-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={fadeInUp}>
                    <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-zinc-600 rounded-xl px-4 py-3 bg-white dark:bg-zinc-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
                      Service Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-zinc-600 rounded-xl px-4 py-3 bg-white dark:bg-zinc-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={fadeInUp}>
                    <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-zinc-600 rounded-xl px-4 py-3 bg-white dark:bg-zinc-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-zinc-600 rounded-xl px-4 py-3 bg-white dark:bg-zinc-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Event venue or location"
                    />
                  </motion.div>
                </div>

                <motion.div variants={fadeInUp}>
                  <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
                    Tell us about your vision *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border border-gray-300 dark:border-zinc-600 rounded-xl px-4 py-3 bg-white dark:bg-zinc-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                    placeholder="Describe your event, style preferences, number of guests, special requirements, or any other details that would help us understand your needs better..."
                  />
                </motion.div>

                <motion.div
                  className="text-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Social Media & Map Section */}
      <motion.section 
        className="py-16 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Social Media */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent mb-6">
                Follow Our Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Stay updated with our latest work, behind-the-scenes moments, and photography tips. Join our community of photography enthusiasts!
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Instagram", icon: "📷", followers: "12.5K", color: "from-pink-500 to-purple-500", handle: "@ayush_chaudhary_032", link: "https://www.instagram.com/ayush_chaudhary_032/" },
                  { name: "Facebook", icon: "📘", followers: "8.2K", color: "from-blue-600 to-blue-500", handle: "Dehradun Photography", link: "#" },
                  { name: "YouTube", icon: "🎥", followers: "3.4K", color: "from-red-500 to-red-600", handle: "Dehradun Photo Studio", link: "#" },
                  { name: "WhatsApp", icon: "💬", followers: "24/7", color: "from-green-500 to-green-600", handle: "+91 74559 32245", link: "https://wa.me/917455932245?text=Hi!%20I%27m%20interested%20in%20your%20photography%20services.%20Can%20you%20please%20share%20more%20details%3F" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer block"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`bg-gradient-to-br ${social.color} text-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300`}>
                      <div className="text-2xl mb-2">{social.icon}</div>
                      <h4 className="font-bold text-sm mb-1">{social.name}</h4>
                      <p className="text-xs opacity-90">{social.followers}</p>
                      <p className="text-xs opacity-75 mt-1">{social.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map/Location */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent mb-6">
                Visit Our Studio
              </h3>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-700 dark:to-zinc-800 rounded-2xl p-8 text-center h-80 flex flex-col items-center justify-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Studio Address
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Rajpur Road, Near Clock Tower<br />
                  Dehradun, Uttarakhand 248009<br />
                  India
                </p>
                <motion.a
                  href="https://www.google.com/maps/place/349,+Park+Rd,+Laxman+Chowk,+Area,+Dehradun,+Uttarakhand+248001/@30.3240409,78.0115711,14.99z/data=!4m15!1m8!3m7!1s0x3908d7cb80337547:0xd551b167c750472b!2sRajpur+Rd,+Dehradun,+Uttarakhand!3b1!8m2!3d30.3246288!4d78.0420663!16s%2Fg%2F1trpp4wb!3m5!1s0x390929f551396361:0x5619490136b7d828!8m2!3d30.3205633!4d78.0199624!16s%2Fg%2F11jb6kxddv?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Directions
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
