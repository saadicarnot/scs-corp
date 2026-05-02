import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
function Counter({ value, suffix = '' }: {value: number;suffix?: string;}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-20%'
  });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: 'easeOut',
        onUpdate: (v) => setCount(Math.floor(v))
      });
      return controls.stop;
    }
  }, [inView, value]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>);

}
const stats = [
{
  value: 8,
  suffix: '',
  label: 'States & Territories'
},
{
  value: 100,
  suffix: '%',
  label: 'Nationwide Coverage'
},
{
  value: 500,
  suffix: '+',
  label: 'Jobs Completed'
},
{
  value: 25,
  suffix: '+',
  label: 'Skilled Team Members'
}];

export function Stats() {
  return (
    <section className="py-20 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) =>
          <motion.div
            key={stat.label}
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
            className="flex flex-col items-center">
            
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-muted font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}