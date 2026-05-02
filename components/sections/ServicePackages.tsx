"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SERVICE_PACKAGES } from "@/lib/constants";
import StaggerChildren, { StaggerItem } from "@/components/marketing/StaggerChildren";
import SectionReveal from "@/components/marketing/SectionReveal";
import { cn } from "@/lib/utils";

export default function ServicePackages() {
  return (
    <section className="py-20 lg:py-28 bg-surface" id="service-packages">
      <div className="container-wide">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-eyebrow text-accent-blue mb-3">Service Packages</p>
          <h2 className="text-section-title text-text-strong mb-4">
            Solutions for Every Property
          </h2>
          <p className="text-body text-text-muted">
            Whether you&apos;re a homeowner, strata manager, or commercial operator — we have a package that fits. All plans include insured staff and quality-guaranteed results.
          </p>
        </SectionReveal>

        <StaggerChildren className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {SERVICE_PACKAGES.map((pkg) => (
            <StaggerItem key={pkg.tier}>
              <div
                className={cn(
                  "relative h-full rounded-2xl p-7 transition-shadow duration-300 hover:shadow-xl",
                  pkg.popular
                    ? "bg-navy text-white border-2 border-accent-blue shadow-xl"
                    : "bg-white border border-border-subtle"
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-blue text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <h3 className={cn(
                  "text-xl font-bold mb-2",
                  pkg.popular ? "text-white" : "text-text-strong"
                )}>
                  {pkg.tier}
                </h3>
                <p className={cn(
                  "text-sm mb-6",
                  pkg.popular ? "text-white/70" : "text-text-muted"
                )}>
                  {pkg.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={cn(
                        "h-5 w-5 shrink-0 mt-0.5",
                        pkg.popular ? "text-accent-blue" : "text-accent-blue"
                      )} />
                      <span className={cn(
                        "text-sm",
                        pkg.popular ? "text-white/80" : "text-text-muted"
                      )}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={cn(
                    "group flex items-center justify-center gap-2 w-full h-12 rounded-xl font-semibold text-sm transition-all duration-250",
                    pkg.popular
                      ? "bg-accent-blue text-white hover:bg-accent-blue-hover hover:scale-[1.02]"
                      : "bg-navy text-white hover:bg-navy-light hover:scale-[1.02]"
                  )}
                >
                  {pkg.cta}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
