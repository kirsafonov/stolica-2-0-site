type MetricCardProps = {
  value: string;
  text: string;
  className?: string;
};

export function MetricCard({
  value,
  text,
  className = "",
}: MetricCardProps) {
  const classes = ["metric-card", className].filter(Boolean).join(" ");

  return (
    <article className={classes}>
      <div className="metric-card__value">{value}</div>
      <p className="metric-card__text">{text}</p>
    </article>
  );
}