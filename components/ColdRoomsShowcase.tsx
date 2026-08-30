"use client";
import Image from "next/image";

const coldRoomImages = [
    {
        image: "/cold-rooms.webp",
        title: "Cold Rooms",
    },
    {
        image: "/cold-storage.webp",
        title: "Cold Storage",
    },
    {
        image: "/blast-chillers.webp",
        title: "Blast Chillers",
    },
    {
        image: "/blast-freezers.webp",
        title: "Blast Freezers",
    },
    {
        image: "/freezer-systems.webp",
        title: "Freezer Systems",
    },
    {
        image: "/iceland-freezer.webp",
        title: "IceLand Freezer",
    },
    {
        image: "/flake-refrigerator.webp",
        title: "Flake Refrigerator",
    },
];

export default function ColdRoomsShowcase() {
    return (
        <section
            id="cold-rooms-showcase"
            className="border-b border-white/10 bg-navy text-white"
        >
            <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">

                <div className="mb-14 max-w-3xl">
                    <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                        02 / Cold Rooms & Freezer Systems
                    </p>

                    <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Temperature-controlled spaces built to perform.
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65">
                        Purpose-built cold rooms, freezer systems and temperature-controlled
                        environments engineered to protect products, quality and performance.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {coldRoomImages.map((item, index) => (
                        <div
                            key={item.image}
                            className="group relative overflow-hidden bg-navy"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent p-7 pt-16">
                                <h3 className="font-display text-2xl font-medium leading-tight text-white">
                                    {item.title}
                                </h3>

                                <span className="mt-5 block h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
                            </div>

                            <span className="absolute right-6 top-6 font-display text-6xl font-bold text-white/20 transition-colors duration-500 group-hover:text-gold/70">
                                0{index + 1}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}