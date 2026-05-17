import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import type { Direction } from "@/data/directions";

type DirectionInfoSectionProps = {
  direction: Direction;
};

export function DirectionInfoSection({ direction }: DirectionInfoSectionProps) {
  return (
    <Section className="direction-info-section" spacing="lg">
      <Container>
        <div className="direction-info-section__grid">
          <article className="direction-info-card direction-info-card--primary">
            <p className="direction-info-card__eyebrow">Когда применяется</p>

            <h2 className="direction-info-card__title">
              В каких ситуациях нужно это направление
            </h2>

            <ul className="direction-info-list">
              {direction.symptoms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="direction-info-card">
            <p className="direction-info-card__eyebrow">Что решает</p>

            <h2 className="direction-info-card__title">
              Какие задачи закрывают работы
            </h2>

            <ul className="direction-info-list">
              {direction.solves.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="direction-info-card direction-info-card--wide">
            <p className="direction-info-card__eyebrow">Объекты</p>

            <h2 className="direction-info-card__title">
              Где применяется
            </h2>

            <div className="direction-object-tags">
              {direction.objectTypes.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}