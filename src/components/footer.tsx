"use client";

import Link from "next/link";
import { Clock3, MapPin, PlayCircle } from "lucide-react";

import { translations } from "@/data/translations";
import { useLanguage } from "@/components/language-context";

export function Footer() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <footer className="border-t border-amber-500/20 bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <p className="font-['Cinzel'] text-xl font-semibold text-amber-300">
            {copy.footer.heading}
          </p>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-amber-400" />
              <span>{copy.footer.address}</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-4 w-4 text-amber-400" />
              <span>{copy.footer.officeHours}</span>
            </div>
          </div>
        </div>

        <div>
          <p className="font-['Cinzel'] text-lg font-semibold text-amber-300">
            {copy.footer.quickLinks}
          </p>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <Link href="/" className="block transition hover:text-amber-200">
              {copy.nav.home}
            </Link>
            <Link href="/services" className="block transition hover:text-amber-200">
              {copy.nav.services}
            </Link>
            <Link href="/remedies" className="block transition hover:text-amber-200">
              {copy.nav.remedies}
            </Link>
            <Link href="/about" className="block transition hover:text-amber-200">
              {copy.nav.about}
            </Link>
          </div>
        </div>

        <div>
          <p className="font-['Cinzel'] text-lg font-semibold text-amber-300">
            {copy.footer.contact}
          </p>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <a href="tel:+919704527404" className="block transition hover:text-amber-200">
              +91 97045 27404
            </a>
            <a href="mailto:sudarshanbhaktivlogs@gmail.com" className="block transition hover:text-amber-200">
              sudarshanbhaktivlogs@gmail.com
            </a>
            <a
              href="https://www.youtube.com/@SudarshanBhaktivlogs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-amber-200"
            >
              <PlayCircle className="h-4 w-4 text-amber-400" />
              {copy.footer.youtube}
            </a>
            <a
              href="https://github.com/sudarshanbhaktivlogs"
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-amber-200"
            >
              github.com/sudarshanbhaktivlogs
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-amber-500/20 pt-5 text-center text-xs text-slate-400">
        © 2026 Sri Sudarshan Vastu Jyothishalayam. All rights reserved.
      </div>
    </footer>
  );
}
