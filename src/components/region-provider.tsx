"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { regionFromCountryCode, type RegionVariant } from "@/lib/region";

interface RegionContextValue {
  region: RegionVariant;
  toggleRegion: () => void;
  showRegionToggle: boolean;
}

const OVERRIDE_STORAGE_KEY = "dev-region-variant-override";

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

    const inferredRegion = regionFromCountryCode(payload.country_code);

    if (payload.continent_code === "EU") {
      return "europe";
    }

    return inferredRegion;
  } catch {
    return "americas";
  }
}

export function RegionProvider({
  children,
  initialRegion,
}: {
  children: React.ReactNode;
  initialRegion?: RegionVariant;
}) {
  const fallbackRegion = initialRegion ?? "europe";

  const [region, setRegion] = useState<RegionVariant>(fallbackRegion);
  const showRegionToggle = true;

  useEffect(() => {
    let cancelled = false;
    const queryRegion = parseRegionFromQuery(window.location.search);

    if (queryRegion) {
      localStorage.setItem(OVERRIDE_STORAGE_KEY, queryRegion);
      setRegion(queryRegion);
      return;
    }

    const savedOverride = localStorage.getItem(OVERRIDE_STORAGE_KEY);
    if (savedOverride === "americas" || savedOverride === "europe") {
      setRegion(savedOverride);
      return;
    }

    void (async () => {
      const ipRegion = await getRegionFromIp();
      if (cancelled) {
        return;
      }

      setRegion(ipRegion);
    })();

    return () => {
      cancelled = true;
    };
  }, [fallbackRegion]);

  const toggleRegion = () => {
    setRegion((current) => {
      const next = current === "americas" ? "europe" : "americas";
      localStorage.setItem(OVERRIDE_STORAGE_KEY, next);
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
