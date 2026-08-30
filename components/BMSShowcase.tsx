"use client";
import Image from "next/image";

const bmsImages = [
    {
        image: "/bms-monitoring-services.webp",
        title: "BMS & Monitoring Services",
        number: "01",
    },
    {
        image: "/electrical-motor-works.webp",
        title: "Electrical & Motor Works",
        number: "02",
    },
    {
        image: "/compressor-reconditioning.webp",
        title: "Compressor Reconditioning",
        number: "03",
    },
    {
        image: "/troubleshooting-maintenance.webp",
        title: "Troubleshooting & Maintenance",
        number: "04",
    },
    {
        image: "/annual-maintenance-contracts.webp",
        title: "Annual Maintenance Contracts",
        number: "05",
    },
];

export default function BMSShowcase() {
    return (
        <section
            id="electromechanical-bms"
            className="bg-navy text-white"
        >
            <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-36">

                {/* Heading */}
                <div className="mb-14 max-w-3xl">
                    <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                        04 / Electromechanical & BMS Services
                    </p>

                    <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Intelligent systems that keep operations running.
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60">
                        Intelligent monitoring, electrical systems, automation and
                        technical maintenance that keep critical refrigeration and
                        facility systems operating reliably.
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {bmsImages.map((item) => (
                        <article
                            key={item.number}
                            className="group relative overflow-hidden bg-[#0b1d33]"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(8,25,43,.15),rgba(8,25,43,.82))] pointer-events-none" />
                            </div>

                            {/* Number */}
                            <span className="absolute right-6 top-6 font-display text-6xl font-bold text-white/15 transition-colors duration-500 group-hover:text-gold/70">
                                {item.number}
                            </span>

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-7">
                                <h3 className="font-display text-2xl font-medium leading-tight text-white">
                                    {item.title}
                                </h3>

                                <span className="mt-5 block h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}