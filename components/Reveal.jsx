"use client";

import { motion } from "framer-motion";

// Scroll reveal: fade + 16px rise, once, honours prefers-reduced-motion.
// RULES.md §4 — motion stays subtle everywhere.
export default function Reveal({ children, delay = 0, y = 16, className = "", as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
