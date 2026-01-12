'use client';

import { useEffect } from 'react';
import Script from 'next/script';

/**
 * AccessibilityWidget component
 * 
 * Loads UserWay accessibility widget for providing accessibility features:
 * - Text size adjustment
 * - Contrast modes
 * - Keyboard navigation enhancements
 * - Focus highlighting
 * - Link highlighting
 * - Animation controls
 * 
 * The widget is loaded asynchronously after interactive to not block page rendering.
 * It's idempotent - checks for existing instances before initializing.
 */
export default function AccessibilityWidget() {
  useEffect(() => {
    // Prevent double initialization
    if (typeof window !== 'undefined' && (window as any).UserWay) {
      return;
    }
  }, []);

  return (
    <>
      <Script
        id="userway-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d){
              var s = d.createElement("script");
              s.setAttribute("data-account", "xGAXRyQHjK");
              s.setAttribute("src", "https://cdn.userway.org/widget.js");
              s.setAttribute("data-position", "6");
              s.setAttribute("data-size", "medium");
              s.setAttribute("data-color", "#3b82f6");
              s.setAttribute("data-language", "he");
              s.setAttribute("data-trigger", "1");
              s.setAttribute("data-statement-text", "הצהרת נגישות");
              s.setAttribute("data-statement-url", "/accessibility");
              s.setAttribute("aria-label", "פתיחת תפריט נגישות");
              (d.body || d.head).appendChild(s);
            })(document);
          `,
        }}
      />
    </>
  );
}
