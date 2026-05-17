import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";

export function DirectionsPageHero() {
  return (
    <Section className="directions-page-hero" spacing="sm" tone="dark">
      <Container>
        <div className="directions-page-hero__content">
          <p className="directions-page-hero__eyebrow">Направления работ</p>

          <h1 className="directions-page-hero__title">
            Инженерные направления ремонтно-восстановительных работ
          </h1>

          <p className="directions-page-hero__description">
            Собрали основные виды работ, которые применяются на сложных объектах:
            от инъекционной гидроизоляции и устранения протечек до восстановления
            бетона, кладки, кровельных узлов и подземных конструкций.
          </p>

          <div className="directions-page-hero__actions">
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