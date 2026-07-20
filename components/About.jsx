"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-2)]">About Us</p>
          <h2 className="mt-3 text-4xl font-extrabold text-[var(--ink)] md:text-5xl">
            A full-service digital agency, <span className="text-gradient">since 2016</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Founded in 2016, we've grown into a team with offices in the USA, UK,
            Australia and Pakistan. From design and development to marketing, we bring
            every skill you need to grow online under a single roof.
          </p>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Company Philosophy
          </h3>
          <p className="mt-3 text-slate-600">
            We're dedicated to customer satisfaction — every project treated like our
            own, delivered on time, on budget and built to last.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Dedicated teams for design, dev, content & marketing",
              "Transparent communication and weekly updates",
              "On-time, on-budget delivery",
              "Long-term support after launch",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-slate-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-xs text-white">
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
                  ["2016", "Founded"],
                  ["400+", "Happy clients"],
                  ["4", "Specialist teams"],
                  ["5+", "Offices"],
                ].map(([n, l]) => (
                  <div key={l} className="flex flex-col items-center justify-center rounded-2xl bg-[var(--bg-soft)] p-4 text-center">
                    <span className="text-gradient text-3xl font-extrabold">{n}</span>
                    <span className="mt-1 text-xs text-slate-500">{l}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="animate-float absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4">
              <div className="text-sm font-semibold text-[var(--ink)]">🌍 4 countries</div>
              <div className="text-xs text-slate-500">USA · UK · Australia · Pakistan</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
