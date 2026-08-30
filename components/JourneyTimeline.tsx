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
      const contents =
        gsap.utils.toArray<HTMLElement>("[data-step-content]");

      let current = -1;

      const setActive = (idx: number) => {
        if (idx === current) return;

        current = idx;

        items.forEach((el, i) => {
          el.classList.toggle("is-active", i <= idx);
          el.classList.toggle("is-current", i === idx);
        });

        contents.forEach((el, i) => {
          el.classList.toggle("is-active", i === idx);
        });
      };

      setActive(0);

      const isMobile = window.matchMedia("(max-width: 1023px)").matches;

      gsap.fromTo(
        "[data-line-fill]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,

            // Keep the process section pinned.
            start: "top top",

            // 7 stages get roughly equal scroll space.
            end: isMobile ? "+=420%" : "+=260%",

            pin: true,
            scrub: 1,
            anticipatePin: 1,

            onUpdate: (self) => {
              const index = Math.min(
                steps.length - 1,
                Math.floor(self.progress * steps.length)
              );

              setActive(index);
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
      className="
        noise-overlay
        relative
        flex
        h-[100svh]
        min-h-[100svh]
        overflow-hidden
        bg-navy
        text-white
        lg:h-auto
        lg:min-h-screen
      "
    >
      <div
        className="blueprint-grid absolute inset-0"
        aria-hidden="true"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 85% 20%, rgba(42,90,142,0.4) 0%, transparent 70%), radial-gradient(40% 40% at 10% 90%, rgba(184,139,66,0.15) 0%, transparent 70%)",
        }}
      />

      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-rows-[auto_1fr]
          gap-5
          px-6
          py-6

          sm:gap-6
          sm:px-8
          sm:py-8

          lg:grid-cols-2
          lg:grid-rows-none
          lg:gap-24
          lg:px-12
          lg:py-24
        "
      >
        {/* LEFT / TOP CONTENT */}
        <div
          data-journey-head
          className="flex min-h-0 flex-col"
        >
          <p
            className="
              mb-3
              inline-flex
              items-center
              gap-3
              text-[10px]
              font-semibold
              uppercase
              tracking-widest2
              text-gold

              sm:mb-4
              sm:text-[11px]

              lg:mb-6
            "
          >
            <Route size={14} />
            03 / The Process
          </p>

          <h2
            className="
              max-w-[700px]
              font-display
              text-[2rem]
              font-bold
              leading-[1.02]
              tracking-tight

              sm:text-4xl

              lg:text-5xl
              xl:text-6xl
            "
          >
            From Installation to Long&#8209;Term Reliability
          </h2>

          {/* Active step content */}
          <div
            className="
              relative
              mt-4
              h-[125px]

              sm:mt-6
              sm:h-[150px]

              lg:mt-14
              lg:h-[280px]
            "
          >
            {steps.map((step, i) => (
              <div
                key={step.key}
                data-step-content
                className="
                  step-content
                  absolute
                  inset-0
                  flex
                  flex-col
                  justify-center
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    text-stroke-white
                    font-display
                    text-[5rem]
                    font-bold
                    leading-none

                    sm:text-[6rem]

                    lg:text-[9rem]
                  "
                >
                  0{i + 1}
                </span>

                <h3
                  className="
                    mt-1
                    font-display
                    text-2xl
                    font-bold
                    uppercase
                    tracking-wide
                    text-gold

                    sm:text-3xl

                    lg:mt-4
                    lg:text-4xl
                  "
                >
                  {step.key}
                </h3>

                <p
                  className="
                    mt-1
                    max-w-md
                    text-sm
                    leading-relaxed
                    text-white/70

                    sm:text-base

                    lg:mt-3
                    lg:text-lg
                  "
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            className="
              mt-2
              hidden
              items-center
              gap-3
              text-sm
              text-white/50

              lg:flex
            "
          >
            <PhoneCall size={15} className="text-gold" />
            One accountable partner — from first survey to lifetime support.
          </p>
        </div>

        {/* TIMELINE */}
        <ol
          className="
            relative
            flex
            min-h-0
            flex-col
            justify-center
            pb-1

            lg:self-center
          "
        >
          {/* Background line */}
          <span
            aria-hidden="true"
            className="
              absolute
              bottom-3
              left-[7px]
              top-3
              w-px
              bg-white/15

              lg:bottom-5
              lg:top-5
            "
          />

          {/* Animated gold line */}
          <span
            data-line-fill
            aria-hidden="true"
            className="
              absolute
              bottom-3
              left-[7px]
              top-3
              w-px
              origin-top
              bg-gold

              lg:bottom-5
              lg:top-5
            "
          />

          {steps.map((step, i) => (
            <li
              key={step.key}
              data-step
              className="
                journey-step
                relative
                flex
                min-h-0
                flex-1
                items-center
                gap-4
                pl-8
                text-white/35

                lg:flex-none
                lg:gap-6
                lg:py-4
                lg:pl-10
              "
            >
              {/* Dot */}
              <span
                aria-hidden="true"
                className="
                  journey-dot
                  absolute
                  left-0
                  h-[14px]
                  w-[14px]
                  rounded-full
                  border
                  border-white/25
                  bg-navy

                  lg:h-[15px]
                  lg:w-[15px]
                "
              />

              {/* Number */}
              <span
                className="
                  w-7
                  shrink-0
                  font-display
                  text-[11px]
                  font-semibold
                  text-current

                  sm:text-xs

                  lg:w-8
                  lg:text-sm
                "
              >
                0{i + 1}
              </span>

              {/* Step name */}
              <span
                className="
                  font-display
                  text-base
                  font-bold
                  uppercase
                  tracking-wider

                  sm:text-lg

                  lg:text-2xl
                "
              >
                {step.key}
              </span>

              {/* Desktop description */}
              <span
                className="
                  ml-auto
                  hidden
                  text-right
                  text-sm
                  text-current
                  opacity-70
                  xl:block
                "
              >
                {step.desc}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}