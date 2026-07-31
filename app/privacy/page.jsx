import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy",
  description: "What Crown Peak Global collects through this website and how it is used.",
};

// RULES.md §1–3: no address, no phone, no printed email — contact goes to the form.
const sections = [
  {
    h: "What we collect",
    p: "Only what you type into the contact form: your name, email address, optional company name, the service you selected and your message. We do not ask for a phone number and there is no other form on this site.",
  },
  {
    h: "Why we collect it",
    p: "To read your enquiry and reply to it. Your email address is used as the reply-to address on the message that reaches our inbox, and for nothing else.",
  },
  {
    h: "How it is stored",
    p: "Submissions are delivered to our business inbox by email through our transactional email provider. We do not build a marketing list from contact form submissions and we do not sell or rent your details to anyone.",
  },
  {
    h: "Analytics and cookies",
    p: "This site sets no advertising or tracking cookies of its own. If we run privacy-respecting analytics, it is limited to aggregate page views and contains nothing that identifies you personally.",
  },
  {
    h: "How long we keep it",
    p: "Enquiries stay in our inbox while the conversation is live and for as long as we need them for our own records. Ask us to delete your enquiry and we will.",
  },
  {
    h: "Your choices",
    p: "You can ask what we hold about you, ask for a correction, or ask us to delete it. Send that request through the contact form and we will action it.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        sub="Short version: the contact form is the only thing that collects your data, and we use it to reply to you."
      />

      <section className="py-20">
        <div className="shell max-w-3xl">
          {sections.map((s) => (
            <div key={s.h} className="border-b border-hairline py-8 first:pt-0 last:border-0">
              <h2 className="text-[21px] font-bold">{s.h}</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">{s.p}</p>
            </div>
          ))}

          <p className="mt-10 text-[16px] leading-relaxed text-muted">
            Questions about this policy?{" "}
            <Link href="/contact" className="font-bold text-accent">
              Use the contact form
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
