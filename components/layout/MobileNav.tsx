"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { COMPANY, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  facebook: <FacebookIcon className="h-5 w-5" />,
  twitter: <TwitterIcon className="h-5 w-5" />,
  instagram: <InstagramIcon className="h-5 w-5" />,
  youtube: <YoutubeIcon className="h-5 w-5" />,
  linkedin: <LinkedinIcon className="h-5 w-5" />,
};

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-navy/95 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Content */}
          <motion.nav
            className="relative h-full flex flex-col px-6 py-6 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            aria-label="Mobile navigation"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <Image
                src="/brand/logo-white.svg"
                alt="SCS Corp"
                width={140}
                height={36}
                className="h-8 w-auto"
              />
              <button
                onClick={onClose}
                className="h-10 w-10 flex items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {"children" in link ? (
                    <div>
                      <button
                        onClick={() => setServicesExpanded(!servicesExpanded)}
                        className="flex items-center justify-between w-full py-4 text-2xl font-semibold text-white hover:text-accent-blue transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${servicesExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pl-4 border-l-2 border-accent-blue/30 ml-2"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={onClose}
                                className="block py-3 text-lg text-white/70 hover:text-accent-blue transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block py-4 text-2xl font-semibold text-white hover:text-accent-blue transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full text-center py-4 bg-accent-blue text-white font-semibold rounded-xl hover:bg-accent-blue-hover transition-colors text-lg"
              >
                Book a Service
              </Link>
            </motion.div>

            {/* Contact info */}
            <motion.div
              className="mt-8 pt-6 border-t border-white/10 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-accent-blue" />
                <span>{COMPANY.phoneFormatted}</span>
              </a>
              <a
                href={COMPANY.emailHref}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-accent-blue" />
                <span>{COMPANY.email}</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="h-4 w-4 text-accent-blue shrink-0" />
                <span>{COMPANY.address.full}</span>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="mt-6 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-accent-blue hover:text-white transition-colors"
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
