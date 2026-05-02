import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES, COMPANY } from "@/lib/constants";
import SectionReveal from "@/components/marketing/SectionReveal";
import AnimatedCounter from "@/components/marketing/AnimatedCounter";
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Property & Site Services Australia — Cleaning, Maintenance, Traffic Control & Lawn Care",
  description:
    "SCS Corp offers professional cleaning, building maintenance, certified traffic control, and lawn mowing services across all Australian states. Residential, strata, commercial, council & construction. Fully insured, eco-friendly. Free quotes.",
  alternates: { canonical: "https://scscorp.biz/services" },
  openGraph: {
    title: "Our Services — SCS Corp Property Services Australia",
    description:
      "Professional cleaning, building maintenance, traffic control & lawn care. Servicing residential, strata, commercial & council properties nationwide.",
    url: "https://scscorp.biz/services",
  },
};

const industries = ["Residential", "Strata", "Commercial", "Council", "Construction"];

export default function ServicesPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);
  const webPage = generateWebPageSchema({
    title: "Property & Site Services — SCS Corp Australia",
    description: "Professional cleaning, building maintenance, traffic control & lawn care across Australia.",
    url: "/services",
    type: "CollectionPage",
  });

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={webPage} />
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-navy z-10 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)]">
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-eyebrow text-accent-blue mb-4">Our Services</p>
          <h1 className="text-page-title text-white mb-5">Trusted Services, Delivered with Aussie Pride</h1>
          <p className="text-body-lg text-white/70 mb-10">
            From spotless homes to safe worksites, we deliver property and site services across every state and territory.
          </p>
          <div className="flex justify-center gap-8 lg:gap-12">
            {[
              { value: 12, suffix: "+", label: "Years in Operation" },
              { value: 500, suffix: "+", label: "Projects Completed" },
              { value: 8, suffix: "", label: "States Served" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/60 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modules */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide space-y-20 lg:space-y-28">
          {SERVICES.map((service, i) => (
            <div key={service.slug} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <SectionReveal direction={i % 2 === 0 ? "left" : "right"} className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={`/images/services/${service.slug}.png`}
                    alt={`${service.title} services by SCS Corp in Australia`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </SectionReveal>

              <SectionReveal direction={i % 2 === 0 ? "right" : "left"} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-eyebrow text-accent-blue mb-3">{service.tagline}</p>
                <h2 className="text-section-title text-text-strong mb-4">{service.title}</h2>
                <p className="text-body text-text-muted mb-6">{service.fullDescription}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent-blue shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="group inline-flex items-center gap-2 h-11 px-6 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light hover:scale-[1.02] transition-all duration-250"
                >
                  View {service.shortTitle} Details
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </SectionReveal>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container-wide">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-eyebrow text-accent-blue mb-3">Who We Serve</p>
            <h2 className="text-section-title text-text-strong mb-4">Industries We Work With</h2>
            <p className="text-body text-text-muted">
              We tailor our services to meet the unique needs of each industry — from residential homeowners to large-scale civil contractors.
            </p>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {industries.map((industry) => (
              <SectionReveal key={industry}>
                <div className="bg-white rounded-xl border border-border-subtle p-5 text-center hover:shadow-lg hover:border-accent-blue/20 transition-all">
                  <h3 className="font-semibold text-text-strong mb-1">{industry}</h3>
                  <p className="text-xs text-text-muted">Property Services</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide">
          <SectionReveal className="rounded-3xl gradient-navy noise-overlay overflow-hidden px-8 py-16 lg:px-16 lg:py-20 text-center relative">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-page-title text-white mb-5">Ready to Work with Us?</h2>
              <p className="text-body-lg text-white/70 mb-8">
                Get a custom quote for your property or project — we&apos;ll tailor a service package that fits your needs and budget.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 h-12 px-8 bg-accent-blue text-white font-semibold rounded-xl hover:bg-accent-blue-hover hover:scale-[1.02] transition-all duration-250">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
