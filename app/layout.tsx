import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Free AI Audit of Your Merchant Account | Diversified Payments",
  description:
    "Uncover hidden fees and save thousands with our proprietary AI audit of your credit card processing statement. Get a detailed analysis of your true effective rate.",
  keywords:
    "merchant account audit, credit card processing fees, payment processing, AI audit, hidden fees, payment processing savings",
  openGraph: {
    title: "Free AI Audit of Your Merchant Account | Diversified Payments",
    description:
      "Uncover hidden fees and save thousands with our proprietary AI audit of your credit card processing statement.",
    url: "https://diversifiedpayments.com",
    siteName: "Diversified Payments",
    images: [
      {
        url: "/ai-financial-analysis.png",
        width: 1200,
        height: 630,
        alt: "Diversified Payments AI Audit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Audit of Your Merchant Account | Diversified Payments",
    description:
      "Uncover hidden fees and save thousands with our proprietary AI audit of your credit card processing statement.",
    images: ["/ai-financial-analysis.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563eb",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
