import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Lumexa Power | 24/7 Solar Thermal Power | Non-Tracking CSP',
  description: "World's first non-tracking solar thermal system delivering true 24/7 baseload power at $0.045/kWh. Zero water, 100% capacity factor. Built for the Gulf region.",
  keywords: '24/7 solar power, non-tracking solar thermal, baseload solar energy, dispatchable solar power, solar power UAE, Abu Dhabi solar, continuous solar electricity',
  authors: [{ name: 'Lumexa Power' }],
  openGraph: {
    title: 'Lumexa Power | 24/7 Solar Thermal Power',
    description: "World's first non-tracking solar thermal system delivering true 24/7 baseload power",
    url: 'https://lumexapower.com',
    siteName: 'Lumexa Power',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumexa Power | 24/7 Solar Thermal Power',
    description: "World's first non-tracking solar thermal system",
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
