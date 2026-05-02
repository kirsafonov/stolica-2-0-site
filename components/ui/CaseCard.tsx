import Image from "next/image";
import Link from "next/link";

type CaseCardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  className?: string;
};

export function CaseCard({
  title,
  description,
  image,
  imageAlt,
  href,
  className = "",
}: CaseCardProps) {
  const classes = ["case-card", className].filter(Boolean).join(" ");

  return (
    <Link href={href} className={classes} aria-label={`Смотреть кейс: ${title}`}>
      <div className="case-card__image-wrap">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="case-card__image"
        />
      </div>

      <div className="case-card__body">
        <h3 className="case-card__title">{title}</h3>

        <p className="case-card__description">{description}</p>

        <span className="case-card__link" aria-hidden="true">
          Смотреть кейс
        </span>
      </div>
    </Link>
  );
}