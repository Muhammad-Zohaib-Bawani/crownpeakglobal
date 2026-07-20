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
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* animated background orbs */}
      <motion.div
        className="pointer-events-none absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-violet-600/30 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-cyan-500/25 blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
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
          className="glass inline-block rounded-full px-4 py-1.5 text-xs font-medium text-slate-200"
        >
          🚀 Trusted by teams in 12+ countries
        </motion.span>

        <motion.h1
          variants={item}
          className="mx-auto mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl"
        >
          We build software that
          <span className="text-gradient animate-gradient"> reaches the peak.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-300"
        >
          CrownPeak Global is a full-stack software agency crafting web, mobile, cloud
          and AI products — from first sketch to global scale.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-3.5 font-semibold text-white shadow-xl shadow-violet-500/30 transition-transform hover:scale-105"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="glass rounded-full px-8 py-3.5 font-semibold text-white transition-transform hover:scale-105"
          >
            See our work
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            ["200+", "Projects shipped"],
            ["98%", "Client retention"],
            ["45", "Experts on team"],
            ["12+", "Countries served"],
          ].map(([n, l]) => (
            <div key={l} className="glass rounded-2xl p-5">
              <div className="text-gradient text-3xl font-extrabold">{n}</div>
              <div className="mt-1 text-sm text-slate-400">{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
