"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactSection() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo("[data-contact-content]", { y: -90, autoAlpha: 0 }, {
      y: 0,
      autoAlpha: 1,
      ease: "none",
      scrollTrigger: {
        trigger: scope.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.55,
      },
    });
  }, { scope });

  return <section ref={scope} id="contact" className="relative z-10 h-[165vh] bg-navy">
    <div className="sticky top-0 h-screen overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/pride-web-hero-image.png')" }} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,25,43,.2)_0%,rgba(8,25,43,.28)_40%,rgba(8,25,43,.88)_100%)]" />
      <div data-contact-content className="relative mx-auto flex h-full max-w-[1440px] items-start px-6 pt-32 text-white lg:px-12 lg:pt-40">
        <div className="grid w-full gap-10 lg:grid-cols-12 lg:items-start">
          <p className="text-sm leading-relaxed text-white/70 lg:col-span-3">From first survey to long-term support, we are ready to discuss the conditions that make your project unique.</p>
          <div className="lg:col-span-7">
            <p className="font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">Let’s build reliability into every degree.</p>
            <a href="mailto:info@prideengs.com" className="btn-fill group mt-8 inline-flex items-center gap-3 border border-gold bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[.18em] text-white transition-colors duration-500 hover:text-gold">
              Contact us <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
          <p className="hidden border-l border-white/35 pl-5 pt-2 text-sm leading-relaxed text-white/70 lg:block lg:col-span-2">Dubai, United Arab Emirates<br />+968 98983622</p>
        </div>
      </div>
    </div>
  </section>;
}
