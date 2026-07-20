"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-[var(--bg-soft)] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Who we are</p>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            A senior team that treats your product like <span className="text-gradient">our own</span>
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            Founded by engineers tired of agencies that overpromise and underdeliver,
            CrownPeak Global is a tight crew of senior designers, developers and
            strategists. No juniors learning on your dime — just people who've shipped
            at scale and know what it takes to reach the peak.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Senior-only engineering pods",
              "Fixed-scope or dedicated-team models",
              "Timezone overlap with your team",
              "Code you own, from day one",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-slate-200">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-xs">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="glass aspect-square rounded-[2rem] p-8"
            >
              <div className="grid h-full grid-cols-2 gap-4">
                {[
                  ["10+", "Years combined"],
                  ["45", "Team members"],
                  ["4.9★", "Client rating"],
                  ["24/7", "Support"],
                ].map(([n, l]) => (
                  <div key={l} className="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-4 text-center">
                    <span className="text-gradient text-3xl font-extrabold">{n}</span>
                    <span className="mt-1 text-xs text-slate-400">{l}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="animate-float absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4">
              <div className="text-sm font-semibold">🌍 Fully remote</div>
              <div className="text-xs text-slate-400">Serving 12+ countries</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
