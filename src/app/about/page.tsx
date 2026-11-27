"use client";

import { ExternalLink, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

import { translations } from "@/data/translations";
import { useLanguage } from "@/components/language-context";

const videoEmbeds = [
  "https://www.youtube.com/embed/7S6J1vrh1fU?si=1n4G8OQWJBu0kXqN",
  "https://www.youtube.com/embed/3j2v5wMOVxE?si=V71l3IwahJ5FFX8u",
  "https://www.youtube.com/embed/dQw4w9WgXcQ?si=5k4qN3N5A3TK5g7r",
  "https://www.youtube.com/embed/ScMzIvxBSi4?si=1lP5j1g5Z3sS1mN5",
] as const;

export default function AboutPage() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-700">
            <PlayCircle className="h-3.5 w-3.5" />
            {copy.about.eyebrow}
          </p>
          <h1 className="font-['Cinzel'] text-4xl text-slate-900 sm:text-5xl">{copy.about.heading}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">{copy.about.intro}</p>
          <p className="mt-5 text-base leading-8 text-slate-700">{copy.about.bioOne}</p>
          <p className="mt-4 text-base leading-8 text-slate-700">{copy.about.bioTwo}</p>
        </div>

        <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
          <p className="font-['Cinzel'] text-2xl text-amber-300">{copy.about.legacyTitle}</p>
          <ul className="mt-6 space-y-4 text-slate-300">
            {copy.about.legacyList.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-200 transition hover:bg-amber-500 hover:text-slate-950"
          >
            {copy.about.bookSession} <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </motion.section>

      <section className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 grid gap-6 overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-slate-950 to-slate-900 p-6 md:grid-cols-[0.7fr_1.3fr] md:items-center md:p-8"
        >
          <a
            href="https://www.youtube.com/@SudarshanBhaktivlogs"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Sudarshan Bhakti Vlogs YouTube channel"
            className="group flex h-44 items-center justify-center rounded-2xl border border-red-500/25 bg-gradient-to-br from-red-600/30 via-slate-900 to-amber-500/10 outline-none transition duration-300 hover:-translate-y-1 hover:border-red-400/60 hover:shadow-[0_12px_35px_rgba(220,38,38,0.18)] focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_12px_30px_rgba(220,38,38,0.35)] transition duration-300 group-hover:scale-110">
                <PlayCircle className="h-9 w-9" />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-red-200">
                {copy.about.youtubeChannelLabel}
              </p>
              <p className="mt-1 text-[11px] font-medium text-slate-300">
                {language === "te" ? "చానెల్‌ను తెరవండి" : "Open Channel"}
              </p>
            </div>
          </a>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">YouTube</p>
            <h2 className="mt-2 font-['Cinzel'] text-3xl text-white">{copy.about.youtubeChannelTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{copy.about.youtubeChannelDescription}</p>
            <a
              href="https://www.youtube.com/@SudarshanBhaktivlogs"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition hover:bg-red-500"
            >
              <PlayCircle className="h-4 w-4" />
              {copy.about.youtubeSubscribe}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700">{copy.about.videoSectionLabel}</p>
            <h2 className="mt-2 font-['Cinzel'] text-3xl text-slate-900">{copy.about.videoSectionTitle}</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {copy.about.videos.map((video, index) => (
            <div key={video.title} className="overflow-hidden rounded-3xl border border-amber-500/20 bg-slate-900/70">
              <div className="relative aspect-video w-full overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.35),rgba(2,6,23,0.95)_45%,rgba(2,6,23,1)_100%)]">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.15),rgba(15,23,42,0.75))]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-slate-200">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-200">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    YouTube
                  </div>
                  <p className="text-xl font-medium text-white">
                    {language === "te" ? "వీడియో అందుబాటులో లేదు" : "Video unavailable"}
                  </p>
                  <p className="text-sm text-slate-300">
                    {language === "te" ? "దయచేసి యూట్యూబ్ ఛానెల్‌ను సందర్శించండి" : "Please visit our YouTube channel"}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-['Cinzel'] text-xl text-white">{video.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
