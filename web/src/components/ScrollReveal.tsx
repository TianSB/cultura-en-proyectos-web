"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-up"
  | "none";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
  threshold?: number;
}

const variantStyles: Record<AnimationVariant, string> = {
  "fade-up": "translate-y-8 opacity-0",
  "fade-down": "-translate-y-8 opacity-0",
  "fade-left": "translate-x-8 opacity-0",
  "fade-right": "-translate-x-8 opacity-0",
  "scale-up": "scale-95 opacity-0",
  none: "",
};

const variantRevealed: Record<AnimationVariant, string> = {
  "fade-up": "translate-y-0 opacity-100",
  "fade-down": "translate-y-0 opacity-100",
  "fade-left": "translate-x-0 opacity-100",
  "fade-right": "translate-x-0 opacity-100",
  "scale-up": "scale-100 opacity-100",
  none: "",
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${revealed ? variantRevealed[variant] : variantStyles[variant]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
