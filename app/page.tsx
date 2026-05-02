import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AboutPreview from "@/components/sections/AboutPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import CTABanner from "@/components/sections/CTABanner";
import ServicePackages from "@/components/sections/ServicePackages";
import RecentProjects from "@/components/sections/RecentProjects";
import Testimonials from "@/components/sections/Testimonials";
import CoverageStats from "@/components/sections/CoverageStats";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/seo/JsonLd";
import {
  generateBreadcrumbSchema,
  generateReviewSchema,
  generateWebPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "https://scscorp.biz" },
  openGraph: {
    title: "SCS Corp — Professional Cleaning, Maintenance, Traffic Control & Lawn Care | Australia-Wide",
    description:
      "Australia's most trusted property services company. Cleaning, building maintenance, certified traffic control, and lawn mowing — residential, strata, commercial & council. 500+ jobs completed. Free quotes.",
    url: "https://scscorp.biz",
  },
};

import DynamicBackground from "@/components/marketing/DynamicBackground";

export default function HomePage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
  ]);

  const webPage = generateWebPageSchema({
    title: "SCS Corp — Cleaning, Building Maintenance, Traffic Control & Lawn Care Services Australia",
    description:
      "Australia's trusted provider of professional property services. Cleaning, building maintenance, certified traffic control, and lawn mowing. Nationwide coverage across all states and territories.",
    url: "/",
    type: "WebPage",
  });

  const reviews = generateReviewSchema();

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={webPage} />
      <JsonLd data={reviews} />
      <Hero />
      <ServicesGrid />
      <AboutPreview />
      <div className="bg-navy noise-overlay relative overflow-hidden">
        <DynamicBackground />
        <HowItWorks />
        <CTABanner />
      </div>
      <ServicePackages />
      <RecentProjects />
      <Testimonials />
      <CoverageStats />
      <FinalCTA />
    </>
  );
}
