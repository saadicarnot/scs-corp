"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import StaggerChildren, { StaggerItem } from "@/components/marketing/StaggerChildren";
import SectionReveal from "@/components/marketing/SectionReveal";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="testimonials">
      <div className="container-wide">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-eyebrow text-accent-blue mb-3">Testimonials</p>
          <h2 className="text-section-title text-text-strong mb-4">
            Our Satisfied Client Feedback
          </h2>
          <p className="text-body text-text-muted">
            Real results, real clients. We&apos;re proud of the relationships we&apos;ve built and the spaces we&apos;ve transformed across Australia.
          </p>
        </SectionReveal>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="h-full bg-white rounded-2xl border border-border-subtle p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-accent-blue/20 mb-4" />

                {/* Quote text */}
                <p className="text-body-sm text-text-muted mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center text-sm font-bold">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-strong">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-text-muted">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
