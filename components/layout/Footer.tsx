"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { COMPANY, SERVICES, SOCIAL_LINKS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  facebook: <FacebookIcon className="h-4 w-4" />,
  twitter: <TwitterIcon className="h-4 w-4" />,
  instagram: <InstagramIcon className="h-4 w-4" />,
  youtube: <YoutubeIcon className="h-4 w-4" />,
  linkedin: <LinkedinIcon className="h-4 w-4" />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/brand/logo-white.svg"
              alt="SCS Corp"
              width={160}
              height={40}
              className="h-9 w-auto mb-5"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Delivering reliable and tailored solutions — cleaning, building maintenance, traffic control, and lawn mowing — to safeguard your assets and ensure peace of mind across all sectors.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-accent-blue hover:text-white transition-colors"
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 text-accent-blue mt-0.5 shrink-0" />
                  <span>{COMPANY.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.emailHref}
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 text-accent-blue mt-0.5 shrink-0" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="h-4 w-4 text-accent-blue mt-0.5 shrink-0" />
                <span>{COMPANY.address.full}</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Clock className="h-4 w-4 text-accent-blue mt-0.5 shrink-0" />
                <span>{COMPANY.hours}</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-white/60 hover:text-accent-blue transition-colors text-sm group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="flex items-center gap-2 text-white/60 hover:text-accent-blue transition-colors text-sm group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Service Areas</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="flex items-center gap-2 text-white/60 hover:text-accent-blue transition-colors text-sm group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Industries</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Subscribe Newsletter
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Subscribe to our newsletter for latest updates and news.
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="h-11 px-4 bg-white/10 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent-blue transition-colors"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="h-11 px-5 bg-accent-blue text-white text-sm font-semibold rounded-lg hover:bg-accent-blue-hover transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between py-5 gap-4">
          <p className="text-white/40 text-xs">
            Copyright © {currentYear} SCS Corp. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
