import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Leaf, Award, BadgeCheck, HardHat, MessageCircle } from "lucide-react";
import { ABOUT_CONTENT, VALUES, SERVICES, COMPANY } from "@/lib/constants";
import SectionReveal from "@/components/marketing/SectionReveal";
import AnimatedCounter from "@/components/marketing/AnimatedCounter";
import StaggerChildren, { StaggerItem } from "@/components/marketing/StaggerChildren";
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About SCS Corp — 12+ Years of Trusted Property Services Across Australia",
  description:
    "Learn about SCS Corp — Australia's trusted property services company with over 12 years of experience. Professional cleaning, building maintenance, traffic control & lawn care. 25+ trained team members. Fully insured. Nationwide coverage.",
  alternates: { canonical: "https://scscorp.biz/about" },
  openGraph: {
    title: "About SCS Corp — Trusted Property Services Since 2014",
    description:
      "Over 12 years delivering reliable cleaning, maintenance, traffic control & lawn care across Australia. Fully insured, eco-friendly, and committed to quality.",
    url: "https://scscorp.biz/about",
  },
};

const valueIcons: Record<string, React.ReactNode> = {
  "shield-check": <ShieldCheck className="h-6 w-6" />,
  "leaf": <Leaf className="h-6 w-6" />,
  "award": <Award className="h-6 w-6" />,
  "badge-check": <BadgeCheck className="h-6 w-6" />,
  "hard-hat": <HardHat className="h-6 w-6" />,
  "message-circle": <MessageCircle className="h-6 w-6" />,
};

export default function AboutPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);
  const webPage = generateWebPageSchema({
    title: "About SCS Corp — Trusted Property Services Since 2014",
    description: "Over 12 years delivering reliable property services across Australia. Cleaning, maintenance, traffic control & lawn care.",
    url: "/about",
    type: "AboutPage",
  });

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={webPage} />
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-navy z-10 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)]">
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-eyebrow text-accent-blue mb-4">{ABOUT_CONTENT.heroEyebrow}</p>
          <h1 className="text-page-title text-white mb-5">{ABOUT_CONTENT.heroTitle}</h1>
          <p className="text-body-lg text-white/70">{ABOUT_CONTENT.heroSubtitle}</p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 bg-white border-b border-border-subtle">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {ABOUT_CONTENT.statsStrip.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-navy mb-1">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={"decimals" in stat ? (stat.decimals as number) : 0}
                  />
                </div>
                <p className="text-text-muted text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionReveal direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/team/team-photo.png"
                  alt="SCS Corp team of property services professionals in Australia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <p className="text-eyebrow text-accent-blue mb-3">Our Story</p>
              <h2 className="text-section-title text-text-strong mb-6">{ABOUT_CONTENT.story.title}</h2>
              {ABOUT_CONTENT.story.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-body text-text-muted mb-4">{paragraph}</p>
              ))}
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container-wide">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-eyebrow text-accent-blue mb-3">Our Values</p>
            <h2 className="text-section-title text-text-strong mb-4">What Drives Us</h2>
            <p className="text-body text-text-muted">
              These principles guide everything we do — from the products we use to the way we communicate with every client.
            </p>
          </SectionReveal>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-white rounded-2xl border border-border-subtle p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="h-12 w-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {valueIcons[value.icon] || <Award className="h-6 w-6" />}
                  </div>
                  <h3 className="text-card-title text-text-strong mb-2">{value.title}</h3>
                  <p className="text-body-sm text-text-muted">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide text-center max-w-4xl mx-auto">
          <SectionReveal>
            <p className="text-eyebrow text-accent-blue mb-3">Our Team</p>
            <h2 className="text-section-title text-text-strong mb-6">Meet the Professionals</h2>
            <p className="text-body text-text-muted mb-10 max-w-2xl mx-auto">
              We have 25+ trained, insured professionals across Australia — each committed to delivering five-star results on every job.
            </p>
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero.png"
                alt="SCS Corp professional team ready to deliver property services across Australia"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Core services preview */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container-wide">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-eyebrow text-accent-blue mb-3">What We Do</p>
            <h2 className="text-section-title text-text-strong">Our Core Services</h2>
          </SectionReveal>

          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service) => (
              <StaggerItem key={service.slug}>
                <Link href={service.href} className="group block h-full">
                  <div className="bg-white rounded-2xl border border-border-subtle p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-5">
                      <Image
                        src={`/images/services/${service.slug}.png`}
                        alt={`${service.title} services by SCS Corp across Australia`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
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

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide">
          <SectionReveal className="rounded-3xl gradient-navy noise-overlay overflow-hidden px-8 py-16 lg:px-16 lg:py-20 text-center relative">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-page-title text-white mb-5">
                Ready to Experience the SCS Corp Difference?
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 h-12 px-8 bg-accent-blue text-white font-semibold rounded-xl hover:bg-accent-blue-hover hover:scale-[1.02] transition-all duration-250">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 h-12 px-8 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-250">
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
