import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-slate-400">
            A global software agency building web, mobile, cloud and AI products for
            ambitious teams. From first sketch to global scale.
          </p>
          <div className="mt-5 flex gap-3">
            {["in", "X", "GH", "Dr"].map((s) => (
              <a
                key={s}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm text-slate-300 transition hover:border-violet-400 hover:text-white"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-slate-400">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#work" className="hover:text-white">Work</a></li>
            <li><a href="#process" className="hover:text-white">Process</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Services</h4>
          <ul className="mt-4 space-y-2 text-slate-400">
            <li><a href="#services" className="hover:text-white">Web Development</a></li>
            <li><a href="#services" className="hover:text-white">Mobile Apps</a></li>
            <li><a href="#services" className="hover:text-white">Cloud & DevOps</a></li>
            <li><a href="#services" className="hover:text-white">AI & Data</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/5 px-6 pt-6 text-sm text-slate-500 md:flex-row">
        <span>© {new Date().getFullYear()} CrownPeak Global. All rights reserved.</span>
        <span>hello@crownpeakglobal.com · +1 (555) 010-2040</span>
      </div>
    </footer>
  );
}
