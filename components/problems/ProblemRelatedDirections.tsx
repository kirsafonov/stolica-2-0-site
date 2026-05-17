import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import type { Direction } from "@/data/directions";

type ProblemRelatedDirectionsProps = {
  directions: Direction[];
};

export function ProblemRelatedDirections({
  directions,
}: ProblemRelatedDirectionsProps) {
  if (directions.length === 0) {
    return null;
  }

  return (
    <Section className="problem-directions-section" spacing="sm" tone="muted">
      <Container>
        <div className="problem-directions-section__header">
          <p className="section-kicker">Что может потребоваться</p>

          <h2 className="problem-directions-section__title">
            Направления работ, связанные с этой проблемой
          </h2>

          <p className="problem-directions-section__description">
            Одна и та же внешняя проблема может иметь разные инженерные причины.
            Поэтому решение подбирается после осмотра, анализа узла и понимания
            пути водопоступления или разрушения.
          </p>
        </div>

        <div className="problem-directions-section__grid">
          {directions.map((direction) => (
            <Link
              key={direction.slug}
              href={direction.href}
              className="direction-mini-card"
            >
              <h3 className="direction-mini-card__title">
                {direction.title}
              </h3>

              <p className="direction-mini-card__description">
                {direction.description}
              </p>

              <span className="direction-mini-card__link">
                Смотреть направление
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}