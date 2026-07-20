"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const projects = [
  { name: "NovaBank", cat: "Fintech · Web + Mobile", grad: "from-violet-600 to-indigo-500", result: "+38% signups" },
  { name: "Orbit CRM", cat: "SaaS · Web App", grad: "from-cyan-500 to-blue-500", result: "12k daily users" },
  { name: "Zephyr Health", cat: "Healthcare · AI", grad: "from-emerald-500 to-teal-500", result: "-60% triage time" },
  { name: "Aeropay", cat: "Payments · Cloud", grad: "from-fuchsia-500 to-pink-500", result: "99.99% uptime" },
  { name: "Lumen Store", cat: "E-commerce · Web", grad: "from-amber-500 to-orange-500", result: "2.1x conversion" },
  { name: "Vertex ML", cat: "Data · Platform", grad: "from-sky-500 to-cyan-400", result: "5B events/day" },
];

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24 bg-[var(--bg-soft)] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Selected work
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center text-4xl font-extrabold md:text-5xl">
            Products we're <span className="text-gradient">proud of</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.07}>
              <motion.a
                href="#contact"
                whileHover="hover"
                className="group relative block overflow-hidden rounded-3xl border border-white/10"
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
                  <span className="absolute right-4 top-4 rounded-full bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {p.result}
                  </span>
                </div>
                <div className="flex items-center justify-between bg-black/40 p-5 backdrop-blur">
                  <div>
                    <h3 className="text-lg font-bold">{p.name}</h3>
                    <p className="text-sm text-slate-400">{p.cat}</p>
                  </div>
                  <motion.span
                    variants={{ hover: { x: 6 } }}
                    className="text-xl text-white"
                  >
                    →
                  </motion.span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
