import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { INDUSTRIES } from "@/lib/seo";
import SectionReveal from "@/components/marketing/SectionReveal";
import StaggerChildren, { StaggerItem } from "@/components/marketing/StaggerChildren";
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Industries We Serve — Residential, Strata, Commercial, Construction & Government",
  description:
    "SCS Corp provides tailored property services for residential, strata, commercial, construction, and government sectors across Australia. Cleaning, maintenance, traffic control & lawn care for every industry.",
  alternates: { canonical: "https://scscorp.biz/industries" },
  openGraph: {
    title: "Industries We Serve — SCS Corp Property Services",
    description:
      "Tailored property services for residential, strata, commercial, construction & government. Cleaning, maintenance, traffic control & lawn care.",
    url: "https://scscorp.biz/industries",
  },
};

export default function IndustriesPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
  ]);
  const webPage = generateWebPageSchema({
    title: "Industries We Serve — SCS Corp Property Services",
    description:
      "Tailored property services for residential, strata, commercial, construction & government sectors.",
    url: "/industries",
    type: "CollectionPage",
  });

  // Map service slugs to SERVICES data
  const getServiceBySlug = (slug: string) =>
    SERVICES.find((s) => s.slug === slug);

  const industryImages: Record<string, string> = {
    residential: "/images/industries/residential.png",
    strata: "/images/industries/strata.png",
    commercial: "/images/industries/commercial.png",
    construction: "/images/industries/construction.png",
    government: "/images/industries/government.png",
  };

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={webPage} />

      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-navy z-10 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)]">
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-eyebrow text-accent-blue mb-4">Industries</p>
          <h1 className="text-page-title text-white mb-5">
            Tailored Services for Every Sector
          </h1>
          <p className="text-body-lg text-white/70">
            We understand that different sectors have unique requirements. Our certified teams provide specialised property care for a wide range of industries.
          </p>
        </div>
      </section>

      {/* Industry Blocks */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide space-y-20 lg:space-y-28">
          {INDUSTRIES.map((industry, i) => (
            <div
              key={industry.slug}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
            >
              <SectionReveal
                direction={i % 2 === 0 ? "left" : "right"}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={industryImages[industry.slug] || "/images/industries/residential.png"}
                    alt={`${industry.title} - SCS Corp property services in Australia`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </SectionReveal>

              <SectionReveal
                direction={i % 2 === 0 ? "right" : "left"}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <p className="text-eyebrow text-accent-blue mb-3">
                  {industry.slug.charAt(0).toUpperCase() + industry.slug.slice(1)} Sector
                </p>
                <h2 className="text-section-title text-text-strong mb-4">
                  {industry.title}
                </h2>
                <p className="text-body text-text-muted mb-6">{industry.content}</p>

                {/* Relevant services */}
                <div className="space-y-2 mb-8">
                  <p className="text-sm font-semibold text-text-strong">
                    Services available:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.services.map((slug) => {
                      const service = getServiceBySlug(slug);
                      if (!service) return null;
                      return (
                        <Link
                          key={slug}
                          href={service.href}
                          className="px-3 py-1.5 bg-surface border border-border-subtle rounded-lg text-sm text-text-strong hover:border-accent-blue/30 hover:text-accent-blue transition-colors"
                        >
                          {service.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 h-11 px-6 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light hover:scale-[1.02] transition-all duration-250"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </SectionReveal>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container-wide">
          <SectionReveal className="rounded-3xl gradient-navy noise-overlay overflow-hidden px-8 py-16 lg:px-16 lg:py-20 text-center relative">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-page-title text-white mb-5">
                Don&apos;t See Your Industry?
              </h2>
              <p className="text-body-lg text-white/70 mb-8">
                We work with all property types. Get in touch and we&apos;ll create a custom solution for your sector.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-8 bg-accent-blue text-white font-semibold rounded-xl hover:bg-accent-blue-hover hover:scale-[1.02] transition-all duration-250"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
