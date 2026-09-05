import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import RefrigerationShowcase from "@/components/RefrigerationShowcase";
import ColdRoomsShowcase from "@/components/ColdRoomsShowcase";
import KitchenShowcase from "@/components/KitchenShowcase";
import BMSShowcase from "@/components/BMSShowcase";
import ContactForm from "@/components/ContactForm";

const pages = {
  about: {
    eyebrow: "About Pride Engineering",
    title: "Engineering reliability into the way you operate.",
    intro: "We design, install and maintain critical systems for facilities where uptime, safety and performance cannot be left to chance.",
    image: "/about.webp",
    points: ["One accountable engineering partner", "Designs built around site conditions", "Support beyond commissioning"],
  },
  expertise: {
    eyebrow: "Our expertise",
    title: "Technical depth across every critical degree.",
    intro: "From cold rooms and industrial refrigeration to commercial kitchens and building management systems, our teams connect the details into one dependable whole.",
    image: "/expertise.webp",
    points: ["Commercial & industrial refrigeration", "Cold chain infrastructure", "Commercial kitchen engineering"],
  },
  process: {
    eyebrow: "The Pride process",
    title: "A practical route from first survey to long-term support.",
    intro: "We start with the operating reality on site, develop a solution that fits, and stay accountable for how it performs after handover.",
    image: "/process.webp",
    points: ["Consult and assess", "Engineer and install", "Commission, monitor and maintain"],
  },
  projects: {
    eyebrow: "Our projects",
    title: "Engineering solutions built around the way your facility operates.",
    intro: "A selection of refrigeration, cold storage, commercial kitchen and electromechanical projects designed for reliable performance and long-term operation.",
    image: "/projects.webp",
    points: [
      "Cold storage and refrigeration facilities",
      "Commercial kitchen installations",
      "Industrial refrigeration systems",
      "Electromechanical & BMS solutions",
      "Monitoring and control systems",
      "Maintenance and AMC services",
    ],
  },
  contact: {
    eyebrow: "Start a conversation",
    title: "Let’s build reliability into every degree.",
    intro: "Tell us about your facility, operating conditions and goals. Our team will help define the engineering path forward.",
    image: "/contact-image.webp",
    points: ["Muscat, Oman", "+968 98983622", "info@prideengs.com"],
  },
} as const;

const projectImages = [
  "/cold-storage-facility.webp",
  "/industrial-refrigeration.webp",
  "/commercial.webp",
];

export function generateStaticParams() {
  return Object.keys(pages).map((section) => ({ section }));
}
const siteUrl = "https://www.prideengs.com";

export async function generateMetadata({
  params,
}: {
  params: { section: string };
}): Promise<Metadata> {
  const metadata: Record<string, Metadata> = {
    about: {
      title: "About Pride Engineering Services | Engineering Company Oman",
      description:
        "Learn about Pride Engineering Services LLC, an Oman-based engineering company providing refrigeration, cold storage, commercial kitchen, electromechanical and BMS solutions.",
      alternates: {
        canonical: `${siteUrl}/about`,
      },
    },

    expertise: {
      title:
        "Commercial & Industrial Refrigeration, Cold Rooms & BMS | Oman",
      description:
        "Explore Pride Engineering's commercial and industrial refrigeration, cold rooms, cold storage, commercial kitchen, electromechanical and BMS engineering services in Oman.",
      alternates: {
        canonical: `${siteUrl}/expertise`,
      },
    },

    process: {
      title: "Engineering Design, Installation & Maintenance Process | Oman",
      description:
        "Pride Engineering Services delivers engineering solutions in Oman from site assessment and design through installation, commissioning, monitoring and maintenance.",
      alternates: {
        canonical: `${siteUrl}/process`,
      },
    },

    projects: {
      title: "Refrigeration, Cold Storage & Engineering Projects | Oman",
      description:
        "Explore refrigeration, cold storage, commercial kitchen and electromechanical engineering projects delivered by Pride Engineering Services in Oman.",
      alternates: {
        canonical: `${siteUrl}/projects`,
      },
    },

    contact: {
      title: "Contact Pride Engineering Services | Muscat, Oman",
      description:
        "Contact Pride Engineering Services LLC in Muscat, Oman for commercial refrigeration, cold rooms, cold storage, commercial kitchen, BMS and engineering solutions.",
      alternates: {
        canonical: `${siteUrl}/contact`,
      },
    },
  };

  return (
    metadata[params.section] ?? {
      title: "Pride Engineering Services LLC",
      description:
        "Engineering solutions for refrigeration, cold storage, commercial kitchens and BMS systems in Oman.",
    }
  );
}

