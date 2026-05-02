import Image from "next/image";
import Link from "next/link";

import type { HeroFeaturedCase } from "@/data/heroFeaturedCases";

type HeroFeaturedCaseCardProps = {
  item: HeroFeaturedCase;
};

export function HeroFeaturedCaseCard({
  item,
}: HeroFeaturedCaseCardProps) {
  return (
    <article className="hero-case" aria-label={`Мини-кейс: ${item.title}`}>
      <div className="hero-case__shell">
        <div className="hero-case__top">
          <p className="hero-case__eyebrow">{item.eyebrow}</p>
          <span className="hero-case__city">{item.city}</span>
        </div>

        <h2 className="hero-case__title">{item.title}</h2>

        <div className="hero-case__stats">
          <div className="hero-case__stat hero-case__stat--task">
            <p className="hero-case__stat-label">Задача</p>
            <p className="hero-case__stat-value hero-case__stat-value--text">
              {item.task}
            </p>
          </div>

          <div className="hero-case__stat hero-case__stat--meta">
            <p className="hero-case__stat-label">{item.secondaryLabel}</p>
            <p className="hero-case__stat-value hero-case__stat-value--strong">
              {item.secondaryValue}
            </p>
          </div>
        </div>

        <Link
          href={item.href}
          className="hero-case__media"
          aria-label={`Открыть кейс: ${item.title}`}
        >
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="hero-case__image"
            priority
          />
        </Link>

        <div className="hero-case__bottom">
          <div className="hero-case__result">
            <p className="hero-case__result-label">Результат</p>
            <p className="hero-case__result-value">{item.result}</p>
          </div>

          <Link href={item.href} className="hero-case__link">
            Мини-кейс
          </Link>
        </div>
      </div>
    </article>
  );
}