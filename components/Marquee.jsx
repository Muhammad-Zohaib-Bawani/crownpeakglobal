"use client";

// Fake client logos rendered as inline SVG wordmarks (animated marquee).
const brands = ["NovaBank", "Orbit", "Zephyr", "Quantia", "Lumen", "Aeropay", "Vertex", "Pulse"];

function BrandMark({ name }) {
  return (
    <div className="flex shrink-0 items-center gap-2 px-8 text-slate-400 opacity-70 transition hover:text-white hover:opacity-100">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M2 19 L8 7 L12 13 L16 4 L22 19 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
      <span className="text-lg font-bold tracking-tight">{name}</span>
    </div>
  );
}

export default function Marquee() {
  const row = [...brands, ...brands];
  return (
    <section className="border-y border-white/5 py-10">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
        Powering ambitious companies
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee">
          {row.map((b, i) => (
            <BrandMark key={i} name={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
