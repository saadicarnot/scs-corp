import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
export function Placeholder() {
  const location = useLocation();
  const pageName =
  location.pathname.split('/').pop()?.replace(/-/g, ' ') || 'Page';
  const title = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-surface">
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="text-center">
        
        <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
        <p className="text-muted">This page is currently under construction.</p>
      </motion.div>
    </div>);

}