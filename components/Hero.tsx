"use client";

import { useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(CustomEase, useGSAP);

if (!CustomEase.get("signature")) CustomEase.create("signature", "M0,0 C0.2,0.7 0.15,1 1,1");

const letters = ["P", "R", "I", "D", "E"];

export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    const announce = () => window.dispatchEvent(new CustomEvent("pride:intro-complete"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set("[data-hero-photo]", { clipPath: "inset(0 0 0 0)" });
      announce();
      return;
    }

    // A distinct two-act load: mark rises first, then the photo expands from a right-hand clip.
    gsap.set("[data-hero-letter]", { yPercent: 118, scaleY: 1.35, transformOrigin: "center bottom" });
    // The image is born at the top-left corner, then expands across the hero.
    gsap.set("[data-hero-photo]", { clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" });
    gsap.set("[data-hero-photo-image]", { scale: 1.22 });
    gsap.set("[data-hero-content]", { autoAlpha: 0, y: 18 });

    gsap.timeline({ delay: 0.15, onComplete: announce })
      .to("[data-hero-letter]", { yPercent: 0, scaleY: 1, duration: 1.28, ease: "signature", stagger: 0.035 })
      .to("[data-hero-photo]", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.45, ease: "signature" }, "+=0.08")
      .to("[data-hero-photo-image]", { scale: 1, duration: 1.55, ease: "signature" }, "<")
      .to("[data-hero-wordmark]", { color: "#ffffff", duration: 0.35, ease: "power1.out" }, "<+0.25")
      .to("[data-hero-content]", { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }, "<+0.35");
  }, { scope });

  return <section ref={scope} id="top" className="relative flex min-h-screen overflow-hidden bg-[#fffefc] text-white">
    <h1 className="sr-only">Pride Engineering Services LLC — Engineering Reliability. Built for Performance.</h1>
    <p className="sr-only">We deliver integrated engineering solutions designed to keep critical systems operating safely, efficiently, and reliably.</p>
    <div data-hero-photo className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div data-hero-photo-image className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/main-image-pride.PNG')" }} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,25,43,.78)_0%,rgba(8,25,43,.42)_53%,rgba(8,25,43,.14)_100%)]" />
    </div>
    <div data-hero-wordmark aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-[3.5vw] z-10 flex select-none items-end justify-center overflow-hidden font-display text-[17.5vw] font-bold leading-[.72] tracking-[-0.075em] text-navy">
      {letters.map((letter, index) => <span key={index} className="inline-block overflow-hidden pb-[0.08em]"><span data-hero-letter className="inline-block will-change-transform">{letter}</span></span>)}
    </div>
    <div data-hero-content className="absolute inset-x-0 top-0 z-20 mx-auto flex w-full max-w-[1440px] px-6 pt-28 lg:px-12 lg:pt-32">
      <div className="max-w-md"><p className="font-display text-3xl font-medium leading-[1.12] sm:text-4xl">Engineering systems that keep your operation moving.</p></div>
    </div>
  </section>;
}
