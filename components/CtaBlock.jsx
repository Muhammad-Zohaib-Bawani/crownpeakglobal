import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const promises = [
  { icon: "clock", text: "Reply by email within one business day" },
  { icon: "users", text: "One named point of contact, start to finish" },
  { icon: "shield", text: "Scoped proposal and fixed price before work starts" },
  { icon: "spark", text: "You own every file, repo and account at handover" },
];

// The single contact channel, reused on home / services / contact (RULES.md §3).
export default function CtaBlock({ id = "contact", title = "Tell us what you are building" }) {
  return (
    <section id={id} className="relative overflow-hidden border-t border-hairline bg-ink-2 py-24">
      <div className="glow -top-32 left-1/2 h-[380px] w-[680px] -translate-x-1/2" aria-hidden="true" />
      <div className="shell relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <Reveal>
            <span className="eyebrow">Contact</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-[42px]">{title}</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-muted">
              One form, one inbox. Send the details and you get a real answer from the people who would do the work —
              not a sales sequence.
            </p>
          </Reveal>

          <ul className="mt-9 grid gap-4">
            {promises.map((p, i) => (
              <Reveal key={p.text} delay={0.16 + i * 0.05}>
                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hairline bg-surface text-accent">
                    <Icon name={p.icon} size={17} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-white/85">{p.text}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={site.tel} className="btn btn-ghost !py-3 !text-[14px]">
              <Icon name="phone" size={16} /> {site.phone}
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-3 !text-[14px]">
              <Icon name="whatsapp" size={16} /> WhatsApp
            </a>
          </div>
          <p className="mt-4 inline-flex items-center gap-2 text-[14px] text-muted">
            <Icon name="pin" size={15} /> Serving clients across the {site.regions}
          </p>
        </div>

        <Reveal delay={0.1} className="card p-6 sm:p-9">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
