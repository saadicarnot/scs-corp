"use client";

import { motion } from "framer-motion";

export default function DynamicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Radial Glow - Matching user's image */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#122D4D_0%,_#0A2540_100%)]" />
      
      {/* Subtle Animated Blobs for depth */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[10%] w-[50%] h-[50%] bg-accent-blue/5 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-5%] right-[15%] w-[45%] h-[45%] bg-accent-blue/5 rounded-full blur-[130px]"
      />
      
    </div>
  );
}
