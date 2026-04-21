"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { trackEvent } from "../_lib/analytics";

const routeToWhatsAppEvent: Record<string, string> = {
  "/worship/manado": "wa_click_worship_manado",
  "/group": "wa_click_group",
  "/serve": "wa_click_serve",
  "/give": "wa_click_give",
};

type AnalyticsClientProps = {
  measurementId?: string;
};

export default function AnalyticsClient({
  measurementId,
}: AnalyticsClientProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId || typeof window.gtag !== "function") return;

    const query = window.location.search;
    const pagePath = query ? `${pathname}${query}` : pathname;
    window.gtag("config", measurementId, {
      page_path: pagePath,
    });
  }, [measurementId, pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href*="wa.me/"]');
      if (!link) return;

      const pagePath = window.location.pathname;
      const eventName = routeToWhatsAppEvent[pagePath] ?? "wa_click_generic";
      const linkText = (link.textContent || "").trim().slice(0, 80);

      trackEvent(eventName, {
        href: link.href,
        page_path: pagePath,
        link_text: linkText,
      });
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
