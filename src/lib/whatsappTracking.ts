export const whatsappLink = (source: string) => {
  const message = `Hola, quiero información sobre los servicios de COALVA. Referencia: ${source}.`;
  return `https://wa.me/525545428322?text=${encodeURIComponent(message)}`;
};

export const trackWhatsAppClick = (source: string) => {
  const w = window as typeof window & { dataLayer?: Record<string, unknown>[]; gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", "whatsapp_click", { service: source, page_path: window.location.pathname });
};
