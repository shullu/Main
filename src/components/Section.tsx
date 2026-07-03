import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-8 rule-gold" />
        <span className="eyebrow text-gold">{eyebrow}</span>
      </div>
      <h2 className="mt-5 text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </div>
  );
}
