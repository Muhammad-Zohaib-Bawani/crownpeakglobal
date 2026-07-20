"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const quotes = [
  { text: "They rebuilt our website and ran our ads — leads tripled in three months. Fantastic team.", name: "Sarah Lin", role: "Founder, NovaBank" },
  { text: "The logo and brand identity they designed nailed our vision on the first try. Highly recommend.", name: "Marcus Reid", role: "Owner, Lumen Store" },
  { text: "Our app was delivered on time and bug-free. Communication was clear the whole way through.", name: "Dr. Ana Costa", role: "CEO, Zephyr Health" },
  { text: "SEO and content work put us on page one for our main keywords. Traffic keeps climbing.", name: "James Okafor", role: "Director, Orbit CRM" },
  { text: "Social media management freed up our time and grew our following massively. Worth every penny.", name: "Priya Nair", role: "Manager, Aero Fit" },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          Testimonials
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center text-4xl font-extrabold text-[var(--ink)] md:text-5xl">
          What our <span className="text-gradient">clients say</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quotes.map((q, i) => (
          <Reveal key={q.name} delay={i * 0.08}>
            <motion.figure whileHover={{ y: -6 }} className="glass h-full rounded-3xl p-7">
              <div className="mb-4 text-4xl leading-none text-gradient">&ldquo;</div>
              <blockquote className="text-slate-700">{q.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] font-bold text-white">
                  {q.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[var(--ink)]">{q.name}</div>
                  <div className="text-sm text-slate-500">{q.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
