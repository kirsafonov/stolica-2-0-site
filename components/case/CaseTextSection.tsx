import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";

type CaseTextSectionProps = {
  title: string;
  text: string[];
};

export function CaseTextSection({ title, text }: CaseTextSectionProps) {
  return (
    <Section className="case-text-section" spacing="sm">
      <Container>
        <div className="case-text-section__grid">
          <h2 className="case-text-section__title">{title}</h2>

          <div className="case-text-section__content">
            {text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}