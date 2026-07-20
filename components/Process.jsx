"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const platforms = {
  iOS: {
    icon: "",
    desc: "Swift & SwiftUI apps polished for the App Store — smooth, secure and store-ready.",
    points: ["Native Swift / SwiftUI", "App Store submission", "iPad & universal builds"],
  },
  Android: {
    icon: "🤖",
    desc: "Kotlin apps that feel at home on every Android device and Play Store listing.",
    points: ["Kotlin / Jetpack Compose", "Play Store submission", "Material Design 3"],
  },
  Windows: {
    icon: "🪟",
    desc: "Cross-platform desktop apps that run natively on Windows with a modern UI.",
    points: [".NET / MAUI", "Windows Store ready", "Desktop + tablet"],
  },
  Games: {
    icon: "🎮",
    desc: "2D & 3D mobile games built in Unity with monetization baked in.",
    points: ["Unity engine", "2D & 3D", "In-app purchases"],
  },
};

export default function Process() {
  const [tab, setTab] = useState("iOS");
  const p = platforms[tab];

  return (
    <section id="mobile" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          Mobile App Development
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center text-4xl font-extrabold text-[var(--ink)] md:text-5xl">
          The best in the <span className="text-gradient">mobile app</span> business
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {Object.keys(platforms).map((k) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
              tab === k
                ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white shadow-lg shadow-blue-500/30"
                : "border border-slate-200 bg-white text-slate-600 hover:text-[var(--accent)]"
            }`}
          >
            {platforms[k].icon} {k}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="glass mx-auto mt-10 max-w-3xl rounded-[2rem] p-10 text-center"
        >
          <div className="text-5xl">{p.icon}</div>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">{p.desc}</p>
          <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3">
            {p.points.map((pt) => (
              <li key={pt} className="flex items-center justify-center gap-3 text-slate-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-xs text-white">
                  ✓
                </span>
                {pt}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
