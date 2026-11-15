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
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">{copy.about.videoSectionLabel}</p>
            <h2 className="mt-2 font-['Cinzel'] text-3xl text-white">{copy.about.videoSectionTitle}</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {copy.about.videos.map((video, index) => (
            <div key={video.title} className="overflow-hidden rounded-3xl border border-amber-500/20 bg-slate-900/70">
              <div className="aspect-video w-full overflow-hidden bg-slate-950">
                <iframe
                  className="h-full w-full"
                  src={videoEmbeds[index]}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
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
