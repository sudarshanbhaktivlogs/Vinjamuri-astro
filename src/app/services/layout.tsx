import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Vedic Astrology & Vastu Consultation Services",
  description:
    "Book horoscope, Kundli, Vastu, palmistry, muhurtham, marriage matching and Vedic homam consultations with Sri Sudarshan Vastu Jyothishalayam.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
