"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";

import { translations } from "@/data/translations";
import { useLanguage } from "@/components/language-context";

const navigationItems = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/remedies", key: "remedies" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const copy = translations[language];

  return (
    <header className="sticky top-0 z-50 border-b border-amber-500/20 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-2 py-2 sm:gap-4 sm:px-6 sm:py-3 lg:px-8">
        <div className="flex w-full items-center justify-between gap-2 sm:gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.2)] sm:flex sm:h-11 sm:w-11">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0">
              <p
                className={`whitespace-nowrap font-['Cinzel'] text-[10px] font-semibold tracking-[0.06em] text-amber-300 sm:text-base sm:tracking-[0.18em] ${
                  language === "te" ? "telugu" : "uppercase"
                }`}
              >
                {copy.nav.brandLineOne}
              </p>
              <p
                className={`mt-0.5 whitespace-nowrap text-[7px] tracking-[0.08em] text-slate-300 sm:text-[10px] sm:tracking-[0.18em] ${
                  language === "te" ? "telugu" : "uppercase"
                }`}
              >
                {copy.nav.brandLineTwo}
              </p>
            </div>
          </Link>

          <div className="flex shrink-0 items-center gap-1 sm:gap-3">
            <div className="flex items-center rounded-full border border-amber-500/20 bg-slate-900/60 p-0.5 sm:p-1">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-1.5 py-1 text-[9px] font-semibold transition sm:px-3 sm:py-1.5 sm:text-xs ${
                  language === "en"
                    ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage("te")}
                className={`rounded-full px-1.5 py-1 text-[9px] font-semibold transition sm:px-3 sm:py-1.5 sm:text-xs ${
                  language === "te"
                    ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                తెలుగు
              </button>
            </div>

            <Link
              href="/contact"
              className="inline-flex max-w-[92px] items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-2 py-2 text-center text-[9px] leading-tight font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:scale-[1.02] sm:max-w-none sm:px-4 sm:text-sm"
            >
              {copy.buttons.bookConsultation}
            </Link>
          </div>
        </div>

        <nav className="flex w-full items-center justify-start gap-5 overflow-x-auto pb-0.5 text-[11px] sm:justify-center sm:gap-7 sm:text-sm">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            const label = copy.nav[item.key];

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: isActive ? "#fcd34d" : "#ffffff" }}
                className={`whitespace-nowrap border-b px-1 pb-1 font-medium transition ${
                  isActive
                    ? "border-amber-300"
                    : "border-transparent"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
