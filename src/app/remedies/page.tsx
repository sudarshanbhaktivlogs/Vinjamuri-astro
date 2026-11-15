"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Gem, Sparkles, Star } from "lucide-react";

import { translations } from "@/data/translations";
import { useLanguage } from "@/components/language-context";

type RemedyCategory = "All" | "Gemstones" | "Rudrakshas" | "Yantras";

export default function RemediesPage() {
  const { language } = useLanguage();
  const copy = translations[language];
  const [selectedCategory, setSelectedCategory] = useState<RemedyCategory>("All");

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") {
      return copy.remedies.items;
    }

    return copy.remedies.items.filter((item) => item.category === selectedCategory);
  }, [copy.remedies.items, selectedCategory]);

  const categories: RemedyCategory[] = [
    "All",
    "Gemstones",
    "Rudrakshas",
    "Yantras",
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-3xl"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-700">
          <Gem className="h-3.5 w-3.5" />
          {copy.remedies.eyebrow}
        </div>
        <h1 className="font-['Cinzel'] text-4xl text-slate-900 sm:text-5xl">{copy.remedies.heading}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">{copy.remedies.intro}</p>
      </motion.section>

      <div className="mt-10 flex flex-wrap gap-3">
        {copy.remedies.categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category as RemedyCategory)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              selectedCategory === category
                ? "border-amber-500 bg-amber-500 text-slate-950"
                : "border-amber-500/30 bg-slate-900/60 text-slate-200 hover:border-amber-500 hover:text-amber-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-amber-500/15 bg-slate-900/70 p-6 shadow-[0_0_25px_rgba(15,23,42,0.35)]"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-300">
              {item.category === "Gemstones" || item.category === "నవరత్నాలు" ? <Star className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">{item.category}</p>
            <h2 className="mt-3 font-['Cinzel'] text-2xl text-white">{item.name}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm text-amber-200 transition hover:bg-amber-500 hover:text-slate-950"
            >
              {copy.buttons.inquireAvailability} <ArrowRight className="h-4 w-4" />
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
