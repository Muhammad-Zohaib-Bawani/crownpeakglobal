"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "@/components/Icon";
import { capabilities } from "@/lib/site";

// Pill tab switcher for the "one team, every layer" showcase.
export default function CapabilityTabs() {
  const [active, setActive] = useState(0);
  const cap = capabilities[active];

  return (
    <div className="mt-12">
      <div role="tablist" aria-label="Capabilities" className="flex flex-wrap justify-center gap-2.5">
        {capabilities.map((c, i) => (
          <button
            key={c.key}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
              i === active
                ? "border-accent bg-accent text-black"
                : "border-hairline text-white/70 hover:border-accent/50 hover:text-white"
            }`}
          >
            {c.key}
          </button>
        ))}
      </div>

      <motion.div
        key={cap.key}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="card mt-8 grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:items-center"
      >
        <div>
          <h3 className="text-2xl font-bold sm:text-[30px]">{cap.heading}</h3>
          <p className="mt-4 text-[16px] leading-relaxed text-muted">{cap.copy}</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {cap.points.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-[15px] text-white/85">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-black">
                  <Icon name="check" size={12} strokeWidth={2.6} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Abstract panel — index cards, no stock photography. */}
        <div className="relative grid gap-3 rounded-2xl border border-hairline bg-ink-2 p-5">
          {capabilities.map((c, i) => (
            <div
              key={c.key}
              className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-semibold transition ${
                i === active ? "border-accent/60 bg-accent/10 text-accent" : "border-hairline text-white/45"
              }`}
            >
              {c.key}
              <span className="font-mono text-xs opacity-70">{String(i + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
