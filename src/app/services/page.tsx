"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  Gem,
  HandCoins,
  Sparkles,
  Stars,
} from "lucide-react";

import { translations } from "@/data/translations";
import { useLanguage } from "@/components/language-context";
import { ServiceCard } from "@/components/service-card";

const icons = [Stars, Building2, HandCoins, CalendarClock, Gem];

export default function ServicesPage() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-12 max-w-3xl"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-700">
          <Sparkles className="h-3.5 w-3.5" />
          {copy.services.eyebrow}
        </div>
        <h1 className="font-['Cinzel'] text-4xl text-slate-900 sm:text-5xl">
          {copy.services.heading}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">{copy.services.intro}</p>
      </motion.section>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {copy.services.services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            duration={service.duration}
            mode={service.mode}
            includes={service.includes}
            icon={icons[index % icons.length]}
            ctaLabel={copy.buttons.bookThisService}
          />
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 to-slate-900 p-8 text-center">
        <p className="font-['Cinzel'] text-3xl text-slate-900">{copy.services.ctaTitle}</p>
        <p className="mt-3 text-slate-700">{copy.services.ctaText}</p>
        <a
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-semibold text-slate-950"
        >
          {copy.services.ctaButton} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
