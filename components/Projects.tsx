"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    title: "Cold Storage Facility",
    type: "Refrigeration",
    image: "https://eng.vlabonsgroup.com/wp-content/uploads/2019/12/ULO-i-DCA-hladnja%C4%8Da-2-1-1024x768.jpg",
  },
  {
    title: "Food Distribution Hub",
    type: "Cold chain",
    image: "https://www.compressorsunlimited.com/_next/image/?q=75&url=%2Fimages%2Frefrigeration-hero.png&w=3840",
  },
  {
    title: "Commercial Kitchen",
    type: "Kitchen engineering",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width%3D-%2Cquality%3D99/61294/uploads/blog/endustriyel-mutfak-kurulumu-nasil-yapili-6765.jpg",
  },
  {
    title: "Monitoring Control Room",
    type: "BMS & controls",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85",
  },
];

export default function Projects() {
  const scope = useRef<HTMLElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const [canMove, setCanMove] = useState({ previous: false, next: true });

  useGSAP(() => {
    // Always begin at the leftmost card; the rail must not inherit a horizontal offset.
    rail.current?.scrollTo({ left: 0 });
    gsap.from("[data-project-card]", {
      y: 56,
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: { trigger: scope.current, start: "top 72%" },
    });
  }, { scope });

  const updatePosition = () => {
    const element = rail.current;
    if (!element) return;
    const card = element.querySelector<HTMLElement>("[data-project-card]");
    if (!card) return;
    setCanMove({
      previous: element.scrollLeft > 4,
      next: element.scrollLeft + element.clientWidth < element.scrollWidth - 4,
    });
  };

  const move = (direction: 1 | -1) => {
    const element = rail.current;
    const card = element?.querySelector<HTMLElement>("[data-project-card]");
    if (!element || !card) return;
    element.scrollBy({ left: direction * (card.offsetWidth + 12), behavior: "smooth" });
  };

  const moveCursor = (event: React.PointerEvent<HTMLElement>) => {
    if (!cursor.current || event.pointerType === "touch") return;
    cursor.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  };

  return <section ref={scope} id="projects" className="relative overflow-hidden border-b border-line bg-[#fffefc] py-24 lg:py-32">
    <div className="mb-14 grid gap-8 px-6 lg:mb-12 lg:grid-cols-12 lg:px-12">
      <p className="font-display text-4xl font-medium tracking-tight text-navy lg:col-span-4 lg:text-5xl">Projects</p>
      <p className="max-w-md text-2xl leading-[1.2] text-navy lg:col-span-5 lg:text-3xl">A selection of systems designed for demanding, real-world environments.</p>
      <div className="flex items-end gap-5 lg:col-span-3 lg:justify-self-end">
        <button type="button" onClick={() => move(-1)} disabled={!canMove.previous} aria-label="Previous project" className="project-arrow"><ArrowLeft size={25} strokeWidth={1.35} /></button>
        <button type="button" onClick={() => move(1)} disabled={!canMove.next} aria-label="Next project" className="project-arrow"><ArrowRight size={25} strokeWidth={1.35} /></button>
      </div>
    </div>

    <div>
      <div ref={rail} onScroll={updatePosition} className="project-rail flex gap-3 overflow-x-auto pb-2 pl-6 lg:pl-12">
      {projects.map((project) => <a key={project.title} href="#contact" data-project-card onPointerMove={moveCursor} onPointerEnter={() => cursor.current?.classList.add("is-visible")} onPointerLeave={() => cursor.current?.classList.remove("is-visible")} className="project-card group block shrink-0 snap-start">
        <div className="relative aspect-[3/4] overflow-hidden bg-navy">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1300ms] ease-signature group-hover:scale-[1.045]" style={{ backgroundImage: `url('${project.image}')` }} />
          <div className="absolute inset-0 bg-navy/5 transition-colors duration-500 group-hover:bg-navy/20" />
        </div>
        <div className="pt-4 text-navy">
          <h3 className="font-display text-xl font-medium sm:text-2xl">{project.title}</h3>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[.18em] text-navy/55">{project.type}</p>
        </div>
      </a>)}
      </div>
    </div>

    <div ref={cursor} aria-hidden="true" className="project-cursor pointer-events-none fixed left-0 top-0 z-[70] hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-gold py-2 pl-4 pr-2 text-[11px] font-semibold uppercase tracking-[.14em] text-white lg:flex">
      View <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-navy"><ArrowUpRight size={14} /></span>
    </div>
  </section>;
}
