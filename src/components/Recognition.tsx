import { awards, rankings } from "@/lib/content";
import { SectionHeading } from "@/components/Section";
import { AwardIcon } from "@/components/icons";

export function Recognition() {
  return (
    <section id="recognition" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Recognition"
          title="Honoured by the market we serve."
          intro="The firm's arbitration and litigation practices have been repeatedly recognised at the region's leading legal awards, and ranked by the international directories."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
          {awards.map((award, i) => (
            <article key={`${award.title}-${i}`} className="bg-card px-8 py-8">
              <div className="flex items-start gap-4">
                <AwardIcon className="mt-1 size-7 shrink-0 text-gold" />
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg leading-snug text-foreground">
                      {award.title}
                    </h3>
                    <span className="font-heading text-lg text-gold">
                      {award.year}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {award.organisation}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="eyebrow text-muted-foreground">Ranked by</span>
          {rankings.map((rank) => (
            <span key={rank} className="font-heading text-xl text-foreground">
              {rank}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
