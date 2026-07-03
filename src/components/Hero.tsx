import { firm, stats } from "@/lib/content";
import { ArrowRightIcon } from "@/components/icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Ambient detailing */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px)] [background-size:64px_100%]" />
      <div className="pointer-events-none absolute -right-40 top-1/2 size-[38rem] -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-40 lg:px-10 lg:pb-28 lg:pt-48">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 rule-gold" />
            <span className="eyebrow text-gold">
              Beirut · Paris · Dubai · Kuwait · Qatar
            </span>
          </div>

          <h1 className="mt-8 text-balance font-heading text-[2.7rem] font-medium leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
            Counsel of consequence,
            <br />
            <span className="text-gold">since {firm.established}.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
            {firm.intro}
          </p>

          <div className="mt-11 flex flex-wrap items-center gap-4">
            <a
              href="#expertise"
              className="group inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm font-medium text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore our expertise
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/25 px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Make an enquiry
            </a>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-primary-foreground/12 bg-primary-foreground/10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-primary px-6 py-7">
              <dt className="font-heading text-4xl text-gold">{stat.value}</dt>
              <dd className="mt-2 text-xs uppercase tracking-widest text-primary-foreground/60">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
