import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Seha Plus | Your Doctor Is Closer Than Ever',
  description: 'Experience healthcare reimagined. Connect with certified doctors instantly through video consultations, book appointments, and manage your health from home.',
  keywords: ['telemedicine', 'healthcare', 'doctor', 'video consultation', 'medical app', 'صحة', 'طبيب'],
  authors: [{ name: 'Seha Plus' }],
  openGraph: {
    title: 'Seha Plus | Your Doctor Is Closer Than Ever',
    description: 'Experience healthcare reimagined. Connect with certified doctors instantly.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seha Plus | Your Doctor Is Closer Than Ever',
    description: 'Experience healthcare reimagined. Connect with certified doctors instantly.',
  },
  icons: {
    icon: '/images/seha-logo.png',
    apple: '/images/seha-logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1B8AA8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
