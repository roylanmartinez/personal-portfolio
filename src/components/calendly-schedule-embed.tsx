"use client";

import * as React from "react";
import Script from "next/script";
import styles from "@/app/schedule/schedule.module.css";

const CALENDLY_URL =
  "https://calendly.com/hello-roylanmartinez/new-meeting?primary_color=000000";

type EmbedState = "loading" | "embed" | "fallback";

declare global {
  interface Window {
    OneTrust?: {
      ActiveGroups?: string;
      IsAlertBoxClosed?: () => boolean;
    };
    Optanon?: {
      ActiveGroups?: string;
    };
    Cookiebot?: {
      consent?: {
        preferences?: boolean;
        statistics?: boolean;
        marketing?: boolean;
      };
    };
    __tcfapi?: (
      command: string,
      version: number,
      callback: (tcData: TcfData, success: boolean) => void
    ) => void;
  }
}

type TcfData = {
  purpose?: {
    consents?: Record<string, boolean>;
  };
};

function hasConsentSignalsInStorage() {
  try {
    const cookieSignals = [
      "OptanonConsent",
      "CookieConsent",
      "cookie_consent",
      "cookieconsent_status",
      "Cookiebot",
    ];
    const hasCookieSignal = cookieSignals.some((key) =>
      document.cookie.includes(`${key}=`)
    );

    const localStorageSignals = [
      "cookie",
      "consent",
      "gdpr",
      "onetrust",
      "cookiebot",
    ];

    let hasStorageSignal = false;
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!key) {
        continue;
      }

      const normalized = key.toLowerCase();
      if (localStorageSignals.some((signal) => normalized.includes(signal))) {
        hasStorageSignal = true;
        break;
      }
    }

    return hasCookieSignal || hasStorageSignal;
  } catch {
    return false;
  }
}

function consentBannerExists() {
  const oneTrustPresent =
    typeof window.OneTrust !== "undefined" ||
    typeof window.Optanon !== "undefined" ||
    document.getElementById("onetrust-banner-sdk") !== null;
  const cookiebotPresent =
    typeof window.Cookiebot !== "undefined" ||
    document.getElementById("CybotCookiebotDialog") !== null;
  const iabPresent = typeof window.__tcfapi === "function";

  return oneTrustPresent || cookiebotPresent || iabPresent || hasConsentSignalsInStorage();
}

function getConsentFromKnownManagers() {
  if (window.Cookiebot?.consent) {
    const cookiebotConsent = window.Cookiebot.consent;
    return Boolean(
      cookiebotConsent.preferences ||
        cookiebotConsent.statistics ||
        cookiebotConsent.marketing
    );
  }

  const activeGroups = window.OneTrust?.ActiveGroups || window.Optanon?.ActiveGroups;
  if (activeGroups) {
    return /C0002:1|C0003:1|C0004:1/.test(activeGroups);
  }

  return null;
}

function getConsentFromStorage() {
  try {
    const acceptedValues = ["accept", "accepted", "allow", "allowed", "true", "yes"];

    const allValues = [document.cookie, ...Object.keys(localStorage).map((key) => localStorage.getItem(key) ?? "")]
      .join(" ")
      .toLowerCase();

    return acceptedValues.some((value) => allValues.includes(value));
  } catch {
    return false;
  }
}

function getConsentFromTcf() {
  if (typeof window.__tcfapi !== "function") {
    return Promise.resolve<boolean | null>(null);
  }

  return new Promise<boolean | null>((resolve) => {
    try {
      window.__tcfapi?.("getTCData", 2, (tcData: TcfData, success: boolean) => {
        if (!success) {
          resolve(null);
          return;
        }

        const consents = tcData?.purpose?.consents;
        if (!consents) {
          resolve(null);
          return;
        }

        resolve(Object.values(consents).some(Boolean));
      });
    } catch {
      resolve(null);
    }
  });
}

async function canLoadCalendly() {
  if (!consentBannerExists()) {
    return true;
  }

  const managerConsent = getConsentFromKnownManagers();
  if (managerConsent !== null) {
    return managerConsent;
  }

  const tcfConsent = await getConsentFromTcf();
  if (tcfConsent !== null) {
    return tcfConsent;
  }

  return getConsentFromStorage();
}

export function CalendlyScheduleEmbed({ email }: { email: string }) {
  const [embedState, setEmbedState] = React.useState<EmbedState>("loading");

  React.useEffect(() => {
    let active = true;

    const evaluateConsent = async () => {
      const granted = await canLoadCalendly();
      if (!active) {
        return;
      }

      setEmbedState(granted ? "embed" : "fallback");
    };

    evaluateConsent();

    return () => {
      active = false;
    };
  }, []);

  const fallbackLine = (
    <p className="text-sm leading-relaxed text-muted-foreground">
      If the scheduler is unavailable in your browser, email{" "}
      <a
        className="text-primary underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        href={`mailto:${email}`}
      >
        {email}
      </a>{" "}
      or open {" "}
      <a
        className="text-primary underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {CALENDLY_URL}
      </a>
      .
    </p>
  );

  if (embedState === "fallback") {
    return (
      <section aria-label="Scheduling options" className="space-y-3">
        <div className="rounded-xl border border-border bg-muted/40 p-4">
          <p className="text-sm leading-relaxed text-foreground">
            The embedded scheduler requires cookie consent and is currently
            unavailable.
          </p>
          <div className="mt-2">{fallbackLine}</div>
        </div>
      </section>
    );
  }

  return (
    <section aria-label="Book a call" className="space-y-3">
      <div className={styles.embedSurface}>
        <div className={styles.embedFrame}>
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
      {embedState === "embed" && (
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      )}
      {fallbackLine}
    </section>
  );
}