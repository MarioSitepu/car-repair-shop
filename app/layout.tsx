import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/SEO/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bengkelsitepu.com"),
  title: {
    default: "Bengkel Sitepu | Bengkel Mobil Medan Johor & Parang 1 Terpercaya",
    template: "%s | Bengkel Sitepu Medan",
  },
  description: "Bengkel Sitepu adalah bengkel mobil profesional di Medan Johor (Parang 1) yang menyediakan layanan servis rutin, ganti oli, tune up, spesialis pickup, dan turun mesin dengan mekanik ahli.",
  keywords: [
    "Bengkel Sitepu",
    "Bengkel Sitepu Medan",
    "Bengkel Parang 1",
    "Bengkel Mobil Medan Johor",
    "Bengkel Medan",
    "Bengkel Pickup Medan",
    "Servis Mobil Medan Terpercaya",
    "Ganti Oli Mobil Medan",
    "Tune Up Mobil Medan",
    "Spesialis Mesin Medan",
    "Bengkel Mobil Kwala Bekala"
  ],
  authors: [{ name: "Bengkel Sitepu" }],
  creator: "Bengkel Sitepu",
  publisher: "Bengkel Sitepu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bengkelsitepu.com",
    siteName: "Bengkel Sitepu Medan",
    title: "Bengkel Sitepu | Bengkel Mobil Parang 1 Medan Johor",
    description: "Layanan servis mobil premium di Medan Johor. Spesialis mesin, tune up, dan perbaikan pickup. Cepat, transparan, dan bergaransi.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bengkel Sitepu Medan - Professional Automotive Workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bengkel Sitepu | Bengkel Mobil Parang 1 Medan Johor",
    description: "Layanan servis mobil premium dan spesialis pickup di Medan Johor.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "sX7GKm0N3obXQ61mcp0Yqm7g9o4HFVml0EbTIdkdK9Q",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 scroll-smooth">
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
