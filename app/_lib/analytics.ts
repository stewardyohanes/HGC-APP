"use client";

type AnalyticsPrimitive = string | number | boolean;
type AnalyticsParams = Record<
  string,
  AnalyticsPrimitive | null | undefined
>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (
      command: "event" | "config" | "js",
      target: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}

function cleanParams(params: AnalyticsParams): Record<string, AnalyticsPrimitive> {
  const entries = Object.entries(params).filter(
    (entry): entry is [string, AnalyticsPrimitive] =>
      entry[1] !== null && entry[1] !== undefined
  );

  return Object.fromEntries(entries);
}

export function trackEvent(
  eventName: string,
  params: AnalyticsParams = {}
): void {
  if (typeof window === "undefined") return;

  const payload = cleanParams(params);

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
    return;
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...payload,
    });
  }
}
