"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Leaf } from "lucide-react";
import SectionReveal from "@/components/marketing/SectionReveal";
import AnimatedCounter from "@/components/marketing/AnimatedCounter";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-surface" id="about-preview">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image with badge */}
          <SectionReveal direction="left" className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-navy/5">
              <Image
                src="/images/team/team-photo.png"
                alt="SCS Corp professional team of property services workers in Australia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 lg:bottom-6 lg:-right-6 bg-accent-blue text-white rounded-2xl p-5 shadow-xl shadow-accent-blue/20">
              <div className="text-3xl font-bold">
                <AnimatedCounter target={12} suffix="+" />
              </div>
              <div className="text-white/80 text-sm mt-1">Years Experience</div>
            </div>
          </SectionReveal>

          {/* Right: Content */}
          <SectionReveal direction="right">
            <p className="text-eyebrow text-accent-blue mb-3">About Us</p>
            <h2 className="text-section-title text-text-strong mb-5">
              Reliable, Affordable & Eco-Friendly Company
            </h2>
            <p className="text-body text-text-muted mb-8">
              We&apos;re more than a cleaning company — we&apos;re your complete property care and building maintenance partner. With over a decade of experience serving homeowners, landlords, managers, and business owners, our team delivers consistent, high-quality results you can count on every single time.
            </p>

            {/* Pillar cards */}
            <div className="space-y-4 mb-8">
              <div className="flex gap-4 p-4 rounded-xl bg-white border border-border-subtle">
                <div className="h-12 w-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-strong mb-1">Fully Insured & Background-Checked</h3>
                  <p className="text-body-sm text-text-muted">
                    Every team member is professionally vetted, uniformed, and carries full public liability insurance for your peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-white border border-border-subtle">
                <div className="h-12 w-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-strong mb-1">Eco-Friendly Products & Equipment</h3>
                  <p className="text-body-sm text-text-muted">
                    We use hospital-grade, eco-safe products that are tough on grime but gentle on your surfaces, family, and pets.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-accent-blue-dark transition-colors"
            >
              More About Us
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
