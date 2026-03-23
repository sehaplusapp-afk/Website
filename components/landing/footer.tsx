"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export function Footer() {
  const { dir, language } = useLanguage();

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/profile.php?id=61586876622065",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/seha.pluss/",
      label: "Instagram",
    },
    {
      icon: FaTiktok,
      href: "https://vt.tiktok.com/ZSamNeNYQ/",
      label: "TikTok",
    },
  ];

  const quickLinks = [
    {
      label: language === "ar" ? "الرئيسية" : "Home",
      href: "#home",
    },
    {
      label: language === "ar" ? "المميزات" : "Features",
      href: "#features",
    },
    {
      label: language === "ar" ? "تحميل التطبيق" : "Download",
      href: "#download",
    },
  ];

  return (
    <footer
      className="relative overflow-hidden bg-[#0E5F73] text-white"
      style={{ direction: dir }}
    >
      {/* subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      {/* soft background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#1B8AA8]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="#home" className="mb-4 inline-flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-2xl ring-1 ring-white/15">
                <Image
                  src="/images/seha-logo.png"
                  alt="Seha Plus"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  {language === "ar" ? "صحة بلس" : "Seha Plus"}
                </h3>
                <p className="text-sm text-white/65">
                  {language === "ar"
                    ? "منصة رعاية صحية حديثة"
                    : "Modern Healthcare Platform"}
                </p>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-white/70">
              {language === "ar"
                ? "تجربة صحية رقمية تجمع المرضى والأطباء والعيادات في مكان واحد."
                : "A digital healthcare experience connecting patients, doctors, and clinics in one place."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-white">
              {language === "ar" ? "روابط سريعة" : "Quick Links"}
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-white">
              {language === "ar" ? "تواصل معنا" : "Contact"}
            </h4>

            <div className="space-y-3">
<a
  href="mailto:sehaplus.app@gmail.com"
  className="flex items-center gap-3 text-sm text-white/70 hover:text-white"
>
  <MdEmail className="h-4 w-4" />
  <span>sehaplus.app@gmail.com</span>
</a>

<a
  href="tel:+970597491466"
  className="flex items-center gap-3 text-sm text-white/70 hover:text-white"
>
  <FiPhone className="h-4 w-4" />

  {/* مهم جدًا عشان RTL */}
  <span dir="ltr" className="[unicode-bidi:plaintext]">
    +970 597 491 466
  </span>
</a>
            </div>

            <div className="mt-5 flex items-center gap-2">
{socialLinks.map((social, index) => {
  const Icon = social.icon

  return (
    <motion.a
      key={index}
      href={social.href}
      target="_blank"
      whileHover={{ y: -3, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
    >
      <Icon className="h-4 w-4" />
    </motion.a>
  )
})}
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-start">
            © {new Date().getFullYear()} Seha Plus.{" "}
            {language === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved."}
          </p>

          <div className="flex items-center justify-center gap-2 md:justify-end">
            <span>
              {language === "ar"
                ? "رعاية صحية رقمية بشكل أبسط"
                : "Simple digital healthcare"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
