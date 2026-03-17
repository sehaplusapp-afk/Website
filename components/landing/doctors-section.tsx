"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Star, MapPin, Clock, Award } from "lucide-react"

const doctors = [
  {
    name: { en: "Dr. Sarah Ahmed", ar: "د. سارة أحمد" },
    specialty: { en: "Cardiologist", ar: "أخصائية قلب" },
    rating: 4.9,
    reviews: 324,
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    available: true,
    experience: 12,
    gradient: "from-[#1B8AA8] to-[#2FA6C4]",
    initial: "S",
  },
  {
    name: { en: "Dr. Mohammed Hassan", ar: "د. محمد حسن" },
    specialty: { en: "Dermatologist", ar: "أخصائي جلدية" },
    rating: 4.8,
    reviews: 256,
    location: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" },
    available: true,
    experience: 8,
    gradient: "from-[#2FA6C4] to-[#6FD1E6]",
    initial: "M",
  },
  {
    name: { en: "Dr. Fatima Al-Rashid", ar: "د. فاطمة الراشد" },
    specialty: { en: "Pediatrician", ar: "أخصائية أطفال" },
    rating: 5.0,
    reviews: 412,
    location: { en: "Sharjah, UAE", ar: "الشارقة، الإمارات" },
    available: false,
    experience: 15,
    gradient: "from-[#0E5F73] to-[#1B8AA8]",
    initial: "F",
  },
  {
    name: { en: "Dr. Omar Al-Farsi", ar: "د. عمر الفارسي" },
    specialty: { en: "Neurologist", ar: "أخصائي أعصاب" },
    rating: 4.9,
    reviews: 189,
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    available: true,
    experience: 10,
    gradient: "from-[#6FD1E6] to-[#1B8AA8]",
    initial: "O",
  },
  {
    name: { en: "Dr. Layla Mansour", ar: "د. ليلى منصور" },
    specialty: { en: "Ophthalmologist", ar: "أخصائية عيون" },
    rating: 4.7,
    reviews: 298,
    location: { en: "Ajman, UAE", ar: "عجمان، الإمارات" },
    available: true,
    experience: 7,
    gradient: "from-[#1B8AA8] to-[#0E5F73]",
    initial: "L",
  },
  {
    name: { en: "Dr. Khalid Ibrahim", ar: "د. خالد إبراهيم" },
    specialty: { en: "Orthopedic", ar: "أخصائي عظام" },
    rating: 4.8,
    reviews: 367,
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    available: true,
    experience: 14,
    gradient: "from-[#2FA6C4] to-[#0E5F73]",
    initial: "K",
  },
]

export function DoctorsSection() {
  const { t, dir, language } = useLanguage()

  return (
    <section
      id="doctors"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ direction: dir }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5FBFD] to-white" />
      
      {/* Decorative */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-gradient-radial from-[#1B8AA8]/8 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 -left-40 w-[400px] h-[400px] bg-gradient-radial from-[#6FD1E6]/8 to-transparent rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B8AA8]/10 text-[#1B8AA8] text-sm font-semibold mb-6 border border-[#1B8AA8]/10"
          >
            <Award className="w-4 h-4" />
            {dir === "rtl" ? "أطباء معتمدون" : "Certified Doctors"}
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0E5F73] mb-5 md:mb-6 text-balance">
            {t("doctors.title")}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#0E5F73]/60 max-w-2xl mx-auto">
            {t("doctors.subtitle")}
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="relative h-full p-6 md:p-7 rounded-3xl bg-white border border-[#1B8AA8]/10 shadow-lg shadow-[#1B8AA8]/5 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-[#1B8AA8]/20"
              >
                {/* Availability Badge */}
                <div
                  className={`absolute top-5 ${dir === "rtl" ? "left-5" : "right-5"} flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                    doctor.available
                      ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                      : "bg-gray-50 text-gray-500 border border-gray-200"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${doctor.available ? "bg-emerald-500 animate-pulse" : "bg-gray-400"}`} />
                  {doctor.available
                    ? dir === "rtl" ? "متاح" : "Available"
                    : dir === "rtl" ? "مشغول" : "Busy"}
                </div>

                {/* Avatar & Info */}
                <div className="flex flex-col items-center mb-5">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${doctor.gradient} p-0.5 mb-4 shadow-lg`}
                    style={{ boxShadow: `0 10px 30px -10px rgba(27, 138, 168, 0.3)` }}
                  >
                    <div className="w-full h-full rounded-[14px] md:rounded-[18px] bg-[#F5FBFD] flex items-center justify-center">
                      <span className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-[#1B8AA8] to-[#2FA6C4] bg-clip-text text-transparent">
                        {doctor.initial}
                      </span>
                    </div>
                  </motion.div>

                  <h3 className="text-lg md:text-xl font-bold text-[#0E5F73] text-center mb-1">
                    {doctor.name[language]}
                  </h3>
                  <p className="text-[#1B8AA8] font-medium text-sm">
                    {doctor.specialty[language]}
                  </p>
                </div>

                {/* Rating & Experience */}
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-3.5 h-3.5 ${
                            star <= Math.floor(doctor.rating)
                              ? "text-amber-400 fill-amber-400"
                              : "text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[#0E5F73] font-semibold text-sm">{doctor.rating}</span>
                    <span className="text-[#0E5F73]/40 text-xs">({doctor.reviews})</span>
                  </div>
                  <span className="w-px h-4 bg-[#1B8AA8]/15" />
                  <div className="flex items-center gap-1 text-[#0E5F73]/60 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    {doctor.experience} {dir === "rtl" ? "سنوات" : "yrs"}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center gap-1.5 text-[#0E5F73]/60 text-sm mb-6">
                  <MapPin className="w-4 h-4" />
                  {doctor.location[language]}
                </div>

                {/* Book Button */}
                <motion.button
                  whileHover={{ scale: doctor.available ? 1.02 : 1 }}
                  whileTap={{ scale: doctor.available ? 0.98 : 1 }}
                  disabled={!doctor.available}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    doctor.available
                      ? "bg-gradient-to-r from-[#1B8AA8] to-[#2FA6C4] text-white shadow-lg shadow-[#1B8AA8]/20 hover:shadow-xl hover:shadow-[#1B8AA8]/30"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {doctor.available
                    ? dir === "rtl" ? "حجز موعد" : "Book Appointment"
                    : dir === "rtl" ? "غير متاح حالياً" : "Not Available"}
                </motion.button>

                {/* Decorative glow */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#1B8AA8]/5 to-[#6FD1E6]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12 md:mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-2xl border-2 border-[#1B8AA8]/20 text-[#1B8AA8] font-semibold hover:bg-[#1B8AA8]/5 hover:border-[#1B8AA8]/30 transition-all duration-300"
          >
            {dir === "rtl" ? "عرض جميع الأطباء" : "View All Doctors"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
