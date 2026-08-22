"use client";

import { useRef, type ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type SplitRevealProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  start?: string;
};

export default function SplitReveal({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.04,
  start = "top 85%",
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const words = ref.current.querySelectorAll("[data-word]");
      gsap.from(words, {
        yPercent: 120,
        rotate: 2,
        duration: 1.1,
        ease: "power4.out",
        stagger,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]"
        >
          <span data-word className="inline-block will-change-transform">
            {word}
            {"\u00A0"}
          </span>
        </span>
      ))}
    </Tag>
  );
}
