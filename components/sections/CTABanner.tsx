"use client";

import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import SectionReveal from "@/components/marketing/SectionReveal";

export default function CTABanner() {
  return (
    <section className="relative py-20 lg:py-28 bg-navy noise-overlay overflow-hidden" id="cta-banner">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <SectionReveal>
          {/* Rating Pill */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-medium text-sm">
              5.0 Rated by Australians
            </span>
          </div>

          <h2 className="text-section-title text-white mb-6">
            Professional Quality Services With Experts
          </h2>
          <p className="text-body-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Our certified team handles every task with precision and care, backed by years of industry experience and a 100% satisfaction guarantee. Don&apos;t settle for average when you can have exceptional.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center gap-2 h-12 px-8 bg-white text-navy font-semibold rounded-xl hover:bg-white/90 hover:scale-[1.02] transition-all duration-250 w-full sm:w-auto"
            >
              Contact Us
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex justify-center items-center gap-2 h-12 px-8 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-250 w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </div>
        </SectionReveal>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-blue/20 via-navy to-navy pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
    </section>
  );
}
