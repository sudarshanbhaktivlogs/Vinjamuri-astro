import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cinzel, Noto_Sans_Telugu, Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-context";
import { Navbar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/whatsapp-button";
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
  title: "Sri Sudarshan Vastu Jyothishalayam",
  description:
    "Vedic astrology, Vastu consultation, palmistry, gemstone guidance, and spiritual remedies by Sri Vinjamuri Rajendra Prasad garu.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cinzel.variable} ${jakarta.variable} ${telugu.variable}`}
    >
      <body className="bg-[#f8f3ea] text-slate-800 antialiased">
        <LanguageProvider>
          <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.13),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(120,119,198,0.08),transparent_28%),#f8f3ea]">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
