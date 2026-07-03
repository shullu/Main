import { practiceAreas } from "@/lib/content";
import { SectionHeading } from "@/components/Section";
import { ArrowRightIcon } from "@/components/icons";

export function PracticeAreas() {
  return (
    <section id="expertise" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Expertise"
          title="Twelve practice areas, one standard."
          intro="Whether structuring a cross-border acquisition or defending a mandate before an arbitral tribunal, our clients meet the same standard of counsel across every discipline."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <article
              key={area.id}
              className="group relative flex flex-col bg-card px-7 py-9 transition-colors hover:bg-background"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 rule-gold transition-transform duration-300 group-hover:scale-x-100" />
              <h3 className="text-xl leading-snug text-foreground">
                {area.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Learn more
                <ArrowRightIcon className="size-3.5" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
