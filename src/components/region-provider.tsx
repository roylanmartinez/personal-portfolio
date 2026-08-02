"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type RegionVariant = "americas" | "europe";

interface RegionContextValue {
  region: RegionVariant;
  toggleRegion: () => void;
  showRegionToggle: boolean;
}

const STORAGE_KEY = "dev-region-variant";

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

function isLikelyAmericasUser(): boolean {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timeZone?.startsWith("America/")) {
    return true;
  }

  const locale = typeof navigator !== "undefined" ? navigator.language : "";
  return /-(US|CA|MX|BR|AR|CL|CO|PE|UY|PA|CR|GT|HN|NI|SV|DO|PR)\b/i.test(locale);
}

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegion] = useState<RegionVariant>("europe");
  const showRegionToggle = process.env.NODE_ENV === "development";

  useEffect(() => {
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

    setRegion(isLikelyAmericasUser() ? "americas" : "europe");
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
