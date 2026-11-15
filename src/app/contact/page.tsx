import { Suspense } from "react";

import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Suspense fallback={<div className="rounded-3xl border border-amber-500/20 bg-slate-900/70 p-8 text-slate-200">Loading consultation form...</div>}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
