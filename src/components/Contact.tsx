import { firm } from "@/lib/content";
import { ArrowRightIcon, MailIcon, PhoneIcon } from "@/components/icons";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="pointer-events-none absolute -left-32 top-0 size-[32rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-10 lg:py-32">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 rule-gold" />
            <span className="eyebrow text-gold">Contact</span>
          </div>
          <h2 className="mt-6 text-balance font-heading text-4xl leading-[1.05] text-primary-foreground md:text-5xl">
            Speak with our counsel.
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-primary-foreground/75">
            Tell us about your matter and we will direct your enquiry to the
            partner best placed to advise. Correspondence is treated in the
            strictest confidence.
          </p>
        </div>

        <div className="rounded-sm border border-primary-foreground/15 bg-primary-foreground/5 p-8 lg:p-10">
          <div className="space-y-6">
            <a
              href={`mailto:${firm.email}`}
              className="group flex items-center gap-4 border-b border-primary-foreground/12 pb-6"
            >
              <span className="flex size-11 items-center justify-center rounded-sm bg-gold/15 text-gold">
                <MailIcon className="size-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-primary-foreground/55">
                  Email
                </span>
                <span className="text-lg text-primary-foreground transition-colors group-hover:text-gold">
                  {firm.email}
                </span>
              </span>
            </a>
            <a
              href="tel:+9615452298"
              className="group flex items-center gap-4"
            >
              <span className="flex size-11 items-center justify-center rounded-sm bg-gold/15 text-gold">
                <PhoneIcon className="size-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-primary-foreground/55">
                  Beirut — Head office
                </span>
                <span className="text-lg text-primary-foreground transition-colors group-hover:text-gold">
                  +961 5 452 298
                </span>
              </span>
            </a>
          </div>

          <a
            href={`mailto:${firm.email}`}
            className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm font-medium text-gold-foreground transition-transform hover:-translate-y-0.5"
          >
            Make an enquiry
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
