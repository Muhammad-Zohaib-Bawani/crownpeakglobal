import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

// Inner-page header. Same rhythm as home: eyebrow -> h1 -> sub -> optional CTA.
export default function PageHero({ eyebrow, title, sub, cta }) {
  return (
    <section className="grid-bg relative overflow-hidden border-b border-hairline py-20 sm:py-24">
      <div className="glow -top-40 left-1/2 h-[300px] w-[620px] -translate-x-1/2" aria-hidden="true" />
      <div className="shell relative max-w-3xl">
        {eyebrow && (
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
        )}
        <Reveal delay={0.06}>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl md:text-[58px]">{title}</h1>
        </Reveal>
        {sub && (
          <Reveal delay={0.12}>
            <p className="mt-5 text-[17px] leading-relaxed text-muted sm:text-lg">{sub}</p>
          </Reveal>
        )}
        {cta && (
          <Reveal delay={0.18}>
            <Link href={cta.href} className="btn btn-primary mt-9">
              {cta.label}
              <Icon name="arrow" size={16} strokeWidth={2} />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
