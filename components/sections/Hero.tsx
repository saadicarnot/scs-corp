"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { HERO_CONTENT, COMPANY } from "@/lib/constants";

const trustLogos = [
  "JW Marriott",
  "Marriott International",
  "Memocorp Australia",
  "City of Perth",
  "Strata Community",
  "BuildCorp",
  "Urban Council",
  "JW Marriott",
  "Marriott International",
  "Memocorp Australia",
  "City of Perth",
  "Strata Community",
  "BuildCorp",
  "Urban Council",
];

const wordContainer = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
  }),
};

const wordChild = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 20, stiffness: 100 },
  },
  hidden: { opacity: 0, y: 20 },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const words = HERO_CONTENT.title.split(" ");

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden gradient-navy -mt-8 pt-8"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent-blue/40 via-navy to-navy pointer-events-none" />

      <div className="container-wide relative z-10 pt-20 pb-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="flex flex-col items-start">
          {/* Eyebrow */}
          <motion.span
            className="text-eyebrow text-accent-blue mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {HERO_CONTENT.eyebrow}
          </motion.span>

          {/* Title with spring word-split animation */}
          <motion.h1
            variants={wordContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-hero text-white mb-6"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordChild}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              variants={wordChild}
              className="text-accent-blue inline-block"
            >
              {HERO_CONTENT.titleAccent}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-white/60 mb-10 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {HERO_CONTENT.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 h-12 px-7 bg-accent-blue text-white font-semibold rounded-xl hover:bg-accent-blue-hover hover:scale-[1.02] hover:shadow-xl hover:shadow-accent-blue/25 transition-all duration-250 w-full sm:w-auto"
            >
              {HERO_CONTENT.primaryCta}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 h-12 px-7 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-250 w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              {HERO_CONTENT.secondaryCta}
            </a>
          </motion.div>
        </div>

        {/* Right: Image with clip-path reveal */}
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10%)" }}
          animate={
            isInView
              ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }
              : {}
          }
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block h-[600px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/hero.png"
            alt="SCS Corp professional property services team across Australia"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />

          {/* Floating stats cards */}
          <motion.div
            className="absolute top-8 right-8 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/10"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className="text-accent-blue text-2xl font-bold">500+</div>
            <div className="text-white/70 text-xs mt-1">Jobs Completed</div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/10"
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="text-accent-blue text-2xl font-bold">100%</div>
            <div className="text-white/70 text-xs mt-1">
              Nationwide Coverage
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 right-8 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/brand/logo-full.webp"
                alt="SCS Corp"
                width={40}
                height={40}
                className="h-10 w-10 object-contain rounded-lg"
              />
              <div>
                <div className="text-white font-semibold text-sm">
                  SCS Corp
                </div>
                <div className="text-white/50 text-xs">Property Services</div>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-white/60 text-xs mt-2">
              Rated 5/5 by our clients
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust Strip Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 border-t border-white/10 py-5 overflow-hidden backdrop-blur-sm z-20">
        <div className="flex w-max animate-marquee items-center">
          {trustLogos.map((logo, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-white/40 font-semibold text-sm tracking-wider uppercase whitespace-nowrap">
                {logo}
              </span>
              <span className="mx-8 text-white/20">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
