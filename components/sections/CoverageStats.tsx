"use client";

import { STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/marketing/AnimatedCounter";
import SectionReveal from "@/components/marketing/SectionReveal";

export default function CoverageStats() {
  return (
    <section className="py-20 lg:py-28 bg-surface" id="coverage">
      <div className="container-wide">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-eyebrow text-accent-blue mb-3">Our Reach</p>
          <h2 className="text-section-title text-text-strong mb-4">
            Coverage Across All of Australia
          </h2>
          <p className="text-body text-text-muted">
            Operating in every state and territory, from major metro centres to regional communities — we&apos;re always close by.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Map */}
          <SectionReveal direction="left">
            <div className="relative aspect-[4/3] flex items-center justify-center">
              <svg viewBox="0 0 600 500" className="w-full h-full max-w-md mx-auto" fill="none">
                {/* Simplified Australia outline */}
                <path
                  d="M200 120 L280 80 L380 90 L450 120 L500 100 L520 140 L540 180 L530 240 L510 280 L520 320 L510 380 L470 420 L400 440 L350 430 L300 440 L260 420 L220 380 L180 340 L150 280 L130 220 L140 180 L170 140 Z"
                  fill="#1E78FF"
                  fillOpacity="0.08"
                  stroke="#1E78FF"
                  strokeWidth="2"
                  strokeOpacity="0.3"
                />

                {/* Tasmania */}
                <path
                  d="M400 460 L430 450 L440 470 L420 490 L400 480 Z"
                  fill="#1E78FF"
                  fillOpacity="0.08"
                  stroke="#1E78FF"
                  strokeWidth="2"
                  strokeOpacity="0.3"
                />

                {/* Service hub dots */}
                {[
                  { x: 480, y: 270, label: "Sydney" },
                  { x: 460, y: 340, label: "Melbourne" },
                  { x: 520, y: 200, label: "Brisbane" },
                  { x: 200, y: 240, label: "Perth" },
                  { x: 400, y: 370, label: "Adelaide" },
                  { x: 320, y: 150, label: "Darwin" },
                  { x: 540, y: 150, label: "Cairns" },
                  { x: 420, y: 460, label: "Hobart" },
                ].map((hub, i) => (
                  <g key={hub.label}>
                    {/* Pulse ring */}
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r="12"
                      fill="none"
                      stroke="#1E78FF"
                      strokeWidth="1"
                      opacity="0.3"
                    >
                      <animate
                        attributeName="r"
                        from="6"
                        to="18"
                        dur="2s"
                        begin={`${i * 0.3}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.4"
                        to="0"
                        dur="2s"
                        begin={`${i * 0.3}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                    {/* Dot */}
                    <circle cx={hub.x} cy={hub.y} r="5" fill="#1E78FF" />
                    {/* Label */}
                    <text
                      x={hub.x}
                      y={hub.y - 12}
                      textAnchor="middle"
                      className="fill-text-muted text-[10px] font-medium"
                    >
                      {hub.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </SectionReveal>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-border-subtle text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl lg:text-5xl font-bold text-navy mb-2">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-text-muted text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
