"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const reasons = [
  {
    number: "01",
    title: "Complete Project Delivery",
    text: "From site assessment and design to installation, commissioning and handover, one engineering team manages the complete project.",
  },
  {
    number: "02",
    title: "Engineered for Performance",
    text: "Every solution is designed around your facility, operating conditions, capacity requirements and performance goals.",
  },
  {
    number: "03",
    title: "Support That Continues",
    text: "Our support continues beyond installation with maintenance, troubleshooting, monitoring and AMC services.",
  },
  {
    number: "04",
    title: "One Accountable Partner",
    text: "Refrigeration, cold rooms, kitchen systems and BMS brought together under one engineering partner.",
  },
];

export default function ValueProposition() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-why-reveal]", {
        y: 42,
        autoAlpha: 0,
        duration: 1.05,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: scope.current,
          start: "top 72%",
        },
      });
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      id="about"
      className="relative overflow-hidden bg-[#fffefc] text-navy"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-36">

        {/* Heading */}
        <div
          data-why-reveal
          className="mb-20 grid gap-10 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
              01 / Why Pride Engineering
            </p>

            <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              From design to operation,
              <br />
              we engineer for reliability.
            </h2>
          </div>

          <p className="text-base leading-relaxed text-navy/80 lg:col-span-4 lg:col-start-8">
            Pride Engineering Services provides complete engineering solutions
            across refrigeration, cold rooms, commercial kitchens and
            electromechanical & BMS systems.
          </p>
        </div>

        {/* Supporting statement */}
        <div
          data-why-reveal
          className="mb-20 grid gap-10 border-t border-line pt-10 lg:grid-cols-12"
        >
          <p className="font-display text-2xl font-medium leading-[1.35] lg:col-span-5 lg:text-4xl">
            One engineering partner for the systems that keep your operation
            running.
          </p>

          <p className="text-base leading-relaxed text-navy/80 lg:col-span-4 lg:col-start-8">
            We design, install, commission and maintain systems built around
            the real demands of your facility — with reliability,
            serviceability and long-term performance in mind.
          </p>
        </div>

        {/* Four Reasons */}
        <div
          data-why-reveal
          className="grid border-t border-line md:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason, index) => (
            <article
              key={reason.number}
              className={`group relative border-b border-line py-10 md:px-7 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0 ${index >= 2 ? "md:border-b-0" : ""
                }`}
            >
              <div className="mb-10 flex items-start justify-between">
                <span className="font-display text-4xl font-medium text-gold/70">
                  {reason.number}
                </span>

                <span className="grid h-9 w-9 place-items-center rounded-full border border-navy/15 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                  <ArrowUpRight size={15} />
                </span>
              </div>

              <h3 className="font-display text-2xl font-medium leading-tight">
                {reason.title}
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-navy/60">
                {reason.text}
              </p>

              <span className="mt-8 block h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}