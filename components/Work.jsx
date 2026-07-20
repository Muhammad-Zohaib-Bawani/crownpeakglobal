"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const projects = [
  { name: "NovaBank", cat: "Websites", grad: "from-blue-600 to-indigo-500" },
  { name: "Orbit CRM", cat: "Websites", grad: "from-cyan-500 to-blue-500" },
  { name: "Zephyr Health", cat: "Mobile Apps", grad: "from-emerald-500 to-teal-500" },
  { name: "Aeropay", cat: "Mobile Apps", grad: "from-fuchsia-500 to-pink-500" },
  { name: "Lumen Mark", cat: "Logos", grad: "from-amber-500 to-orange-500" },
  { name: "Vertex Mark", cat: "Logos", grad: "from-sky-500 to-cyan-400" },
  { name: "Pulse Store", cat: "Websites", grad: "from-violet-500 to-blue-500" },
  { name: "Quantia Mark", cat: "Logos", grad: "from-rose-500 to-red-400" },
  { name: "Aero Fit", cat: "Mobile Apps", grad: "from-teal-500 to-green-500" },
];

const filters = ["All", "Logos", "Mobile Apps", "Websites"];

export default function Work() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="work" className="scroll-mt-24 bg-[var(--bg-soft)] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-2)]">
            Our Work
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center text-4xl font-extrabold text-[var(--ink)] md:text-5xl">
            Projects we're <span className="text-gradient">proud of</span>
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === f
                  ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white shadow-lg shadow-blue-500/30"
                  : "border border-slate-200 bg-white text-slate-600 hover:text-[var(--accent)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.a
                layout
                key={p.name}
                href="#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover="hover"
                className="group relative block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.grad}`}>
                  <motion.div
                    variants={{ hover: { scale: 1.08 } }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 30%, rgba(255,255,255,.5), transparent 40%)",
                    }}
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-white/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {p.cat}
                  </span>
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="text-lg font-bold text-[var(--ink)]">{p.name}</h3>
                  <motion.span variants={{ hover: { x: 6 } }} className="text-xl text-[var(--accent)]">
                    →
                  </motion.span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
