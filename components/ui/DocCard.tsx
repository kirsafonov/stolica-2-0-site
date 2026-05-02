type DocCardProps = {
  title: string;
  description: string;
  preview?: string;
  previewAlt?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
};

export function DocCard({
  title,
  description,
  preview,
  previewAlt = title,
  href,
  className = "",
  onClick,
}: DocCardProps) {
  const classes = [
    "doc-card",
    onClick ? "doc-card--clickable" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {preview ? (
        <div className="doc-card__preview-wrap">
          <img src={preview} alt={previewAlt} className="doc-card__preview" />
        </div>
      ) : null}

      <div className="doc-card__body">
        <h3 className="doc-card__title">{title}</h3>
        <p className="doc-card__description">{description}</p>
      </div>
    </>
  );

  if (onClick) {
    return (
      <button type="button" className={classes} onClick={onClick}>
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <article className={classes}>{content}</article>;
}