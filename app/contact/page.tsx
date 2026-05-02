"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";
import SectionReveal from "@/components/marketing/SectionReveal";
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import JsonLd from "@/components/seo/JsonLd";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  propertyType: z.string().min(1, "Please select a property type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected"), // Honeypot field
});

type ContactFormData = z.infer<typeof contactSchema>;

const faqs = [
  { question: "How quickly can you start?", answer: "For most services, we can schedule within 48 hours. Emergency maintenance and traffic control can often be mobilised same-day." },
  { question: "Do you offer free quotes?", answer: "Yes — all quotes are free with no obligation. We'll assess your needs and provide a transparent, itemised quote." },
  { question: "What areas do you service?", answer: "We operate across all eight states and territories in Australia, from major metro areas to regional communities." },
  { question: "Are your staff insured?", answer: "Every SCS Corp team member carries full public liability insurance and has passed thorough background checks." },
  { question: "Can I book a one-off service?", answer: "Absolutely. We offer both one-off services and ongoing scheduled plans. Many clients start with a one-off and then move to regular service." },
  { question: "What payment methods do you accept?", answer: "We accept bank transfer, credit/debit cards, and can set up invoicing for commercial clients on approved terms." },
  { question: "How do I cancel or reschedule?", answer: "Just contact us at least 24 hours before your scheduled service and we'll happily reschedule at no extra charge." },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Handle error
    } finally {
      setSubmitting(false);
    }
  };

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbs} />
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-navy z-10 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)]">
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-eyebrow text-accent-blue mb-4">Contact Us</p>
          <h1 className="text-page-title text-white mb-5">Get in Touch</h1>
          <p className="text-body-lg text-white/70">
            Tell us about your property, your project, or your problem. We&apos;ll get back within one business day.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Contact details */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <h2 className="text-section-title text-text-strong mb-6">Contact Details</h2>

                <div className="space-y-5 mb-8">
                  <a href={COMPANY.phoneHref} className="flex items-start gap-4 group">
                    <div className="h-10 w-10 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Phone</p>
                      <p className="font-semibold text-text-strong group-hover:text-accent-blue transition-colors">
                        {COMPANY.phoneFormatted}
                      </p>
                    </div>
                  </a>

                  <a href={COMPANY.emailHref} className="flex items-start gap-4 group">
                    <div className="h-10 w-10 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Email</p>
                      <p className="font-semibold text-text-strong group-hover:text-accent-blue transition-colors">
                        {COMPANY.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Address</p>
                      <p className="font-semibold text-text-strong">{COMPANY.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Hours</p>
                      <p className="font-semibold text-text-strong">{COMPANY.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="aspect-[4/3] rounded-xl bg-surface border border-border-subtle flex items-center justify-center mb-6">
                  <div className="text-center p-4">
                    <MapPin className="h-8 w-8 text-accent-blue/30 mx-auto mb-2" />
                    <p className="text-text-muted text-sm">Google Map</p>
                    <p className="text-text-muted text-xs">21 Alexandra Place, Bentley WA</p>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3">
                  <a href="#" aria-label="Facebook" className="h-10 w-10 flex items-center justify-center rounded-full bg-surface text-text-muted hover:bg-accent-blue hover:text-white transition-colors">
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Twitter" className="h-10 w-10 flex items-center justify-center rounded-full bg-surface text-text-muted hover:bg-accent-blue hover:text-white transition-colors">
                    <TwitterIcon className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Instagram" className="h-10 w-10 flex items-center justify-center rounded-full bg-surface text-text-muted hover:bg-accent-blue hover:text-white transition-colors">
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="YouTube" className="h-10 w-10 flex items-center justify-center rounded-full bg-surface text-text-muted hover:bg-accent-blue hover:text-white transition-colors">
                    <YoutubeIcon className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="h-10 w-10 flex items-center justify-center rounded-full bg-surface text-text-muted hover:bg-accent-blue hover:text-white transition-colors">
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </div>
              </SectionReveal>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <SectionReveal direction="right">
                {submitted ? (
                  <div className="bg-surface rounded-2xl border border-border-subtle p-12 text-center">
                    <div className="h-16 w-16 mx-auto rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-strong mb-2">Message Sent!</h3>
                    <p className="text-text-muted mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within one business day.
                    </p>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-accent-blue-dark transition-colors"
                    >
                      Back to Home
                    </Link>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-surface rounded-2xl border border-border-subtle p-8"
                  >
                    <h3 className="text-xl font-semibold text-text-strong mb-6">Send Us a Message</h3>

                    {/* Honeypot */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <input type="text" {...register("honeypot")} tabIndex={-1} autoComplete="off" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-strong mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          {...register("name")}
                          className="w-full h-11 px-4 bg-white border border-border-subtle rounded-lg text-sm focus:outline-none focus:border-accent-blue transition-colors"
                          placeholder="John Smith"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-strong mb-1.5">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register("email")}
                          className="w-full h-11 px-4 bg-white border border-border-subtle rounded-lg text-sm focus:outline-none focus:border-accent-blue transition-colors"
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text-strong mb-1.5">
                          Phone *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          className="w-full h-11 px-4 bg-white border border-border-subtle rounded-lg text-sm focus:outline-none focus:border-accent-blue transition-colors"
                          placeholder="0400 000 000"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-text-strong mb-1.5">
                          Service Required *
                        </label>
                        <select
                          id="service"
                          {...register("service")}
                          className="w-full h-11 px-4 bg-white border border-border-subtle rounded-lg text-sm focus:outline-none focus:border-accent-blue transition-colors"
                        >
                          <option value="">Select a service</option>
                          {SERVICES.map((s) => (
                            <option key={s.slug} value={s.slug}>{s.title}</option>
                          ))}
                          <option value="other">Other</option>
                        </select>
                        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="propertyType" className="block text-sm font-medium text-text-strong mb-1.5">
                        Property Type *
                      </label>
                      <select
                        id="propertyType"
                        {...register("propertyType")}
                        className="w-full h-11 px-4 bg-white border border-border-subtle rounded-lg text-sm focus:outline-none focus:border-accent-blue transition-colors"
                      >
                        <option value="">Select property type</option>
                        <option value="residential">Residential</option>
                        <option value="strata">Strata</option>
                        <option value="commercial">Commercial</option>
                        <option value="council">Council / Government</option>
                        <option value="construction">Construction Site</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.propertyType && <p className="text-red-500 text-xs mt-1">{errors.propertyType.message}</p>}
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-text-strong mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        {...register("message")}
                        className="w-full px-4 py-3 bg-white border border-border-subtle rounded-lg text-sm focus:outline-none focus:border-accent-blue transition-colors resize-none"
                        placeholder="Tell us about your project or requirements..."
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="group inline-flex items-center gap-2 h-12 px-8 bg-accent-blue text-white font-semibold rounded-xl hover:bg-accent-blue-hover hover:scale-[1.02] transition-all duration-250 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending..." : "Send Message"}
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container-wide max-w-3xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <p className="text-eyebrow text-accent-blue mb-3">FAQ</p>
            <h2 className="text-section-title text-text-strong">Common Questions</h2>
          </SectionReveal>

          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white border border-border-subtle rounded-xl px-5 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-sm font-semibold text-text-strong hover:text-accent-blue py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-text-muted pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
