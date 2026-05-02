import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { SERVICES, COMPANY } from "@/lib/constants";
import { SERVICE_AREAS } from "@/lib/seo";
import SectionReveal from "@/components/marketing/SectionReveal";
import StaggerChildren, { StaggerItem } from "@/components/marketing/StaggerChildren";
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Service Areas — Property Services Across All Australian States & Territories",
  description:
    "SCS Corp delivers cleaning, building maintenance, traffic control, and lawn care across all 8 Australian states and territories — NSW, VIC, QLD, WA, SA, TAS, NT, and ACT. Find services near you.",
  alternates: { canonical: "https://scscorp.biz/service-areas" },
  openGraph: {
    title: "Service Areas — SCS Corp Property Services Nationwide",
    description:
      "We operate across all Australian states: NSW, VIC, QLD, WA, SA, TAS, NT, ACT. Cleaning, maintenance, traffic control & lawn care wherever you are.",
    url: "https://scscorp.biz/service-areas",
  },
};

export default function ServiceAreasPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
  ]);

  const webPage = generateWebPageSchema({
    title: "Service Areas — SCS Corp Property Services Nationwide",
    description:
      "SCS Corp operates across all 8 Australian states and territories. Cleaning, maintenance, traffic control & lawn care wherever you are.",
    url: "/service-areas",
    type: "WebPage",
  });

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={webPage} />

      {/* Hero */}
      <section className="relative py-24 lg:py-32 gradient-navy noise-overlay">
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-eyebrow text-accent-blue mb-4">Nationwide Coverage</p>
          <h1 className="text-page-title text-white mb-5">
            Property Services Across Every State
          </h1>
          <p className="text-body-lg text-white/70">
            From Perth to Sydney, Darwin to Hobart — SCS Corp delivers professional cleaning, building maintenance, certified traffic control, and lawn care in every corner of Australia.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" />
      </section>

      {/* States Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-eyebrow text-accent-blue mb-3">Our Locations</p>
            <h2 className="text-section-title text-text-strong mb-4">
              8 States & Territories, One Trusted Team
            </h2>
            <p className="text-body text-text-muted">
              Whether you&apos;re in a major metro centre or a regional community, our trained teams are ready to deliver.
            </p>
          </SectionReveal>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_AREAS.map((area) => (
              <StaggerItem key={area.slug}>
                <div className="bg-surface rounded-2xl border border-border-subtle p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-strong">{area.state}</h3>
                      <span className="text-xs text-text-muted">{area.stateShort}</span>
                    </div>
                  </div>
                  <p className="text-body-sm text-text-muted mb-4">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {area.cities.map((city) => (
                      <span
                        key={city}
                        className="px-2.5 py-1 bg-white border border-border-subtle rounded-md text-xs text-text-muted"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container-wide">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-eyebrow text-accent-blue mb-3">What We Offer</p>
            <h2 className="text-section-title text-text-strong mb-4">
              Full Service Coverage in Every State
            </h2>
            <p className="text-body text-text-muted">
              All four of our core services are available nationwide. Each location is serviced by our fully trained, insured teams.
            </p>
          </SectionReveal>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <StaggerItem key={service.slug}>
                <Link href={service.href} className="group block h-full">
                  <div className="bg-white rounded-2xl border border-border-subtle p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-card-title text-text-strong mb-2 group-hover:text-accent-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-body-sm text-text-muted mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-blue">
                      Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Keyword-rich content for topical depth */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide max-w-3xl mx-auto">
          <SectionReveal>
            <h2 className="text-section-title text-text-strong mb-6 text-center">
              Why Choose a Nationwide Property Services Provider?
            </h2>
            <div className="prose prose-base text-text-muted space-y-4">
              <p>
                Managing property services across multiple locations can be complex. Whether you&apos;re a national strata manager overseeing complexes in Sydney and Melbourne, a construction company running civil projects in Brisbane and Perth, or a council maintaining public spaces across regional areas — having one reliable partner simplifies everything.
              </p>
              <p>
                SCS Corp provides consistent, professional property care in every state and territory. Our centralised management and local teams mean you get the same standard of service whether your property is in Adelaide, Darwin, Hobart, or Canberra. One point of contact, one set of standards, one trusted team.
              </p>
              <p>
                All SCS Corp team members are fully insured, background-checked, and trained to our national quality standards. We use eco-friendly, hospital-grade products and commercial-grade equipment to deliver results that exceed expectations — every time, everywhere.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container-wide">
          <SectionReveal className="rounded-3xl gradient-navy noise-overlay overflow-hidden px-8 py-16 lg:px-16 lg:py-20 text-center relative">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-page-title text-white mb-5">
                Need Services in Your Area?
              </h2>
              <p className="text-body-lg text-white/70 mb-8">
                Tell us your location and requirements — we&apos;ll connect you with your nearest SCS Corp team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-12 px-8 bg-accent-blue text-white font-semibold rounded-xl hover:bg-accent-blue-hover hover:scale-[1.02] transition-all duration-250"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 h-12 px-8 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-250"
                >
                  Call {COMPANY.phoneFormatted}
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
