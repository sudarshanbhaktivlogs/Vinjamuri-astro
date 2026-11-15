import { MessageCircleMore } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/?text=Namaskaram%20Sri%20Sudarshan%20Vastu%20Jyothishalayam%2C%20I%20would%20like%20to%20book%20a%20consultation."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.5)] transition hover:scale-105 motion-safe:animate-pulse"
    >
      <MessageCircleMore className="h-7 w-7" />
    </a>
  );
}
