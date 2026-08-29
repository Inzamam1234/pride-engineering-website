import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.prideengs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Pride Engineering Services LLC | Refrigeration & Cold Room Engineering Oman",
    template: "%s | Pride Engineering Services LLC",
  },

  description:
    "Pride Engineering Services LLC provides commercial and industrial refrigeration, cold rooms, cold storage, commercial kitchen engineering, electromechanical and BMS solutions in Oman.",

  keywords: [
    "Pride Engineering Services LLC",
    "Pride Engineering Oman",
    "engineering company Oman",
    "engineering services Muscat",
    "commercial refrigeration Oman",
    "industrial refrigeration Oman",
    "refrigeration company Oman",
    "cold rooms Oman",
    "cold room installation Oman",
    "cold storage Oman",
    "cold storage solutions Oman",
    "freezer systems Oman",
    "commercial kitchen engineering Oman",
    "commercial kitchen equipment Oman",
    "BMS services Oman",
    "building management systems Oman",
    "electromechanical services Oman",
    "refrigeration maintenance Oman",
    "AMC services Oman",
  ],

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/pride-favicon.png",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Pride Engineering Services LLC",
    title:
      "Pride Engineering Services LLC | Refrigeration & Cold Room Engineering Oman",
    description:
      "Commercial and industrial refrigeration, cold rooms, cold storage, commercial kitchen engineering, electromechanical and BMS solutions in Oman.",
    locale: "en_OM",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pride Engineering Services LLC",
    description:
      "Commercial refrigeration, cold rooms, cold storage, commercial kitchens and BMS engineering solutions in Oman.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "Pride Engineering Services LLC",
      url: siteUrl,
      description:
        "Pride Engineering Services LLC provides commercial and industrial refrigeration, cold rooms, cold storage, commercial kitchen engineering, electromechanical and BMS solutions in Oman.",
      telephone: "+96898983622",
      email: "info@prideengs.com",

      address: {
        "@type": "PostalAddress",
        streetAddress: "Ghala Industrial Area",
        addressLocality: "Muscat",
        addressCountry: "OM",
        postalCode: "115",
      },

      areaServed: {
        "@type": "Country",
        name: "Oman",
      },

      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+96898983622",
        email: "info@prideengs.com",
        contactType: "customer service",
        areaServed: "OM",
        availableLanguage: ["English"],
      },
      priceRange: "$$",
    },

    {
      "@type": "EngineeringService",
      "@id": `${siteUrl}/#engineering-service`,
      name: "Pride Engineering Services LLC",
      url: siteUrl,
      provider: {
        "@id": `${siteUrl}/#business`,
      },

      areaServed: {
        "@type": "Country",
        name: "Oman",
      },

      serviceType: [
        "Commercial Refrigeration",
        "Industrial Refrigeration",
        "Cold Room Engineering",
        "Cold Storage Solutions",
        "Freezer Systems",
        "Commercial Kitchen Engineering",
        "Electromechanical Services",
        "Building Management Systems",
        "BMS Services",
        "Refrigeration Maintenance",
        "AMC Services",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="bg-base font-body text-navy antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}