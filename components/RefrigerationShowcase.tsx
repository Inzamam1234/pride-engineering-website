"use client";

const refrigerationImages = [
    {
        image: "/commercial-refrigeration.PNG",
        title: "Commercial Refrigeration",
    },
    {
        image: "/industrial-refrigeration.PNG",
        title: "Industrial Refrigeration",
    },
    {
        image: "/medical-refrigeration.PNG",
        title: "Medical Refrigeration",
    },
    {
        image: "/display-refrigeration.PNG",
        title: "Display Refrigeration",
    },
    {
        image: "/ice-plants.PNG",
        title: "Ice Plants",
    },
];

export default function RefrigerationShowcase() {
    return (
        <section
            id="refrigeration-showcase"
            className="border-b border-line bg-surface"
        >
            <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">

                <div className="mb-14 max-w-3xl">
                    <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                        01 / Refrigeration Systems
                    </p>

                    <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
                        Refrigeration systems engineered for performance.
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy/60">
                        From commercial refrigeration to industrial cooling systems,
                        we design and deliver reliable temperature-controlled solutions
                        for demanding environments.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {refrigerationImages.map((item, index) => (
                        <div
                            key={item.image}
                            className="group relative overflow-hidden bg-navy"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-6 pt-20">
                                <div className="absolute inset-x-0 bottom-0 p-7">
                                    <h3 className="font-display text-2xl font-medium leading-tight text-white">
                                        {item.title}
                                    </h3>

                                    <span className="mt-5 block h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
                                </div>

                                <span className="absolute right-6 top-6 font-display text-6xl font-bold text-white/20 transition-colors duration-500 group-hover:text-gold/70">
                                    0{index + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}