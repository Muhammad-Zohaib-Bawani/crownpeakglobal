"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "Who We Are" },
  { href: "#services", label: "Our Services" },
  { href: "#work", label: "Portfolio" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5 bg-white/70 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top"><Logo /></a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-[var(--accent)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-105 md:inline-block"
        >
          Request Info
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-slate-800 transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-slate-800 transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-slate-800 transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white px-6 md:hidden"
          >
            {links.map((l) => (
              <li key={l.href} className="border-b border-slate-100 py-3">
                <a href={l.href} onClick={() => setOpen(false)} className="block text-slate-700">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a href="#contact" onClick={() => setOpen(false)} className="block rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-2 text-center font-semibold text-white">
                Request Info
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
