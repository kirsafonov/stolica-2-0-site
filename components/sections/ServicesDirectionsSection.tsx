import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { directions } from "@/data/directions";
import { getCasesByDirectionSlug } from "@/data/cases";
import { formatCountRu } from "@/lib/pluralize";

export function ServicesDirectionsSection() {
  return (
    <Section className="services-directions-section" spacing="lg">
      <Container>
        <SectionHeading
          eyebrow="Направления"
          title="Что входит в систему ремонтно-восстановительных работ"
          description="Каждое направление связано с реальными задачами на объектах: от активных протечек и проблемных швов до восстановления бетона, кладки, кровельных узлов и подземных конструкций."
        />

        <div className="services-directions-section__grid">
          {directions.map((direction) => {
            const relatedCases = getCasesByDirectionSlug(direction.slug);

            return (
              <Link
                key={direction.slug}
                href={direction.href}
                className="services-direction-card"
              >
                <div>
                  <p className="services-direction-card__eyebrow">
                    {relatedCases.length > 0
                      ? formatCountRu(relatedCases.length, [
                          "кейс",
                          "кейса",
                          "кейсов",
                        ])
                      : "Направление"}
                  </p>

                  <h2 className="services-direction-card__title">
                    {direction.title}
                  </h2>

                  <p className="services-direction-card__description">
                    {direction.description}
                  </p>
                </div>

                <span className="services-direction-card__link">
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