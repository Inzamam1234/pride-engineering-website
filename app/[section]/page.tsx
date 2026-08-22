import { notFound } from "next/navigation";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const pages = {
  about: {
    eyebrow: "About Pride Engineering",
    title: "Engineering reliability into the way you operate.",
    intro: "We design, install and maintain critical systems for facilities where uptime, safety and performance cannot be left to chance.",
    image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=2200&q=88",
    points: ["One accountable engineering partner", "Designs built around site conditions", "Support beyond commissioning"],
  },
  expertise: {
    eyebrow: "Our expertise",
    title: "Technical depth across every critical degree.",
    intro: "From cold rooms and industrial refrigeration to commercial kitchens and building management systems, our teams connect the details into one dependable whole.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2200&q=88",
    points: ["Commercial & industrial refrigeration", "Cold chain infrastructure", "Commercial kitchen engineering"],
  },
  process: {
    eyebrow: "The Pride process",
    title: "A practical route from first survey to long-term support.",
    intro: "We start with the operating reality on site, develop a solution that fits, and stay accountable for how it performs after handover.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=2200&q=88",
    points: ["Consult and assess", "Engineer and install", "Commission, monitor and maintain"],
  },
  projects: {
    eyebrow: "Selected projects",
    title: "Solutions built for the environments that keep moving.",
    intro: "Explore a selection of refrigeration, kitchen and monitoring environments designed around operational pressure, energy efficiency and reliable control.",
    image: "https://eng.vlabonsgroup.com/wp-content/uploads/2019/12/ULO-i-DCA-hladnja%C4%8Da-2-1-1024x768.jpg",
    points: ["Cold storage and freezer facilities", "Food distribution infrastructure", "Monitoring and controls integration"],
  },
  contact: {
    eyebrow: "Start a conversation",
    title: "Let’s build reliability into every degree.",
    intro: "Tell us about your facility, operating conditions and goals. Our team will help define the engineering path forward.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2200&q=88",
    points: ["Dubai, United Arab Emirates", "+971 4 000 0000", "info@prideengineeringllc.com"],
  },
} as const;

const projectImages = [
  "https://eng.vlabonsgroup.com/wp-content/uploads/2019/12/ULO-i-DCA-hladnja%C4%8Da-2-1-1024x768.jpg",
  "https://www.compressorsunlimited.com/_next/image/?q=75&url=%2Fimages%2Frefrigeration-hero.png&w=3840",
  "https://static.ticimax.cloud/cdn-cgi/image/width%3D-%2Cquality%3D99/61294/uploads/blog/endustriyel-mutfak-kurulumu-nasil-yapili-6765.jpg",
];

export function generateStaticParams() {
  return Object.keys(pages).map((section) => ({ section }));
}

export default function SectionPage({ params }: { params: { section: string } }) {
  const page = pages[params.section as keyof typeof pages];
  if (!page) notFound();

  return <SmoothScroll>
    <Header alwaysVisible />
    <main className="bg-[#fffefc] text-navy">
      <section className="relative min-h-screen overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-65" style={{ backgroundImage: `url('${page.image}')` }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,25,43,.94)_0%,rgba(8,25,43,.58)_52%,rgba(8,25,43,.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,25,43,.34)_0%,transparent_35%,rgba(8,25,43,.42)_100%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-end px-6 py-16 lg:px-12 lg:py-20">
          <div className="max-w-4xl"><p className="mb-6 text-[11px] font-semibold uppercase tracking-widest2 text-gold">{page.eyebrow}</p><h1 className="font-display text-5xl font-medium leading-[1.13] tracking-[-.045em] sm:text-6xl lg:text-8xl">{page.title}</h1></div>
        </div>
      </section>
      <SectionContent section={params.section} page={page} />
    </main>
    <Footer />
  </SmoothScroll>;
}

