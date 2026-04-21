import { afterEach, describe, expect, mock, test } from "bun:test";
import { trackEvent } from "./analytics";

const originalWindow = globalThis.window;

function setWindow(value: unknown) {
  Object.defineProperty(globalThis, "window", {
    value,
    writable: true,
    configurable: true,
  });
}

describe("trackEvent", () => {
  afterEach(() => {
    setWindow(originalWindow);
  });

  test("does nothing when window is unavailable", () => {
    setWindow(undefined);

    expect(() => {
      trackEvent("wa_click_group", { page_path: "/group" });
    }).not.toThrow();
  });

  test("uses gtag when available", () => {
    const gtag = mock(() => {});
    setWindow({ gtag });

    trackEvent("wa_click_serve", {
      page_path: "/serve",
      source: "cta",
    });

    expect(gtag).toHaveBeenCalledWith("event", "wa_click_serve", {
      page_path: "/serve",
      source: "cta",
    });
  });

  test("falls back to dataLayer when gtag is not available", () => {
    const dataLayer: Array<Record<string, unknown>> = [];
    setWindow({ dataLayer });

    trackEvent("wa_click_give", {
      page_path: "/give",
      source: "footer",
    });

    expect(dataLayer).toEqual([
      {
        event: "wa_click_give",
        page_path: "/give",
        source: "footer",
      },
    ]);
  });
});
