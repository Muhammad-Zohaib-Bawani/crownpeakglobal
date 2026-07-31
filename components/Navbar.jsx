"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import { nav, services } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation and lock scroll while it is open.
  useEffect(() => {
    setOpen(false);
    setSubOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-hairline bg-ink/90 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-[74px] items-center justify-between gap-6">
        <Link href="/" aria-label="Crown Peak Global home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.href === "/services" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive(item.href) ? "text-accent" : "text-white/75 hover:text-white"
                  }`}
                >
                  {item.label}
                  <svg width="10" height="7" viewBox="0 0 10 7" aria-hidden="true" className="mt-0.5 opacity-70">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                  </svg>
                </Link>

                <div className="invisible absolute left-0 top-full w-[300px] translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <ul className="overflow-hidden rounded-2xl border border-hairline bg-surface p-2 shadow-2xl shadow-black/60">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/80 transition hover:bg-surface-2 hover:text-accent"
                        >
                          <Icon name={s.icon} size={17} className="text-accent" />
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive(item.href) ? "text-accent" : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn btn-primary hidden !py-3 !text-[14px] sm:inline-flex">
            Start a project
            <Icon name="arrow" size={16} strokeWidth={2} />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-hairline text-white lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="max-h-[calc(100dvh-74px)] overflow-y-auto border-t border-hairline bg-ink px-5 pb-10 pt-4 lg:hidden">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                {item.href === "/services" ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setSubOpen((v) => !v)}
                      aria-expanded={subOpen}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3.5 text-left text-lg font-semibold text-white"
                    >
                      Services
                      <Icon name={subOpen ? "minus" : "plus"} size={18} className="text-accent" />
                    </button>
                    {subOpen && (
                      <ul className="mb-2 ml-3 border-l border-hairline pl-4">
                        <li>
                          <Link href="/services" className="block py-2.5 text-[15px] text-white/70">
                            All services
                          </Link>
                        </li>
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link href={`/services/${s.slug}`} className="block py-2.5 text-[15px] text-white/70">
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block rounded-xl px-3 py-3.5 text-lg font-semibold ${
                      isActive(item.href) ? "text-accent" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-primary mt-5 w-full">
            Start a project
            <Icon name="arrow" size={16} strokeWidth={2} />
          </Link>
        </div>
      )}
    </header>
  );
}
