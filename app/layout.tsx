import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import JsonLd from "@/components/seo/JsonLd";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scscorp.biz"),
  title: {
    default: "SCS Corp — Cleaning, Building Maintenance, Traffic Control & Lawn Care Services | Australia-Wide",
    template: "%s | SCS Corp — Property Services Australia",
  },
  description:
    "Australia's trusted provider of professional cleaning, building maintenance, certified traffic control, and lawn mowing services. Servicing residential, strata, commercial, council & construction — nationwide across all states. Get a free quote today.",
  keywords: [
    "cleaning services Australia",
    "commercial cleaning Sydney",
    "strata cleaning Melbourne",
    "building maintenance Australia",
    "traffic control services",
    "certified traffic management",
    "lawn mowing services",
    "garden maintenance Australia",
    "property services company",
    "end of lease cleaning",
    "office cleaning",
    "strata maintenance",
    "SCS Corp",
  ],
  authors: [{ name: "SCS Corp", url: "https://scscorp.biz" }],
  creator: "SCS Corp Services Group",
  publisher: "SCS Corp",
  alternates: {
    canonical: "https://scscorp.biz",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "SCS Corp",
    title: "SCS Corp — Professional Property Services Across Australia",
    description:
      "Cleaning, building maintenance, certified traffic control, and lawn care. One trusted team covering every state. 500+ jobs completed. Free quotes.",
    url: "https://scscorp.biz",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCS Corp — Property Services Australia",
    description:
      "Professional cleaning, maintenance, traffic control & lawn care. Nationwide coverage. Get a free quote.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "AU",
    "geo.placename": "Australia",
    "geo.position": "-31.9814;115.9198",
    "ICBM": "-31.9814, 115.9198",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-text-strong">
        {/* Global JSON-LD: Organization + WebSite */}
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateWebSiteSchema()} />

        {/* Skip to content */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>

        <LenisProvider>
          <UtilityBar />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
