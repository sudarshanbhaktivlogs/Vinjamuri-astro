export const BUSINESS_PHONE = "919704527404";
export const BUSINESS_PHONE_DISPLAY = "+91 97045 27404";
export const BUSINESS_EMAIL = "sudarshanbhaktivlogs@gmail.com";

export const buildWhatsAppUrl = (message: string) => {
  const base = `https://wa.me/${BUSINESS_PHONE}`;
  return `${base}?text=${encodeURIComponent(message)}`;
};
