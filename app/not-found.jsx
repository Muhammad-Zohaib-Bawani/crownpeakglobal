import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="grid-bg relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="glow -top-32 left-1/2 h-[300px] w-[560px] -translate-x-1/2" aria-hidden="true" />
      <div className="shell relative text-center">
        <span className="eyebrow mx-auto">Error 404</span>
        <h1 className="mt-5 text-4xl font-bold sm:text-6xl">This page moved on</h1>
        <p className="mx-auto mt-5 max-w-md text-[17px] leading-relaxed text-muted">
          The link is dead or the page never existed. Start again from the homepage, or tell us what you were looking
          for.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <Link href="/" className="btn btn-primary">
            Back to home
            <Icon name="arrow" size={16} strokeWidth={2} />
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
