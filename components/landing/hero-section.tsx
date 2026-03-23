"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useRef } from "react";
import { Apple, Play } from "lucide-react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

// Subtle Medical Cross Icon
function MedicalCross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7V2z" />
    </svg>
  );
}

// DNA Helix Symbol
function DNAHelix({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      className={className}
    >
      <path
        d="M12 2v20M8 4c0 2 8 2 8 4s-8 2-8 4 8 2 8 4-8 2-8 4"
        strokeLinecap="round"
      />
      <circle cx="8" cy="4" r="1" fill="currentColor" />
      <circle cx="16" cy="8" r="1" fill="currentColor" />
      <circle cx="8" cy="12" r="1" fill="currentColor" />
      <circle cx="16" cy="16" r="1" fill="currentColor" />
      <circle cx="8" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

// Heart Pulse Icon
function HeartPulse({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

// Lighter heartbeat line
function HeartbeatLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 60"
      className={`absolute opacity-[0.4] ${className}`}
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 30 L60 30 L70 30 L80 15 L90 45 L100 10 L110 50 L120 30 L130 30 L300 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="text-[#1B8AA8]"
        initial={{ pathLength: 0, opacity: 0.2 }}
        animate={{ pathLength: 1, opacity: [0.35, 1, 0.35] }}
        transition={{
          pathLength: {
            duration: 2.2,
            repeat: Infinity,
            repeatDelay: 2.2,
            ease: "easeInOut",
          },
          opacity: {
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </svg>
  );
}

function HealthParticle({
  delay,
  duration,
  x,
  y,
  size,
}: {
  delay: number;
  duration: number;
  x: string;
  y: string;
  size: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background:
          "radial-gradient(circle, rgba(27, 138, 168, 0.42) 0%, rgba(111, 209, 230, 0.18) 60%, transparent 100%)",
        boxShadow: "0 0 14px rgba(47, 166, 196, 0.18)",
      }}
      animate={{
        y: [0, -16, 0],
        x: [0, 6, 0],
        opacity: [0.45, 0.85, 0.45],
        scale: [1, 1.12, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
  frameClassName?: string;
  glowClassName?: string;
  imageClassName?: string;
};

function PhoneMockup({
  src,
  alt,
  className = "",
  frameClassName = "",
  glowClassName = "",
  imageClassName = "",
}: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`relative w-full h-full rounded-[2.4rem] p-2.5 shadow-2xl ${frameClassName}`}
      >
        <div className="relative w-full h-full overflow-hidden rounded-[2rem] bg-white">
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#1B8AA8] to-[#2FA6C4] flex items-center justify-center z-20">
            <div className="w-14 h-4 rounded-full bg-black/20" />
          </div>

          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              className={`object-cover object-top ${imageClassName}`}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0E5F73]/[0.03] via-transparent to-white/[0.02] pointer-events-none" />
        </div>
      </div>

      <div
        className={`absolute -inset-3 rounded-[2.8rem] blur-xl -z-10 ${glowClassName}`}
      />
    </div>
  );
}

export function HeroSection() {
  const { t, dir } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const desktopOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const desktopScale = useTransform(scrollYProgress, [0, 0.55], [1, 0.97]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ direction: dir }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FCFD] via-white to-[#F0F9FB]" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(27, 138, 168, 0.07) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 80% 20%, rgba(47, 166, 196, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse 50% 80% at 60% 80%, rgba(111, 209, 230, 0.06) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Softer glows */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ opacity: [0.22, 0.35, 0.22] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12%] left-[15%] w-[360px] h-[360px] bg-gradient-radial from-[#1B8AA8]/12 via-[#1B8AA8]/5 to-transparent rounded-full blur-2xl"
        />
        <motion.div
          animate={{ opacity: [0.18, 0.3, 0.18] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[12%] right-[10%] w-[320px] h-[320px] bg-gradient-radial from-[#2FA6C4]/12 via-[#2FA6C4]/5 to-transparent rounded-full blur-2xl"
        />
      </motion.div>

      {/* Light Beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block"></div>

      {/* Medical Background Elements */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none hidden md:block"
      >
        <HeartbeatLine className="top-[12%] left-[3%] w-72 rotate-[-3deg]" />
        <HeartbeatLine className="top-[75%] right-[5%] w-64 rotate-[2deg]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] left-[6%] hidden sm:block"
      >
        <MedicalCross className="w-4 h-4 sm:w-5 sm:h-5 text-[#1B8AA8]/[0.14]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, -4, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute top-[55%] right-[8%] hidden md:block"
      >
        <MedicalCross className="w-6 h-6 text-[#2FA6C4]/[0.12]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, 5, 0] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-[22%] left-[12%] hidden lg:block"
      >
        <MedicalCross className="w-5 h-5 text-[#6FD1E6]/[0.14]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 3, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] right-[5%] hidden lg:block"
      >
        <DNAHelix className="w-8 h-14 text-[#1B8AA8]/[0.1]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -7, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[42%] left-[3%] hidden sm:block"
      >
        <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5 text-[#1B8AA8]/[0.12]" />
      </motion.div>

      <div className="hidden lg:block">
        <HealthParticle delay={0} duration={9} x="8%" y="22%" size={6} />
        <HealthParticle delay={1.5} duration={11} x="88%" y="32%" size={5} />
        <HealthParticle delay={2.5} duration={10} x="12%" y="62%" size={7} />
        <HealthParticle delay={0.8} duration={12} x="92%" y="52%" size={5} />
      </div>

      <motion.div
        style={{ y: y3 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] left-[10%] w-24 h-24 border border-[#1B8AA8]/[0.03] rounded-full hidden lg:block"
      />
      <motion.div
        style={{ y: y2 }}
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[18%] right-[8%] w-32 h-32 border border-[#2FA6C4]/[0.02] rounded-full hidden lg:block"
      />

      {/* DESKTOP */}
      <motion.div
        style={{ opacity: desktopOpacity, scale: desktopScale }}
        className="relative z-10 hidden md:block max-w-7xl mx-auto px-6 py-16 md:py-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1B8AA8]/10 to-[#2FA6C4]/10 text-[#1B8AA8] text-sm font-semibold mb-8 border border-[#1B8AA8]/10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B8AA8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1B8AA8]" />
              </span>
              {dir === "rtl"
                ? "التطبيق الصحي الأول في المنطقة"
                : "The #1 Health App in the Region"}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-bold text-[#0E5F73] leading-[1.1] mb-6 md:mb-8 text-balance"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg md:text-xl text-[#0E5F73]/70 mb-10 md:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* App Store */}
              <motion.a
                href="https://apps.apple.com/app/seha-plus/id6748379745"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.97, y: 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                className="group relative px-7 py-4 bg-gradient-to-r from-[#1B8AA8] to-[#2FA6C4] text-white rounded-2xl font-semibold flex items-center justify-center gap-3 overflow-hidden shadow-xl shadow-[#1B8AA8]/25 hover:shadow-2xl hover:shadow-[#1B8AA8]/30 active:shadow-lg active:shadow-[#1B8AA8]/20 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0E5F73] to-[#1B8AA8]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  whileHover={{ rotate: -8, scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="relative z-10"
                >
                  <FaApple className="w-6 h-6" />
                </motion.div>

                <span className="relative z-10 text-[17px]">
                  {t("hero.cta.appstore")}
                </span>
              </motion.a>

              {/* Google Play */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.amin.Patient&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.97, y: 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                className="group relative px-7 py-4 bg-white text-[#1B8AA8] rounded-2xl font-semibold flex items-center justify-center gap-3 border-2 border-[#1B8AA8]/20 hover:border-[#1B8AA8]/40 transition-all duration-300 shadow-lg shadow-[#1B8AA8]/5 hover:shadow-xl hover:shadow-[#1B8AA8]/10 active:shadow-md"
              >
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="relative z-10"
                >
                  <FaGooglePlay className="w-5 h-5" />
                </motion.div>

                <span className="relative z-10 text-[17px]">
                  {t("hero.cta.playstore")}
                </span>
              </motion.a>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-6 sm:gap-10 mt-12 md:mt-14 justify-center lg:justify-start"
            >
              {[
                {
                  value: "50K+",
                  label: dir === "rtl" ? "مستخدم نشط" : "Active Users",
                },
                {
                  value: "500+",
                  label: dir === "rtl" ? "طبيب معتمد" : "Certified Doctors",
                },
                {
                  value: "4.9",
                  label: dir === "rtl" ? "تقييم التطبيق" : "App Rating",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="text-center lg:text-start"
                >
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1B8AA8] to-[#2FA6C4] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#0E5F73]/60 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Desktop Phones */}
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[400px] h-[340px] md:h-[400px]">
              <motion.div
                animate={{ opacity: [0.18, 0.3, 0.18] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-radial from-[#1B8AA8]/18 via-[#2FA6C4]/10 to-transparent rounded-full blur-2xl"
              />
              <motion.div
                animate={{ opacity: [0.14, 0.24, 0.14] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute inset-10 bg-gradient-radial from-[#6FD1E6]/18 via-[#1B8AA8]/10 to-transparent rounded-full blur-xl"
              />
            </div>

            {/* Main */}
            <motion.div
              style={{ y: y1 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <motion.div
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 4, scale: 1.015 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="w-[240px] sm:w-[260px] md:w-[280px] h-[490px] sm:h-[530px] md:h-[570px] bg-gradient-to-br from-[#1B8AA8] via-[#1B8AA8] to-[#0E5F73] rounded-[2.8rem] md:rounded-[3rem] p-2.5 md:p-3 shadow-2xl shadow-[#1B8AA8]/30">
                  <div className="w-full h-full bg-white rounded-[2.3rem] md:rounded-[2.5rem] overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 h-7 md:h-8 bg-gradient-to-b from-[#1B8AA8] to-[#2FA6C4] flex items-center justify-center z-20">
                      <div className="w-16 md:w-20 h-4 md:h-5 bg-black/20 rounded-full" />
                    </div>

                    <div className="relative w-full h-full">
                      <Image
                        src="../../images/call.png"
                        alt="Seha Plus app home screen"
                        fill
                        className="object-cover object-top"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E5F73]/[0.03] via-transparent to-white/[0.02] pointer-events-none" />
                  </div>
                </div>

                <div className="absolute -inset-4 md:-inset-5 bg-gradient-to-br from-[#1B8AA8]/12 to-[#6FD1E6]/10 rounded-[3.5rem] md:rounded-[4rem] blur-xl -z-10" />
              </motion.div>
            </motion.div>

            {/* Left */}
            <motion.div
              style={{ y: y2 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10"
            >
              <motion.div
                whileHover={{ rotate: -4, scale: 1.015 }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                <div className="w-[180px] sm:w-[200px] md:w-[220px] h-[370px] sm:h-[410px] md:h-[450px] bg-gradient-to-br from-[#2FA6C4] to-[#1B8AA8] rounded-[2.2rem] md:rounded-[2.5rem] p-2 md:p-2.5 shadow-xl shadow-[#1B8AA8]/18 opacity-90 -rotate-6">
                  <div className="w-full h-full bg-white rounded-[1.8rem] md:rounded-[2rem] overflow-hidden relative">
                    <div className="relative w-full h-full">
                      <Image
                        src="../../images/seha-home-screen.png"
                        alt="Seha Plus services screen"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E5F73]/[0.03] via-transparent to-white/[0.02] pointer-events-none" />
                  </div>
                </div>

                <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-[#2FA6C4]/10 to-[#1B8AA8]/8 rounded-[2.8rem] md:rounded-[3rem] blur-lg -z-10" />
              </motion.div>
            </motion.div>

            {/* Right */}
            <motion.div
              style={{ y: y3 }}
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 5.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10"
            >
              <motion.div
                whileHover={{ rotate: 4, scale: 1.015 }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                <div className="w-[180px] sm:w-[200px] md:w-[220px] h-[370px] sm:h-[410px] md:h-[450px] bg-gradient-to-br from-[#6FD1E6] to-[#2FA6C4] rounded-[2.2rem] md:rounded-[2.5rem] p-2 md:p-2.5 shadow-xl shadow-[#2FA6C4]/18 opacity-90 rotate-6">
                  <div className="w-full h-full bg-white rounded-[1.8rem] md:rounded-[2rem] overflow-hidden relative">
                    <div className="relative w-full h-full">
                      <Image
                        src="../../images/seha-dr-screen.png"
                        alt="Seha Plus bookings screen"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E5F73]/[0.03] via-transparent to-white/[0.02] pointer-events-none" />
                  </div>
                </div>

                <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-[#6FD1E6]/10 to-[#2FA6C4]/8 rounded-[2.8rem] md:rounded-[3rem] blur-lg -z-10" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* MOBILE */}
      <div className="relative z-10 md:hidden w-full px-5 py-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1B8AA8]/10 to-[#2FA6C4]/10 text-[#1B8AA8] text-xs font-semibold mb-5 border border-[#1B8AA8]/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B8AA8] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1B8AA8]" />
            </span>
            {dir === "rtl"
              ? "التطبيق الصحي الأول في المنطقة"
              : "The #1 Health App in the Region"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-[2rem] leading-[1.15] font-bold text-[#0E5F73] mb-4 text-balance"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-[15px] leading-7 text-[#0E5F73]/70 max-w-[22rem] mb-7"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex flex-col w-full gap-3 mb-8"
          >
            <motion.a
              href="https://apps.apple.com/app/seha-plus/id6748379745"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              whileHover={{ y: -2 }}
              className="group relative w-full px-6 py-4 bg-gradient-to-r from-[#1B8AA8] to-[#2FA6C4] text-white rounded-2xl font-semibold flex items-center justify-center gap-3 overflow-hidden shadow-xl shadow-[#1B8AA8]/20"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#0E5F73] to-[#1B8AA8]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.35 }}
              />
              <FaApple className="relative z-10 w-5 h-5" />
              <span className="relative z-10">{t("hero.cta.appstore")}</span>
            </motion.a>

            <motion.a
              href="https://play.google.com/store/apps/details?id=com.amin.Patient&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              whileHover={{ y: -2 }}
              className="w-full px-6 py-4 bg-white text-[#1B8AA8] rounded-2xl font-semibold flex items-center justify-center gap-3 border-2 border-[#1B8AA8]/15 shadow-md shadow-[#1B8AA8]/5"
            >
              <FaGooglePlay className="w-5 h-5" />
              <span>{t("hero.cta.playstore")}</span>
            </motion.a>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex items-center justify-center gap-7 mb-10"
          >
            {[
              {
                value: "50K+",
                label: dir === "rtl" ? "مستخدم نشط" : "Active Users",
              },
              {
                value: "500+",
                label: dir === "rtl" ? "طبيب معتمد" : "Certified Doctors",
              },
              {
                value: "4.9",
                label: dir === "rtl" ? "تقييم التطبيق" : "App Rating",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-[1.75rem] font-bold bg-gradient-to-r from-[#1B8AA8] to-[#2FA6C4] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[11px] leading-4 text-[#0E5F73]/60 font-medium max-w-[70px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div> */}

          {/* MOBILE 3 MOCKUPS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="relative w-full h-[360px] flex items-center justify-center"
          >
            {/* glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[240px] h-[240px] rounded-full bg-gradient-radial from-[#1B8AA8]/14 via-[#2FA6C4]/8 to-transparent blur-2xl" />
            </div>

            {/* left */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute left-2 top-[70px] z-10"
            >
              <div className="-rotate-[10deg] scale-[0.86] origin-center">
                <PhoneMockup
                  src="../../images/seha-home-screen.png"
                  alt="Seha Plus home"
                  className="w-[145px] h-[295px]"
                  frameClassName="bg-gradient-to-br from-[#2FA6C4] to-[#1B8AA8] shadow-xl shadow-[#1B8AA8]/16"
                  glowClassName="bg-gradient-to-br from-[#2FA6C4]/10 to-[#1B8AA8]/8"
                />
              </div>
            </motion.div>

            {/* main */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute z-20"
            >
              <PhoneMockup
                src="../../images/call.png"
                alt="Seha Plus call screen"
                className="w-[180px] h-[365px]"
                frameClassName="bg-gradient-to-br from-[#1B8AA8] via-[#1B8AA8] to-[#0E5F73] shadow-2xl shadow-[#1B8AA8]/24"
                glowClassName="bg-gradient-to-br from-[#1B8AA8]/12 to-[#6FD1E6]/10"
              />
            </motion.div>

            {/* right */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 5.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="absolute right-2 top-[70px] z-10"
            >
              <div className="rotate-[10deg] scale-[0.86] origin-center">
                <PhoneMockup
                  src="../../images/seha-dr-screen.png"
                  alt="Seha Plus doctor screen"
                  className="w-[145px] h-[295px]"
                  frameClassName="bg-gradient-to-br from-[#6FD1E6] to-[#2FA6C4] shadow-xl shadow-[#2FA6C4]/16"
                  glowClassName="bg-gradient-to-br from-[#6FD1E6]/10 to-[#2FA6C4]/8"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
