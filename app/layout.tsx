import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alfa Bouw BV | Bouw in alle zaken, van A tot Z - Renovatie & Nieuwbouw",
  description:
    "Professionele bouwoplossingen van A tot Z. Alfa Bouw BV is uw betrouwbare partner voor nieuwbouw, renovatie, onderhoud en advies. Verbonden met Sword BV en Goteam voor complete projectondersteuning.",
  keywords: [
    "bouw",
    "nieuwbouw",
    "renovatie",
    "onderhoud",
    "bouwadvies",
    "alfa bouw",
    "bouwbedrijf",
    "nederland",
    "sword bv",
    "goteam",
  ],
  authors: [{ name: "Alfa Bouw BV" }],
  creator: "Alfa Bouw BV",
  publisher: "Alfa Bouw BV",
  generator: "v0.app",
  openGraph: {
    title: "Alfa Bouw BV | Bouw in alle zaken, van A tot Z",
    description: "Professionele bouwoplossingen voor nieuwbouw, renovatie en onderhoud",
    type: "website",
    locale: "nl_NL",
  },
  icons: {
    icon: [
      {
        url: "/logobouw.jpeg",
        type: "image/jpeg",
      },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logobouw.jpeg",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="dark">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
