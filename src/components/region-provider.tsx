"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type RegionVariant = "americas" | "europe";

interface RegionContextValue {
  region: RegionVariant;
  toggleRegion: () => void;
  showRegionToggle: boolean;
}

const STORAGE_KEY = "dev-region-variant";
const EUROPEAN_TIMEZONES = new Set(["Atlantic/Canary", "Atlantic/Madeira", "Africa/Ceuta"]);
const EUROPEAN_COUNTRY_CODES = new Set([
  "AL",
  "AD",
  "AM",
  "AT",
  "AZ",
  "BY",
  "BE",
  "BA",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "GE",
  "DE",
  "GR",
  "HU",
  "IS",
  "IE",
  "IT",
  "XK",
  "LV",
  "LI",
  "LT",
  "LU",
  "MT",
  "MD",
  "MC",
  "ME",
  "NL",
  "MK",
  "NO",
  "PL",
  "PT",
  "RO",
  "RU",
  "SM",
  "RS",
  "SK",
  "SI",
  "ES",
  "SE",
  "CH",
  "TR",
  "UA",
  "GB",
  "VA",
]);

const RegionContext = createContext<RegionContextValue | undefined>(undefined);

function parseRegionFromQuery(search: string): RegionVariant | undefined {
  const params = new URLSearchParams(search);
  const regionParam = params.get("region")?.toLowerCase();

  if (!regionParam) {
    return undefined;
  }

  if (["us", "usa", "americas", "america"].includes(regionParam)) {
    return "americas";
  }

  if (["eu", "europe", "european"].includes(regionParam)) {
    return "europe";
  }

  return undefined;
}

function getRegionFromTimezone(): RegionVariant {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timeZone?.startsWith("Europe/") || EUROPEAN_TIMEZONES.has(timeZone)) {
    return "europe";
  }

  return "americas";
}

async function getRegionFromIp(): Promise<RegionVariant> {
  try {
    const response = await fetch("https://ipapi.co/json/", {
      cache: "no-store",
    });

    if (!response.ok) {
      return "americas";
    }

    const payload = (await response.json()) as {
      country_code?: string;
      continent_code?: string;
    };

    const countryCode = payload.country_code?.toUpperCase();
    if (countryCode && EUROPEAN_COUNTRY_CODES.has(countryCode)) {
      return "europe";
    }

    if (payload.continent_code === "EU") {
      return "europe";
    }

    return "americas";
  } catch {
    return "americas";
  }
}

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegion] = useState<RegionVariant>("europe");
  const showRegionToggle = true;

  useEffect(() => {
    let cancelled = false;
    const queryRegion = parseRegionFromQuery(window.location.search);

    if (queryRegion) {
      setRegion(queryRegion);
      localStorage.setItem(STORAGE_KEY, queryRegion);
      return;
    }

    const savedRegion = localStorage.getItem(STORAGE_KEY);
    if (savedRegion === "americas" || savedRegion === "europe") {
      setRegion(savedRegion);
      return;
    }

    const timezoneRegion = getRegionFromTimezone();
    setRegion(timezoneRegion);

    void (async () => {
      const ipRegion = await getRegionFromIp();
      if (cancelled) {
        return;
      }

      setRegion(ipRegion);
      localStorage.setItem(STORAGE_KEY, ipRegion);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const toggleRegion = () => {
    setRegion((current) => {
      const next = current === "americas" ? "europe" : "americas";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  const value = useMemo(
    () => ({ region, toggleRegion, showRegionToggle }),
    [region, showRegionToggle]
  );

  return <RegionContext.Provider value={value}>{children}</RegionContext.Provider>;
}

export function useRegionVariant() {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error("useRegionVariant must be used within RegionProvider");
  }
  return context;
}
