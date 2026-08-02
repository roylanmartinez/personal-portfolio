"use client";

import { useRegionVariant } from "@/components/region-provider";

interface RegionAwareAmericasProps {
  children: React.ReactNode;
}

export default function RegionAwareAmericas({ children }: RegionAwareAmericasProps) {
  const { region } = useRegionVariant();

  if (region !== "americas") {
    return null;
  }

  return <>{children}</>;
}