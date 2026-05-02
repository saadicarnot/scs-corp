import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SERVICES, COMPANY } from "@/lib/constants";
import SectionReveal from "@/components/marketing/SectionReveal";
import StaggerChildren, { StaggerItem } from "@/components/marketing/StaggerChildren";
import JsonLd from "@/components/seo/JsonLd";
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from "@/lib/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  params: Promise<{ slug: string }>;
};

function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

// SEO keyword maps per service for topical authority
const SEO_TITLES: Record<string, string> = {
  cleaning:
    "Professional Cleaning Services Australia — Residential, Commercial & Strata Cleaning",
  maintenance:
    "Building Maintenance Services Australia — Preventative & Emergency Property Care",
  "traffic-control":
    "Certified Traffic Control Services Australia — TMP Planning & Worksite Safety",
  "lawn-care":
    "Professional Lawn Mowing & Garden Care Australia — Residential & Commercial Grounds Maintenance",
};

const SEO_DESCRIPTIONS: Record<string, string> = {
  cleaning:
    "Expert cleaning services across Australia. Deep cleaning, regular maintenance, end-of-lease, carpet & window cleaning for homes, offices, strata & government buildings. Eco-friendly, fully insured. Free quote.",
  maintenance:
    "Comprehensive building maintenance services Australia-wide. Preventative programs, emergency repairs, common area upkeep, painting & pressure washing for strata, commercial & government properties.",
  "traffic-control":
    "Certified traffic control & traffic management services across Australia. Accredited TMP planning, road closures, worksite safety for construction, civil, utilities & events. WHS compliant.",
  "lawn-care":
    "Professional lawn mowing & garden care across Australia. Regular mowing, hedging, weeding, mulching & seasonal clean-ups for residential, strata, commercial & council properties. Free quote.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: SEO_TITLES[slug] || `${service.title} Services`,
    description: SEO_DESCRIPTIONS[slug] || service.fullDescription,
    alternates: {
      canonical: `https://scscorp.biz${service.href}`,
    },
    openGraph: {
      title: SEO_TITLES[slug] || `${service.title} Services — SCS Corp`,
      description: SEO_DESCRIPTIONS[slug] || service.fullDescription,
      url: `https://scscorp.biz${service.href}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  // JSON-LD schemas for topical authority
  const serviceSchema = generateServiceSchema(service);
  const faqSchema = generateFAQSchema(service.faqs);
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: service.href },
  ]);
  const webPage = generateWebPageSchema({
    title: `${service.title} Services — SCS Corp`,
    description: service.fullDescription,
    url: service.href,
    type: "ServicePage",
  });

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbs} />
      <JsonLd data={webPage} />
      {/* Hero with breadcrumb */}
      <section className="relative py-24 lg:py-32 gradient-navy noise-overlay">
        <div className="container-wide relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/services" className="hover:text-white/80 transition-colors">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-eyebrow text-accent-blue mb-4">{service.tagline}</p>
            <h1 className="text-page-title text-white mb-5">{service.title}</h1>
            <p className="text-body-lg text-white/70 mb-8">{service.fullDescription}</p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 h-12 px-7 bg-accent-blue text-white font-semibold rounded-xl hover:bg-accent-blue-hover hover:scale-[1.02] transition-all duration-250"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" />
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-eyebrow text-accent-blue mb-3">What&apos;s Included</p>
            <h2 className="text-section-title text-text-strong">Our {service.shortTitle} Services</h2>
          </SectionReveal>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {service.features.map((feature) => (
              <StaggerItem key={feature}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border-subtle">
                  <div className="h-2 w-2 rounded-full bg-accent-blue mt-2 shrink-0" />
                  <span className="text-sm text-text-strong">{feature}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container-wide">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-eyebrow text-accent-blue mb-3">Our Process</p>
            <h2 className="text-section-title text-text-strong">How We Deliver</h2>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {service.process.map((step, i) => (
              <SectionReveal key={step.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="h-14 w-14 mx-auto rounded-full bg-accent-blue text-white flex items-center justify-center text-lg font-bold mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-semibold text-text-strong mb-2">{step.title}</h3>
                  <p className="text-body-sm text-text-muted">{step.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-eyebrow text-accent-blue mb-3">Industries</p>
            <h2 className="text-section-title text-text-strong">Who This Service Is For</h2>
          </SectionReveal>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {service.industries.map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 bg-surface border border-border-subtle rounded-full text-sm font-medium text-text-strong"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications (traffic control only) */}
      {"certifications" in service && (
        <section className="py-20 lg:py-28 bg-surface">
          <div className="container-wide">
            <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-eyebrow text-accent-blue mb-3">Compliance</p>
              <h2 className="text-section-title text-text-strong">Certifications & Standards</h2>
            </SectionReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {(service as typeof SERVICES[2]).certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3 bg-white rounded-xl border border-border-subtle p-4">
                  <div className="h-3 w-3 rounded-full bg-green-500 shrink-0" />
                  <span className="text-sm text-text-strong">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide max-w-3xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <p className="text-eyebrow text-accent-blue mb-3">FAQ</p>
            <h2 className="text-section-title text-text-strong">Frequently Asked Questions</h2>
          </SectionReveal>

          <Accordion className="space-y-3">
            {service.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-surface border border-border-subtle rounded-xl px-5 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-sm font-semibold text-text-strong hover:text-accent-blue py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-text-muted pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container-wide">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-eyebrow text-accent-blue mb-3">Explore More</p>
            <h2 className="text-section-title text-text-strong">Other Services</h2>
          </SectionReveal>

          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <StaggerItem key={rel.slug}>
                <Link href={rel.href} className="group block">
                  <div className="bg-white rounded-2xl border border-border-subtle p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-card-title text-text-strong mb-2 group-hover:text-accent-blue transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-body-sm text-text-muted mb-4">{rel.shortDescription}</p>
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

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide">
          <SectionReveal className="rounded-3xl gradient-navy noise-overlay overflow-hidden px-8 py-16 lg:px-16 lg:py-20 text-center relative">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-page-title text-white mb-5">
                Need {service.shortTitle} Services?
              </h2>
              <p className="text-body-lg text-white/70 mb-8">
                Get a free quote today. We&apos;ll tailor a solution to your property&apos;s specific needs.
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
