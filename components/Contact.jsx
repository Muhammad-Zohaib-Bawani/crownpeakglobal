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

  return (
    <section id="contact" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="glass overflow-hidden rounded-[2rem] p-8 md:p-12">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Get in touch
              </p>
              <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
                Let's build something <span className="text-gradient">great</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Tell us about your project. We reply within one business day.
              </p>
            </div>

            {sent ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-10 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-400/20 p-8 text-center"
              >
                <div className="text-4xl">🎉</div>
                <p className="mt-3 text-lg font-semibold">Thanks — message received!</p>
                <p className="text-slate-400">We'll be in touch shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="mt-10 grid gap-4 md:grid-cols-2">
                <input required placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-violet-400 focus:outline-none" />
                <input required type="email" placeholder="Email address" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-violet-400 focus:outline-none" />
                <input placeholder="Company" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-violet-400 focus:outline-none md:col-span-2" />
                <textarea required rows={4} placeholder="Tell us about your project..." className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-violet-400 focus:outline-none md:col-span-2" />
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-3.5 font-semibold text-white shadow-xl shadow-violet-500/30 transition-transform hover:scale-[1.02] md:col-span-2"
                >
                  Send message →
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
