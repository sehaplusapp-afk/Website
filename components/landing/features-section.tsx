"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Video, Calendar, Search, HeartPulse, Bell, Shield } from "lucide-react"
import { type MouseEvent } from "react"

const features = [
  {
    icon: Video,
    titleKey: "features.video.title",
    descKey: "features.video.desc",
    gradient: "from-[#1B8AA8] to-[#2FA6C4]",
    shadowColor: "rgba(27, 138, 168, 0.25)",
  },
  {
    icon: Calendar,
    titleKey: "features.booking.title",
    descKey: "features.booking.desc",
    gradient: "from-[#2FA6C4] to-[#6FD1E6]",
    shadowColor: "rgba(47, 166, 196, 0.25)",
  },
  {
    icon: Search,
    titleKey: "features.discovery.title",
    descKey: "features.discovery.desc",
    gradient: "from-[#0E5F73] to-[#1B8AA8]",
    shadowColor: "rgba(14, 95, 115, 0.25)",
  },
  {
    icon: HeartPulse,
    titleKey: "features.services.title",
    descKey: "features.services.desc",
    gradient: "from-[#6FD1E6] to-[#1B8AA8]",
    shadowColor: "rgba(111, 209, 230, 0.25)",
  },
  {
    icon: Bell,
    titleKey: "features.notifications.title",
    descKey: "features.notifications.desc",
    gradient: "from-[#1B8AA8] to-[#0E5F73]",
    shadowColor: "rgba(27, 138, 168, 0.25)",
  },
  {
    icon: Shield,
    titleKey: "features.security.title",
    descKey: "features.security.desc",
    gradient: "from-[#0E5F73] to-[#2FA6C4]",
    shadowColor: "rgba(14, 95, 115, 0.25)",
  },
]

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  const { t } = useLanguage()
  const Icon = feature.icon

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative"
    >
      {/* Card */}
      <motion.div
        whileHover={{ y: -6, transition: { duration: 0.3 } }}
        className="relative h-full p-7 md:p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-[#1B8AA8]/10 shadow-lg shadow-[#1B8AA8]/5 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-[#1B8AA8]/20"
      >
        {/* Gradient Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(27, 138, 168, 0.08),
                transparent 70%
              )
            `,
          }}
        />

        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 transition-shadow duration-500`}
          style={{ boxShadow: `0 8px 24px -8px ${feature.shadowColor}` }}
        >
          <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
          {/* Icon glow */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500`} />
        </motion.div>

        {/* Content */}
        <h3 className="text-lg md:text-xl font-bold text-[#0E5F73] mb-3 group-hover:text-[#1B8AA8] transition-colors duration-300">
          {t(feature.titleKey)}
        </h3>
        <p className="text-[#0E5F73]/60 leading-relaxed text-sm md:text-base">
          {t(feature.descKey)}
        </p>

        {/* Decorative Corner Glow */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#1B8AA8]/5 to-[#6FD1E6]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </motion.div>
    </motion.div>
  )
}

export function FeaturesSection() {
  const { t, dir } = useLanguage()

  return (
    <section
      id="features"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ direction: dir }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5FBFD] via-white to-[#F5FBFD]" />
      
      {/* Decorative Elements */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-radial from-[#1B8AA8]/8 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-radial from-[#6FD1E6]/8 to-transparent rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B8AA8]/10 text-[#1B8AA8] text-sm font-semibold mb-6 border border-[#1B8AA8]/10"
          >
            <HeartPulse className="w-4 h-4" />
            {dir === "rtl" ? "مميزات حصرية" : "Premium Features"}
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0E5F73] mb-5 md:mb-6 text-balance">
            {t("features.title")}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#0E5F73]/60 max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-14 md:mt-16"
        >
          <p className="text-[#0E5F73]/50 mb-4 text-sm md:text-base">
            {dir === "rtl" ? "وأكثر من ذلك بكثير..." : "And much more..."}
          </p>
          <motion.a
            href="#download"
            whileHover={{ scale: 1.02, x: dir === "rtl" ? -4 : 4 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-[#1B8AA8] font-semibold hover:text-[#0E5F73] transition-colors group"
          >
            {dir === "rtl" ? "حمّل التطبيق الآن" : "Download the app now"}
            <svg
              className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${dir === "rtl" ? "rotate-180 group-hover:-translate-x-1" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
