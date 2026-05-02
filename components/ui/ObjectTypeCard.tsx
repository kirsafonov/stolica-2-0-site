type ObjectTypeCardProps = {
  title: string;
  className?: string;
};

export function ObjectTypeCard({
  title,
  className = "",
}: ObjectTypeCardProps) {
  const classes = ["object-type-card", className].filter(Boolean).join(" ");

  return (
    <article className={classes}>
      <h3 className="object-type-card__title">{title}</h3>
    </article>
  );
}