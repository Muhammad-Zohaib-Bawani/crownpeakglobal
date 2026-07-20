import Logo from "./Logo";

const offices = [
  { city: "USA", line: "New York, NY", phone: "+1 (555) 010-2040" },
  { city: "UK", line: "London", phone: "+44 20 7946 0102" },
  { city: "Australia", line: "Sydney", phone: "+61 2 8006 1020" },
  { city: "Pakistan", line: "Lahore", phone: "+92 42 3200 1020" },
];

export default function Footer() {
  return (
    <footer id="careers" className="scroll-mt-24 border-t border-slate-100 bg-white py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-slate-500">
            A full-service digital agency building web, mobile, design and marketing
            solutions for ambitious teams worldwide since 2016.
          </p>
          <div className="mt-5 flex gap-3">
            {["in", "f", "X", "ig"].map((s) => (
              <a
                key={s}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-sm text-slate-500 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {s}
              </a>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {offices.map((o) => (
              <div key={o.city} className="rounded-xl border border-slate-100 bg-[var(--bg-soft)] p-4">
                <div className="font-semibold text-[var(--ink)]">{o.city}</div>
                <div className="text-sm text-slate-500">{o.line}</div>
                <div className="text-sm text-slate-500">{o.phone}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-[var(--ink)]">Company</h4>
          <ul className="mt-4 space-y-2 text-slate-500">
            <li><a href="#about" className="hover:text-[var(--accent)]">Who We Are</a></li>
            <li><a href="#work" className="hover:text-[var(--accent)]">Portfolio</a></li>
            <li><a href="#careers" className="hover:text-[var(--accent)]">Careers</a></li>
            <li><a href="#contact" className="hover:text-[var(--accent)]">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[var(--ink)]">Services</h4>
          <ul className="mt-4 space-y-2 text-slate-500">
            <li><a href="#services" className="hover:text-[var(--accent)]">Web Development</a></li>
            <li><a href="#services" className="hover:text-[var(--accent)]">App Development</a></li>
            <li><a href="#services" className="hover:text-[var(--accent)]">Graphic Designing</a></li>
            <li><a href="#services" className="hover:text-[var(--accent)]">Digital Marketing</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-slate-100 px-6 pt-6 text-sm text-slate-400 md:flex-row">
        <span>© {new Date().getFullYear()} CrownPeak Global. All rights reserved.</span>
        <span>hello@crownpeakglobal.com</span>
      </div>
    </footer>
  );
}
