type ServiceCardVariant = "core" | "extra";

type ServiceCardProps = {
  title: string;
  description: string;
  variant?: ServiceCardVariant;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  variant = "core",
  className = "",
}: ServiceCardProps) {
  const classes = [
    "service-card",
    `service-card--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classes}>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
    </article>
  );
}