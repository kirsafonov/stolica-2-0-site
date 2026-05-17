import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDirectionBySlug } from "@/data/directions";
import type { Direction } from "@/data/directions";

const homeDirectionSlugs = [
  "repair-and-restoration",
  "injection-waterproofing",
  "leak-repair",
  "concrete-repair",
  "brickwork-restoration",
  "engineering-penetrations",
  "underground-structures",
  "roof-nodes-repair",
];

const homeDirections = homeDirectionSlugs
  .map((slug) => getDirectionBySlug(slug))
  .filter(Boolean) as Direction[];

export function ServicesCoreSection() {
  return (
    <Section id="services" className="services-core-section" spacing="sm">
      <Container>
        <SectionHeading
          eyebrow="Направления работ"
          title="Комплексный подход к восстановлению конструкций и устранению водопроявлений"
          description="Работаем не с отдельной симптоматикой, а с причиной проблемы: определяем узел, состояние конструкции и подбираем инженерный способ восстановления."
        />

        <div className="services-core-section__grid">
          {homeDirections.map((direction) => (
            <Link
              key={direction.slug}
              href={direction.href}
              className="home-direction-card"
            >
              <h3 className="home-direction-card__title">
                {direction.shortTitle}
              </h3>

              <p className="home-direction-card__description">
                {direction.description}
              </p>

              <span className="home-direction-card__link">
                Подробнее
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}