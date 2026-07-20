"use client";
import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Discover", desc: "We dig into your goals, users and constraints to define what winning looks like." },
  { n: "02", title: "Design", desc: "Prototypes and design systems that validate ideas before a line of code is written." },
  { n: "03", title: "Build", desc: "Agile sprints, weekly demos and clean, tested code shipped continuously." },
  { n: "04", title: "Scale", desc: "Launch, monitor, iterate — we grow with you long after go-live." },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          How we work
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center text-4xl font-extrabold md:text-5xl">
          A process built to <span className="text-gradient">ship</span>
        </h2>
      </Reveal>

      <div className="relative mt-16 grid gap-8 md:grid-cols-4">
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent md:block" />
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1} className="relative">
            <div className="glass mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-extrabold text-gradient">
              {s.n}
            </div>
            <h3 className="text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-slate-400">{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
