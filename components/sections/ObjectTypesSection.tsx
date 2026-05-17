import { Container } from "@/components/layout/Container";
import { ObjectTypeCard } from "@/components/ui/ObjectTypeCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { objectTypes } from "@/data/objectTypes";

export function ObjectTypesSection() {
  return (
    <Section className="object-types-section" spacing="sm">
      <Container>
        <SectionHeading
          eyebrow="Типы объектов"
          title="Работаем с объектами, где важны инженерная точность и ответственность за результат"
          description="Каждый объект требует своего подхода: где-то нужно остановить активное водопоступление, где-то восстановить кладку или бетон, а где-то — разобраться с узлом, который уже ремонтировали раньше."
        />

        <div className="object-types-section__grid">
          {objectTypes.map((item) => (
            <ObjectTypeCard key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </Container>
    </Section>
  );
}