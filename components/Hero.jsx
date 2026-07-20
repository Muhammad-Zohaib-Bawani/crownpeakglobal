"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg-soft)] pt-28">
      {/* animated background orbs */}
      <motion.div
        className="pointer-events-none absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-blue-400/20 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-cyan-400/20 blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,95,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(30,95,255,.05) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-7xl px-6 text-center"
      >
        <motion.span
          variants={item}
          className="glass inline-block rounded-full px-4 py-1.5 text-xs font-semibold text-[var(--accent)]"
        >
          🚀 Serving clients across USA · UK · Australia · Pakistan
        </motion.span>

        <motion.h1
          variants={item}
          className="mx-auto mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-[var(--ink)] md:text-7xl"
        >
          Digital Solutions for
          <span className="text-gradient animate-gradient"> Business Growth</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-600"
        >
          We help you build a powerful digital presence — web, mobile, design and
          marketing under one roof. A full-service agency turning ideas into
          products that scale.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-8 py-3.5 font-semibold text-white shadow-xl shadow-blue-500/30 transition-transform hover:scale-105"
          >
            Request Info
          </a>
          <a
            href="#work"
            className="glass rounded-full px-8 py-3.5 font-semibold text-[var(--accent)] transition-transform hover:scale-105"
          >
            View Our Work
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            ["2016", "Founded"],
            ["4", "Specialist teams"],
            ["400+", "Happy clients"],
            ["5+", "Offices worldwide"],
          ].map(([n, l]) => (
            <div key={l} className="glass rounded-2xl p-5">
              <div className="text-gradient text-3xl font-extrabold">{n}</div>
              <div className="mt-1 text-sm text-slate-500">{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
