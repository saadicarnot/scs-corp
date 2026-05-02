"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Wrench, ShieldAlert, TreePine, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import StaggerChildren, { StaggerItem } from "@/components/marketing/StaggerChildren";

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="h-7 w-7" />,
  wrench: <Wrench className="h-7 w-7" />,
  "traffic-cone": <ShieldAlert className="h-7 w-7" />,
  trees: <TreePine className="h-7 w-7" />,
};

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="services-grid">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-eyebrow text-accent-blue mb-3">What We Do</p>
          <h2 className="text-section-title text-text-strong mb-4">
            Most Popular Services
          </h2>
          <p className="text-body text-text-muted">
            Professional, reliable, and eco-friendly solutions for residential and commercial properties, delivered by trained experts.
          </p>
        </div>

        {/* Grid */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <StaggerItem key={service.slug}>
              <Link href={service.href} className="group block">
                <motion.div
                  className="relative h-full bg-white rounded-2xl border border-border-subtle p-6 overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Accent border slide */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-blue scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 rounded-l-2xl" />

                  {/* Icon */}
                  <div className="h-14 w-14 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-5 group-hover:rotate-[8deg] transition-transform duration-300">
                    {iconMap[service.icon]}
                  </div>

                  {/* Content */}
                  <h3 className="text-card-title text-text-strong mb-2 group-hover:text-accent-blue transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-body-sm text-text-muted mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Link */}
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-blue">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
