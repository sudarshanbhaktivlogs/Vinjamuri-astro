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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.2)]">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="font-['Cinzel'] text-sm font-semibold tracking-[0.18em] text-amber-300 uppercase sm:text-base">
              Sri Sudarshan
            </p>
            <p className="text-[10px] tracking-[0.18em] text-slate-300 uppercase">
              Vastu Jyothishalayam
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            const label = copy.nav[item.key];

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-amber-300"
                    : "text-slate-300 hover:text-amber-200"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-amber-500/20 bg-slate-900/60 p-1">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold transition sm:px-3 sm:text-xs ${
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
              className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold transition sm:px-3 sm:text-xs ${
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
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:scale-[1.02]"
          >
            {copy.buttons.bookConsultation}
          </Link>
        </div>
      </div>
    </header>
  );
}
