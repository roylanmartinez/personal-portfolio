"use client";

import BlurFadeText from "@/components/magicui/blur-fade-text";
import { useEffect, useState } from "react";

type RegionAwareDescriptionProps = {
  europeDescription: string;
  americasDescription: string;
  className?: string;
  delay?: number;
};

const AMERICAS_COUNTRIES = new Set([
  "AG", "AI", "AR", "AW", "BB", "BL", "BM", "BO", "BQ", "BR", "BS", "BZ", "CA", "CL", "CO",
  "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GL", "GP", "GT", "GY", "HN", "HT",
  "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PM", "PR", "PY", "SR",
  "SV", "SX", "TC", "TT", "US", "UY", "VC", "VE", "VG", "VI",
]);

function getCountryFromLocale(locale: string): string | null {
  const parts = locale.split("-");
  return parts.length > 1 ? parts[parts.length - 1].toUpperCase() : null;
}

function isAmericasByTimezone(timeZone: string | undefined): boolean {
  if (!timeZone) return false;
  return timeZone.startsWith("America/");
}

function shouldUseAmericasDescription(): boolean {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (isAmericasByTimezone(timeZone)) {
    return true;
  }

  const locales = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const locale of locales) {
    const country = getCountryFromLocale(locale);
    if (country && AMERICAS_COUNTRIES.has(country)) {
      return true;
    }
  }

  return false;
}

export default function RegionAwareDescription({
  europeDescription,
  americasDescription,
  className,
  delay,
}: RegionAwareDescriptionProps) {
  const [description, setDescription] = useState(europeDescription);

  useEffect(() => {
    if (shouldUseAmericasDescription()) {
      setDescription(americasDescription);
    } else {
      setDescription(europeDescription);
    }
  }, [americasDescription, europeDescription]);

  return <BlurFadeText text={description} className={className} delay={delay} />;
}
