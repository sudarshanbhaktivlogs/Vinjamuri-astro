import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Sri Vinjamuri Rajendra Prasad Garu",
  description:
    "Learn about Sri Vinjamuri Rajendra Prasad garu's Vedic astrology, Vastu Shastra, palmistry and spiritual guidance practice.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
