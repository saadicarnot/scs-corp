"use client";

import { CLIENT_LOGOS } from "@/lib/constants";
import LogoMarquee from "@/components/marketing/LogoMarquee";

export default function ClientsCarousel() {
  return (
    <section className="py-16 lg:py-20 bg-surface border-y border-border-subtle" id="clients">
      <div className="container-wide mb-8">
        <p className="text-center text-sm font-medium text-text-muted">
          Trusted by leading Australian businesses, councils, and property managers
        </p>
      </div>

      <LogoMarquee pauseOnHover speed="normal">
        {CLIENT_LOGOS.map((client) => (
          <div
            key={client.name}
            className="flex items-center justify-center h-12 px-8 shrink-0"
            style={{ minWidth: client.width }}
          >
            <span className="text-navy/30 font-bold text-lg whitespace-nowrap tracking-wide">
              {client.name}
            </span>
          </div>
        ))}
      </LogoMarquee>
    </section>
  );
}
