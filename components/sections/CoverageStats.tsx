"use client";

import { STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/marketing/AnimatedCounter";
import SectionReveal from "@/components/marketing/SectionReveal";
import { MapPin, Users, CheckCircle2, Globe2 } from "lucide-react";

const statIcons = [Globe2, CheckCircle2, Users, CheckCircle2];

export default function CoverageStats() {
  return (
    <section className="py-24 lg:py-32 bg-surface overflow-hidden" id="coverage">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Enhanced Map Visual */}
          <SectionReveal direction="left" className="relative">
            <div className="relative z-10 bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white">
              <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(#1E78FF 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              <div className="relative aspect-[4/3] w-full max-w-lg mx-auto">
                <svg viewBox="0 0 600 450" className="w-full h-full drop-shadow-2xl" fill="none">
                  {/* Detailed Australia Map Path */}
                  <path
                    d="M145,115 C160,105 180,95 210,95 C240,95 260,85 285,80 C310,75 335,80 365,85 C395,90 425,100 450,115 C475,130 500,120 520,135 C540,150 545,175 540,205 C535,235 525,265 530,295 C535,325 520,365 490,395 C460,425 410,435 360,430 C310,425 260,435 220,415 C180,395 140,365 115,315 C90,265 95,215 110,175 C125,135 130,125 145,115 Z"
                    fill="url(#mapGradient)"
                    className="transition-all duration-500 hover:opacity-90"
                  />
                  <defs>
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E78FF" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#1E78FF" stopOpacity="0.03" />
                    </linearGradient>
                  </defs>
                  
                  {/* State Outlines (Subtle) */}
                  <path
                    d="M145,115 C160,105 180,95 210,95 C240,95 260,85 285,80 C310,75 335,80 365,85 C395,90 425,100 450,115 C475,130 500,120 520,135 C540,150 545,175 540,205 C535,235 525,265 530,295 C535,325 520,365 490,395 C460,425 410,435 360,430 C310,425 260,435 220,415 C180,395 140,365 115,315 C90,265 95,215 110,175 C125,135 130,125 145,115 Z"
                    stroke="#1E78FF"
                    strokeWidth="1.5"
                    strokeOpacity="0.2"
                    strokeDasharray="4 4"
                  />

                  {/* Service hub pins */}
                  {[
                    { x: 490, y: 310, label: "Sydney" },
                    { x: 440, y: 380, label: "Melbourne" },
                    { x: 530, y: 220, label: "Brisbane" },
                    { x: 130, y: 280, label: "Perth" },
                    { x: 360, y: 385, label: "Adelaide" },
                    { x: 300, y: 130, label: "Darwin" },
                    { x: 520, y: 160, label: "Cairns" },
                    { x: 450, y: 440, label: "Hobart", isTas: true },
                  ].map((hub, i) => (
                    <g key={hub.label} className="group cursor-default">
                      <circle cx={hub.x} cy={hub.y} r="18" fill="#1E78FF" fillOpacity="0">
                        <animate attributeName="fillOpacity" from="0.2" to="0" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                        <animate attributeName="r" from="8" to="24" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                      </circle>
                      <circle cx={hub.x} cy={hub.y} r="4" className="fill-accent-blue shadow-lg" />
                      
                      {/* Tooltip-style labels */}
                      <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <rect x={hub.x - 35} y={hub.y - 35} width="70" height="22" rx="11" fill="white" className="shadow-xl border border-border-subtle" />
                        <text x={hub.x} y={hub.y - 19} textAnchor="middle" className="fill-navy text-[10px] font-bold tracking-tight uppercase">
                          {hub.label}
                        </text>
                      </g>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-accent-blue/5 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent-blue/5 rounded-full blur-[80px] -z-10" />
          </SectionReveal>

          {/* Right: Content & Detailed Stats */}
          <div className="flex flex-col">
            <SectionReveal className="mb-12">
              <p className="text-eyebrow text-accent-blue mb-4">Our Reach</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6 tracking-tight leading-tight">
                Operating Across <span className="text-accent-blue">All of Australia</span>
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                From bustling metro centers to regional communities, our certified teams provide consistent, 
                high-standard property services nationwide.
              </p>
            </SectionReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {STATS.map((stat, i) => {
                const Icon = statIcons[i];
                return (
                  <SectionReveal key={stat.label} delay={i * 0.1}>
                    <div className="group bg-white rounded-3xl p-8 border border-border-subtle hover:border-accent-blue/30 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(30,120,255,0.06)] flex flex-col items-start">
                      <div className="w-12 h-12 bg-accent-blue/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300 text-accent-blue">
                        <Icon size={24} />
                      </div>
                      <div className="text-4xl font-bold text-navy mb-1 tracking-tighter">
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-text-muted font-medium text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
