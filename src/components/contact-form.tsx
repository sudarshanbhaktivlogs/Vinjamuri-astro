"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, MessageSquareText } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { translations } from "@/data/translations";
import { useLanguage } from "@/components/language-context";

type FormState = {
  name: string;
  phone: string;
  type: string;
  mode: string;
  dob: string;
  tob: string;
  pob: string;
  message: string;
};

type StatusState = {
  type: "success" | "error";
  text: string;
};

const birthRequiredTypes = new Set(["Astrology", "Marriage Matching", "జ్యోతిష్యం", "వివాహ పొంతన"]);

export function ContactForm() {
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const copy = translations[language];
  const consultationTypes = copy.contact.formOptions;
  const modeOptions = copy.contact.modeOptions;

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    type: consultationTypes[0],
    mode: modeOptions[0],
    dob: "",
    tob: "",
    pob: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<StatusState | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showBirthDetails = birthRequiredTypes.has(form.type);

  useEffect(() => {
    const serviceFromQuery = searchParams.get("service");
    if (serviceFromQuery) {
      setForm((current) => ({ ...current, type: serviceFromQuery }));
    }
  }, [searchParams]);

  useEffect(() => {
    if (!showBirthDetails) {
      setForm((current) => ({ ...current, dob: "", tob: "", pob: "" }));
    }
  }, [showBirthDetails]);

  const previewMessage = useMemo(() => {
    const lines = [
      `${copy.footer.heading} ${copy.contact.form.messagePreview}`,
      `${copy.contact.form.fullName}: ${form.name || "-"}`,
      `${copy.contact.form.phone}: ${form.phone || "-"}`,
      `${copy.contact.form.type}: ${form.type}`,
      `${copy.contact.form.mode}: ${form.mode}`,
    ];

    if (showBirthDetails) {
      lines.push(`${copy.contact.form.dob}: ${form.dob || "-"}`);
      lines.push(`${copy.contact.form.tob}: ${form.tob || "-"}`);
      lines.push(`${copy.contact.form.pob}: ${form.pob || "-"}`);
    }

    lines.push(`${copy.contact.form.message}: ${form.message || "-"}`);

    return lines.join("\n");
  }, [copy, form, showBirthDetails]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setStatus(null);
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      nextErrors.name = copy.contact.validation.nameRequired;
    }

    if (!form.phone.trim()) {
      nextErrors.phone = copy.contact.validation.phoneRequired;
    }

    if (showBirthDetails) {
      if (!form.dob) nextErrors.dob = copy.contact.validation.dobRequired;
      if (!form.tob) nextErrors.tob = copy.contact.validation.tobRequired;
      if (!form.pob.trim()) nextErrors.pob = copy.contact.validation.pobRequired;
    }

    if (!form.message.trim()) {
      nextErrors.message = copy.contact.validation.messageRequired;
    }

    return nextErrors;
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      "Namaskaram,",
      `I would like to request a consultation with ${copy.footer.heading}.`,
      "",
      `${copy.contact.form.fullName}: ${form.name}`,
      `${copy.contact.form.phone}: ${form.phone}`,
      `${copy.contact.form.type}: ${form.type}`,
      `${copy.contact.form.mode}: ${form.mode}`,
    ];

    if (showBirthDetails) {
      lines.push(`${copy.contact.form.dob}: ${form.dob}`);
      lines.push(`${copy.contact.form.tob}: ${form.tob}`);
      lines.push(`${copy.contact.form.pob}: ${form.pob}`);
    }

    lines.push("", `${copy.contact.form.message}: ${form.message}`);
    return lines.join("\n");
  };

  const handleWhatsAppSubmit = () => {
    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({ type: "error", text: copy.contact.error });
      return;
    }

    const encodedMessage = encodeURIComponent(buildWhatsAppMessage());
    window.open(`https://wa.me/?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
  };

  const handleEmailSubmit = async () => {
    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({ type: "error", text: copy.contact.error });
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

    if (!accessKey) {
      setStatus({ type: "error", text: copy.contact.emailConfigError });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Consultation request: ${form.type}`,
          from_name: form.name,
          phone: form.phone,
          consultation_type: form.type,
          consultation_mode: form.mode,
          date_of_birth: form.dob,
          time_of_birth: form.tob,
          place_of_birth: form.pob,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "Unable to send the email request.");
      }

      setStatus({ type: "success", text: copy.contact.success });
      setErrors({});
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to send the request.";
      setStatus({ type: "error", text: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
      <div className="rounded-3xl border border-amber-500/20 bg-slate-900/70 p-6 shadow-[0_0_30px_rgba(15,23,42,0.35)]">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-300">
            <MessageSquareText className="h-5 w-5" />
          </div>
          <div>
            <p className="font-['Cinzel'] text-2xl text-white">{copy.contact.heading}</p>
            <p className="text-sm text-slate-300">{copy.contact.intro}</p>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
          <p className="font-['Cinzel'] text-xl text-white">{copy.contact.bookingGuideTitle}</p>
          <ol className="mt-3 list-decimal list-inside space-y-2 text-sm leading-6 text-slate-300">
            {copy.contact.bookingSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-200">
              {copy.contact.form.fullName}
            </label>
            <input
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-amber-400"
              placeholder={copy.contact.placeholders.fullName}
            />
            {errors.name ? <p className="mt-2 text-xs text-red-300">{errors.name}</p> : null}
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-200">
              {copy.contact.form.phone}
            </label>
            <input
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-amber-400"
              placeholder={copy.contact.placeholders.phone}
            />
            {errors.phone ? <p className="mt-2 text-xs text-red-300">{errors.phone}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              {copy.contact.form.type}
            </label>
            <select
              value={form.type}
              onChange={(event) => updateField("type", event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-amber-400"
            >
              {consultationTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              {copy.contact.form.mode}
            </label>
            <div className="flex rounded-xl border border-slate-700 bg-slate-950/60 p-1">
              {modeOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => updateField("mode", option)}
                  className={`flex-1 rounded-lg px-3 py-2 text-sm transition ${
                    form.mode === option
                      ? "bg-amber-500 text-slate-950"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {showBirthDetails ? (
            <>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  {copy.contact.form.dob}
                </label>
                <input
                  type="date"
                  value={form.dob}
                  onChange={(event) => updateField("dob", event.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-amber-400"
                />
                {errors.dob ? <p className="mt-2 text-xs text-red-300">{errors.dob}</p> : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  {copy.contact.form.tob}
                </label>
                <input
                  type="time"
                  value={form.tob}
                  onChange={(event) => updateField("tob", event.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-amber-400"
                />
                {errors.tob ? <p className="mt-2 text-xs text-red-300">{errors.tob}</p> : null}
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  {copy.contact.form.pob}
                </label>
                <input
                  value={form.pob}
                  onChange={(event) => updateField("pob", event.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-amber-400"
                  placeholder={copy.contact.placeholders.pob}
                />
                {errors.pob ? <p className="mt-2 text-xs text-red-300">{errors.pob}</p> : null}
              </div>
            </>
          ) : null}

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-200">
              {copy.contact.form.message}
            </label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-amber-400"
              placeholder={copy.contact.placeholders.message}
            />
            {errors.message ? <p className="mt-2 text-xs text-red-300">{errors.message}</p> : null}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleWhatsAppSubmit}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:opacity-95"
          >
            <ArrowRight className="h-4 w-4" />
            {copy.contact.sendWhatsApp}
          </button>

          <button
            type="button"
            onClick={handleEmailSubmit}
            disabled={isSubmitting}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-5 py-3 text-sm font-semibold text-amber-200 transition hover:bg-amber-500 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
            {copy.contact.sendEmail}
          </button>
        </div>

        {status ? (
          <div
            className={`mt-5 flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-100"
                : "border-red-500/40 bg-red-500/10 text-red-100"
            }`}
            role="status"
          >
            {status.type === "success" ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4" />
            ) : (
              <MessageSquareText className="mt-0.5 h-4 w-4" />
            )}
            <span>{status.text}</span>
          </div>
        ) : null}
      </div>

      <aside className="space-y-6 rounded-3xl border border-amber-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-[0_0_30px_rgba(15,23,42,0.35)]">
        <div>
          <p className="font-['Cinzel'] text-2xl text-amber-300">{copy.contact.form.messagePreview}</p>
          <pre className="mt-5 whitespace-pre-wrap break-words rounded-2xl border border-amber-500/20 bg-slate-950/70 p-4 font-sans text-sm leading-7 text-slate-200">
            {previewMessage}
          </pre>
        </div>

        <div className="rounded-2xl border border-amber-500/20 bg-slate-950/60 p-4">
          <p className="font-['Cinzel'] text-xl text-white">{copy.contact.faqTitle}</p>
          <div className="mt-4 space-y-4">
            {copy.contact.faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-slate-700 bg-slate-900/60 p-3">
                <p className="font-medium text-amber-200">{faq.question}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
