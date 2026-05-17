import { Button } from "@/components/ui/Button";
import { CaseCard } from "@/components/ui/CaseCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import type { CaseItem } from "@/data/cases";
import type { Direction } from "@/data/directions";
import { formatCountRu } from "@/lib/pluralize";

type DirectionCasesSectionProps = {
  direction: Direction;
  cases: CaseItem[];
};

export function DirectionCasesSection({
  direction,
  cases,
}: DirectionCasesSectionProps) {
  return (
    <Section className="direction-cases-section" spacing="lg" tone="dark">
      <Container>
        <div className="direction-cases-section__header">
          <p className="section-kicker">Кейсы</p>

          <h2 className="direction-cases-section__title">
            Объекты по направлению «{direction.shortTitle}»
          </h2>

          <p className="direction-cases-section__description">
            {cases.length > 0
              ? `В этом направлении уже есть ${formatCountRu(
                  cases.length,
                  ["кейс", "кейса", "кейсов"],
                )} на сайте.`
              : "Для этого направления пока нет опубликованных кейсов, но оно включено в справочник как часть общей системы работ."}
          </p>
        </div>

        {cases.length > 0 ? (
          <div className="direction-cases-section__grid">
            {cases.map((item) => (
              <CaseCard
                key={item.href}
                title={item.shortTitle}
                description={item.description}
                image={item.image}
                imageAlt={item.imageAlt}
                href={item.href}
              />
            ))}
          </div>
        ) : null}

        <div className="direction-cases-section__actions">
          <Button href="/#estimate" variant="secondary" size="lg">
            Обсудить похожую задачу
          </Button>
        </div>
      </Container>
    </Section>
  );
}