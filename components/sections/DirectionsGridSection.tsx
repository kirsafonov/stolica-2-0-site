import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { directions } from "@/data/directions";
import { getCasesByDirectionSlug } from "@/data/cases";
import { formatCountRu } from "@/lib/pluralize";

export function DirectionsGridSection() {
  return (
    <Section className="directions-grid-section" spacing="lg">
      <Container>
        <div className="directions-grid-section__header">
          <p className="section-kicker">Справочник</p>

          <h2 className="directions-grid-section__title">
            Что входит в ремонтно-восстановительные работы
          </h2>

          <p className="directions-grid-section__description">
            Каждое направление связано с реальными кейсами и типовыми проблемами,
            с которыми обращаются собственники, управляющие компании, подрядчики
            и технические специалисты.
          </p>
        </div>

        <div className="directions-grid-section__grid">
          {directions.map((direction) => {
            const relatedCases = getCasesByDirectionSlug(direction.slug);

            return (
              <Link
                key={direction.slug}
                href={direction.href}
                className="direction-card"
              >
                <div className="direction-card__content">
                  <p className="direction-card__eyebrow">
                    {relatedCases.length > 0
                      ? formatCountRu(relatedCases.length, ["кейс", "кейса", "кейсов"])
                      : "Направление"}
                  </p>

                  <h3 className="direction-card__title">{direction.title}</h3>

                  <p className="direction-card__description">
                    {direction.description}
                  </p>
                </div>

                <span className="direction-card__link">
                  Подробнее о направлении
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}