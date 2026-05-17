import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "../ui/Button";

export function CasesPageHero() {
  return (
    <Section className="cases-page-hero" spacing="sm" tone="dark">
      <Container>
        <div className="cases-page-hero__content">
          <p className="cases-page-hero__eyebrow">Кейсы</p>

          <h1 className="cases-page-hero__title">
            Реальные объекты с протечками, дефектами и сложными узлами
          </h1>

          <p className="cases-page-hero__description">
            Показываем задачи, с которыми работали на жилых комплексах,
            исторических зданиях, подземных конструкциях, кровельных узлах,
            швах, трещинах и вводах коммуникаций.
          </p>

          <div className="cases-page-hero__actions">
            <Button href="/directions" variant="primary" size="lg">
              Смотреть направления
            </Button>

            <Button href="/problems" variant="secondary" size="lg">
              Смотреть проблемы
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}