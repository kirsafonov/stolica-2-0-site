import { Container } from "@/components/layout/Container";
import { CaseCard } from "@/components/ui/CaseCard";
import { Section } from "@/components/ui/Section";
import { cases } from "@/data/cases";
import { SectionHeading } from "../ui/SectionHeading";

export function CasesGridSection() {
  return (
    <Section className="cases-grid-section" spacing="lg">
      <Container>
        <SectionHeading
          eyebrow="Объекты"
          title="Кейсы по ремонтно-восстановительным работам и устранению водопроявлений"
          description="Каждый кейс показывает конкретную задачу: что происходило на объекте, какие работы применялись и какой результат был получен."
        />
        <div className="cases-grid-section__grid">
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
      </Container>
    </Section>
  );
}