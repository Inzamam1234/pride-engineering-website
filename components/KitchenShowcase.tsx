"use client";

const kitchenImages = [
    {
        image: "/kitchen-equipment.PNG",
        title: "Kitchen Equipment",
        number: "01",
    },
    {
        image: "/commercial-ovens.PNG",
        title: "Commercial Ovens",
        number: "02",
    },
    {
        image: "/cooking-ranges.PNG",
        title: "Cooking Ranges",
        number: "03",
    },
    {
        image: "/boilers.PNG",
        title: "Boilers",
        number: "04",
    },
    {
        image: "/ventilation.PNG",
        title: "Ventilation",
        number: "05",
    },
];

export default function KitchenShowcase() {
    return (
        <section
            id="commercial-kitchen"
            className="bg-[#fffefc] text-navy"
        >
            <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-36">

                {/* Heading */}
                <div className="mb-14 max-w-3xl">
                    <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest2 text-gold">
                        03 / Commercial Kitchen Engineering
                    </p>

                    <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
                        Commercial kitchen systems
                        <br />
                        engineered to perform.
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy/60 lg:text-lg">
                        High-performance kitchen systems designed for demanding
                        commercial operations, combining equipment, ventilation,
                        fabrication and reliable installation.
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {kitchenImages.map((item) => (
                        <article
                            key={item.number}
                            className="group relative overflow-hidden bg-navy"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <div
                                    className="h-full w-full bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(8,25,43,.12), rgba(8,25,43,.72)), url('${item.image}')`,
                                    }}
                                />
                            </div>

                            {/* Number */}
                            <span className="absolute right-6 top-6 font-display text-6xl font-bold text-white/20 transition-colors duration-500 group-hover:text-gold/70">
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