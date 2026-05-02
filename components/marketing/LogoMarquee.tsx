"use client";

import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  reverse?: boolean;
}

export default function LogoMarquee({
  children,
  className = "",
  speed = "normal",
  pauseOnHover = true,
  reverse = false,
}: LogoMarqueeProps) {
  const durationMap = {
    slow: "60s",
    normal: "35s",
    fast: "20s",
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ "--marquee-duration": durationMap[speed] } as React.CSSProperties}
    >
      {/* Gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

      <div
        className={cn(
          "flex w-max gap-12 items-center",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
    </div>
  );
}
