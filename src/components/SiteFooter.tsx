import { firm, nav, practiceAreas } from "@/lib/content";
import { Wordmark } from "@/components/Wordmark";

export function SiteFooter() {
  const year = 2026;
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {firm.tagline}
            </p>
            <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground/70">
              Beirut · Paris · Dubai · Kuwait · Qatar
            </p>
          </div>

          <nav>
            <h4 className="eyebrow text-foreground/50">Navigate</h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="eyebrow text-foreground/50">Select practices</h4>
            <ul className="mt-5 space-y-3">
              {practiceAreas.slice(0, 6).map((area) => (
                <li key={area.id}>
                  <a
                    href="#expertise"
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {firm.fullName}. All rights reserved.
          </p>
          <p className="text-muted-foreground/70">
            This website is for general information and is not legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
