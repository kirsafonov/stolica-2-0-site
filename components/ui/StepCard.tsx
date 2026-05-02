type StepCardProps = {
  number: string;
  title: string;
  text: string;
  className?: string;
};

export function StepCard({
  number,
  title,
  text,
  className = "",
}: StepCardProps) {
  const classes = ["step-card", className].filter(Boolean).join(" ");

  return (
    <article className={classes}>
      <div className="step-card__number">{number}</div>
      <h3 className="step-card__title">{title}</h3>
      <p className="step-card__text">{text}</p>
    </article>
  );
}