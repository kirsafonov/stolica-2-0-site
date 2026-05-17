import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import type { Direction } from "@/data/directions";

type DirectionPageHeroProps = {
  direction: Direction;
};

export function DirectionPageHero({ direction }: DirectionPageHeroProps) {
  return (
    <Section className="direction-page-hero" spacing="sm" tone="dark">
      <Container>
        <div className="direction-page-hero__content">
          <p className="direction-page-hero__eyebrow">Направление работ</p>

          <h1 className="direction-page-hero__title">{direction.title}</h1>

          <p className="direction-page-hero__description">
            {direction.lead}
          </p>

          <div className="direction-page-hero__actions">
            <Button href="/cases" variant="primary" size="lg">
              Смотреть кейсы
            </Button>

            <Button href="/#estimate" variant="secondary" size="lg">
              Обсудить задачу
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}