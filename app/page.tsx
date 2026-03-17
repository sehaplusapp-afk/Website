"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { AppExperienceSection } from "@/components/landing/app-experience-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { DoctorsSection } from "@/components/landing/doctors-section"
import { DownloadSection } from "@/components/landing/download-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AppExperienceSection />
          <FeaturesSection />
          {/* <DoctorsSection /> */}
          <DownloadSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
