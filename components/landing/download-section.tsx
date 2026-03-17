"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Apple, Play, Sparkles, Shield, Star, CheckCircle } from "lucide-react"

export function DownloadSection() {
  const { t, dir } = useLanguage()

  return (
    <section
      id="download"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ direction: dir }}
    >
      {/* Rich Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E5F73] via-[#1B8AA8] to-[#2FA6C4]" />
      
      {/* Layered Gradient Overlays */}
      <div className="absolute inset-0 opacity-40" style={{
        background: `
          radial-gradient(ellipse 100% 80% at 30% 20%, rgba(111, 209, 230, 0.3) 0%, transparent 50%),
          radial-gradient(ellipse 80% 100% at 80% 80%, rgba(14, 95, 115, 0.4) 0%, transparent 50%)
        `
      }} />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
          x: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#6FD1E6]/30 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.2, 0.35, 0.2],
          x: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-white/15 to-transparent rounded-full blur-3xl"
      />
      
      {/* Glowing Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />
        <motion.div
          animate={{ x: ["200%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-2/3 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>

      {/* Floating Particles - Refined */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${(i * 7) % 100}%`,
              y: `${(i * 11) % 100}%`,
              scale: 0.5 + (i % 3) * 0.3,
            }}
            animate={{
              y: [`${(i * 11) % 100}%`, `${((i * 11) % 100) - 15}%`, `${(i * 11) % 100}%`],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 6 + (i % 4) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="absolute w-1.5 h-1.5 bg-white rounded-full"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold mb-8 border border-white/20 shadow-lg shadow-black/5"
          >
            <Sparkles className="w-4 h-4" />
            {dir === "rtl" ? "حمّل مجاناً الآن" : "Download Free Today"}
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 md:mb-6 text-balance leading-tight"
          >
            {t("download.title")}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-white/75 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed"
          >
            {t("download.subtitle")}
          </motion.p>

          {/* Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.03,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-5 bg-white text-[#1B8AA8] rounded-2xl font-semibold flex items-center justify-center gap-4 overflow-hidden shadow-2xl shadow-black/20 hover:shadow-white/20 transition-shadow duration-500"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#F5FBFD] to-white"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Apple className="relative z-10 w-7 h-7" />
              <div className="relative z-10 text-start">
                <span className="text-xs text-[#1B8AA8]/60 block leading-tight">
                  {dir === "rtl" ? "حمّل من" : "Download on the"}
                </span>
                <span className="text-lg font-bold">App Store</span>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.03,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-5 bg-white/10 backdrop-blur-md text-white rounded-2xl font-semibold flex items-center justify-center gap-4 overflow-hidden border border-white/25 hover:bg-white/15 hover:border-white/35 transition-all duration-300 shadow-xl"
            >
              <Play className="w-7 h-7 fill-white" />
              <div className="text-start">
                <span className="text-xs text-white/60 block leading-tight">
                  {dir === "rtl" ? "حمّل من" : "Get it on"}
                </span>
                <span className="text-lg font-bold">Google Play</span>
              </div>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/70 text-sm"
          >
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              {dir === "rtl" ? "تقييم 4.9 نجوم" : "4.9 Star Rating"}
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              {dir === "rtl" ? "معتمد من الصحة" : "Health Certified"}
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Shield className="w-4 h-4 text-[#6FD1E6]" />
              {dir === "rtl" ? "آمن ومشفر" : "Secure & Encrypted"}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
