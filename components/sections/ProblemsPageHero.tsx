import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";

export function ProblemsPageHero() {
  return (
    <Section className="problems-page-hero" spacing="sm" tone="dark">
      <Container>
        <div className="problems-page-hero__content">
          <p className="problems-page-hero__eyebrow">Проблемы</p>

          <h1 className="problems-page-hero__title">
            Что происходит с объектом: простым языком о сложных протечках и дефектах
          </h1>

          <p className="problems-page-hero__description">
            Собрали типовые ситуации, с которыми обращаются заказчики: вода в
            подвале, течёт паркинг, протекает кровля, мокнет кладка, появляется
            трещина или вода идёт через ввод трубы.
          </p>

          <div className="problems-page-hero__actions">
            <Button href="/directions" variant="primary" size="lg">
              Смотреть направления работ
            </Button>

            <Button href="/#estimate" variant="secondary" size="lg">
              Обсудить проблему
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}