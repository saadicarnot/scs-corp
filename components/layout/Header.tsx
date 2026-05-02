"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-10 left-[10%] right-[10%] z-40 transition-all duration-300 rounded-xl",
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20"
            : "bg-white/95 shadow-md"
        )}
      >
        <div className="px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="relative shrink-0" aria-label="SCS Corp Home">
            <Image
              src="/brand/logo-full.webp"
              alt="SCS Corp Services Group"
              width={160}
              height={50}
              className="h-10 lg:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              if ("children" in link) {
                return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-text-strong hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200",
                      servicesOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-border-subtle p-2 min-w-[280px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex flex-col px-4 py-3 rounded-lg hover:bg-surface transition-colors group"
                        >
                          <span className="text-sm font-medium text-text-strong group-hover:text-accent-blue transition-colors">
                            {child.label}
                          </span>
                          <span className="text-xs text-text-muted mt-0.5">
                            {child.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-text-strong hover:text-accent-blue transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: phone + CTA */}
          <div className="flex items-center gap-3">
            {/* Phone - desktop */}
            <a
              href={COMPANY.phoneHref}
              className="hidden md:flex items-center gap-2 text-sm font-medium text-text-strong hover:text-accent-blue transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{COMPANY.phone}</span>
            </a>

            {/* Phone - mobile icon */}
            <a
              href={COMPANY.phoneHref}
              className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-surface text-text-strong hover:bg-accent-blue hover:text-white transition-colors"
              aria-label={`Call ${COMPANY.phone}`}
            >
              <Phone className="h-4 w-4" />
            </a>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center h-10 px-5 bg-accent-blue text-white text-sm font-semibold rounded-lg hover:bg-accent-blue-hover hover:scale-[1.02] hover:shadow-lg transition-all duration-250"
            >
              Book a Service
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg hover:bg-surface transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-text-strong" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
