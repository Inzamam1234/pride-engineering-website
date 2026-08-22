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

const siteUrl = "https://www.prideengineeringllc.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Pride Engineering Services LLC | Commercial Refrigeration & Cold Room Engineering",
    template: "%s | Pride Engineering Services LLC",
  },
  description:
    "Pride Engineering Services LLC delivers integrated commercial refrigeration, cold room engineering, cold chain solutions and BMS systems engineered for reliability, efficiency and uninterrupted operation.",
  keywords: [
    "Commercial Refrigeration",
    "Cold Room Engineering",
    "Cold Chain Solutions",
    "BMS Systems",
    "Building Management Systems",
    "Commercial Kitchen Engineering",
    "Industrial Refrigeration",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Pride Engineering Services LLC",
    title:
      "Pride Engineering Services LLC | Commercial Refrigeration & Cold Room Engineering",
    description:
      "Integrated engineering solutions that keep critical systems operating safely, efficiently and reliably — from commercial refrigeration to BMS integration.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pride Engineering Services LLC",
    description:
      "Commercial refrigeration, cold room engineering and BMS systems built for performance.",
  },
  robots: { index: true, follow: true },
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
        "Integrated engineering solutions for commercial refrigeration, cold rooms, cold chain and building management systems.",
      telephone: "+971-4-000-0000",
      email: "info@prideengineeringllc.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      areaServed: "United Arab Emirates",
      priceRange: "$$",
    },
    {
      "@type": "EngineeringService",
      "@id": `${siteUrl}/#service`,
      name: "Pride Engineering Services LLC",
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: "United Arab Emirates",
      serviceType: [
        "Commercial & Industrial Refrigeration",
        "Cold Chain Solutions",
        "Commercial Kitchen Engineering",
        "Monitoring & BMS Integration",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
