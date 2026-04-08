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
    default: "Bengkel Sitepu | Servis Mobil Terpercaya & Profesional Jakarta",
    template: "%s | Bengkel Sitepu",
  },
  description: "Bengkel Sitepu adalah bengkel mobil profesional di Jakarta yang menyediakan layanan servis rutin, ganti oli, tune up, servis AC, dan turun mesin dengan garansi resmi dan mekanik ahli.",
  keywords: [
    "Bengkel Mobil Jakarta", 
    "Servis Mobil Terdekat", 
    "Bengkel Mobil Sitepu", 
    "Ganti Oli Mobil Jakarta", 
    "Tune Up Mobil Profesional", 
    "Servis AC Mobil Jakarta", 
    "Bengkel Spesialis Mesin",
    "Mekanik Mobil Panggilan Jakarta",
    "Bengkel Mobil Terpercaya",
    "Servis Rem dan Kaki-kaki",
    "Overhaul Mesin Mobil",
    "Bengkel Mobil 24 Jam Jakarta"
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
    siteName: "Bengkel Sitepu",
    title: "Bengkel Sitepu | Servis Mobil Terpercaya & Profesional",
    description: "Layanan servis mobil premium dengan teknologi masa depan. Cepat, transparan, dan bergaransi.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bengkel Sitepu - Professional Automotive Workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bengkel Sitepu | Servis Mobil Terpercaya & Profesional",
    description: "Layanan servis mobil premium dengan teknologi masa depan di Jakarta.",
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
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
