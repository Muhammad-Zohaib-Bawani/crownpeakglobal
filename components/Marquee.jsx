"use client";

// Tech-stack wordmarks rendered as an animated marquee.
const brands = ["PHP", "Bootstrap", "jQuery", "WordPress", "Adobe", "Google Analytics", "Laravel", "React"];

function BrandMark({ name }) {
  return (
    <div className="flex shrink-0 items-center gap-2 px-8 text-slate-500 opacity-80 transition hover:text-[var(--accent)] hover:opacity-100">
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
    <section className="border-y border-slate-100 bg-white py-10">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-slate-400">
        Technologies we work with
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
