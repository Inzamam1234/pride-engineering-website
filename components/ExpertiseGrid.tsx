"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Snowflake,
  Truck,
  ChefHat,
  Cpu,
  ArrowUpRight,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import SplitReveal from "./SplitReveal";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const cards = [
  {
    icon: Snowflake,
    title: "Commercial & Industrial Refrigeration",
    desc: "Commercial and industrial refrigeration systems engineered for reliable temperature control and demanding operating environments in Oman.",
    visual:
      "radial-gradient(120% 120% at 20% 0%, #2A5A8E 0%, #112A46 55%, #0B1D33 100%)",
    image: "/commercial.webp",
    pattern: "frost",
    span: "lg:col-span-12",
    aspect: "aspect-[4/5] lg:aspect-[21/8]",
  },

  {
    icon: Snowflake,
    title: "Cold Rooms, Cold Storage & Freezer Systems",
    desc: "Temperature-controlled cold rooms, cold storage and freezer systems designed to protect products, maintain quality and support reliable operations.",
    visual:
      "linear-gradient(150deg, #14304F 0%, #112A46 60%, #0B1D33 100%)",
    image: "/Coldroom.webp",
    pattern: "route",
    span: "lg:col-span-4",
    aspect: "aspect-[4/5] lg:aspect-[4/5]",
  },

  {
    icon: ChefHat,
    title: "Commercial Kitchen Equipment & Engineering",
    desc: "High-performance commercial kitchen equipment and engineering systems designed for demanding hospitality, catering and food-service operations.",
    visual:
      "radial-gradient(130% 130% at 80% 10%, rgba(184,139,66,0.85) 0%, #7A5B2E 45%, #112A46 100%)",
    image: "/kitchen.webp",
    pattern: "grid",
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },

  {
    icon: Cpu,
    title: "Electromechanical & BMS Services",
    desc: "Building management systems, intelligent monitoring, technical maintenance and electromechanical engineering support that keeps critical systems running.",
    visual:
      "linear-gradient(160deg, #2A5A8E 0%, #16324E 55%, #0B1D33 100%)",
    image: "/monitering.webp",
    pattern: "circuit",
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
];

function Pattern({ kind }: { kind: string }) {
  const common = "absolute inset-0 h-full w-full opacity-40";
  if (kind === "frost")
    return (
      <svg className={common} aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 400 200">
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={i}
            x1={-50 + i * 62}
            y1={230}
            x2={30 + i * 62}
            y2={-30}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1"
          />
        ))}
        <circle cx="330" cy="40" r="70" fill="none" stroke="rgba(255,255,255,0.18)" />
        <circle cx="330" cy="40" r="110" fill="none" stroke="rgba(255,255,255,0.1)" />
      </svg>
    );
  if (kind === "route")
    return (
      <svg className={common} aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 200 250">
        <path
          d="M30 220 C 90 190, 60 120, 120 100 S 180 40, 170 20"
          fill="none"
          stroke="rgba(184,139,66,0.6)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
        {[
          [30, 220],
          [120, 100],
          [170, 20],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="#B88B42" opacity="0.8" />
        ))}
      </svg>
    );
  if (kind === "grid")
    return (
      <svg className={common} aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 200 250">
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1={0} x2={i * 40} y2={250} stroke="rgba(17,42,70,0.35)" strokeWidth="1" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 42} x2={200} y2={i * 42} stroke="rgba(17,42,70,0.35)" strokeWidth="1" />
        ))}
      </svg>
    );
  return (
    <svg className={common} aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 200 250">
      <path
        d="M0 140 L30 140 L45 90 L60 180 L75 120 L90 160 L105 100 L120 150 L135 130 L150 140 L200 140"
        fill="none"
        stroke="rgba(122,197,255,0.5)"
        strokeWidth="1.5"
      />
      <circle cx="45" cy="90" r="3" fill="#7AC5FF" />
      <circle cx="105" cy="100" r="3" fill="#7AC5FF" />
      <rect x="20" y="195" width="34" height="22" fill="none" stroke="rgba(122,197,255,0.4)" />
      <rect x="66" y="195" width="34" height="22" fill="none" stroke="rgba(122,197,255,0.4)" />
      <rect x="112" y="195" width="34" height="22" fill="none" stroke="rgba(122,197,255,0.4)" />
    </svg>
  );
}

export default function ExpertiseGrid() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-exp-card]", {
        y: 64,
        autoAlpha: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: {
          trigger: "[data-exp-grid]",
          start: "top 80%",
        },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="expertise" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-36">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold">
              <Wrench size={14} />
              02 / Our Expertise
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
              <SplitReveal
                as="span"
                text="Precision engineering,"
                className="block"
              />
              <SplitReveal
                as="span"
                text="end to end."
                className="block text-steel"
                delay={0.15}
              />
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-navy/60 lg:col-span-4 lg:justify-self-end">
            Four disciplines, one accountable partner — designed, installed,
            commissioned and maintained under a single engineering standard.
          </p>
        </div>

        <div
          data-exp-grid
          className="grid gap-px border border-line bg-line lg:grid-cols-12"
        >
          {cards.map((card, i) => (
            <article
              key={card.title}
              data-exp-card
              className={`group relative overflow-hidden bg-navy ${card.span}`}
            >
              <a
                href={
                  i === 0
                    ? "/expertise#refrigeration"
                    : i === 1
                      ? "/expertise#cold-rooms"
                      : i === 2
                        ? "/expertise#commercial-kitchen"
                        : "/expertise#electromechanical-bms"
                }
                className="block"
              >
                <div className={`relative ${card.aspect} overflow-hidden`}>
                  <div className="absolute inset-0 transition-transform duration-[1200ms] ease-signature will-change-transform group-hover:scale-[1.05]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(17,42,70,.2),rgba(17,42,70,.45))] pointer-events-none" />
                    <Pattern kind={card.pattern} />
                  </div>

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-transparent"
                  />

                  <span
                    aria-hidden="true"
                    className="absolute right-6 top-6 font-display text-6xl font-bold text-white/10 transition-colors duration-700 group-hover:text-gold lg:text-7xl"
                  >
                    0{i + 1}
                  </span>

                  <span className="absolute left-6 top-6 inline-flex border border-white/25 p-3 text-gold backdrop-blur-sm transition-colors duration-500 group-hover:border-gold">
                    <card.icon size={22} strokeWidth={1.4} />
                  </span>

                  <span
                    aria-hidden="true"
                    className="absolute right-6 top-1/2 inline-flex translate-y-6 border border-gold bg-gold p-3 text-white opacity-0 transition-all duration-700 ease-signature group-hover:translate-y-0 group-hover:opacity-100 max-lg:hidden"
                  >
                    <ArrowUpRight size={18} />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                    <h3 className="font-display text-2xl font-bold leading-tight text-white lg:text-[1.7rem]">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">
                      {card.desc}
                    </p>
                    <span
                      aria-hidden="true"
                      className="mt-5 block h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 ease-signature group-hover:scale-x-100"
                    />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
