import Link from "next/link";
import CtaBlock from "@/components/CtaBlock";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/site";

export const metadata = {
  title: "Our Services",
  description:
    "Branding, web and app development, video, social, content, SEO and paid growth — eight service lines run by one delivery team.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Eight service lines, one delivery team"
        sub="Start with the problem you have today. Every engagement gets a scoped plan, weekly visible progress and a full handover at the end."
        cta={{ href: "/contact", label: "Scope a project" }}
      />

      <section className="py-20">
        <div className="shell grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i * 0.05, 0.3)}>
              <Link href={`/services/${s.slug}`} className="card group flex h-full flex-col p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-hairline bg-ink text-accent transition group-hover:border-accent/50">
                    <Icon name={s.icon} size={22} />
                  </span>
                  <span className="rounded-full border border-hairline px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="mt-6 text-[22px] font-bold">{s.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.short}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.deliverables.slice(0, 4).map((d) => (
                    <li key={d} className="rounded-full bg-ink px-3 py-1.5 text-[12.5px] text-white/70">
                      {d}
                    </li>
                  ))}
                </ul>

                <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">
                  Explore {s.title}
                  <Icon name="arrow" size={15} strokeWidth={2} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBlock title="Not sure which one you need?" />
    </>
  );
}
