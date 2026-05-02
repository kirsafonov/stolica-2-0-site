import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import type { LegalPageContent } from "@/data/legal";

type LegalPageSectionProps = {
  content: LegalPageContent;
};

export function LegalPageSection({ content }: LegalPageSectionProps) {
  return (
    <>
      <Section className="legal-page-hero" spacing="sm" tone="dark">
        <Container>
          <div className="legal-page-hero__content">
            <p className="legal-page-hero__eyebrow">{content.eyebrow}</p>

            <h1 className="legal-page-hero__title">{content.title}</h1>

            <p className="legal-page-hero__description">
              {content.description}
            </p>

            <p className="legal-page-hero__date">
              Актуальная редакция: {content.updatedAt}
            </p>
          </div>
        </Container>
      </Section>

      <Section className="legal-content-section" spacing="lg">
        <Container>
          <div className="legal-content">
            {content.sections.map((section) => (
              <section key={section.title} className="legal-content__section">
                <h2>{section.title}</h2>

                <div className="legal-content__text">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}