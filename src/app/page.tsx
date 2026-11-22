"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  Gem,
  Globe,
  HandCoins,
  Sparkles,
  Star,
} from "lucide-react";

import { useLanguage } from "@/components/language-context";
import { translations } from "@/data/translations";
import { buildWhatsAppUrl } from "@/lib/contact";

const icons = [Compass, Gem, HandCoins, Sparkles];

export default function HomePage() {
  const { language } = useLanguage();
  const copy = translations[language];
  const [expandedTestimonials, setExpandedTestimonials] = useState<string[]>([]);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  const toggleTestimonial = (name: string) => {
    setExpandedTestimonials((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="grid gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-900 shadow-sm">
            <BadgeCheck className="h-3.5 w-3.5" />
            {copy.home.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            <span className="block font-['Cinzel'] text-amber-700">{copy.home.headline}</span>
            <span className="mt-3 block text-slate-900">{copy.home.title}</span>
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">{copy.home.subtitle}</p>
          <p className="mt-3 text-base leading-7 text-slate-600">{copy.home.legacy}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buildWhatsAppUrl("Namaskaram Sri Sudarshan Vastu Jyothishalayam, I would like to book a consultation.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20"
            >
              {copy.buttons.consultWhatsApp} <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white/70 px-5 py-3 text-sm font-semibold text-amber-700 shadow-sm"
            >
              {copy.buttons.exploreServices}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-amber-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-[0_0_35px_rgba(217,119,6,0.16)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,190,85,0.12),transparent_25%),radial-gradient(circle_at_bottom,_rgba(216,180,254,0.1),transparent_30%)]" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-200">
                  {copy.common.trustedGuidance}
                </span>
                <Globe className="h-5 w-5 text-amber-300" />
              </div>

              <div className="relative overflow-hidden rounded-[1.5rem] border border-amber-500/20 bg-gradient-to-br from-amber-100/10 via-slate-900 to-slate-950 p-5">
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-amber-300/30 bg-[radial-gradient(circle,_rgba(250,204,21,0.24),rgba(15,23,42,0.2)_48%,rgba(15,23,42,0.8)_100%)] shadow-[inset_0_0_20px_rgba(251,191,36,0.15)]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-amber-200/40 text-3xl text-amber-200">ॐ</div>
                </div>
                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{copy.common.specialisation}</p>
                    <p className="mt-2 font-['Cinzel'] text-2xl text-white">Vedic Astrology · Vastu · Palmistry</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-200">{copy.common.nriCare}</p>
                      <p className="mt-2 text-lg font-semibold text-white">{copy.common.globalConsultations}</p>
                    </div>
                    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-200">{copy.common.remedies}</p>
                      <p className="mt-2 text-lg font-semibold text-white">{copy.common.authenticPersonal}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-2 grid gap-5 rounded-3xl border border-amber-500/20 bg-slate-900/60 p-6 md:grid-cols-3">
        {copy.home.trustBadges.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5 text-center">
            <p className="font-['Cinzel'] text-3xl text-amber-300">{metric.value}</p>
            <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700">{copy.common.coreServices}</p>
            <h2 className="mt-2 font-['Cinzel'] text-4xl text-slate-900">{copy.home.sectionTitle}</h2>
          </div>
          <Link href="/services" className="hidden items-center gap-2 text-sm font-medium text-amber-700 sm:inline-flex">
            {copy.common.viewAllServices} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {copy.home.featuredServices.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-amber-500/15 bg-slate-900/70 p-6 shadow-[0_0_25px_rgba(15,23,42,0.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-['Cinzel'] text-2xl text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-amber-200"
                >
                  {copy.buttons.learnMore} <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700">{copy.common.clientVoices}</p>
          <h2 className="mt-2 font-['Cinzel'] text-4xl text-slate-900">{copy.home.testimonialTitle}</h2>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-3">
          {(showAllTestimonials
            ? copy.home.testimonials
            : copy.home.testimonials.slice(0, 3)
          ).map((testimonial) => {
            const isExpanded = expandedTestimonials.includes(testimonial.name);

            return (
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className="flex min-h-[360px] flex-col rounded-3xl border border-amber-500/15 bg-slate-900/70 p-6"
              >
                <div className="mb-4 flex items-center gap-2 text-amber-300">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={`${testimonial.name}-${index}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="text-[11px] uppercase tracking-[0.16em] text-amber-300">
                  {copy.home.testimonialProblemLabel}
                </p>
                <p className="mt-1 text-sm font-semibold leading-6 text-white">{testimonial.problem}</p>

                <p className="mt-4 text-sm leading-7 text-slate-300">“{testimonial.quote}”</p>

                {isExpanded && (
                  <div className="mt-4 border-t border-slate-700/70 pt-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-amber-300">
                      {copy.home.testimonialSolutionLabel}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{testimonial.fullStory}</p>
                  </div>
                )}

                <div className="mt-auto pt-5">
                  <p className="mb-3 font-semibold text-white">— {testimonial.name}</p>
                  <button
                    type="button"
                    onClick={() => toggleTestimonial(testimonial.name)}
                    className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 px-4 py-2 text-xs font-semibold text-amber-200 transition hover:border-amber-300 hover:bg-amber-400/10"
                  >
                    {isExpanded ? copy.home.testimonialShowLess : copy.home.testimonialReadMore}
                    <ArrowRight className={`h-3.5 w-3.5 transition ${isExpanded ? "rotate-90" : ""}`} />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {copy.home.testimonials.length > 3 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllTestimonials((current) => !current)}
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-5 py-3 text-sm font-semibold text-amber-800 transition hover:bg-amber-500/20"
            >
              {showAllTestimonials ? copy.home.testimonialShowFewer : copy.home.testimonialShowAll}
              <ArrowRight className={`h-4 w-4 transition ${showAllTestimonials ? "rotate-90" : ""}`} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
