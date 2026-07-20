"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const services = [
  { icon: "🎨", title: "Graphic Designing", desc: "Logos, brand identity and print collateral that make you unforgettable.", tags: ["Logo", "Branding", "Print"] },
  { icon: "🌐", title: "Web Development", desc: "Fast, responsive websites & web apps built on modern frameworks.", tags: ["Next.js", "PHP", "WordPress"] },
  { icon: "📱", title: "App Development", desc: "Native-feel iOS & Android apps from a single, maintainable codebase.", tags: ["iOS", "Android", "Flutter"] },
  { icon: "📣", title: "Social Media Management", desc: "Grow and engage your audience across every major platform.", tags: ["Facebook", "Instagram", "LinkedIn"] },
  { icon: "📝", title: "Content Management", desc: "Copy, blogs and content strategy that rank and convert.", tags: ["Copywriting", "Blogs", "Strategy"] },
  { icon: "🔍", title: "SEO", desc: "On-page, technical and off-page SEO that puts you on page one.", tags: ["On-page", "Technical", "Backlinks"] },
  { icon: "🎬", title: "Video Animation", desc: "Explainer, 2D and motion-graphics videos that tell your story.", tags: ["2D", "Motion", "Explainer"] },
  { icon: "📈", title: "Digital Marketing", desc: "Paid campaigns and funnels that turn clicks into customers.", tags: ["Google Ads", "Meta Ads", "Funnels"] },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          Our Services
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center text-4xl font-extrabold text-[var(--ink)] md:text-5xl">
          Everything you need, <span className="text-gradient">under one roof</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass group h-full rounded-3xl p-7"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-400/10 text-3xl">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--ink)]">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
