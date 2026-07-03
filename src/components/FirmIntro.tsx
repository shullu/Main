import { SectionHeading } from "@/components/Section";

const pillars = [
  {
    title: "Academic rigour",
    body: "Our partners include Agrégés of the French Faculties of Law and professors of private law — scholarship applied to commercial reality.",
  },
  {
    title: "Regional reach",
    body: "One firm across France, Lebanon, the UAE, Kuwait and Qatar, coordinating parallel proceedings in multiple jurisdictions.",
  },
  {
    title: "Bench-tested",
    body: "Recognised counsel and arbitrators who appear before national courts and international tribunals in the region's most demanding disputes.",
  },
];

export function FirmIntro() {
  return (
    <section id="firm" className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="The Firm"
          title={
            <>
              A house of law built on scholarship,{" "}
              <span className="text-gold">tested in practice.</span>
            </>
          }
          intro="Hage-Chahine Law Firm has provided first-rate, comprehensive legal services in France, Lebanon and the Middle East since 1976. We advise the businesses, financial institutions and governments that operate across Europe and the Middle East — pairing a deep academic tradition with a practical command of cross-border commerce and dispute resolution."
        />

        <div className="grid gap-px self-center overflow-hidden rounded-sm border border-border bg-border">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group bg-card px-7 py-8 transition-colors hover:bg-secondary sm:px-9"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-heading text-2xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl text-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
