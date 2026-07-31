"use client";

import { useRef } from "react";
import Icon from "@/components/Icon";
import { testimonials } from "@/lib/site";

// Scroll-snap rail + arrow buttons. No carousel dependency.
export default function Testimonials() {
  const rail = useRef(null);

  const scrollBy = (dir) => {
    const el = rail.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="mt-12">
      <div
        ref={rail}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="card w-[86vw] shrink-0 snap-start p-7 sm:w-[420px]"
          >
            <Icon name="spark" size={22} className="text-accent" />
            <blockquote className="mt-5 text-[16px] leading-relaxed text-white/85">“{t.quote}”</blockquote>
            <figcaption className="mt-7 flex items-center gap-3.5 border-t border-hairline pt-5">
              <img src={t.photo} alt="" aria-hidden="true" className="h-11 w-11 rounded-full object-cover grayscale" />
              <span>
                <span className="block text-sm font-bold text-white">{t.name}</span>
                <span className="block text-[13px] text-muted">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous testimonials"
          className="grid h-11 w-11 place-items-center rounded-full border border-hairline text-white transition hover:border-accent hover:text-accent"
        >
          <Icon name="arrow" size={18} className="rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next testimonials"
          className="grid h-11 w-11 place-items-center rounded-full border border-hairline text-white transition hover:border-accent hover:text-accent"
        >
          <Icon name="arrow" size={18} />
        </button>
      </div>
    </div>
  );
}
