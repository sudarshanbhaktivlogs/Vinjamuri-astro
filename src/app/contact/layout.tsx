import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Book a Vedic Astrology or Vastu Consultation",
  description:
    "Request an astrology, Vastu, palmistry or spiritual remedies consultation online or in person through WhatsApp or email.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
