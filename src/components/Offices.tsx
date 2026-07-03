import { additionalPresence, offices } from "@/lib/content";
import { SectionHeading } from "@/components/Section";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export function Offices() {
  return (
    <section id="offices" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Offices"
          title="Present where our clients do business."
          intro="From our Beirut headquarters to Paris and Dubai, with a standing presence in Kuwait and Qatar, the firm coordinates seamlessly across the region."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {offices.map((office) => (
            <article
              key={office.city}
              className="relative flex flex-col rounded-sm border border-border bg-card p-8"
            >
              {office.isHeadquarters && (
                <span className="eyebrow absolute right-6 top-6 rounded-sm bg-gold/15 px-2.5 py-1 text-[0.55rem] text-gold">
                  HQ
                </span>
              )}
              <MapPinIcon className="size-6 text-gold" />
              <h3 className="mt-5 text-2xl text-foreground">{office.city}</h3>
              <p className="text-sm text-muted-foreground">
                {office.country} · {office.role}
              </p>

              <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
                {office.address && (
                  <div className="flex gap-3 text-muted-foreground">
                    <MapPinIcon className="mt-0.5 size-4 shrink-0 text-foreground/40" />
                    <span>{office.address}</span>
                  </div>
                )}
                {office.phone && (
                  <div className="flex gap-3">
                    <PhoneIcon className="mt-0.5 size-4 shrink-0 text-foreground/40" />
                    <a
                      href={`tel:${office.phone.replace(/\s+/g, "")}`}
                      className="text-foreground/80 transition-colors hover:text-gold"
                    >
                      {office.phone}
                    </a>
                  </div>
                )}
                {office.email && (
                  <div className="flex gap-3">
                    <MailIcon className="mt-0.5 size-4 shrink-0 text-foreground/40" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-foreground/80 transition-colors hover:text-gold"
                    >
                      {office.email}
                    </a>
                  </div>
                )}
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Additional presence in{" "}
          <span className="text-foreground">
            {additionalPresence.join(" and ")}
          </span>
          .
        </p>
      </div>
    </section>
  );
}
