"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  duration: string;
  mode: string;
  includes: string[];
  icon: LucideIcon;
  ctaLabel: string;
};

export function ServiceCard({
  title,
  description,
  duration,
  mode,
  includes,
  icon: Icon,
  ctaLabel,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="group rounded-2xl border border-amber-500/15 bg-slate-900/70 p-6 shadow-[0_0_25px_rgba(15,23,42,0.45)]"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-300">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-200">
          {duration}
        </span>
      </div>

      <h3 className="mt-5 font-['Cinzel'] text-2xl text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>

      <div className="mt-5 rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-200">
        <p className="font-medium text-amber-200">{mode}</p>
        <ul className="mt-2 space-y-1 text-xs text-slate-300">
          {includes.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <Link
        href={`/contact?service=${encodeURIComponent(title)}`}
        className="mt-6 inline-flex items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-200 transition hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950"
      >
        {ctaLabel}
      </Link>
    </motion.article>
  );
}
