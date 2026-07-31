import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBlock from "@/components/CtaBlock";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { process, serviceBySlug, services } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return { title: service.title, description: service.short };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.outcome}
        title={service.title}
        sub={service.short}
        cta={{ href: "/contact", label: `Start with ${service.title.toLowerCase()}` }}
      />

      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div>
            <Reveal>
              <span className="eyebrow">The approach</span>
            </Reveal>
            {service.body.map((p, i) => (
              <Reveal key={i} delay={0.06 + i * 0.06}>
                <p className="mt-5 text-[16.5px] leading-relaxed text-muted">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="card mt-10 flex flex-wrap items-center justify-between gap-5 p-7">
                <p className="text-[16px] font-bold">
                  Want this scoped for your business?
                  <span className="mt-1 block text-[14px] font-normal text-muted">
                    Send the contact box — written estimate, no call required to start.
                  </span>
                </p>
                <Link href="/contact" className="btn btn-primary !py-3 !text-[14px]">
                  Get an estimate
                  <Icon name="arrow" size={16} strokeWidth={2} />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="card p-8">
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-hairline bg-ink text-accent">
              <Icon name={service.icon} size={22} />
            </span>
            <h2 className="mt-6 text-[20px] font-bold">What you get</h2>
            <ul className="mt-6 grid gap-3.5">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-[15px] text-white/85">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-black">
                    <Icon name="check" size={12} strokeWidth={2.6} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-hairline bg-ink-2 py-24">
        <div className="shell">
          <SectionHead eyebrow="How the engagement runs" title="Five steps, no black box" />
          <ol className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={Math.min(i * 0.06, 0.3)}>
                <li className="card h-full p-7">
                  <span className="font-mono text-sm font-bold text-accent">{p.step}</span>
                  <h3 className="mt-4 text-[19px] font-bold">{p.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{p.copy}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Related */}
      <section className="py-24">
        <div className="shell">
          <SectionHead eyebrow="Pairs well with" title="Other things we do" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link href={`/services/${s.slug}`} className="card group flex h-full flex-col p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-hairline bg-ink text-accent">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <h3 className="mt-5 text-[18px] font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">
                    Read more
                    <Icon name="arrow" size={15} strokeWidth={2} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock title={`Start with ${service.title.toLowerCase()}`} />
    </>
  );
}
