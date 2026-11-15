import { MessageCircleMore } from "lucide-react";

import { buildWhatsAppUrl } from "@/lib/contact";

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl("Namaskaram Sri Sudarshan Vastu Jyothishalayam, I would like to book a consultation.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.5)] transition hover:scale-105 motion-safe:animate-pulse"
    >
      <MessageCircleMore className="h-7 w-7" />
    </a>
  );
}
