"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Replace console.log with your analytics endpoint if needed
    if (process.env.NODE_ENV === "development") {
      console.log(metric);
    }
  });
  return null;
}
