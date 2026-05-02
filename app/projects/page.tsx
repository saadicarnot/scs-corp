import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import SectionReveal from "@/components/marketing/SectionReveal";
import StaggerChildren, { StaggerItem } from "@/components/marketing/StaggerChildren";
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/seo";

const projectImages: Record<string, string> = {
  "greenfield-office-cleaning": "/images/projects/office-cleaning.png",
  "mitchell-house-cleaning": "/images/projects/house-cleaning.png",
  "harrington-grounds": "/images/projects/lawn-estate.png",
  "pinnacle-strata": "/images/projects/strata-maintenance.png",
};

export const metadata: Metadata = {
  title: "Our Projects — Cleaning, Maintenance & Property Services Portfolio | SCS Corp",
  description:
    "View SCS Corp's recent projects — commercial cleaning, strata maintenance, traffic control, and lawn care across Australia. Real work, real results. See our portfolio.",
  alternates: { canonical: "https://scscorp.biz/projects" },
  openGraph: {
    title: "Recent Projects — SCS Corp Property Services Australia",
    description:
      "Our portfolio of cleaning, maintenance, traffic control & lawn care projects across Australia.",
    url: "https://scscorp.biz/projects",
  },
};

export default function ProjectsPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
  ]);
  const webPage = generateWebPageSchema({
    title: "Recent Projects — SCS Corp Property Services",
    description: "Our portfolio of property services projects across Australia.",
    url: "/projects",
    type: "CollectionPage",
  });

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={webPage} />
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-navy z-10 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.2)]">
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-eyebrow text-accent-blue mb-4">Our Work</p>
          <h1 className="text-page-title text-white mb-5">Recent Projects</h1>
          <p className="text-body-lg text-white/70">
            A selection of recent work across cleaning, maintenance, traffic control, and lawn care. Every project delivered with professionalism and pride.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide">
          <StaggerChildren className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {PROJECTS.map((project) => (
              <StaggerItem key={project.slug}>
                <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={projectImages[project.slug] || "/images/projects/office-cleaning.png"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    <span className="inline-block w-fit px-3 py-1 bg-accent-blue/90 text-white text-xs font-semibold rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-white font-semibold text-xl mb-2">{project.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{project.description}</p>
                    <span className="inline-flex items-center gap-1 text-accent-blue text-sm font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      View details <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Coming soon note */}
          <SectionReveal className="text-center mt-16">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-surface border border-border-subtle rounded-full">
              <div className="h-2 w-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-sm text-text-muted">More projects coming soon — we&apos;re updating our portfolio</span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container-wide">
          <SectionReveal className="rounded-3xl gradient-navy noise-overlay overflow-hidden px-8 py-16 lg:px-16 lg:py-20 text-center relative">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-page-title text-white mb-5">Have a Project in Mind?</h2>
              <p className="text-body-lg text-white/70 mb-8">
                Tell us about your property or worksite and we&apos;ll put together a tailored plan.
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
