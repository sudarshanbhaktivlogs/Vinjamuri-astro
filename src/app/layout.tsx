import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cinzel, Noto_Sans_Telugu, Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-context";
import { Navbar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { DevBrandBadge } from "@/components/dev-brand-badge";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const telugu = Noto_Sans_Telugu({
  variable: "--font-telugu",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vinjamuri.in"),
  title: {
    default: "Sri Sudarshan Vastu Jyothishalayam | Vedic Astrology in Bapatla",
    template: "%s | Sri Sudarshan Vastu Jyothishalayam",
  },
  description:
    "Authentic Vedic astrology, Vastu consultation, horoscope analysis, palmistry, marriage matching, muhurtham and personalised remedies by Sri Vinjamuri Rajendra Prasad garu in Bapatla, Andhra Pradesh.",
  keywords: [
    "Vedic astrology Bapatla",
    "Vastu consultant Andhra Pradesh",
    "Sri Sudarshan Vastu Jyothishalayam",
    "Sri Vinjamuri Rajendra Prasad",
    "horoscope consultation",
    "marriage matching",
    "muhurtham",
    "palmistry",
    "Vastu remedies",
    "Telugu astrology",
  ],
  authors: [{ name: "Sri Vinjamuri Rajendra Prasad garu" }],
  creator: "Sri Sudarshan Vastu Jyothishalayam",
  publisher: "Sri Sudarshan Vastu Jyothishalayam",
  category: "Astrology and Spiritual Consultation",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/globe.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["te_IN"],
    url: "https://vinjamuri.in",
    siteName: "Sri Sudarshan Vastu Jyothishalayam",
    title: "Vedic Astrology & Vastu Consultation in Andhra Pradesh",
    description:
      "Personal horoscope, Vastu, palmistry, marriage matching and remedial guidance with Sri Vinjamuri Rajendra Prasad garu.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sri Sudarshan Vastu Jyothishalayam — Vedic Astrology and Vastu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Sudarshan Vastu Jyothishalayam",
    description:
      "Trusted Vedic astrology and Vastu guidance in Bapatla, Andhra Pradesh.",
    images: ["/og-image.svg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sri Sudarshan Vastu Jyothishalayam",
  alternateName: "Sri Vinjamuri Rajendra Prasad garu",
  url: "https://vinjamuri.in",
  telephone: "+91-97045-27404",
  email: "sudarshanbhaktivlogs@gmail.com",
  description:
    "Vedic astrology, Vastu Shastra, palmistry, horoscope analysis, marriage matching, muhurtham and personalised spiritual remedies.",
  areaServed: ["India", "Andhra Pradesh", "Bapatla", "Global NRI clients"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rajavolu",
    addressRegion: "Andhra Pradesh",
    postalCode: "522259",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://www.youtube.com/@SudarshanBhaktivlogs",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cinzel.variable} ${jakarta.variable} ${telugu.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#f8f3ea] text-slate-800 antialiased">
        <LanguageProvider>
          <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.13),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(120,119,198,0.08),transparent_28%),#f8f3ea]">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
            <DevBrandBadge />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
