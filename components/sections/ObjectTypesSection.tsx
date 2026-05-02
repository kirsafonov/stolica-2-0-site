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
          title="С какими объектами работаем"
        />

        <div className="object-types-section__grid">
          {objectTypes.map((item) => (
            <ObjectTypeCard key={item.title} title={item.title} />
          ))}
        </div>
      </Container>
    </Section>
  );
}