import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '../ui/Button';
export function CtaBanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true,
            margin: '-20%'
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
          
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) =>
            <Star key={star} className="w-4 h-4 fill-accent text-accent" />
            )}
          </div>
          <span className="text-white font-medium text-sm">
            5.0 Rated by Australians
          </span>
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 24
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-20%'
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: 'easeOut'
          }}
          className="text-h2 text-white mb-6">
          
          Professional Quality Services With Experts
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 24
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-20%'
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: 'easeOut'
          }}
          className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          
          Ready for a property partner you can rely on? Whether it's a one-off
          deep clean, ongoing maintenance, or complex traffic management, we're
          ready to help.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 24
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-20%'
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: 'easeOut'
          }}
          className="flex flex-col sm:flex-row justify-center gap-4">
          
          <Button href="/contact" variant="white" className="w-full sm:w-auto">
            Contact Us
          </Button>
          <Button
            href="tel:1300223229"
            variant="outline"
            className="w-full sm:w-auto">
            
            Call Us
          </Button>
        </motion.div>
      </div>
    </section>);

}