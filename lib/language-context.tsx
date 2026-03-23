"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.doctors": "Experience",
    "nav.download": "Download",

    // Hero
    "hero.title": "No Waiting. No Complexity.",
    "hero.subtitle":
      "Book appointments, connect with doctors, and manage your health easily — all in one place.",
    "hero.cta.appstore": "Download on App Store",
    "hero.cta.playstore": "Get it on Google Play",

    // App Experience
    "experience.title": "Simple & Clear Experience",
    "experience.subtitle":
      "A smooth interface designed to help you manage your healthcare without complexity",
    "experience.video.title": "Video Consultation",
    "experience.video.desc": "Talk to your doctor through secure video calls",
    "experience.doctors.title": "Find Doctors",
    "experience.doctors.desc": "Browse doctors by specialty and availability",
    "experience.specialties.title": "Specialties",
    "experience.specialties.desc":
      "Access different medical fields in one place",
    "experience.booking.title": "Easy Booking",
    "experience.booking.desc": "Schedule appointments quickly without hassle",
    "experience.notifications.title": "Reminders",
    "experience.notifications.desc":
      "Get notified about your appointments and updates",

    // Features
    "features.title": "Core Features",
    "features.subtitle": "Everything you need to manage your healthcare",
    "features.video.title": "Video Calls",
    "features.video.desc": "Secure and stable video consultations with doctors",
    "features.booking.title": "Appointment Booking",
    "features.booking.desc": "Book and manage appointments anytime",
    "features.discovery.title": "Doctor Profiles",
    "features.discovery.desc":
      "View doctor details, specialties, and availability",
    "features.services.title": "Health Records",
    "features.services.desc":
      "Access your medical data, prescriptions, and reports",
    "features.notifications.title": "Notifications",
    "features.notifications.desc": "Stay updated with reminders and alerts",
    "features.security.title": "Data Protection",
    "features.security.desc": "Your data is securely stored and protected",

    // Doctors
    "doctors.title": "Our Doctors",
    "doctors.subtitle": "Qualified doctors available to support your needs",

    // Download
    "download.title": "Get Started Today",
    "download.subtitle": "Download the app and manage your healthcare easily",

    // Footer
    "footer.tagline": "Digital healthcare, simplified",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.careers": "Careers",
    "footer.press": "Press",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.contact": "Contact",
    "footer.support": "Support",
    "footer.email": "Email",
    "footer.rights": "All rights reserved.",
  },

  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.features": "المميزات",
    "nav.doctors": "التجربة",
    "nav.download": "تحميل",

    // Hero
    "hero.title": "بدون انتظار، بدون تعقيد",
    "hero.subtitle":
      "احجز مواعيدك، تواصل مع الأطباء، وادِر صحتك بسهولة من مكان واحد.",
    "hero.cta.appstore": "تحميل من App Store",
    "hero.cta.playstore": "تحميل من Google Play",

    // App Experience
    "experience.title": "تجربة بسيطة وواضحة",
    "experience.subtitle": "واجهة سهلة تساعدك على إدارة صحتك بدون تعقيد",
    "experience.video.title": "استشارة بالفيديو",
    "experience.video.desc": "تحدث مع طبيبك عبر مكالمات فيديو آمنة",
    "experience.doctors.title": "البحث عن أطباء",
    "experience.doctors.desc": "تصفح الأطباء حسب التخصص والتوفر",
    "experience.specialties.title": "التخصصات",
    "experience.specialties.desc": "الوصول إلى مختلف التخصصات الطبية",
    "experience.booking.title": "حجز المواعيد",
    "experience.booking.desc": "احجز مواعيدك بسرعة وسهولة",
    "experience.notifications.title": "التنبيهات",
    "experience.notifications.desc": "استقبل إشعارات بمواعيدك والتحديثات",

    // Features
    "features.title": "المميزات الأساسية",
    "features.subtitle": "كل ما تحتاجه لإدارة صحتك",
    "features.video.title": "مكالمات فيديو",
    "features.video.desc": "استشارات فيديو آمنة ومستقرة مع الأطباء",
    "features.booking.title": "حجز المواعيد",
    "features.booking.desc": "إدارة المواعيد في أي وقت",
    "features.discovery.title": "ملفات الأطباء",
    "features.discovery.desc": "عرض معلومات الأطباء وتخصصاتهم",
    "features.services.title": "السجلات الصحية",
    "features.services.desc": "الوصول إلى بياناتك الطبية والوصفات",
    "features.notifications.title": "الإشعارات",
    "features.notifications.desc": "تنبيهات للمواعيد والتحديثات",
    "features.security.title": "حماية البيانات",
    "features.security.desc": "بياناتك محفوظة وآمنة",

    // Doctors
    "doctors.title": "الأطباء",
    "doctors.subtitle": "أطباء مؤهلون لمساعدتك",

    // Download
    "download.title": "ابدأ الآن",
    "download.subtitle": "حمّل التطبيق وابدأ بإدارة صحتك بسهولة",

    // Footer
    "footer.tagline": "رعاية صحية رقمية بشكل بسيط",
    "footer.company": "الشركة",
    "footer.about": "من نحن",
    "footer.careers": "الوظائف",
    "footer.press": "الصحافة",
    "footer.legal": "قانوني",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.contact": "تواصل",
    "footer.support": "الدعم",
    "footer.email": "البريد",
    "footer.rights": "جميع الحقوق محفوظة",
  },
};
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
