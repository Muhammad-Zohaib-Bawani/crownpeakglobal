"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // ponytail: client-only demo submit. Wire to /api/contact or Formspree when real.
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "rounded-xl border border-slate-200 bg-white px-4 py-3 text-[var(--ink)] placeholder:text-slate-400 focus:border-[var(--accent)] focus:outline-none";

  return (
    <section id="contact" className="scroll-mt-24 bg-[var(--bg-soft)] py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="glass overflow-hidden rounded-[2rem] p-8 md:p-12">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-2)]">
                Get in touch
              </p>
              <h2 className="mt-3 text-4xl font-extrabold text-[var(--ink)] md:text-5xl">
                Request <span className="text-gradient">information</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-600">
                Tell us about your project and we'll get back to you within one
                business day.
              </p>
            </div>

            {sent ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-10 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-400/10 p-8 text-center"
              >
                <div className="text-4xl">🎉</div>
                <p className="mt-3 text-lg font-semibold text-[var(--ink)]">Thanks — message received!</p>
                <p className="text-slate-500">We'll be in touch shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="mt-10 grid gap-4 md:grid-cols-2">
                <input required placeholder="Your name" className={field} />
                <input required type="email" placeholder="Email address" className={field} />
                <input placeholder="Phone" className={field} />
                <input placeholder="Company" className={field} />
                <textarea required rows={4} placeholder="Tell us about your project..." className={`${field} md:col-span-2`} />
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-8 py-3.5 font-semibold text-white shadow-xl shadow-blue-500/30 transition-transform hover:scale-[1.02] md:col-span-2"
                >
                  Request Info →
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
