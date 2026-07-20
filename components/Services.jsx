"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Blazing-fast sites & web apps with Next.js, React and modern edge infra.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    desc: "Native-feel iOS & Android apps from a single React Native / Flutter codebase.",
    tags: ["React Native", "Flutter", "Swift"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "Scalable AWS / GCP architecture, CI/CD pipelines and rock-solid uptime.",
    tags: ["AWS", "Kubernetes", "Terraform"],
  },
  {
    icon: "🤖",
    title: "AI & Data",
    desc: "LLM copilots, RAG systems and data pipelines that turn signal into product.",
    tags: ["LLMs", "RAG", "Python"],
  },
  {
    icon: "🎨",
    title: "Product Design",
    desc: "Research-driven UX and pixel-perfect UI that users actually love to use.",
    tags: ["Figma", "UX", "Design Systems"],
  },
  {
    icon: "🛡️",
    title: "QA & Security",
    desc: "Automated testing and security reviews so you ship fast without breaking things.",
    tags: ["Playwright", "Pentest", "SOC2"],
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          What we do
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center text-4xl font-extrabold md:text-5xl">
          End-to-end product <span className="text-gradient">engineering</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass group h-full rounded-3xl p-7"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-3xl">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-slate-400">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
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