export default function SectionPage({ params }: { params: { section: string } }) {
  const page = pages[params.section as keyof typeof pages];
  if (!page) notFound();

  return <SmoothScroll>
    <Header alwaysVisible />
    <main className="bg-[#fffefc] text-navy">
      <section className="relative min-h-screen overflow-hidden bg-navy text-white">
        <Image src={page.image} alt={page.title} fill className="object-cover opacity-65" priority sizes="100vw" />
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
  if (section === "expertise") {
    return (
      <section className="bg-[#fffefc]">
        {/* Expertise introduction */}
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-36">
          <div className="mb-20 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-widest2 text-gold">
                Our Expertise
              </p>

              <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                Engineering systems built
                <br />
                around your operation.
              </h2>
            </div>

            <p className="max-w-md leading-relaxed text-navy/60 lg:col-span-4 lg:justify-self-end">
              From refrigeration and cold storage to commercial kitchens and
              intelligent building systems, Pride Engineering delivers
              dependable solutions designed around real operating conditions.
            </p>
          </div>
        </div>

        {/* 01 — Refrigeration */}
        <div id="refrigeration" className="scroll-mt-24">
          <RefrigerationShowcase />
        </div>

        {/* 02 — Cold Rooms & Freezers */}
        <div id="cold-rooms" className="scroll-mt-24">
          <ColdRoomsShowcase />
        </div>

        {/* 03 — Commercial Kitchen */}
        <div id="commercial-kitchen" className="scroll-mt-24">
          <KitchenShowcase />
        </div>

        {/* 04 — Electromechanical & BMS */}
        <div id="electromechanical-bms" className="scroll-mt-24">
          <BMSShowcase />
        </div>
      </section>
    );
  }
  if (section === "process")
    return (
      <section className="bg-white text-navy">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 lg:grid-cols-12 lg:px-12 lg:py-36">

          {/* Left — Process Introduction */}
          <div className="lg:col-span-5">
            <p className="font-display text-3xl font-medium leading-[1.34] tracking-[-0.025em] lg:text-5xl">
              {page.intro}
            </p>

            <div className="mt-10 h-[2px] w-16 bg-gold" />

            <p className="mt-8 max-w-md text-base leading-relaxed text-navy/60 lg:text-lg">
              We begin by understanding your facility, operating conditions and
              requirements. From system design and installation to commissioning,
              monitoring and ongoing maintenance, we deliver solutions built for
              reliable long-term performance.
            </p>
          </div>

          {/* Right — Process Steps */}
          <ol className="lg:col-span-6 lg:col-start-7">
            {page.points.map((point, index) => (
              <li
                key={point}
                className="group flex items-center gap-6 border-t border-navy/15 py-8 last:border-b"
              >
                <span className="font-display text-5xl font-medium text-gold">
                  0{index + 1}
                </span>

                <span className="font-display text-2xl font-medium text-navy transition-transform duration-500 group-hover:translate-x-3 lg:text-3xl">
                  {point}
                </span>

                <ArrowUpRight
                  className="ml-auto shrink-0 text-gold transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={20}
                />
              </li>
            ))}
          </ol>

        </div>
      </section>
    );
  if (section === "projects") return (
    <section className="px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <p className="mb-16 max-w-3xl font-display text-3xl font-medium leading-[1.34] lg:text-5xl">
          {page.intro}
        </p>

        <div className="grid gap-3 md:grid-cols-3">
          {projectImages.map((image, index) => (
            <article key={image} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-navy relative">
                <Image
                  src={image}
                  alt="Project Image"
                  fill
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <p className="mt-4 font-display text-xl">
                {[
                  "Cold Storage Facility",
                  "Industrial Refrigeration",
                  "Commercial Kitchen",
                ][index]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
  if (section === "contact")
    return (
      <section className="bg-white text-navy">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">

            {/* LEFT — Contact Information */}
            <div className="lg:col-span-4">
              <h1 className="max-w-xl font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] lg:text-6xl">
                When it has to work,
                <br />
                it has to be Pride
              </h1>

              <div className="mt-10 h-[2px] w-16 bg-gold" />

              <p className="mt-10 max-w-md text-base leading-relaxed text-navy/70 lg:text-lg">
                Fill in the form or reach out to us directly.
                <br />
                Our team will get back to you as soon as possible.
              </p>

              <div className="mt-12 space-y-8">

                {/* Location */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">
                    Location
                  </p>

                  <p className="mt-2 text-base leading-relaxed text-navy/80">
                    Pride Engineering Services LLC,
                    <br />
                    Ghala Industrial Area,
                    <br />
                    Muscat, Oman 115
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">
                    Phone
                  </p>

                  <a
                    href="tel:+96898983622"
                    className="mt-2 inline-block text-base text-navy/80 transition-colors hover:text-gold"
                  >
                    +968 98983622
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">
                    Email
                  </p>

                  <a
                    href="mailto:info@prideengs.com"
                    className="mt-2 inline-block text-base text-navy/80 transition-colors hover:text-gold"
                  >
                    info@prideengs.com
                  </a>
                </div>

              </div>
            </div>

            {/* RIGHT — Contact Form */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    );

  return (
    <>
      {/* ABOUT INTRO */}
      <section className="border-b border-line bg-[#fffefc]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-36">

          <div className="grid gap-14 lg:grid-cols-12 lg:items-start">

            <div className="lg:col-span-4">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                Who We Are
              </p>

              <p className="max-w-sm text-lg font-medium leading-relaxed text-navy/75 lg:text-xl">
                Pride Engineering Services is an engineering partner focused
                on reliable refrigeration, cold storage, commercial kitchen
                and electromechanical solutions.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="font-display text-3xl font-medium leading-[1.35] tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                We design, install, commission and support systems around the
                real requirements of each facility.
              </p>

              <p className="mt-10 max-w-3xl text-base leading-relaxed text-navy/60 lg:text-lg">
                Our approach is practical and engineering-led. We consider the
                operating environment, equipment requirements, workflow and
                long-term service needs before developing a solution.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-36">

          <div className="mb-20 grid gap-10 lg:grid-cols-12">

            <div className="lg:col-span-7">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                What We Do
              </p>

              <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
                Four engineering disciplines.
                <br />
                One accountable partner.
              </h2>
            </div>

            <p className="max-w-md leading-relaxed text-white/60 lg:col-span-4 lg:col-start-9 lg:justify-self-end">
              From refrigeration and cold storage to commercial kitchens and
              intelligent building systems, our capabilities work together to
              support complete facility requirements.
            </p>

          </div>

          <div className="grid border-t border-white/15 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Refrigeration Systems",
                text: "Commercial, industrial, medical and display refrigeration, including ice plant solutions.",
              },
              {
                number: "02",
                title: "Cold Rooms & Freezer Systems",
                text: "Cold rooms, cold storage, blast chillers, blast freezers and freezer systems.",
              },
              {
                number: "03",
                title: "Commercial Kitchen Engineering",
                text: "Kitchen equipment, commercial ovens, cooking ranges, boilers and ventilation.",
              },
              {
                number: "04",
                title: "Electromechanical & BMS",
                text: "BMS, monitoring, electrical works, motor services, troubleshooting and maintenance.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="group border-b border-white/15 py-10 md:px-7 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <span className="font-display text-4xl font-medium text-gold/70">
                  {item.number}
                </span>

                <h3 className="mt-10 font-display text-2xl font-medium leading-tight">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-white/60">
                  {item.text}
                </p>

                <span className="mt-8 block h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="border-b border-line bg-[#fffefc]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-36">

          <div className="grid gap-14 lg:grid-cols-12">

            <div className="lg:col-span-5">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                Our Approach
              </p>

              <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                From first survey
                <br />
                to long-term support.
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">

              {[
                {
                  number: "01",
                  title: "Survey & Assess",
                  text: "Understand the facility, operating conditions, capacity requirements and project objectives.",
                },
                {
                  number: "02",
                  title: "Engineer & Design",
                  text: "Develop a practical solution around performance, serviceability and the specific needs of the operation.",
                },
                {
                  number: "03",
                  title: "Install & Commission",
                  text: "Deliver the system with careful installation, testing and commissioning before handover.",
                },
                {
                  number: "04",
                  title: "Maintain & Support",
                  text: "Continue supporting the system through monitoring, troubleshooting, maintenance and AMC services.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group flex gap-6 border-t border-line py-8 last:border-b"
                >
                  <span className="font-display text-4xl font-medium text-gold">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-display text-2xl font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-navy/60">
                      {item.text}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="ml-auto shrink-0 text-gold transition-transform duration-500 group-hover:translate-x-1"
                  />
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* WHY PRIDE */}
      <section className="bg-[#fffefc]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-36">

          <div className="grid gap-14 lg:grid-cols-12">

            <div className="lg:col-span-4">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                Why Pride Engineering
              </p>

              <p className="font-display text-3xl font-medium leading-[1.3] lg:text-4xl">
                Engineering is not only about installing equipment. It is about
                making the entire system work together.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">

              {[
                {
                  number: "01",
                  title: "Reliability",
                  text: "Systems designed to perform consistently under demanding operating conditions.",
                },
                {
                  number: "02",
                  title: "Performance",
                  text: "Solutions developed around efficiency, capacity and the real requirements of the facility.",
                },
                {
                  number: "03",
                  title: "Technical Support",
                  text: "Ongoing troubleshooting, monitoring, maintenance and AMC support after installation.",
                },
                {
                  number: "04",
                  title: "Accountability",
                  text: "One engineering partner coordinating multiple disciplines across the project lifecycle.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="border-t border-line pt-7"
                >
                  <span className="font-display text-3xl text-gold">
                    {item.number}
                  </span>

                  <h3 className="mt-6 font-display text-2xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-navy/60">
                    {item.text}
                  </p>
                </article>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">

          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                Start a conversation
              </p>

              <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
                Let's build the right system
                <br />
                for your facility.
              </h2>
            </div>

            <div className="lg:col-span-3 lg:col-start-10">
              <p className="mb-7 text-sm leading-relaxed text-white/60">
                Tell us about your facility, requirements and operating
                conditions. We'll help define the right engineering path.
              </p>

              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white"
              >
                Contact our team
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

function Feature({ title, text, image }: { title: string; text: string; image: string }) {
  return <article className="group relative aspect-[5/4] overflow-hidden bg-navy text-white"><Image src={image} alt={title} fill className="object-cover opacity-60 transition-transform duration-[1200ms] group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" /><div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,25,43,.85))]" /><div className="absolute inset-x-0 bottom-0 p-7"><h2 className="font-display text-3xl font-medium">{title}</h2><p className="mt-2 text-sm text-white/70">{text}</p></div></article>;
}
