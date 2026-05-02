import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Wrench, TrafficCone, Leaf, ArrowRight } from 'lucide-react';
const services = [
{
  title: 'Cleaning',
  description:
  'Comprehensive commercial, strata, and residential cleaning services tailored to your needs.',
  icon: Sparkles,
  path: '/services/cleaning'
},
{
  title: 'Building Maintenance',
  description:
  'Proactive and reactive maintenance to keep your property safe, compliant, and pristine.',
  icon: Wrench,
  path: '/services/maintenance'
},
{
  title: 'Traffic Control',
  description:
  'Certified traffic management plans and personnel for safe, efficient worksites.',
  icon: TrafficCone,
  path: '/services/traffic-control'
},
{
  title: 'Lawn Mowing & Garden Care',
  description:
  'Expert landscaping, mowing, and garden maintenance for immaculate outdoor spaces.',
  icon: Leaf,
  path: '/services/lawn-care'
}];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
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
            className="text-eyebrow text-accent mb-4 block">
            
            What We Do
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
            className="text-h2 text-primary">
            
            Our Core Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) =>
          <motion.div
            key={service.title}
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
              delay: index * 0.08,
              ease: 'easeOut'
            }}>
            
              <Link to={service.path} className="group block h-full">
                <div className="bg-white rounded-xl p-8 h-full border border-border transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1 group-hover:shadow-xl group-hover:border-transparent">
                  {/* Accent Border Slide */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />

                  <div className="w-14 h-14 bg-surface rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-auto flex items-center text-accent font-semibold text-sm">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}