import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";

export function CasesPageHero() {
  return (
    <Section className="cases-page-hero" spacing="sm" tone="dark">
      <Container>
        <div className="cases-page-hero__content">
          <p className="cases-page-hero__eyebrow">Кейсы</p>

          <h1 className="cases-page-hero__title">
            Реальные объекты, сложные протечки и инженерные решения
          </h1>

          <p className="cases-page-hero__description">
            Показываем задачи, с которыми работала команда «Столица»: исторические
            здания, жилые комплексы, подземные части, кровли, швы, трещины и
            вводы инженерных коммуникаций.
          </p>
        </div>
      </Container>
    </Section>
  );
}