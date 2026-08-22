"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, ArrowUpRight, ArrowUp } from "lucide-react";
import Link from "next/link";
import { LogoMark } from "./Header";

const nav = [
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Process", href: "/process" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Commercial & Industrial Refrigeration",
  "Cold Chain Solutions",
  "Commercial Kitchen Engineering",
  "Monitoring & BMS",
];

export default function Footer({ stacked = false }: { stacked?: boolean }) {
  const footerRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!stacked || !footerRef.current) return;
    const setHeight = () => document.documentElement.style.setProperty("--home-footer-height", `${footerRef.current?.offsetHeight ?? 0}px`);
    setHeight();
    const observer = new ResizeObserver(setHeight);
    observer.observe(footerRef.current);
    return () => { observer.disconnect(); document.documentElement.style.removeProperty("--home-footer-height"); };
  }, [stacked]);

  useEffect(() => {
    if (!stacked) return;
    const update = () => setRevealed(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [stacked]);

  return (
    <footer ref={footerRef} className={`noise-overlay overflow-hidden bg-navy text-white ${stacked ? `fixed inset-x-0 bottom-0 ${revealed ? "z-[60]" : "z-0"}` : "relative z-0"}`}>
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 90% 0%, rgba(42,90,142,0.35) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 pt-24 lg:px-12 lg:pt-32">
        <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <LogoMark dark />
            <p className="mt-8 max-w-md font-display text-2xl font-semibold leading-snug text-white/85">
              Every facility has different operating conditions — and every
              system we build starts by understanding yours.
            </p>
            <a
              href="mailto:info@prideengineeringllc.com"
              className="btn-fill group mt-10 inline-flex items-center gap-3 border border-gold bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-500 hover:text-gold"
            >
              Request Estimate
              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 ease-signature group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          <div className="grid gap-12 sm:grid-cols-3 lg:col-span-6">
            <nav aria-label="Footer">
              <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-widest2 text-gold">
                Navigate
              </h3>
              <ul className="space-y-3 text-sm text-white/65">
                {nav.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="nav-link transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-widest2 text-gold">
                Expertise
              </h3>
              <ul className="space-y-3 text-sm text-white/65">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-widest2 text-gold">
                Contact
              </h3>
              <ul className="space-y-4 text-sm text-white/65">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                  <span>
                    Pride Engineering Services LLC,
                    <br />
                    Dubai, United Arab Emirates
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0 text-gold" />
                  <a href="tel:+97140000000" className="transition-colors hover:text-white">
                    +971 4 000 0000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-gold" />
                  <a
                    href="mailto:info@prideengineeringllc.com"
                    className="transition-colors hover:text-white"
                  >
                    info@prideengineeringllc.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-pride group relative select-none overflow-hidden py-10 text-center font-display text-[18vw] font-bold leading-none lg:text-[15rem]" aria-label="Pride">
          <span aria-hidden="true" className="footer-pride-outline block whitespace-nowrap">PRIDE</span>
          <span aria-hidden="true" className="footer-pride-fill absolute inset-0 flex items-center justify-center whitespace-nowrap text-gold">PRIDE</span>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 py-7 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Pride Engineering Services LLC. All
            rights reserved.
          </p>
          <button
            type="button"
            onClick={() => {
              if (window.__lenis) window.__lenis.scrollTo(0);
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 uppercase tracking-[0.18em] transition-colors hover:text-gold"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform duration-500 ease-signature group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
