import Link from "next/link";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import { services, site } from "@/lib/site";

// No address, no printed email (RULES.md §1–3). Phone + WhatsApp allowed (§2).
const quickLinks = [
  { label: "Who We Are", href: "/about" },
  { label: "All Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

const socials = [
  { name: "LinkedIn", icon: "linkedin" },
  { name: "Facebook", icon: "facebook" },
  { name: "Instagram", icon: "instagram" },
  { name: "X", icon: "x" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-ink-2">
      <div className="shell relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-[15px] leading-relaxed text-muted">{site.blurb}</p>
            <Link href="/contact" className="btn btn-ghost mt-6 !py-3 !text-[14px]">
              <Icon name="mail" size={16} />
              Message us
            </Link>
          </div>

          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[15px] text-muted transition hover:text-accent">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">Company</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[15px] text-muted transition hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">Get in touch</h3>
            <ul className="mt-5 space-y-3 text-[15px] text-muted">
              <li>
                <a href={site.tel} className="inline-flex items-center gap-2.5 transition hover:text-accent">
                  <Icon name="phone" size={16} /> {site.phone}
                </a>
              </li>
              <li>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 transition hover:text-accent">
                  <Icon name="whatsapp" size={16} /> WhatsApp us
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <Icon name="pin" size={16} /> {site.regions}
              </li>
            </ul>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-[15px] font-bold text-accent">
              Open the contact form
              <Icon name="arrow" size={15} strokeWidth={2} />
            </Link>

            <ul className="mt-7 flex gap-2.5">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href="#"
                    aria-label={s.name}
                    className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-white/70 transition hover:border-accent hover:text-accent"
                  >
                    <Icon name={s.icon} size={17} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-7 sm:flex-row">
          <p className="text-[13px] text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-[13px] text-muted">Digital innovation since {site.founded}</p>
        </div>
      </div>
    </footer>
  );
}
