"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { COMPANY } from "@/lib/constants";

export default function UtilityBar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`bg-navy text-white/80 text-xs transition-transform duration-300 z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-accent-blue" />
          <span>{COMPANY.hours}</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="hover:text-accent-blue transition-colors">
            <FacebookIcon className="h-3.5 w-3.5" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-accent-blue transition-colors">
            <TwitterIcon className="h-3.5 w-3.5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-accent-blue transition-colors">
            <InstagramIcon className="h-3.5 w-3.5" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-accent-blue transition-colors">
            <YoutubeIcon className="h-3.5 w-3.5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-accent-blue transition-colors">
            <LinkedinIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
