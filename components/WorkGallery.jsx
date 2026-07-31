"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { work } from "@/lib/site";

const filters = [
  { key: "all", label: "Everything" },
  { key: "brands", label: "Brand & logos" },
  { key: "websites", label: "Websites" },
  { key: "apps", label: "Mobile apps" },
];

const items = [
  ...work.brands.map((src) => ({ src, cat: "brands" })),
  ...work.websites.map((src) => ({ src, cat: "websites" })),
  ...work.apps.map((src) => ({ src, cat: "apps" })),
];

export default function WorkGallery({ limit }) {
  const [filter, setFilter] = useState("all");
  const shown = (filter === "all" ? items : items.filter((i) => i.cat === filter)).slice(0, limit || items.length);

  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center gap-2.5">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            aria-pressed={filter === f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
              filter === f.key
                ? "border-accent bg-accent text-black"
                : "border-hairline text-white/70 hover:border-accent/50 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {shown.map((item, i) => (
          <motion.figure
            key={item.src}
            layout
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.25) }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-hairline bg-surface"
          >
            <img
              src={item.src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-0 bg-accent/0 transition duration-300 group-hover:bg-accent/[0.06]" />
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
