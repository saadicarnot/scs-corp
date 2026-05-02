import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
export function AboutPreview() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image & Badge */}
          <div className="relative">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95
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
                duration: 0.8,
                ease: 'easeOut'
              }}
              className="rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative">
              
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="Professional cleaning staff"
                className="w-full h-full object-cover" />
              
            </motion.div>

            {/* Floating Badge with Parallax */}
            <motion.div
              style={{
                y
              }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-primary text-white p-6 md:p-8 rounded-xl shadow-2xl max-w-[200px] md:max-w-[240px]">
              
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                12+
              </div>
              <div className="text-sm md:text-base font-medium leading-tight">
                Years of Trusted Experience
              </div>
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col pt-8 lg:pt-0">
            <motion.span
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
                ease: 'easeOut'
              }}
              className="text-eyebrow text-accent mb-4">
              
              Why Choose SCS Corp?
            </motion.span>

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
              className="text-h2 text-primary mb-6">
              
              Trusted Property Care, Built on Experience
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
              className="text-muted text-lg mb-10 leading-relaxed">
              
              We are an Australian-owned company dedicated to maintaining the
              highest standards across residential, strata, commercial, and
              council properties. Our nationwide team delivers excellence
              without compromise.
            </motion.p>

            <div className="space-y-6 mb-10">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
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
                className="flex items-start space-x-4 p-6 bg-surface rounded-xl border border-border">
                
                <ShieldCheck className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">
                    Fully Insured & Background-Checked
                  </h3>
                  <p className="text-muted text-sm">
                    Every team member is rigorously vetted, trained, and fully
                    insured for your complete peace of mind.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: -20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true,
                  margin: '-20%'
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: 'easeOut'
                }}
                className="flex items-start space-x-4 p-6 bg-surface rounded-xl border border-border">
                
                <CheckCircle2 className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">
                    Eco-Friendly Products & Equipment
                  </h3>
                  <p className="text-muted text-sm">
                    We use sustainable, environmentally responsible products
                    that are tough on dirt but safe for people and the planet.
                  </p>
                </div>
              </motion.div>
            </div>

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
                delay: 0.5,
                ease: 'easeOut'
              }}>
              
              <Button href="/about" variant="primary">
                More About Us
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}