"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Route, PhoneCall } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  {
    key: "CONSULT",
    desc: "Understand application and site conditions.",
  },
  { key: "ENGINEER", desc: "Develop practical solutions." },
  { key: "INSTALL", desc: "Professional execution." },
  { key: "COMMISSION", desc: "Check and test for reliability." },
  { key: "MONITOR", desc: "BMS and data logging integration." },
  { key: "MAINTAIN", desc: "Preventive AMC support." },
  { key: "SUPPORT", desc: "Fast troubleshooting." },
];

export default function JourneyTimeline() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-step]");
      const contents = gsap.utils.toArray<HTMLElement>("[data-step-content]");
      let current = -1;

      const setActive = (idx: number) => {
        if (idx === current) return;
        current = idx;
        items.forEach((el, i) => {
          el.classList.toggle("is-active", i <= idx);
          el.classList.toggle("is-current", i === idx);
        });
        contents.forEach((el, i) =>
          el.classList.toggle("is-active", i === idx)
        );
      };

      setActive(0);

      gsap.fromTo(
        "[data-line-fill]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: "+=260%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            onUpdate: (self) => {
              setActive(
                Math.min(steps.length - 1, Math.floor(self.progress * steps.length))
              );
            },
          },
        }
      );

      gsap.from("[data-journey-head] > *", {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: scope.current,
          start: "top 70%",
        },
      });
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      id="process"
      className="noise-overlay relative flex min-h-screen items-center overflow-hidden bg-navy text-white"
    >
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 85% 20%, rgba(42,90,142,0.4) 0%, transparent 70%), radial-gradient(40% 40% at 10% 90%, rgba(184,139,66,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-12">
        <div data-journey-head>
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-gold">
            <Route size={14} />
            03 / The Process
          </p>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
            From Installation to Long&#8209;Term Reliability
          </h2>

          <div className="relative mt-14 h-[220px] sm:h-[240px] lg:h-[280px]">
            {steps.map((step, i) => (
              <div
                key={step.key}
                data-step-content
                className="step-content absolute inset-0 flex flex-col justify-center"
              >
                <span
                  aria-hidden="true"
                  className="text-stroke-white font-display text-[7rem] font-bold leading-none lg:text-[9rem]"
                >
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-3xl font-bold uppercase tracking-wide text-gold lg:text-4xl">
                  {step.key}
                </h3>
                <p className="mt-3 max-w-md text-lg leading-relaxed text-white/70">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 hidden items-center gap-3 text-sm text-white/50 lg:flex">
            <PhoneCall size={15} className="text-gold" />
            One accountable partner — from first survey to lifetime support.
          </p>
        </div>

        <ol className="relative flex flex-col justify-center self-center">
          <span
            aria-hidden="true"
            className="absolute bottom-5 left-[7px] top-5 w-px bg-white/15"
          />
          <span
            data-line-fill
            aria-hidden="true"
            className="absolute bottom-5 left-[7px] top-5 w-px origin-top bg-gold"
          />

          {steps.map((step, i) => (
            <li
              key={step.key}
              data-step
              className="journey-step relative flex items-center gap-6 py-4 pl-10 text-white/35"
            >
              <span
                aria-hidden="true"
                className="journey-dot absolute left-0 h-[15px] w-[15px] rounded-full border border-white/25 bg-navy"
              />
              <span className="w-8 shrink-0 font-display text-sm font-semibold text-current">
                0{i + 1}
              </span>
              <span className="font-display text-xl font-bold uppercase tracking-wider lg:text-2xl">
                {step.key}
              </span>
              <span className="ml-auto hidden text-right text-sm text-current opacity-70 xl:block">
                {step.desc}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
