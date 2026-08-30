"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(CustomEase, useGSAP);

if (!CustomEase.get("signature"))
  CustomEase.create("signature", "M0,0 C0.2,0.7 0.15,1 1,1");

const letters = ["P", "R", "I", "D", "E"];

export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    const announce = () =>
      window.dispatchEvent(
        new CustomEvent("pride:intro-complete")
      );

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      gsap.set("[data-hero-photo]", {
        clipPath: "inset(0 0 0 0)"
      });

      gsap.set("[data-hero-photo-image]", {
        scale: 1
      });

      gsap.set("[data-hero-letter]", {
        yPercent: 0,
        scaleY: 1
      });

      gsap.set("[data-hero-wordmark]", {
        color: "#ffffff",
        opacity: 1
      });

      gsap.set("[data-hero-content]", {
        autoAlpha: 1,
        y: 0
      });

      announce();
      return;
    }

    const mm = gsap.matchMedia();

    // =====================================================
    // MOBILE ONLY
    // =====================================================
    mm.add("(max-width: 767px)", () => {

      // -----------------------------------------------------
      // PRIDE
      // Visible on the opening screen.
      // Starts slightly lower and rises into position.
      // -----------------------------------------------------
      gsap.set("[data-hero-letter]", {
        yPercent: 55,
        scaleY: 1.08,
        transformOrigin: "center bottom"
      });

      gsap.set("[data-hero-wordmark]", {
        color: "#ffffff",
        opacity: 1
      });

      // -----------------------------------------------------
      // IMAGE
      // Same expanding image animation style.
      // -----------------------------------------------------
      gsap.set("[data-hero-photo]", {
        clipPath: "polygon(0 0, 0 0, 0 0, 0 0)"
      });

      gsap.set("[data-hero-photo-image]", {
        scale: 1.22
      });

      // -----------------------------------------------------
      // HEADLINE
      // -----------------------------------------------------
      gsap.set("[data-hero-content]", {
        autoAlpha: 0,
        y: 18
      });

      // -----------------------------------------------------
      // MOBILE INTRO ANIMATION
      // -----------------------------------------------------
      gsap.timeline({
        delay: 0.1,
        onComplete: announce
      })

        // IMAGE REVEAL
        .to("[data-hero-photo]", {
          clipPath:
            "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.45,
          ease: "signature"
        })

        // IMAGE ZOOM
        .to(
          "[data-hero-photo-image]",
          {
            scale: 1,
            duration: 1.55,
            ease: "signature"
          },
          "<"
        )

        // PRIDE ANIMATION
        .to(
          "[data-hero-letter]",
          {
            yPercent: 0,
            scaleY: 1,
            duration: 0.9,
            ease: "signature",
            stagger: 0.06
          },
          "<+0.15"
        )

        // HEADLINE
        .to(
          "[data-hero-content]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
          },
          "<+0.25"
        );
    });

    // =====================================================
    // DESKTOP
    // ORIGINAL CODE — DO NOT CHANGE
    // =====================================================
    mm.add("(min-width: 768px)", () => {

      gsap.set("[data-hero-letter]", {
        yPercent: 118,
        scaleY: 1.35,
        transformOrigin: "center bottom"
      });

      gsap.set("[data-hero-photo]", {
        clipPath: "polygon(0 0, 0 0, 0 0, 0 0)"
      });

      gsap.set("[data-hero-photo-image]", {
        scale: 1.22
      });

      gsap.set("[data-hero-content]", {
        autoAlpha: 0,
        y: 18
      });

      gsap.timeline({
        delay: 0.15,
        onComplete: announce
      })
        .to("[data-hero-letter]", {
          yPercent: 0,
          scaleY: 1,
          duration: 1.28,
          ease: "signature",
          stagger: 0.035
        })

        .to(
          "[data-hero-photo]",
          {
            clipPath:
              "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.45,
            ease: "signature"
          },
          "+=0.08"
        )

        .to(
          "[data-hero-photo-image]",
          {
            scale: 1,
            duration: 1.55,
            ease: "signature"
          },
          "<"
        )

        .to(
          "[data-hero-wordmark]",
          {
            color: "#ffffff",
            duration: 0.35,
            ease: "power1.out"
          },
          "<+0.25"
        )

        .to(
          "[data-hero-content]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
          },
          "<+0.35"
        );
    });

    return () => mm.revert();

  }, { scope });

  return (
    <section
      ref={scope}
      id="top"
      className="relative flex min-h-screen overflow-hidden bg-[#fffefc] text-white"
    >

      <h1 className="sr-only">
        Commercial & Industrial Refrigeration, Cold Rooms &
        Engineering Solutions in Oman | Pride Engineering
        Services LLC
      </h1>

      <p className="sr-only">
        Pride Engineering Services LLC provides commercial
        and industrial refrigeration, cold rooms, cold
        storage, commercial kitchen systems and building
        management solutions across Muscat and Oman.
      </p>

      {/* HERO IMAGE */}
      <div
        data-hero-photo
        className="absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          data-hero-photo-image
          className="absolute inset-0"
        >
          <Image
            src="/main-image-pride.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,25,43,.78)_0%,rgba(8,25,43,.42)_53%,rgba(8,25,43,.14)_100%)]" />
      </div>

      {/* PRIDE WORDMARK */}
      <div
        data-hero-wordmark
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-[3.5vw]
          z-10
          flex
          select-none
          items-end
          justify-center
          overflow-hidden
          font-display
          text-[17.5vw]
          font-bold
          leading-[.72]
          tracking-[-0.075em]
          text-navy
          max-[767px]:bottom-24
          max-[400px]:bottom-20
          max-[360px]:bottom-16
        "
      >
        {letters.map((letter, index) => (
          <span
            key={index}
            className="inline-block overflow-hidden pb-[0.08em]"
          >
            <span
              data-hero-letter
              className="inline-block will-change-transform"
            >
              {letter}
            </span>
          </span>
        ))}
      </div>

      {/* HERO HEADLINE */}
      <div
        data-hero-content
        className="
          absolute
          inset-x-0
          top-0
          z-20
          mx-auto
          flex
          w-full
          max-w-[1440px]
          px-6
          pt-28
          lg:px-12
          lg:pt-32
        "
      >
        <div className="max-w-md">
          <p className="font-display text-3xl font-medium leading-[1.12] sm:text-4xl">
            Engineering systems that keep your operation
            moving.
          </p>
        </div>
      </div>

    </section>
  );
}