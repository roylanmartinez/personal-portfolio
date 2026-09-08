"use client";

import { motion, Variants } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

let hasAnimatedHome = false;

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y?: number; opacity?: number; filter?: string; scale?: number };
    visible: { y?: number; opacity?: number; filter?: string; scale?: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  inViewAmount?: number;
  blur?: string;
}
const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 10,
  inView = true,
  inViewMargin = "-8% 0px -8% 0px",
  inViewAmount = 0.2,
  blur = "0px",
}: BlurFadeProps) => {
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";
  const shouldSkipHomeAnimation = isHomeRoute && hasAnimatedHome;

  useEffect(() => {
    if (isHomeRoute && !hasAnimatedHome) {
      hasAnimatedHome = true;
    }
  }, [isHomeRoute]);

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      initial={shouldSkipHomeAnimation ? "visible" : "hidden"}
      animate={!inView ? "visible" : undefined}
      whileInView={inView && !shouldSkipHomeAnimation ? "visible" : undefined}
      viewport={
        inView && !shouldSkipHomeAnimation
          ? {
              once: true,
              amount: inViewAmount,
              ...(inViewMargin ? { margin: inViewMargin } : {}),
            }
          : undefined
      }
      variants={combinedVariants}
      transition={{
        delay: shouldSkipHomeAnimation ? 0 : 0.04 + delay,
        duration: shouldSkipHomeAnimation ? 0 : duration,
        ease: shouldSkipHomeAnimation ? "linear" : [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
