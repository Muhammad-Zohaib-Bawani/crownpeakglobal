import CtaBlock from "@/components/CtaBlock";
import Faq from "@/components/Faq";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { faqs } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Send Crown Peak Global a message. One form, one inbox — we reply by email within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="One form. Straight to the people who do the work."
        sub="We keep a single contact channel on purpose: fill in the box below and it lands in our inbox. You will get a written reply within one business day."
      />

      <CtaBlock title="Send us the details" />

      <section className="border-t border-hairline bg-ink-2 py-24">
        <div className="shell">
          <SectionHead eyebrow="Before you write" title="The questions we get asked most" />
          <Faq items={faqs.slice(2)} />
        </div>
      </section>
    </>
  );
}
