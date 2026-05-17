type ObjectTypeCardProps = {
  title: string;
  text: string;
  className?: string;
};

export function ObjectTypeCard({
  title,
  text,
  className = "",
}: ObjectTypeCardProps) {
  const classes = ["object-type-card", className].filter(Boolean).join(" ");

  return (
    <article className={classes}>
      <h3 className="object-type-card__title">{title}</h3>
      <p className="object-type-card__text">{text}</p>
    </article>
  );
}