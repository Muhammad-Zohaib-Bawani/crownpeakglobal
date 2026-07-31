import Link from "next/link";
import CapabilityTabs from "@/components/CapabilityTabs";
import CtaBlock from "@/components/CtaBlock";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Testimonials from "@/components/Testimonials";
import WorkGallery from "@/components/WorkGallery";
import { faqs, industries, process, services, site, stats, work } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="grid-bg relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className="glow -top-48 left-1/2 h-[420px] w-[820px] -translate-x-1/2" aria-hidden="true" />

        <div className="shell relative text-center">
          <Reveal>
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 text-[13px] font-semibold text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {site.tagline}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mx-auto mt-7 max-w-4xl text-[38px] font-bold leading-[1.04] sm:text-6xl md:text-[70px]">
              We build the brand, the product and the <span className="text-accent">growth engine</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-muted sm:text-lg">
              Crown Peak Global is one team for design, development and marketing. No handoffs between three agencies,
              no chasing four people for a status — one roadmap, one point of contact, work you can see every week.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
              <Link href="/contact" className="btn btn-primary">
                Start a project
                <Icon name="arrow" size={16} strokeWidth={2} />
              </Link>
              <Link href="/work" className="btn btn-ghost">
                See our work
              </Link>
            </div>
          </Reveal>

          {/* Showcase panel in browser chrome — real project mockups, no stock. */}
          <Reveal delay={0.32}>
            <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-[22px] border border-hairline bg-surface p-2.5 shadow-2xl shadow-black/60">
              <div className="flex items-center gap-2 px-3 pb-2.5 pt-1">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              </div>
              <div className="grid grid-cols-2 gap-2.5 rounded-2xl bg-ink-2 p-2.5 sm:grid-cols-4">
                {[work.websites[0], work.websites[1], work.apps[0], work.brands[0]].map((src) => (
                  <div key={src} className="aspect-[4/3] overflow-hidden rounded-xl border border-hairline bg-ink">
                    <img src={src} alt="" aria-hidden="true" className="h-full w-full object-contain p-3" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust rail ───────────────────────────────────────── */}
      <section className="border-y border-hairline bg-ink-2 py-12">
        <p className="text-center text-[13px] font-bold uppercase tracking-[0.2em] text-muted">
          Brands we have built for
        </p>
        <Marquee items={work.brands} className="mt-9" />
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="shell grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-hairline bg-hairline md:grid-cols-4 lg:mt-24">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="bg-ink px-6 py-9 text-center">
            <div className="text-4xl font-bold text-accent sm:text-[42px]">{s.value}</div>
            <div className="mt-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">{s.label}</div>
          </Reveal>
        ))}
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="shell">
          <SectionHead
            eyebrow="What we cover"
            title="Every layer of your digital presence, under one roof"
            sub="Pick the tab that matches the problem you have today. Most clients start with one and grow into the rest."
          />
          <CapabilityTabs />
        </div>
      </section>

      {/* ── Services grid ────────────────────────────────────── */}
      <section className="border-y border-hairline bg-ink-2 py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Our services"
            title="Eight service lines, one delivery team"
            sub="Each one runs to the same standard: a scoped plan, weekly visible progress and full handover at the end."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i * 0.05, 0.3)}>
                <Link href={`/services/${s.slug}`} className="card group flex h-full flex-col p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-hairline bg-ink text-accent transition group-hover:border-accent/50">
                    <Icon name={s.icon} size={22} />
                  </span>
                  <h3 className="mt-6 text-[19px] font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">
                    Read more
                    <Icon name="arrow" size={15} strokeWidth={2} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature split: mobile ────────────────────────────── */}
      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <span className="eyebrow">Mobile</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-[42px]">
                Apps scoped to ship, not to impress a slide
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-[16.5px] leading-relaxed text-muted">
                Strategists, designers and developers sit in one team, so the thing that gets designed is the thing that
                gets built. We put a real build in your hands early and iterate on what users actually do.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-[16.5px] leading-relaxed text-muted">
                Apple and Google review requirements, offline behaviour, auth and payments are planned up front — the
                parts that usually push a launch by a month.
              </p>
            </Reveal>

            <ul className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {["iOS", "Android", "Cross-platform", "Games"].map((p, i) => (
                <Reveal key={p} delay={0.2 + i * 0.05}>
                  <li className="rounded-xl border border-hairline bg-surface px-4 py-4 text-center text-sm font-bold">
                    {p}
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.4}>
              <Link href="/services/app-development" className="btn btn-ghost mt-9">
                App development
                <Icon name="arrow" size={16} strokeWidth={2} />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="glow -right-10 top-10 h-[280px] w-[280px]" aria-hidden="true" />
            <img
              src="/assets/images/andriod-app-2.png"
              alt="Mobile app screens designed and built by Crown Peak Global"
              className="relative mx-auto w-full max-w-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="border-y border-hairline bg-ink-2 py-24">
        <div className="shell">
          <SectionHead
            eyebrow="How we work"
            title="Five steps, no black box"
            sub="You always know what stage we are at, what is next and who is doing it."
          />

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

      {/* ── Work ─────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Selected work"
            title="Brands, sites and apps we have shipped"
            sub="A slice of the portfolio — filter by what you are looking for."
          />
          <WorkGallery limit={6} />
          <div className="mt-10 text-center">
            <Link href="/work" className="btn btn-ghost">
              View the full portfolio
              <Icon name="arrow" size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Industries ───────────────────────────────────────── */}
      <section className="border-y border-hairline bg-ink-2 py-24">
        <div className="shell">
          <SectionHead
            eyebrow="Industries"
            title="Tuned to your market, not a template"
            sub="We have shipped work across these sectors — the playbook changes with the buyer."
          />
          <div className="mx-auto mt-11 flex max-w-4xl flex-wrap justify-center gap-3">
            {industries.map((n, i) => (
              <Reveal key={n} delay={Math.min(i * 0.03, 0.3)}>
                <span className="rounded-full border border-hairline bg-surface px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:border-accent/50 hover:text-accent">
                  {n}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="shell">
          <SectionHead eyebrow="Client words" title="What it is like to work with us" />
          <Testimonials />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="border-t border-hairline bg-ink-2 py-24">
        <div className="shell">
          <SectionHead eyebrow="Questions" title="Got questions? We have answers" />
          <Faq items={faqs.slice(0, 7)} />
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
