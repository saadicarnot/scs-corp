"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import StaggerChildren, { StaggerItem } from "@/components/marketing/StaggerChildren";
import SectionReveal from "@/components/marketing/SectionReveal";

const projectImages: Record<string, string> = {
  "greenfield-office-cleaning": "/images/projects/office-cleaning.png",
  "mitchell-house-cleaning": "/images/projects/house-cleaning.png",
  "harrington-grounds": "/images/projects/lawn-estate.png",
  "pinnacle-strata": "/images/projects/strata-maintenance.png",
};

const placeholderColors = [
  "from-accent-blue/10 to-navy/10",
  "from-navy/10 to-accent-blue/5",
  "from-accent-blue/5 to-surface",
  "from-navy/5 to-accent-blue/10",
];

export default function RecentProjects() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="recent-projects">
      <div className="container-wide">
        <SectionReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
            <p className="text-eyebrow text-accent-blue mb-3">Our Work</p>
            <h2 className="text-section-title text-text-strong">
              Recent Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-accent-blue-dark transition-colors"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </SectionReveal>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, i) => (
            <StaggerItem key={project.slug}>
              <Link href="/projects" className="group block">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  {/* Project image */}
                  <Image
                    src={projectImages[project.slug] || "/images/projects/office-cleaning.png"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <span className="inline-block w-fit px-3 py-1 bg-accent-blue/90 text-white text-xs font-semibold rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg mb-1 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent-blue text-sm font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
