import Reveal from "@/components/Reveal";

// Every section: eyebrow -> headline -> sub copy (RULES.md §4).
export default function SectionHead({ eyebrow, title, sub, align = "center", className = "" }) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-[44px]">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.12}>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
