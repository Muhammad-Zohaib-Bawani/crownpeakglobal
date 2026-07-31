import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Terms of Use",
  description: "The terms that apply to using the Crown Peak Global website.",
};

const sections = [
  {
    h: "Using this site",
    p: "You may browse this site and use the contact form for genuine business enquiries. Automated scraping, bulk submissions and any attempt to disrupt the site are not permitted.",
  },
  {
    h: "Our content",
    p: "The text, design, code and marks on this site belong to Crown Peak Global. Portfolio images are shown with the permission of the clients they were produced for and remain their property.",
  },
  {
    h: "No offer or guarantee",
    p: "Descriptions of services on this site are indicative, not a fixed offer. Scope, price and timelines are only binding once they are set out in a signed proposal.",
  },
  {
    h: "Enquiries",
    p: "Sending the contact form starts a conversation, nothing more. It creates no contract and no obligation on either side until a proposal is agreed in writing.",
  },
  {
    h: "Confidentiality",
    p: "Anything you share in an enquiry is treated as confidential and is only read by the people who would work on it. Do not send credentials or payment details through the form.",
  },
  {
    h: "Changes",
    p: "We may update these terms as the site changes. The version published here is the one that applies.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        sub="Plain terms for using this website. Project terms live in the proposal you sign, not here."
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
            Need clarification?{" "}
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
