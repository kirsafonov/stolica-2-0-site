type SectionTone = "default" | "dark" | "muted";
type SectionSpacing = "sm" | "md" | "lg" | "xl";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

export function Section({
  children,
  id,
  className = "",
  tone = "default",
  spacing = "lg",
}: SectionProps) {
  const classes = [
    "section",
    `section--${tone}`,
    `section--${spacing}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}