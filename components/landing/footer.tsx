"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { t, dir, language } = useLanguage()

  const footerLinks = {
    company: [
      { key: "footer.about", href: "#" },
      { key: "footer.careers", href: "#" },
      { key: "footer.press", href: "#" },
    ],
    legal: [
      { key: "footer.privacy", href: "#" },
      { key: "footer.terms", href: "#" },
    ],
    contact: [
      { key: "footer.support", href: "#" },
      { key: "footer.email", href: "mailto:support@sehaplus.com" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer
      className="relative bg-[#0E5F73] text-white overflow-hidden"
      style={{ direction: dir }}
    >
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-gradient-radial from-[#1B8AA8]/15 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-gradient-radial from-[#6FD1E6]/10 to-transparent rounded-full blur-3xl translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-3 mb-6 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 ring-2 ring-white/10 group-hover:ring-white/20"
              >
                <Image
                  src="/images/seha-logo.png"
                  alt="Seha Plus"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <span className="text-2xl font-bold text-white">
                {language === "ar" ? "صحة بلس" : "Seha Plus"}
              </span>
            </Link>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed text-sm md:text-base">
              {t("footer.tagline")}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <a href="mailto:support@sehaplus.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" />
                support@sehaplus.com
              </a>
              <a href="tel:+971800SEHA" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +971 800 SEHA
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                {language === "ar" ? "دبي، الإمارات العربية المتحدة" : "Dubai, United Arab Emirates"}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1B8AA8] hover:border-[#1B8AA8] transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-5 text-white">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm md:text-base"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-5 text-white">{t("footer.legal")}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm md:text-base"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-5 text-white">{t("footer.contact")}</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm md:text-base"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-start">
              &copy; {new Date().getFullYear()} Seha Plus. {t("footer.rights")}
            </p>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              {dir === "rtl" ? "جميع الأنظمة تعمل" : "All Systems Operational"}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
