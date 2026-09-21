import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  title,
  description,
  align = "left",
}: {
  index: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={cn(
        "mb-14 max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <div
        className={cn(
          "flex items-baseline gap-3 mb-4",
          align === "center" && "justify-center"
        )}
      >
        <span className="font-display text-sm text-signal/70">{index}</span>
        <span className="h-px flex-1 max-w-[48px] bg-signal/30" />
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-medium text-bone-100 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-bone-500 leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
