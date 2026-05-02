import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { AboutPreview } from '../components/sections/AboutPreview';
import { HowItWorks } from '../components/sections/HowItWorks';
import { CtaBanner } from '../components/sections/CtaBanner';
import { Stats } from '../components/sections/Stats';
import { Testimonials } from '../components/sections/Testimonials';
export function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesGrid />
      <AboutPreview />
      <HowItWorks />
      <CtaBanner />
      <Stats />
      <Testimonials />
    </div>);

}