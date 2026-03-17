"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const { language, setLanguage, t, dir } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.85)"])
  const headerBorder = useTransform(scrollY, [0, 100], ["rgba(27,138,168,0)", "rgba(27,138,168,0.1)"])
  const headerShadow = useTransform(scrollY, [0, 100], ["0 0 0 0 rgba(0,0,0,0)", "0 4px 30px -5px rgba(27,138,168,0.1)"])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { key: "nav.home", href: "#home" },
    { key: "nav.features", href: "#features" },
    { key: "nav.doctors", href: "#doctors" },
    { key: "nav.download", href: "#download" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundColor: headerBg,
        borderBottomColor: headerBorder,
        boxShadow: headerShadow,
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b"
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-11 h-11 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-500 ring-2 ring-[#1B8AA8]/10 group-hover:ring-[#1B8AA8]/30"
            >
              <Image
                src="/images/seha-logo.png"
                alt="Seha Plus"
                fill
                className="object-cover"
              />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#1B8AA8] to-[#2FA6C4] bg-clip-text text-transparent">
              {language === "ar" ? "صحة بلس" : "Seha Plus"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  className="relative px-5 py-2.5 text-[#0E5F73] hover:text-[#1B8AA8] transition-colors duration-300 font-medium text-[15px] rounded-xl hover:bg-[#1B8AA8]/5 group"
                >
                  {t(item.key)}
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#1B8AA8] to-[#2FA6C4] rounded-full group-hover:w-1/2 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="relative px-4 py-2.5 rounded-xl bg-gradient-to-br from-[#F5FBFD] to-white hover:from-[#1B8AA8]/10 hover:to-[#2FA6C4]/10 transition-all duration-300 font-medium text-[#0E5F73] border border-[#1B8AA8]/10 hover:border-[#1B8AA8]/30 shadow-sm hover:shadow-md"
            >
              <span className="flex items-center gap-2.5 text-sm">
                <span className={`transition-all duration-300 ${language === "en" ? "text-[#1B8AA8] font-semibold" : "text-[#0E5F73]/50"}`}>EN</span>
                <span className="w-px h-4 bg-[#1B8AA8]/20" />
                <span className={`transition-all duration-300 ${language === "ar" ? "text-[#1B8AA8] font-semibold" : "text-[#0E5F73]/50"}`}>عربي</span>
              </span>
            </motion.button>

            {/* CTA Button - Desktop Only */}
            <motion.a
              href="#download"
              whileHover={{ scale: 1.02, boxShadow: "0 8px 30px -10px rgba(27, 138, 168, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="hidden lg:flex px-5 py-2.5 bg-gradient-to-r from-[#1B8AA8] to-[#2FA6C4] text-white rounded-xl font-semibold text-sm shadow-lg shadow-[#1B8AA8]/20 hover:shadow-xl transition-shadow duration-300"
            >
              {language === "ar" ? "حمّل الآن" : "Download"}
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-[#F5FBFD] border border-[#1B8AA8]/10"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#0E5F73]" />
              ) : (
                <Menu className="w-5 h-5 text-[#0E5F73]" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden overflow-hidden"
        >
          <nav className="flex flex-col gap-1 pt-4 pb-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-[#0E5F73] hover:text-[#1B8AA8] hover:bg-[#1B8AA8]/5 rounded-xl font-medium transition-all duration-300"
                >
                  {t(item.key)}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="#download"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-2 px-4 py-3 bg-gradient-to-r from-[#1B8AA8] to-[#2FA6C4] text-white rounded-xl font-semibold text-center"
            >
              {language === "ar" ? "حمّل الآن" : "Download Now"}
            </motion.a>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  )
}
