"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Process", href: "/process" },
  { label: "Projects", href: "/projects" }
];

export function LogoMark({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="Pride Engineering Services LLC — Home"
    >
      <img
        src={dark ? "/pride-logo-gold-final.png" : "/pridelogo-removebg.png"}
        alt="Pride Engineering Services"
        className="h-20 w-auto object-contain"
      />
    </Link>
  );
}

export default function Header({ alwaysVisible = false }: { alwaysVisible?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(alwaysVisible);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 48));
    };
    const reveal = () => setShown(true);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!alwaysVisible) {
      window.addEventListener("pride:intro-complete", reveal);
    }
    const fallback = alwaysVisible ? undefined : window.setTimeout(reveal, 3800);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pride:intro-complete", reveal);
      if (fallback) window.clearTimeout(fallback);
    };
  }, [alwaysVisible]);

  const solid = scrolled || open;
  const foreground = solid ? "text-navy" : "text-white";

  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${shown ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"} ${solid ? "border-b border-line bg-surface/90 backdrop-blur-xl" : "bg-transparent"}`}>
    <div className="mx-auto grid h-[76px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-12">
      <div className={`transition-opacity duration-500 ${alwaysVisible || scrolled || open ? "opacity-100" : "pointer-events-none opacity-0"}`}><LogoMark dark={!solid} /></div>
      <nav aria-label="Primary" className={`hidden items-center gap-8 text-[12px] font-medium lg:flex ${foreground}`}>
        {links.map((link) => <Link key={link.href} href={link.href} className="nav-link whitespace-nowrap">{link.label}</Link>)}
      </nav>
      <div className={`ml-auto hidden items-center gap-6 lg:flex ${foreground}`}>
        <Link href="/contact" className="group inline-flex items-center gap-3 text-[12px] font-semibold"><span>Contact</span><span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-white transition-transform duration-500 group-hover:translate-x-1"><ArrowUpRight size={15} /></span></Link>
      </div>
      <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className={`ml-auto lg:hidden ${foreground}`}>{open ? <X size={25} /> : <Menu size={25} />}</button>
    </div>
    <div className={`overflow-hidden bg-surface transition-[max-height] duration-500 ease-signature lg:hidden ${open ? "max-h-[360px] border-t border-line" : "max-h-0"}`}><nav aria-label="Mobile" className="px-6 py-5 text-navy">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-line py-4 font-display text-2xl font-semibold">{link.label}</Link>)}</nav></div>
  </header>;
}
