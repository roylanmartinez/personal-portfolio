"use client";

import { useRegionVariant } from "@/components/region-provider";

interface RegionAwareEuropeProps {
  children: React.ReactNode;
}

export default function RegionAwareEurope({ children }: RegionAwareEuropeProps) {
  const { region } = useRegionVariant();

  if (region !== "europe") {
    return null;
  }

  return <>{children}</>;
}
