import { people } from "@/lib/content";
import { SectionHeading } from "@/components/Section";

export function People() {
  return (
    <section id="people" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="People"
          title="The partners who set the standard."
          intro="Members of the firm include graduates of Harvard Law School, Université Paris 2 Panthéon-Assas and Saint-Joseph University, alongside law professors who teach at the region's most distinguished faculties."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {people.map((person) => (
            <article
              key={person.name}
              className="group flex flex-col rounded-sm border border-border bg-card p-8 transition-colors hover:border-gold/50"
            >
              <div className="flex size-16 items-center justify-center rounded-sm bg-primary font-heading text-lg tracking-wide text-gold">
                {person.initials}
              </div>
              <h3 className="mt-6 text-2xl leading-tight text-foreground">
                {person.name}
              </h3>
              <p className="eyebrow mt-2 text-gold">{person.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {person.bio}
              </p>
              <ul className="mt-6 space-y-2 border-t border-border pt-6">
                {person.credentials.map((credential) => (
                  <li
                    key={credential}
                    className="flex gap-2.5 text-xs leading-relaxed text-foreground/75"
                  >
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gold" />
                    {credential}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
