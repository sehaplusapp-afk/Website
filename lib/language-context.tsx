"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.doctors": "Doctors",
    "nav.download": "Download",
    
    // Hero
    "hero.title": "Your Doctor Is Closer Than Ever",
    "hero.subtitle": "Experience healthcare reimagined. Connect with certified doctors instantly through video consultations, book appointments, and manage your health—all from the comfort of your home.",
    "hero.cta.appstore": "Download on App Store",
    "hero.cta.playstore": "Get it on Google Play",
    
    // App Experience
    "experience.title": "A New Era of Healthcare",
    "experience.subtitle": "Seamlessly navigate through our intuitive interface designed for your health journey",
    "experience.video.title": "Video Consultation",
    "experience.video.desc": "Face-to-face consultations with certified doctors from anywhere",
    "experience.doctors.title": "Browse Doctors",
    "experience.doctors.desc": "Find the right specialist from our network of expert physicians",
    "experience.specialties.title": "Medical Specialties",
    "experience.specialties.desc": "Access a wide range of medical specializations",
    "experience.booking.title": "Easy Booking",
    "experience.booking.desc": "Schedule appointments with just a few taps",
    "experience.notifications.title": "Smart Notifications",
    "experience.notifications.desc": "Never miss an appointment with intelligent reminders",
    
    // Features
    "features.title": "Premium Healthcare Features",
    "features.subtitle": "Everything you need for comprehensive health management",
    "features.video.title": "HD Video Consultations",
    "features.video.desc": "Crystal-clear video calls with your doctor, secured with end-to-end encryption for your privacy",
    "features.booking.title": "Instant Appointment Booking",
    "features.booking.desc": "Book appointments 24/7 with our smart scheduling system that finds the perfect time for you",
    "features.discovery.title": "Doctor Discovery",
    "features.discovery.desc": "Browse through verified profiles, ratings, and reviews to find your ideal healthcare provider",
    "features.services.title": "Health Services",
    "features.services.desc": "Access lab results, prescriptions, medical records, and health tracking all in one place",
    "features.notifications.title": "Smart Notifications",
    "features.notifications.desc": "Personalized reminders for medications, follow-ups, and health check-ups",
    "features.security.title": "Bank-Level Security",
    "features.security.desc": "Your health data is protected with enterprise-grade encryption and HIPAA-compliant security protocols",
    
    // Doctors
    "doctors.title": "Meet Our Expert Doctors",
    "doctors.subtitle": "World-class physicians dedicated to your health and wellbeing",
    
    // Download
    "download.title": "Start Your Health Journey Today",
    "download.subtitle": "Join thousands of patients who have transformed their healthcare experience with Seha Plus",
    
    // Footer
    "footer.tagline": "Your trusted partner in digital healthcare",
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.careers": "Careers",
    "footer.press": "Press",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.contact": "Contact",
    "footer.support": "Support",
    "footer.email": "Email Us",
    "footer.rights": "All rights reserved.",
  },
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.features": "المميزات",
    "nav.doctors": "الأطباء",
    "nav.download": "تحميل",
    
    // Hero
    "hero.title": "طبيبك أصبح أقرب من أي وقت",
    "hero.subtitle": "اختبر رعاية صحية مُعاد تصورها. تواصل مع أطباء معتمدين فورياً عبر استشارات الفيديو، احجز مواعيدك، وأدر صحتك—كل ذلك من راحة منزلك.",
    "hero.cta.appstore": "تحميل من App Store",
    "hero.cta.playstore": "تحميل من Google Play",
    
    // App Experience
    "experience.title": "عصر جديد من الرعاية الصحية",
    "experience.subtitle": "تنقل بسلاسة عبر واجهتنا البديهية المصممة لرحلتك الصحية",
    "experience.video.title": "استشارة بالفيديو",
    "experience.video.desc": "استشارات وجهاً لوجه مع أطباء معتمدين من أي مكان",
    "experience.doctors.title": "تصفح الأطباء",
    "experience.doctors.desc": "اعثر على الأخصائي المناسب من شبكتنا من الأطباء الخبراء",
    "experience.specialties.title": "التخصصات الطبية",
    "experience.specialties.desc": "الوصول إلى مجموعة واسعة من التخصصات الطبية",
    "experience.booking.title": "حجز سهل",
    "experience.booking.desc": "جدولة المواعيد بنقرات قليلة فقط",
    "experience.notifications.title": "إشعارات ذكية",
    "experience.notifications.desc": "لا تفوت أي موعد مع التذكيرات الذكية",
    
    // Features
    "features.title": "مميزات الرعاية الصحية المتميزة",
    "features.subtitle": "كل ما تحتاجه لإدارة صحية شاملة",
    "features.video.title": "استشارات فيديو عالية الدقة",
    "features.video.desc": "مكالمات فيديو واضحة مع طبيبك، مؤمنة بتشفير من طرف إلى طرف لخصوصيتك",
    "features.booking.title": "حجز مواعيد فوري",
    "features.booking.desc": "احجز مواعيد على مدار الساعة مع نظام الجدولة الذكي الذي يجد الوقت المثالي لك",
    "features.discovery.title": "اكتشاف الأطباء",
    "features.discovery.desc": "تصفح الملفات الشخصية الموثقة والتقييمات والمراجعات للعثور على مقدم الرعاية الصحية المثالي",
    "features.services.title": "الخدمات الصحية",
    "features.services.desc": "الوصول إلى نتائج المختبر والوصفات الطبية والسجلات الطبية وتتبع الصحة في مكان واحد",
    "features.notifications.title": "إشعارات ذكية",
    "features.notifications.desc": "تذكيرات مخصصة للأدوية والمتابعات والفحوصات الصحية",
    "features.security.title": "أمان بمستوى البنوك",
    "features.security.desc": "بياناتك الصحية محمية بتشفير على مستوى المؤسسات وبروتوكولات أمان متوافقة مع HIPAA",
    
    // Doctors
    "doctors.title": "تعرف على أطبائنا الخبراء",
    "doctors.subtitle": "أطباء عالميون مكرسون لصحتك ورفاهيتك",
    
    // Download
    "download.title": "ابدأ رحلتك الصحية الآن",
    "download.subtitle": "انضم إلى آلاف المرضى الذين غيروا تجربتهم في الرعاية الصحية مع صحة بلس",
    
    // Footer
    "footer.tagline": "شريكك الموثوق في الرعاية الصحية الرقمية",
    "footer.company": "الشركة",
    "footer.about": "من نحن",
    "footer.careers": "الوظائف",
    "footer.press": "الصحافة",
    "footer.legal": "قانوني",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.contact": "التواصل",
    "footer.support": "الدعم",
    "footer.email": "راسلنا",
    "footer.rights": "جميع الحقوق محفوظة.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar")

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  const dir = language === "ar" ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
