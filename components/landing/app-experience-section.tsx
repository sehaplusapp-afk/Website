"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useRef, useState } from "react";
import {
  Video,
  Users,
  Stethoscope,
  Calendar,
  Bell,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
const features = [
  {
    icon: Video,
    titleKey: "experience.video.title",
    descKey: "experience.video.desc",
    color: "#1B8AA8",
    gradient: "from-[#1B8AA8] to-[#2FA6C4]",
    screenContent: (
      <div className="w-full h-full pt-7">
        <div className="relative w-full h-full">
          <Image
            src="../../images/call.png"
            alt="Video consultation"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    titleKey: "experience.doctors.title",
    descKey: "experience.doctors.desc",
    color: "#2FA6C4",
    gradient: "from-[#2FA6C4] to-[#6FD1E6]",
    screenContent: (
      <div className="w-full h-full pt-7">
        <div className="relative w-full h-full">
          <Image
            src="../../images/seha-dr-screen.png"
            alt="Browse doctors"
            fill
            className="object-contain bg-[#F5FBFD]"
          />
        </div>
      </div>
    ),
  },
  {
    icon: Stethoscope,
    titleKey: "experience.specialties.title",
    descKey: "experience.specialties.desc",
    color: "#0E5F73",
    gradient: "from-[#0E5F73] to-[#1B8AA8]",
    screenContent: (
      <div className="w-full h-full pt-7">
        <div className="relative w-full h-full">
          <Image
            src="../../images/medical-specialties.png"
            alt="Medical specialties"
            fill
            className="object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    icon: Calendar,
    titleKey: "experience.booking.title",
    descKey: "experience.booking.desc",
    color: "#6FD1E6",
    gradient: "from-[#6FD1E6] to-[#2FA6C4]",
    screenContent: (
      <div className="w-full h-full pt-7">
        <div className="relative w-full h-full">
          <Image
            src="/mockups/easy-booking.jpg"
            alt="Easy booking"
            fill
            className="object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    icon: Bell,
    titleKey: "experience.notifications.title",
    descKey: "experience.notifications.desc",
    color: "#1B8AA8",
    gradient: "from-[#1B8AA8] to-[#0E5F73]",
    screenContent: (
      <div className="w-full h-full pt-7">
        <div className="relative w-full h-full">
          <Image
            src="/mockups/smart-notifications.jpg"
            alt="Smart notifications"
            fill
            className="object-cover"
          />
        </div>
      </div>
    ),
  },
];

export function AppExperienceSection() {
  const { t, dir } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // const desktopPhoneY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const mobilePhoneScale = useTransform(scrollYProgress, [0, 1], [1, 1.015]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const progressOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.85]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * features.length),
      features.length - 1,
    );
    setActiveIndex(index);
  });

  const ActiveMobileIcon = features[activeIndex].icon;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[460vh] lg:min-h-[350vh] xl:min-h-[400vh]"
      style={{ direction: dir }}
    >
      {/* Mobile Header - outside sticky */}
<div className="lg:hidden relative z-10 px-4 sm:px-6 pt-6 pb-4 text-center">
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B8AA8]/10 text-[#1B8AA8] text-sm font-semibold mb-4 border border-[#1B8AA8]/10">
    <Stethoscope className="w-4 h-4" />
    {dir === "rtl" ? "تجربة سلسة" : "Seamless Experience"}
  </div>

  <h2 className="text-xl sm:text-3xl font-bold text-[#0E5F73] mb-2 leading-tight">
    {t("experience.title")}
  </h2>

  <p className="text-sm sm:text-base text-[#0E5F73]/60 max-w-2xl mx-auto">
    {t("experience.subtitle")}
  </p>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
    className="flex justify-center mt-4"
  >
    <div className="w-6 h-10 border border-[#1B8AA8]/30 rounded-full flex justify-center">
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-1.5 h-1.5 bg-[#1B8AA8] rounded-full mt-2"
      />
    </div>
  </motion.div>
</div>

      <div className="sticky top-0 h-screen lg:h-[100svh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5FBFD] to-white" />

        {/* Soft gradient orb */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#1B8AA8]/8 to-transparent rounded-full blur-3xl"
        />

        {/* Mobile side progress */}
        <div className="lg:hidden absolute right-3 top-1/2 -translate-y-1/2 h-36 w-1 bg-[#1B8AA8]/10 rounded-full overflow-hidden z-30">
          <motion.div
            style={{ height: progressHeight }}
            className="w-full bg-gradient-to-b from-[#1B8AA8] to-[#2FA6C4] rounded-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full h-full lg:flex lg:flex-col lg:justify-center lg:py-6 xl:py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block text-center mb-8 xl:mb-10 shrink-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B8AA8]/10 text-[#1B8AA8] text-sm font-semibold mb-4 md:mb-5 border border-[#1B8AA8]/10"
            >
              <Stethoscope className="w-4 h-4" />
              {dir === "rtl" ? "تجربة سلسة" : "Seamless Experience"}
            </motion.div>

            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-[#0E5F73] mb-2 md:mb-4 text-balance leading-tight">
              {t("experience.title")}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#0E5F73]/60 max-w-2xl mx-auto">
              {t("experience.subtitle")}
            </p>

            {/* Mobile scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="lg:hidden flex justify-center mt-4"
            >
              <div className="w-6 h-10 border border-[#1B8AA8]/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-[#1B8AA8] rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-12 items-center flex-1 min-h-0">
            {/* Phone Mockup */}
            <motion.div
              className="relative flex justify-center order-2 lg:order-1"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    background: `radial-gradient(circle, ${features[activeIndex].color}25 0%, transparent 70%)`,
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute -inset-12 rounded-full blur-3xl -z-10"
                />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-[clamp(220px,20vw,300px)] aspect-[300/610] bg-gradient-to-br from-[#1B8AA8] via-[#1B8AA8] to-[#0E5F73] rounded-[2.8rem] xl:rounded-[3rem] p-2.5 xl:p-3 shadow-2xl shadow-[#1B8AA8]/30"
                >
                  <div className="w-full h-full bg-[#F5FBFD] rounded-[2.3rem] md:rounded-[2.5rem] overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 h-7 md:h-8 bg-gradient-to-b from-[#1B8AA8] to-[#2FA6C4] flex items-center justify-center z-10">
                      <div className="w-16 md:w-20 h-4 md:h-5 bg-black/20 rounded-full" />
                    </div>

                    <div className="relative h-full">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{
                            opacity: activeIndex === index ? 1 : 0,
                            scale: activeIndex === index ? 1 : 0.95,
                          }}
                          transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute inset-0"
                          style={{
                            display: activeIndex === index ? "block" : "none",
                          }}
                        >
                          {feature.screenContent}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-br from-[#6FD1E6]/25 to-[#2FA6C4]/25 rounded-2xl backdrop-blur-sm border border-white/30 hidden md:block"
                />
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -bottom-5 -left-5 w-11 h-11 bg-gradient-to-br from-[#1B8AA8]/25 to-[#0E5F73]/25 rounded-xl backdrop-blur-sm border border-white/30 hidden md:block"
                />
              </div>
            </motion.div>

            {/* Feature List */}
            <div className="space-y-3 order-1 lg:order-2 min-h-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: dir === "rtl" ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`relative p-4 xl:p-5 rounded-2xl transition-all duration-500 cursor-pointer border ${
                      isActive
                        ? "bg-white shadow-xl shadow-[#1B8AA8]/10 border-[#1B8AA8]/20"
                        : "bg-white/50 hover:bg-white/80 border-transparent hover:border-[#1B8AA8]/10"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: isActive ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className={`absolute ${dir === "rtl" ? "right-0" : "left-0"} top-0 bottom-0 w-1 bg-gradient-to-b ${feature.gradient} rounded-full origin-top`}
                    />

                    <div className="flex items-start gap-4">
                      <motion.div
                        animate={{ scale: isActive ? 1 : 0.95 }}
                        transition={{ duration: 0.3 }}
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-400 ${
                          isActive
                            ? `bg-gradient-to-br ${feature.gradient} shadow-lg`
                            : "bg-[#F5FBFD]"
                        }`}
                        style={{
                          boxShadow: isActive
                            ? `0 8px 24px -8px ${feature.color}50`
                            : "none",
                        }}
                      >
                        <Icon
                          className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[#1B8AA8]"}`}
                        />
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-base md:text-lg font-semibold mb-1 transition-colors duration-300 ${
                            isActive ? "text-[#1B8AA8]" : "text-[#0E5F73]"
                          }`}
                        >
                          {t(feature.titleKey)}
                        </h3>
                        <p className="text-[#0E5F73]/60 text-sm leading-relaxed line-clamp-2">
                          {t(feature.descKey)}
                        </p>
                      </div>

                      <motion.div
                        animate={{
                          x: isActive ? 0 : -5,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 hidden sm:block"
                      >
                        <ChevronRight
                          className={`w-5 h-5 text-[#1B8AA8] ${dir === "rtl" ? "rotate-180" : ""}`}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden h-full flex flex-col items-center justify-center">
            {/* Active Feature Card */}
            <motion.div
              key={`mobile-text-${activeIndex}`}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-md mb-5"
            >
              <div className="relative p-5 rounded-3xl bg-white shadow-xl shadow-[#1B8AA8]/10 border border-[#1B8AA8]/10 overflow-hidden">
                <div
                  className={`absolute top-0 ${dir === "rtl" ? "right-0" : "left-0"} h-full w-1 bg-gradient-to-b ${features[activeIndex].gradient}`}
                />

                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${features[activeIndex].gradient} shadow-lg flex items-center justify-center`}
                      style={{
                        boxShadow: `0 8px 24px -8px ${features[activeIndex].color}55`,
                      }}
                    >
                      <ActiveMobileIcon className="w-6 h-6 text-white" />
                    </div>

                    <motion.div
                      style={{
                        scale: progressScale,
                        opacity: progressOpacity,
                      }}
                      className="absolute inset-0 rounded-2xl border-2 border-[#1B8AA8]/20"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-[#1B8AA8] mb-1">
                      {t(features[activeIndex].titleKey)}
                    </h3>
                    <p className="text-[#0E5F73]/60 text-sm leading-relaxed">
                      {t(features[activeIndex].descKey)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Phone */}
            <motion.div
              style={{ scale: mobilePhoneScale }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    background: `radial-gradient(circle, ${features[activeIndex].color}25 0%, transparent 70%)`,
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute -inset-10 rounded-full blur-3xl -z-10"
                />

                <motion.div
                  key={`mobile-phone-${activeIndex}`}
                  initial={{ opacity: 0.85, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-[220px] h-[440px] sm:w-[235px] sm:h-[470px] md:w-[255px] md:h-[520px] bg-gradient-to-br from-[#1B8AA8] via-[#1B8AA8] to-[#0E5F73] rounded-[2.7rem] p-2.5 shadow-2xl shadow-[#1B8AA8]/30"
                >
                  <div className="w-full h-full bg-[#F5FBFD] rounded-[2.2rem] overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 h-7 bg-gradient-to-b from-[#1B8AA8] to-[#2FA6C4] flex items-center justify-center z-10">
                      <div className="w-16 h-4 bg-black/20 rounded-full" />
                    </div>

                    <motion.div
                      key={`mobile-screen-${activeIndex}`}
                      initial={{
                        opacity: 0,
                        scale: 0.92,
                        y: 20,
                        filter: "blur(6px)",
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      {features[activeIndex].screenContent}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Mobile Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  whileTap={{ scale: 0.95 }}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeIndex === index
                      ? `w-10 bg-gradient-to-r ${feature.gradient}`
                      : "w-2 bg-[#1B8AA8]/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
