import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
  subtitle?: boolean;
}

export function Wordmark({ className, subtitle = true }: WordmarkProps) {
  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span className="font-heading text-xl font-semibold tracking-tight">
        Hage-Chahine
      </span>
      {subtitle && (
        <span className="eyebrow mt-1 text-[0.58rem] text-muted-foreground">
          Law Firm · Est. 1976
        </span>
      )}
    </span>
  );
}
