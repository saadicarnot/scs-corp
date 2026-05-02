import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
export function Hero() {
  const h1Text =
  'Cleaning, Maintenance, Traffic Control, and Lawn Care. One Trusted Team.';
  const words = h1Text.split(' ');
  const container = {
    hidden: {
      opacity: 0
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1 * i
      }
    })
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20
    }
  };
  const logos = [
  'JW Marriott',
  'Marriott International',
  'Memocorp Australia',
  'City of Perth',
  'Strata Community',
  'BuildCorp',
  'Urban Council',
  'JW Marriott',
  'Marriott International',
  'Memocorp Australia',
  'City of Perth',
  'Strata Community',
  'BuildCorp',
  'Urban Council'];

  return (
    <section className="relative bg-primary text-white overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Texture/Gradient */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/40 via-primary to-primary pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-32 relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="flex flex-col items-start">
          <motion.span
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut'
            }}
            className="text-eyebrow text-accent mb-6">
            
            Affordable. Trusted. Nationwide.
          </motion.span>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-hero mb-6">
            
            {words.map((word, index) =>
            <motion.span
              variants={child}
              key={index}
              className="inline-block mr-[0.25em]">
              
                {word}
              </motion.span>
            )}
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: 'easeOut'
            }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
            
            Australia's trusted property services partner. From spotless offices
            to safe worksites, we deliver reliable cleaning, maintenance,
            traffic management, and lawn care — backed by 12+ years of
            experience.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: 'easeOut'
            }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            
            <Button
              href="/contact"
              variant="primary"
              className="w-full sm:w-auto">
              
              Book a Service
            </Button>
            <Button
              href="tel:1300223229"
              variant="outline"
              className="w-full sm:w-auto">
              
              Call 1300 223 229
            </Button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{
            opacity: 0,
            clipPath: 'inset(10% 10% 10% 10%)'
          }}
          animate={{
            opacity: 1,
            clipPath: 'inset(0% 0% 0% 0%)'
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: 'easeOut'
          }}
          className="relative hidden lg:block h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            alt="Modern commercial property"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </motion.div>
      </div>

      {/* Trust Strip Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 border-t border-white/10 py-6 overflow-hidden backdrop-blur-sm">
        <div className="flex w-max animate-marquee items-center">
          {logos.map((logo, index) =>
          <div key={index} className="flex items-center mx-8">
              <span className="text-gray-400 font-semibold text-sm tracking-wider uppercase whitespace-nowrap">
                {logo}
              </span>
              <span className="mx-8 text-white/20">•</span>
            </div>
          )}
        </div>
      </div>
    </section>);

}