function SectionContent({ section, page }: { section: string; page: (typeof pages)[keyof typeof pages] }) {
  if (section === "expertise") return <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-36"><div className="mb-20 grid gap-8 lg:grid-cols-12"><p className="font-display text-3xl font-medium leading-[1.34] lg:col-span-7 lg:text-5xl">{page.intro}</p><p className="text-base leading-relaxed text-navy/60 lg:col-span-3 lg:col-start-10">Four disciplines, one accountable team. Every decision is built around reliability, serviceability and long-term efficiency.</p></div><div className="grid gap-3 md:grid-cols-2"><Feature title="Refrigeration" text="Cold rooms, freezer rooms and industrial systems." image={projectImages[0]} /><Feature title="Cold chain" text="Temperature integrity from storage to delivery." image={projectImages[1]} /><Feature title="Kitchen engineering" text="Workflows, ventilation and equipment built to serve." image={projectImages[2]} /><Feature title="Monitoring & BMS" text="Controls that keep every degree accountable." image={page.image} /></div></section>;
  if (section === "process") return <section className="bg-navy text-white"><div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 lg:grid-cols-12 lg:px-12 lg:py-36"><p className="font-display text-3xl font-medium leading-[1.34] text-white/80 lg:col-span-5 lg:text-5xl">{page.intro}</p><ol className="lg:col-span-6 lg:col-start-7">{page.points.map((point, index) => <li key={point} className="group flex items-center gap-6 border-t border-white/20 py-8 last:border-b"><span className="font-display text-5xl text-gold/70">0{index + 1}</span><span className="font-display text-2xl font-medium transition-transform duration-500 group-hover:translate-x-3">{point}</span><ArrowUpRight className="ml-auto text-gold" size={20} /></li>)}</ol></div></section>;
  if (section === "projects") return <section className="px-6 py-24 lg:px-12 lg:py-36"><div className="mx-auto max-w-[1440px]"><p className="mb-16 max-w-3xl font-display text-3xl font-medium leading-[1.34] lg:text-5xl">{page.intro}</p><div className="grid gap-3 md:grid-cols-3">{projectImages.map((image, index) => <article key={image} className="group"><div className="aspect-[4/5] overflow-hidden bg-navy"><div className="h-full bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-105" style={{ backgroundImage: `url('${image}')` }} /></div><p className="mt-4 font-display text-xl">{["Cold storage", "Distribution hub", "Commercial kitchen"][index]}</p></article>)}</div></div></section>;
  if (section === "contact") return <section className="relative min-h-screen overflow-hidden bg-navy text-white"><div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('${page.image}')` }} /><div className="relative mx-auto flex min-h-screen max-w-[1440px] items-end px-6 py-16 lg:px-12 lg:py-24"><div className="grid w-full gap-12 lg:grid-cols-12"><p className="font-display text-4xl font-medium leading-[1.18] lg:col-span-8 lg:text-7xl">{page.intro}</p><div className="lg:col-span-3 lg:col-start-10"><a href="mailto:info@prideengineeringllc.com" className="inline-flex items-center gap-3 rounded-full bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[.16em]">Email our team <ArrowUpRight size={16} /></a><p className="mt-8 text-sm leading-loose text-white/70">{page.points.join("\n")}</p></div></div></div></section>;
  return <><section className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 lg:grid-cols-12 lg:px-12 lg:py-36"><div className="lg:col-span-4"><p className="font-display text-2xl font-medium leading-[1.4]">{page.points[0]}</p><div className="mt-10 aspect-square bg-cover bg-center" style={{ backgroundImage: `url('${page.image}')` }} /></div><p className="font-display text-3xl font-medium leading-[1.38] tracking-[-.025em] lg:col-span-7 lg:col-start-6 lg:text-5xl">{page.intro}</p></section><section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-12 lg:pb-36"><div className="relative aspect-[16/8] overflow-hidden bg-navy"><div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1600ms] hover:scale-[1.04]" style={{ backgroundImage: `url('${page.image}')` }} /></div></section></>;
}

function Feature({ title, text, image }: { title: string; text: string; image: string }) {
  return <article className="group relative aspect-[5/4] overflow-hidden bg-navy text-white"><div className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-[1200ms] group-hover:scale-105" style={{ backgroundImage: `url('${image}')` }} /><div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,25,43,.85))]" /><div className="absolute inset-x-0 bottom-0 p-7"><h2 className="font-display text-3xl font-medium">{title}</h2><p className="mt-2 text-sm text-white/70">{text}</p></div></article>;
}
