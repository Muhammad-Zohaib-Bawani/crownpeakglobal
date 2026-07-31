import CtaBlock from "@/components/CtaBlock";
import PageHero from "@/components/PageHero";
import WorkGallery from "@/components/WorkGallery";

export const metadata = {
  title: "Our Work",
  description: "Brand identities, websites and mobile apps designed and built by Crown Peak Global.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work we are happy to put our name on"
        sub="Identities, websites and mobile products across retail, property, hospitality, finance and education. Filter by what you are looking for."
      />

      <section className="py-20">
        <div className="shell">
          <WorkGallery />
        </div>
      </section>

      <CtaBlock title="Want something like this?" />
    </>
  );
}
