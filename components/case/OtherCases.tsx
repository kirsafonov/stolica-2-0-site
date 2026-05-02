import type { CaseItem } from "@/data/cases";
import { CaseCard } from "@/components/ui/CaseCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";

type OtherCasesProps = {
  items: CaseItem[];
};

export function OtherCases({ items }: OtherCasesProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <Section className="other-cases-section" spacing="lg" tone="dark">
      <Container>
        <div className="other-cases-section__header">
          <p className="section-kicker">Другие кейсы</p>
          <h2 className="other-cases-section__title">
            Похожие объекты и задачи
          </h2>
        </div>

        <div className="other-cases-section__grid">
          {items.map((item) => (
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
      </Container>
    </Section>
  );
}