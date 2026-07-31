import CtaBlock from "@/components/CtaBlock";
import Icon from "@/components/Icon";
import Marquee from "@/components/Marquee";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Testimonials from "@/components/Testimonials";
import { process, site, stats, work } from "@/lib/site";

export const metadata = {
  title: "Who We Are",
  description:
    "Crown Peak Global is a digital studio building brands, products and growth engines since 2016 — one team, one roadmap.",
};

const values = [
  {
    icon: "shield",
    title: "Say the honest number",
    copy: "If a smaller scope gets you the same result, we quote the smaller scope. Nobody is upsold into work they do not need.",
  },
  {
    icon: "users",
    title: "One team, one thread",
    copy: "A named contact, a shared board and weekly written updates. You never have to assemble a status from four people.",
  },
  {
    icon: "spark",
    title: "Craft over volume",
    copy: "We take fewer projects than we could and finish them properly. Speed comes from clarity, not corner-cutting.",
  },
  {
    icon: "clock",
    title: "Dates that hold",
    copy: "Milestones are set with the people doing the work, so a date is a commitment rather than a hope.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="A digital studio that stays on the hook after launch"
        sub={site.blurb}
        cta={{ href: "/contact", label: "Work with us" }}
      />

      {/* Story */}
      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <Reveal>
              <span className="eyebrow">Our story</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Started in 2016, still run by the people who build</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-[16.5px] leading-relaxed text-muted">
                Crown Peak Global began as a small group of designers and engineers who were tired of watching good work
                die in handoffs between agencies. We kept the model simple: one team that can take a business from
                positioning to a shipped product to a measurable growth channel.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-[16.5px] leading-relaxed text-muted">
                Since then we have delivered hundreds of projects across retail, property, hospitality, finance and
                education. The team spans several time zones, which means work moves while you sleep and reviews land in
                your morning.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <h3 className="mt-12 text-2xl font-bold">Company philosophy</h3>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-4 text-[16.5px] leading-relaxed text-muted">
                Do work you would sign your name to, tell the client the truth about it, and leave them owning
                everything. That is the whole policy. It is why most of our new work comes from people we have already
                worked with.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="card overflow-hidden p-2.5">
            <img
              src="/assets/images/Techno-Beavers-Cover.png"
              alt="The Crown Peak Global team at work"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-hairline bg-ink-2 py-16">
        <div className="shell grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="text-center">
              <div className="text-4xl font-bold text-accent sm:text-[44px]">{s.value}</div>
              <div className="mt-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="shell">
          <SectionHead
            eyebrow="How we behave"
            title="Four rules we do not break"
            sub="These are the reasons clients stay, and they are the same rules we use to decide what work to take."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="card flex h-full gap-5 p-7">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-hairline bg-ink text-accent">
                    <Icon name={v.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="text-[19px] font-bold">{v.title}</h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{v.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-hairline bg-ink-2 py-24">
        <div className="shell">
          <SectionHead eyebrow="How we work" title="The same five steps on every engagement" />
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

      {/* Clients */}
      <section className="py-24">
        <div className="shell">
          <SectionHead eyebrow="Client words" title="Judged on the work" />
          <Testimonials />
        </div>
        <Marquee items={work.brands} className="mt-16" />
      </section>

      <CtaBlock title="Let's talk about your project" />
    </>
  );
}
