import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const testimonials = [
{
  quote:
  'SCS Corp has completely transformed how we manage our strata properties. Their cleaning and maintenance teams are punctual, professional, and incredibly thorough.',
  name: 'Sarah Jenkins',
  role: 'Strata Committee Chair',
  company: 'Oceanview Apartments',
  image:
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
},
{
  quote:
  "Finding reliable traffic control for our civil projects used to be a headache. Since partnering with SCS Corp, we've had zero compliance issues and smooth operations.",
  name: 'David Chen',
  role: 'Project Manager',
  company: 'BuildCorp Civil',
  image:
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80'
},
{
  quote:
  'The lawn care team is fantastic. They show up exactly when scheduled and leave the grounds looking immaculate. Highly recommend their services.',
  name: 'Michael Roberts',
  role: 'Property Manager',
  company: 'Urban Council',
  image:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
}];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
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
              ease: 'easeOut'
            }}
            className="text-h2 text-primary">
            
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 gap-6 snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((testimonial, index) =>
          <motion.div
            key={testimonial.name}
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
              delay: index * 0.1,
              ease: 'easeOut'
            }}
            className="bg-surface p-8 rounded-2xl border border-border min-w-[300px] md:min-w-0 snap-center relative">
            
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/5" />

              <div className="flex space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) =>
              <Star
                key={star}
                className="w-5 h-5 fill-accent text-accent" />

              )}
              </div>

              <p className="text-primary text-lg mb-8 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center space-x-4 mt-auto">
                <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
              
                <div>
                  <div className="font-bold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}