import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Vastu Remedies, Gemstones, Rudraksha & Yantras",
  description:
    "Explore personalised Vastu remedies, gemstones, Nepalese Rudraksha, Vastu Yantras and traditional dosha nivarana guidance.",
  alternates: { canonical: "/remedies" },
};

export default function RemediesLayout({ children }: { children: ReactNode }) {
  return children;
}
