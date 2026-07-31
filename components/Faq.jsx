import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

// Native <details> — accessible and keyboard friendly with zero JS.
export default function Faq({ items }) {
  return (
    <div className="mx-auto mt-12 max-w-3xl divide-y divide-hairline overflow-hidden rounded-[20px] border border-hairline bg-surface">
      {items.map((item, i) => (
        <Reveal key={item.q} delay={Math.min(i * 0.03, 0.2)} as="details" className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 text-left text-[16px] font-bold text-white transition hover:text-accent sm:px-7">
            {item.q}
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-hairline text-accent transition group-open:rotate-45">
              <Icon name="plus" size={16} strokeWidth={2} />
            </span>
          </summary>
          <p className="px-5 pb-6 text-[15px] leading-relaxed text-muted sm:px-7">{item.a}</p>
        </Reveal>
      ))}
    </div>
  );
}
