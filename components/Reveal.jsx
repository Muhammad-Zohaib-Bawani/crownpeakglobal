"use client";
import { motion } from "framer-motion";

// Reusable scroll-reveal wrapper. ponytail: one wrapper, reused everywhere.
export default function Reveal({ children, delay = 0, y = 40, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
