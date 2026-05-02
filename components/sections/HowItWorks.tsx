"use client";

import { motion } from "framer-motion";
import { MousePointerClick, CalendarCheck, ThumbsUp } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Select Your Service",
    description:
      "Choose from our range of professional property services tailored to your specific needs.",
    icon: MousePointerClick,
  },
  {
    num: "02",
    title: "Set Your Schedule",
    description:
      "Book a time that works for you. We offer flexible scheduling including after-hours support.",
    icon: CalendarCheck,
  },
  {
    num: "03",
    title: "Job Done",
    description:
      "Our expert team arrives on time, completes the work to the highest standard, and leaves your property pristine.",
    icon: ThumbsUp,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-navy text-white overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-eyebrow text-accent-blue mb-4 block"
          >
            Simple Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-section-title text-white"
          >
            How It Works
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-white/10">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="h-full bg-accent-blue"
            />
          </div>

          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-[10%] bottom-[10%] left-12 w-0.5 bg-white/10">
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="w-full bg-accent-blue"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center relative"
              >
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-navy border-4 border-accent-blue flex items-center justify-center mb-0 md:mb-6 mr-6 md:mr-0 relative z-10 shadow-[0_0_30px_rgba(30,120,255,0.2)]">
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-navy font-bold rounded-full flex items-center justify-center text-sm">
                    {step.num}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
