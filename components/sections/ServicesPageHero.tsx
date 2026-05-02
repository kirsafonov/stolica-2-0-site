import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";

export function ServicesPageHero() {
  return (
    <Section className="services-page-hero" spacing="sm" tone="dark">
      <Container>
        <div className="services-page-hero__content">
          <p className="services-page-hero__eyebrow">Услуги</p>

          <h1 className="services-page-hero__title">
            Инъекционная гидроизоляция, герметизация швов и устранение протечек
          </h1>

          <p className="services-page-hero__description">
            Работаем с подвалами, паркингами, фундаментами, техническими
            помещениями, историческими зданиями и сложными узлами, где важно
            сначала найти источник воды, а затем подобрать точное инженерное
            решение.
          </p>

          <div className="services-page-hero__actions">
            <Button href="/cases" variant="primary" size="lg">
              Смотреть кейсы
            </Button>

            <Button href="/contacts" variant="secondary" size="lg">
              Связаться
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}