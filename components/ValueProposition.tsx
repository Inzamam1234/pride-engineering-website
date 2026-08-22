"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ValueProposition() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from("[data-about-reveal]", {
      y: 42,
      autoAlpha: 0,
      duration: 1.05,
      ease: "power3.out",
      stagger: 0.13,
      scrollTrigger: { trigger: scope.current, start: "top 72%" },
    });
  }, { scope });

  return <section ref={scope} id="about" className="relative overflow-hidden bg-[#fffefc] py-24 text-navy lg:py-36">
    <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-y-20">
        <div data-about-reveal className="order-2 lg:order-1 lg:col-span-4 lg:pt-[16.5rem]">
          <p className="max-w-xs text-base font-semibold leading-[1.38] text-navy sm:text-lg">Pride Engineering is one accountable partner for the systems that protect your product, process and people.</p>
          <div className="mt-8 aspect-square max-w-[320px] overflow-hidden bg-navy">
            <div className="h-full w-full bg-cover bg-center transition-transform duration-[1400ms] ease-signature hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=900&q=85')" }} />
          </div>
          <a href="#expertise" onClick={(event) => { event.preventDefault(); const target = document.querySelector("#expertise"); if (target) window.__lenis?.scrollTo(target as HTMLElement, { offset: -72 }) ?? (target as HTMLElement).scrollIntoView({ behavior: "smooth" }); }} className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-navy">
            Learn more <span className="grid h-8 w-8 place-items-center rounded-full border border-navy/20 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-white"><ArrowUpRight size={15} /></span>
          </a>
        </div>

        <div data-about-reveal className="order-1 lg:order-2 lg:col-span-8 lg:col-start-5">
          <p className="max-w-4xl font-display text-3xl font-medium leading-[1.38] tracking-[-0.025em] sm:text-4xl lg:text-[2.65rem] xl:text-[3rem]">Every reliable operation starts with a system designed around how it actually works.</p>
          <p className="mt-12 max-w-4xl font-display text-3xl font-medium leading-[1.38] tracking-[-0.025em] text-navy/48 sm:text-4xl lg:text-[2.65rem] xl:text-[3rem]">We bring refrigeration, cold chain, commercial kitchen and monitoring expertise together—from first survey through commissioning and long-term support.</p>
          <p className="mt-12 max-w-4xl font-display text-3xl font-medium leading-[1.38] tracking-[-0.025em] text-navy/48 sm:text-4xl lg:text-[2.65rem] xl:text-[3rem]">The result is a practical, efficient system that keeps performing under the conditions that matter most.</p>
        </div>
      </div>
    </div>
  </section>;
}
