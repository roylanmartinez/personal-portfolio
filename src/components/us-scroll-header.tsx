"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";

export default function UsScrollHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 72);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 inset-x-0 z-40 border-b bg-background/90 backdrop-blur transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-0 h-14 flex items-center justify-between">
        <Link
          href="#hero"
          className="text-sm font-semibold tracking-tight hover:text-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
        >
          Roylan Martinez
        </Link>
        <Button asChild size="sm">
          <Link
            href={DATA.cta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book intro call
          </Link>
        </Button>
      </div>
    </div>
  );
}
