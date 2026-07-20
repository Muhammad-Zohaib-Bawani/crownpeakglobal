"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const quotes = [
  {
    text: "CrownPeak shipped our MVP in 9 weeks and it just worked. Best agency we've hired, period.",
    name: "Sarah Lin",
    role: "CEO, NovaBank",
  },
  {
    text: "They think like product owners, not contractors. Our conversion doubled after the rebuild.",
    name: "Marcus Reid",
    role: "CPO, Lumen Store",
  },
  {
    text: "The AI copilot they built saves our clinicians hours every day. Genuinely game-changing.",
    name: "Dr. Ana Costa",
    role: "Founder, Zephyr Health",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          Testimonials
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center text-4xl font-extrabold md:text-5xl">
          Loved by <span className="text-gradient">founders</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <Reveal key={q.name} delay={i * 0.1}>
            <motion.figure whileHover={{ y: -6 }} className="glass h-full rounded-3xl p-7">
              <div className="mb-4 text-2xl text-gradient">"</div>
              <blockquote className="text-slate-200">{q.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 font-bold text-white">
                  {q.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{q.name}</div>
                  <div className="text-sm text-slate-400">{q.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
