"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionReveal from "@/components/marketing/SectionReveal";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="final-cta">
      <div className="container-wide">
        <SectionReveal className="relative rounded-3xl gradient-navy noise-overlay overflow-hidden px-8 py-16 lg:px-16 lg:py-20 text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-page-title text-white mb-5">
              Ready for a property partner you can rely on?
            </h2>
            <p className="text-body-lg text-white/70 mb-8">
              Book your first service today and experience the SCS Corp difference — reliable, affordable, and always professional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 h-12 px-8 bg-accent-blue text-white font-semibold rounded-xl hover:bg-accent-blue-hover hover:scale-[1.02] hover:shadow-xl hover:shadow-accent-blue/25 transition-all duration-250"
              >
                Book a Service
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-8 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-250"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-blue/5 rounded-full blur-3xl" />
        </SectionReveal>
      </div>
    </section>
  );
}
